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
                        <button type="button" class="ms-3 btn btn-success bg-button-rossa" data-toggle="modal" data-target="#exampleModal">
                        Filter
                        </button>
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
                            <template v-if="dataHistory.responseData">
                                <tr class="text-center" v-for="(item, index) in dataHistory.responseData.data.items" :key="index">
                                
                                    <td>{{ item.karyawan.nama }}</td>
                                    <td>{{ item.action }}</td>
                                    <td>{{ item.deskripsi }}</td>
                                    <td>{{ formatTanggal(item.created_at) }}</td>

                                </tr>
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
    import { historyStore } from '@/stores';
    import axios from 'axios';
    import * as Yup from 'yup';
    import moment from 'moment';

    const baseUrl = `${import.meta.env.VITE_API_URL}`;

    const dataHistory = reactive(historyStore());
    const currentPage = ref(1);
    const pageSize = ref(10);
    const totalItems = dataHistory.responseData ? dataHistory.responseData.data.total_record : 0;

    const onClickHandler = (page) => {
        getHistory(page);
    };
    const formatTanggal = (tanggal) => {
        return moment(tanggal).format('DD-MM-YYYY');
    }
    let search = ref("");

    onMounted(() => {
      getHistory(currentPage.value);
    });

    function clearSearch() {
        search.value = '';
        getHistory(1);
    }

    function searchItem() {
        console.log(search.value);
        searchHistory(search.value);
    }


    async function getHistory(page_number) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/user_histories', {
            params: {
                page_number: page_number, 
                page_size: pageSize.value, 
            },
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                dataHistory.setResponseData(response.data);
                console.log(dataHistory);
            })
            .catch(error => {
                console.error(error);
            });
    }

    async function searchHistory(keyword) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        return axios.get(baseUrl + '/user_histories', {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
            params: {
                search_value: keyword.toLowerCase(),
            },
        })
            .then(response => {
                dataHistory.setResponseData(response.data);
                console.log(dataHistory.responseData);
            })
            .catch(error => {
                console.error(error);
            });
    }

</script>