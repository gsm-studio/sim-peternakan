<template>
    <HeaderItem />
    <div class="body flex-grow-1 px-3">
        <div class="container-lg">
            <!-- /.row-->
            <div class="card mb-4">
            <div class="row">
                <div class="col-lg-12 p-4">
                <div class="d-flex justify-content-between mb-3">
                    <div class="d-flex">
                        <p>
                            <Datepicker
                                :date-format="{
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric' }"
                                @input="inputDate"
                                range
                                v-model="selectedDate"
                                lang="en"
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
                            <path d="M1 1L4 5L8 1" stroke="white"/>
                            </svg>
                        </p>
                        <!-- <p class="ms-3">View <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                        <path d="M1 1L5.5 7L10 1" stroke="#0FA958" stroke-width="2"/>
                        </svg></p> -->
                        <p>
                            <select v-model="idKandang" @change="getPencatatan(1, $event.target.value, null, null)" class="form-select form-select-sm ms-3" aria-label=".form-select-sm example">
                                <option value="0" selected> 
                                    Semua kandang 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                    <path d="M1 1L5.5 7L10 1" stroke="#0FA958" stroke-width="2"/>
                                    </svg>
                                </option>
                                <template v-if="dataKandang.responseData">
                                    <option v-for="item in dataKandang.responseData.data.items" :key="item.id" :value="item.id">
                                        {{ item.id }} - {{ item.nama }}
                                    </option>
                                </template>
                                <template v-else>
                                    <option>Belum ada kandang</option>
                                </template>
                            </select> 
                         </p>
                    </div>
                    <div class="d-inline">
                        <button type="button" class="btn btn-success bg-button-rossa">Download laporan</button>
                    </div>
                </div> 
                <!-- <div class="d-flex">
                    <p class="color-text-rossa">Sisa populasi ayam: <span class="text-secondary">300</span></p>
                    <p class="color-text-rossa ms-4">FC: <span class="text-secondary">7,4</span></p>
                    <p class="color-text-rossa ms-4">Standart FC: <span class="text-secondary">7,6</span></p>
                    <p class="color-text-rossa ms-4">Egg mass: <span class="text-secondary">11,7</span></p>
                </div> -->
                <div class="table-responsive mt-3">
                    <table class="table pelaporan table-bordered">
                    <thead>
                        <tr>
                            <th rowspan="2" scope="col">ID Kandang</th>
                            <th scope="col">Usia</th>
                            <th colspan="4" scope="col">Populasi</th>
                            <th colspan="2" scope="col">Produksi Telur</th>
                            <th colspan="2" scope="col">Berat Telur</th>
                            <th colspan="2" scope="col">Standart Produksi</th>
                        </tr>
                        <tr>
                        
                        <th scope="col">Mgg</th>

                        <th scope="col">Mati</th>
                        <th scope="col">Afkir</th>
                        <th scope="col">Pindah</th>
                        <th scope="col">Terima</th>

                        <th scope="col">Telur utuh</th>
                        <th scope="col">Telur bentes</th>

                        <th scope="col">Berat Telur utuh</th>
                        <th scope="col">Berat Telur bentes</th>

                        <th scope="col">%</th>
                        <th scope="col">gr/butir</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="dataPencatatan.responseData">
                        <tr v-for="(item, index) in dataPencatatan.responseData.data.items" :key="index" class="text-center">
                            <td>{{ item.id_kandang }}</td>
                            <td>null</td>
                            <td>{{ item.jumlah_mati }}</td>
                            <td>{{ item.jumlah_afkir }}</td>
                            <td>{{ item.jumlah_pindah }}</td>
                            <td>{{ item.jumlah_terima }}</td>

                            <td>{{ item.telur_utuh }}</td>
                            <td>{{ item.telur_bentes }}</td>

                            <td>{{ item.berat_utuh }}</td>
                            <td>{{ item.berat_bentes }}</td>

                            <td>0</td>
                            <td>0</td>
                        
                            <!-- <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <mask id="mask0_142_372" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="1" width="18" height="18">
                                    <path d="M2.91699 17.5H17.917" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.58398 11.1333V14.1667H7.63273L16.2507 5.545L13.2069 2.5L4.58398 11.1333Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                                </mask>
                                <g mask="url(#mask0_142_372)">
                                    <path d="M0 0H20V20H0V0Z" fill="#0FA958"/>
                                </g>
                                </svg>
                            </td> -->
                        
                        </tr>
                        </template>
                        <template v-else>
                            <tr>
                                <td colspan="15" class="text-center">Data tidak ditemukan</td>
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
            
            
            <!-- /.row-->
        
            <!-- /.row-->
        </div>
    </div>
</template>

<script setup>
    import HeaderItem from '@/components/HeaderItem.vue';
    import { reactive, onMounted, ref, watch } from 'vue';
    import { pencatatanStore, kandangStore } from '@/stores';
    import axios from 'axios'
    import moment from 'moment';

    const baseUrl = `${import.meta.env.VITE_API_URL}`;

    const dataPencatatan = reactive(pencatatanStore());
    const dataKandang = reactive(kandangStore());
    const idKandang = ref(0);

    const currentPage = ref(1);
    const pageSize = ref(10);
    const totalItems = dataPencatatan.responseData ? dataPencatatan.responseData.data.total_record : 0;

    const searchDate = ref(null);

    const date = ref(0);
    const rangeDate = reactive({
        start: null,
        end: null,
    });
    const formatDate = ref({ day: '2-digit', month: 'long', year: 'numeric' });
    const selectedDate = ref([]);

    const onClickHandler = (page) => {
        getPencatatan(page);
    };

    let search = ref("");

    onMounted(() => {
        getPencatatan(1);
        getKandang();
    });

    function clearSearch() {
        search.value = '';
        getPencatatan(1);
    }

    function searchItem() {
        console.log(search.value);
        searchPencatatan(search.value);
    }

    function inputDate() {
       console.log("Input Data : ", selectedDate);
    }

    watch(selectedDate, (newValue, oldValue) => {
        date.value = new Date(newValue[0]);
        rangeDate.start = moment(newValue[0]).format("YYYY-MM-DD");
        rangeDate.end = moment(newValue[1]).format("YYYY-MM-DD");
        getPencatatan(1, idKandang.value, rangeDate.start, rangeDate.end);
    });

    async function getPencatatan(page, id_kandang = idKandang.value, startDate = rangeDate.start, endDate = rangeDate.end) {
        if (id_kandang == 0) {
            id_kandang = null;
        }
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/pencatatan', {
            params: {
                submit_start: startDate,
                submit_end: endDate,
                page_number: page, 
                page_size: pageSize.value, 
                id_kandang: id_kandang,
            },
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                console.log(response);
                dataPencatatan.setResponseData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    async function searchPencatatan(keyword) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        return axios.get(baseUrl + '/pencatatan', {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
            params: {
                search_value: keyword.toLowerCase(),
            },
        })
            .then(response => {
                dataPencatatan.setResponseData(response.data);
                console.log(dataPencatatan.responseData);
            })
            .catch(error => {
                console.error(error);
            });
    }


    async function getKandang() {
        
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        // console.log(JSON.parse(token).token);
        axios.get(baseUrl + '/kandang', {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                dataKandang.setResponseData(response.data);
                console.log(dataKandang.responseData.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

   
</script>