<template>
    <HeaderItem />
    <div class="body flex-grow-1 px-3">
        <div class="container-lg">
            <div class="card mb-4 ps-2 pt-2">
            <div class="row">
                <div class="col-lg-12 p-4">
                <h4 class="mb-3">Management User <span class="text-secondary">> History User</span></h4>
                <p class="w-50">Lorem ipsum dolor sit amet consectetur. Elementum donec gravida mauris ipsum rhoncus nec tempor venenatis tellus.</p>
                <div class="mt-4 mb-4">
                
                
                
                
                <!-- <span class="ms-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#A3AAA6"/>
                    </svg>
                    Hapus
                </span> -->
                </div>
                <div class="d-flex justify-content-between">
                    <!-- Button trigger modal -->
                    <div> 
                        <!-- <button type="button" class="btn btn-success bg-button-rossa" data-toggle="modal" data-target="#exampleModal">
                        Select
                        </button> -->
                        <button data-coreui-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" type="button" class="dropdown-toggle ms-3 btn btn-success bg-button-rossa">
                        Filter
                        </button>
                        <div class="dropdown-menu dropdown-menu-start p-3 shadow">
                            <select v-model="idKaryawan" @change="getHistory(currentPage, $event.target.value)" class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                            <option value="0" selected> 
                                Semua Karyawan 
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                <path d="M1 1L5.5 7L10 1" stroke="#0FA958" stroke-width="2"/>
                                </svg>
                            </option>
                            <template v-if="dataKaryawan.responseData">
                                <option v-for="item in dataKaryawan.responseData.data.items" :key="item.id" :value="item.id">
                                    {{ item.nama }}
                                </option>
                            </template>
                            <template v-else>
                                <option>Belum ada karyawan</option>
                            </template>
                            </select> 
                            
                        </div>
                    </div>
                    
            
                    <div class="d-flex">
                        <div class="input-group search-table me-3">
                            <span class="input-group-text" id="basic-addon1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.84 8.84667L13.66 12.6667L12.6667 13.66L8.84667 9.84C8.13333 10.3533 7.27333 10.6667 6.33333 10.6667C3.94 10.6667 2 8.72667 2 6.33333C2 3.94 3.94 2 6.33333 2C8.72667 2 10.6667 3.94 10.6667 6.33333C10.6667 7.27333 10.3533 8.13333 9.84 8.84667ZM6.33333 3.33333C4.67333 3.33333 3.33333 4.67333 3.33333 6.33333C3.33333 7.99333 4.67333 9.33333 6.33333 9.33333C7.99333 9.33333 9.33333 7.99333 9.33333 6.33333C9.33333 4.67333 7.99333 3.33333 6.33333 3.33333Z" fill="#0FA958"/>
                                </svg>
                            </span>
                            <input type="text" v-model="search" @input="searchItem" class="form-control" placeholder="Search" />
                        </div>
                        <a @click="clearSearch()" href="javascript:void(0)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z" fill="#0FA958"/>
                            </svg>
                        </a>
                    </div>
                </div>
                 
                <div class="table-responsive mt-3">
                    <table class="table pelaporan table-bordered">
                        <thead>
                            <tr>
        
                                <th scope="col">Nama karyawan</th>
                                <th scope="col">Action</th>
                                <th scope="col">Deskripsi</th>
                                <th scope="col">Last Activity</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="isLoading">
                                <tr>
                                    <td colspan="15" class="text-center">
                                        <div class="d-flex justify-content-center">
                                            <div class="spinner-border text-success" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </template>
                            <template v-else>
                                <template v-if="dataHistory.responseData && dataHistory.responseData.data.total_record > 0">
                                    <tr class="text-center" v-for="(item, index) in dataHistory.responseData.data.items" :key="index">
                                    
                                        <td>{{ item.karyawan.nama }}</td>
                                        <td>{{ item.action }}</td>
                                        <td>{{ item.deskripsi }}</td>
                                        <td>{{ formatTanggal(item.created_at) }}</td>

                                    </tr>
                                </template>
                                <template v-else>
                                    <tr>
                                        <td colspan="15" class="text-center">
                                            <div class="d-flex justify-content-center">
                                                <p>Data tidak ditemukan</p>
                                            </div>
                                        </td>
                                    </tr>
                                </template>
                            </template>
                        </tbody>
                    </table>
                </div>
                    <div class="d-flex justify-content-end">
                        <vue-awesome-paginate
                            :total-items="totalItems"
                            :items-per-page="pageSize"
                            :max-pages-shown="3"
                            v-model="currentPage"
                            :on-click="onClickHandler"
                        />
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import HeaderItem from '../components/HeaderItem.vue'
    import { onMounted, ref, reactive } from 'vue';
    import { historyStore, karyawanStore } from '@/stores';
    import axios from 'axios';
    import * as Yup from 'yup';
    import moment from 'moment';

    const baseUrl = `${import.meta.env.VITE_API_URL}`;

    const dataHistory = reactive(historyStore());
    const dataKaryawan = reactive(karyawanStore());
    const currentPage = ref(1);
    const pageSize = ref(10);
    const totalItems = ref(0);
    const idKaryawan = ref(0);
    const onClickHandler = (page) => {
        if(search.value != "") {
            searchHistory(search.value);
        } else {
            getHistory(page, idKaryawan.value);
        }
    };
    const formatTanggal = (tanggal) => {
        return moment(tanggal).format('DD-MM-YYYY');
    }
    const isLoading = ref(false);
    let search = ref("");

    onMounted(() => {
        getHistory(currentPage.value, null);
        getKaryawan();
        
    });

    function clearSearch() {
        search.value = '';
        idKaryawan.value = 0;
        currentPage.value = 1;
        getHistory(1, idKaryawan.value);
    }

    function searchItem() {
        console.log(search.value);
        searchHistory(search.value);
    }


    async function getHistory(page_number, id_karyawan = null) {
        isLoading.value = true;
        if(id_karyawan == 0) {
            id_karyawan = null;
        }
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/user_histories', {
            params: {
                id_karyawan: id_karyawan,
                page_number: page_number, 
                page_size: pageSize.value, 
            },
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                isLoading.value = false;
                dataHistory.setResponseData(response.data);
                totalItems.value = dataHistory.responseData ? dataHistory.responseData.data.total_record : 0;
                console.log(response);
            })
            .catch(error => {
                isLoading.value = false;
                console.error(error);
            });
    }

    async function searchHistory(keyword) {
        isLoading.value = true;
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        return axios.get(baseUrl + '/user_histories', {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
            params: {
                search_value: keyword.toLowerCase(),
                page_number: 1,
                page_size: pageSize.value,
            },
        })
            .then(response => {
                isLoading.value = false;
                dataHistory.setResponseData(response.data);
                totalItems.value = dataHistory.responseData ? dataHistory.responseData.data.total_record : 0;
                console.log("Response Search: ", response);
            })
            .catch(error => {
                isLoading.value = false;
                console.error(error);
            });
    }

    async function getKaryawan() {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/karyawan', {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                dataKaryawan.setResponseData(response.data);
                console.log(dataKaryawan);
            })
            .catch(error => {
                console.error(error);
            });
    }

</script>