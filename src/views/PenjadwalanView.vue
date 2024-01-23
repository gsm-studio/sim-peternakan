<template>
    <HeaderItem />
    <div class="body flex-grow-1 px-3">
        <div class="container-lg">
            <!-- /.row-->
            <div class="card mb-4">
            <div class="row">
                <div class="col-lg-12 p-4">
                <h4 class="mb-5">Penjadwalan</h4>
                <div class="d-flex justify-content-between">
                    <!-- Button trigger modal -->
                    <template v-if="role == adminKantor || role == superadmin">
                        <button type="button" class="btn btn-success bg-button-rossa" data-bs-toggle="modal" data-bs-target="#createModal">
                            Atur Jadwal
                        </button>
                    </template>
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                        <div class="modal-content p-3">
                            <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Populasi Ayam : 3000 ekor</h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div class="modal-body">
                                <form action="">
                                    <input class="form-control text-center mb-3" type="date" placeholder="Pilih jadwal">
                                    <input class="form-control text-center mb-3" type="text" placeholder="ID Kandang">
                                    <input class="form-control text-center mb-3" type="text" placeholder="Nama anak kandang">
                                    <input class="form-control text-center mb-3" type="text" placeholder="Pelaksana">
                                    <input class="form-control text-center mb-3" type="text" placeholder="Penanggung jawab">
                                    <input class="form-control text-center mb-3" type="text" placeholder="Pekerjaan/tugas">
                                    <input class="form-control text-center mb-3" type="text" placeholder="Tuliskan catatan">
                                </form>
                            </div>
                            <div class="modal-footer">
                            <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
                            <button type="button" class="btn btn-success bg-button-rossa">Atur jadwal</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="input-group search-table me-3">
                            <span class="input-group-text" id="basic-addon1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.84 8.84667L13.66 12.6667L12.6667 13.66L8.84667 9.84C8.13333 10.3533 7.27333 10.6667 6.33333 10.6667C3.94 10.6667 2 8.72667 2 6.33333C2 3.94 3.94 2 6.33333 2C8.72667 2 10.6667 3.94 10.6667 6.33333C10.6667 7.27333 10.3533 8.13333 9.84 8.84667ZM6.33333 3.33333C4.67333 3.33333 3.33333 4.67333 3.33333 6.33333C3.33333 7.99333 4.67333 9.33333 6.33333 9.33333C7.99333 9.33333 9.33333 7.99333 9.33333 6.33333C9.33333 4.67333 7.99333 3.33333 6.33333 3.33333Z" fill="#625B71"/>
                                </svg>
                            </span>
                            <input @input="searchItem" v-model="search" type="text" class="form-control" placeholder="Search" aria-describedby="basic-addon1">
                        </div>
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.0003 12V19.88C14.0403 20.18 13.9403 20.5 13.7103 20.71C13.3203 21.1 12.6903 21.1 12.3003 20.71L10.2903 18.7C10.0603 18.47 9.96035 18.16 10.0003 17.87V12H9.97035L4.21035 4.62C3.87035 4.19 3.95035 3.56 4.38035 3.22C4.57035 3.08 4.78035 3 5.00035 3H19.0003C19.2203 3 19.4303 3.08 19.6203 3.22C20.0503 3.56 20.1303 4.19 19.7903 4.62L14.0303 12H14.0003Z" fill="#0FA958"/>
                        </svg> -->
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
                            <!-- <th scope="col">No</th> -->
                            <th scope="col">Nama Tugas</th>
                            <th scope="col">Nama Kandang</th>
                            <th scope="col">Waktu Pelaksana</th>
                            <th scope="col">Penanggung Jawab</th>
                            <th scope="col">Pelaksana</th>
                            <th scope="col">Catatan</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="dataPenjadwalan.responseData && dataPenjadwalan.responseData.data.items.length > 0">
                        <tr v-for="item in dataPenjadwalan.responseData.data.items" :key="item.id">
                            <!-- <td>{{ item.id }}</td> -->
                            <td>{{ item.tugas.nama }}</td>
                            <td>{{ item.kandang ? item.kandang.nama : "Semua Kandang" }}</td>
                            <td>{{ formatTanggal(item.waktu_pelaksanaan) }}</td>
                            <td>{{ item.penanggungjawab }}</td>
                            <td>{{ item.pelaksana }}</td>
                            <td>{{ item.deskripsi }}</td>
                            <td>
                                <a data-coreui-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="6" viewBox="0 0 29 6" fill="none">
                                    <circle cx="2.5" cy="3" r="2.5" fill="#797979"/>
                                    <circle cx="14.5" cy="3" r="2.5" fill="#797979"/>
                                    <circle cx="26.5" cy="3" r="2.5" fill="#797979"/>
                                    </svg>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <a data-bs-toggle="modal" data-bs-target="#detailModal" @click="getIdPenjadwalan(item.id)" class="dropdown-item" href="javascript:void(0)">Detail</a>
                                    <template v-if="role == adminKantor || role == superadmin">
                                        <a data-bs-toggle="modal" data-bs-target="#editModal" @click="getIdPenjadwalan(item.id)" class="dropdown-item" href="javascript:void(0)">Edit</a>
                                        <a @click="deletePenjadwalan(item.id)" class="dropdown-item" href="javascript:void(0)">Hapus</a>
                                    </template>
                                </div>
                            </td>
                        </tr>
                        </template>
                        <template v-else>
                            <tr>
                                <td colspan="7" class="text-center">No Data Available</td>
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

    <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content p-3">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Tambah Penjadwalan</h5>
            <button @click="closeModal()" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <Form id="form" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
                <div class="modal-body">
                    <Field as="select" class="form-control text-center mb-3" name="id_tugas" :class="{ 'is-invalid': errors.id_tugas }">
                        <option value="">Pilih Nama Tugas</option>
                        <template v-if="dataTugas.responseData">
                            <option v-for="item in dataTugas.responseData.data.items" :key="item.id" :value="item.id" >{{ item.nama }}</option>
                        </template>
                    </Field> 
                    <Field as="select" class="form-control text-center mb-3" name="id_kandang" :class="{ 'is-invalid': errors.id_kandang }">
                        <option value="" disabled>Pilih Nama Kandang</option>
                        <option value="0">Semua Kandang</option>
                        <template v-if="dataKandang.responseData">
                            <option v-for="item in dataKandang.responseData.data.items" :key="item.id" :value="item.id">{{ item.nama }}</option>
                        </template>
                    </Field> 
                    <Field class="form-control text-center mb-3" type="date" name="waktu_pelaksanaan" placeholder="Waktu Pelaksanaan" :class="{ 'is-invalid': errors.waktu_pelaksanaan }" />
                    <Field class="form-control text-center mb-3" type="text" name="penanggungjawab" placeholder="Penanggung Jawab" :class="{ 'is-invalid': errors.penanggungjawab }" />
                    <Field class="form-control text-center mb-3" type="text" name="pelaksana" placeholder="Pelaksana" :class="{ 'is-invalid': errors.pelaksana }" />
                    <Field as="textarea" class="form-control text-center mb-3" name="deskripsi" placeholder="Deskripsi" :class="{ 'is-invalid': errors.deskripsi }" />
                </div>
                <div class="modal-footer">
                    <div class="text-end">
                        <button class="btn btn-success bg-button-rossa ms-auto" type="submit" :disabled="isSubmitting">
                            Submit
                            <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                        </button> 
                    </div>
                    <div v-if="errors.apiError" class="alert alert-danger mt-3 mb-0">{{errors.apiError}}</div>
                </div>
            </Form>
        </div>
        </div>
    </div>

    <div class="modal fade" id="detailModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content p-3">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Detail Penjadwalan</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Nama Tugas : {{ detailPenjadwalan.nama_tugas }}</p>
                    <p>Nama Kandang : {{ detailPenjadwalan.nama_kandang }}</p>
                    <p>Waktu Pelaksanaan : {{ formatTanggal(detailPenjadwalan.waktu_pelaksanaan) }}</p>
                    <p>Penanggung Jawab : {{ detailPenjadwalan.penanggungjawab }}</p>
                    <p>Pelaksana : {{ detailPenjadwalan.pelaksana }}</p>                
                    <p>Deskripsi : {{ detailPenjadwalan.deskripsi }}</p>
                </div>
                <div class="modal-footer">
                <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content p-3">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Penjadwalan</h5>
                    <button @click="closeModal()" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <Form @submit="onSubmitUpdate" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
                        <Field v-model="detailPenjadwalan.id_tugas" class="form-control text-center mb-3" name="id_tugas" :class="{ 'is-invalid': errors.id_tugas }" as="select">
                            <template v-if="dataTugas.responseData">
                                <option value="" disabled>Pilih Nama Tugas</option>
                                <option v-for="item in dataTugas.responseData.data.items" :key="item.id" :value="item.id">{{ item.nama }}</option>
                            </template>
                        </Field> 
                        <Field v-model="detailPenjadwalan.id_kandang" class="form-control text-center mb-3" name="id_kandang" :class="{ 'is-invalid': errors.id_kandang }" as="select">
                            <template v-if="dataKandang.responseData">
                                <option value="" disabled>Pilih Nama Kandang</option>
                                <option value="0">Semua Kandang</option>
                                <option v-for="item in dataKandang.responseData.data.items" :key="item.id" :value="item.id">{{ item.nama }}</option>
                            </template>
                        </Field> 
                        <Field class="form-control text-center mb-3" type="date" name="waktu_pelaksanaan" placeholder="Waktu Pelaksanaan" v-model="formatTanggalEdit" :class="{ 'is-invalid': errors.waktu_pelaksanaan }" />
                        <Field v-model="detailPenjadwalan.penanggungjawab" class="form-control text-center mb-3" type="text" name="penanggungjawab" placeholder="Penanggung Jawab" :class="{ 'is-invalid': errors.penanggungjawab }" />
                        <Field v-model="detailPenjadwalan.pelaksana" class="form-control text-center mb-3" type="text" name="pelaksana" placeholder="Pelaksana" :class="{ 'is-invalid': errors.pelaksana }" />
                        <Field as="textarea" class="form-control text-center mb-3" name="deskripsi" placeholder="Waktu Pelaksanaan" v-model="detailPenjadwalan.deskripsi" :class="{ 'is-invalid': errors.deskripsi }" />
                        <div class="text-end">
                            <button class="btn btn-success bg-button-rossa ms-auto" type="submit" :disabled="isSubmitting">
                                Submit
                                <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                            </button> 
                        </div>
                        <div v-if="errors.apiError" class="alert alert-danger mt-3 mb-0">{{errors.apiError}}</div> 
                    </Form>
                </div>
                <div class="modal-footer">
                <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
    import HeaderItem from '../components/HeaderItem.vue'
    import { penjadwalanStore, kandangStore, tugasStore } from '@/stores';
    import { onMounted, reactive, ref, watch } from 'vue'
    import axios from 'axios'
    import { Form, Field } from 'vee-validate';
    import * as Yup from 'yup';
    import Swal from 'sweetalert2';
    import moment from 'moment';

    const baseUrl = `${import.meta.env.VITE_API_URL}`;
    const user = localStorage.getItem('user');
    const role = JSON.parse(user) ? JSON.parse(user).data.roles[0].nama : '';
    const superadmin = ref('Super Admin');
    const adminKandang = ref('Admin Kandang');
    const adminKantor = ref('Admin Kantor');

    const schema = Yup.object().shape({
        id_tugas: Yup.string().required('Tugas is required'),
        id_kandang: Yup.string().required('Kandang is required'),
        waktu_pelaksanaan: Yup.string().required('Waktu pelaksana is required'),
        pelaksana : Yup.string().nullable(),
        penanggungjawab : Yup.string().nullable(),
        deskripsi: Yup.string()
    });

    const dataPenjadwalan  = reactive(penjadwalanStore());
    const dataKandang = reactive(kandangStore());
    const dataTugas = reactive(tugasStore());

    const namaTugas = ref('');
    const namaKandang = ref('');
    const formatTanggalEdit = ref('');

    const detailPenjadwalan = reactive({
        id: '',
        id_tugas: '',
        id_kandang: '',
        waktu_pelaksanaan: '',
        deskripsi: '',
        nama_tugas: '',
        nama_kandang: '',
        pelaksana: '',
        penanggungjawab: '',
    });

    let search = ref("");

    const currentPage = ref(1);
    const pageSize = ref(10);
    const totalItems = ref(0);

    const onClickHandler = (page) => {
        getPenjadwalan(page);
    };

    const formatTanggal = (tanggal) => {
        return moment(tanggal).format('DD MMMM YYYY');
    }

    watch(() => detailPenjadwalan.waktu_pelaksanaan, () => {
        formatTanggalEdit.value = moment(detailPenjadwalan.waktu_pelaksanaan).format('YYYY-MM-DD');
    });

    onMounted(() => {
        getKandang()
        getPenjadwalan()
        getTugas()
        getNamaTugas(2)
    });

    function clearSearch() {
        search.value = '';
        getPenjadwalan();
    }

    function searchItem() {
        console.log(search.value);
        searchPenjadwalan(search.value);
    }

    function alert(icon, title) {
        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: icon,
          title: title
        });
    }

    function closeModal() {
        const closeElements = document.querySelectorAll('.btn-close');

        closeElements.forEach((closeElement) => {
            closeElement.click();
        });

        const form = document.querySelectorAll('.form');
        form.forEach((formElement) => {
            formElement.reset();
        });
        
    }

    async function getTugas() {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        // console.log(JSON.parse(token).token);
        axios.get(baseUrl + '/tugas', {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                dataTugas.setResponseData(response.data);
                totalItems.value = dataPenjadwalan.responseData ? dataPenjadwalan.responseData.data.total_record : 0;
            })
            .catch(error => {
                console.error(error);
            });
    }

    function getNamaTugas(id) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/tugas/' + id, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                namaTugas.value = response.data.data.nama;
            })
            .catch(error => {
                console.error(error);
            });
        return namaTugas.value;
    }

    function getNamaKandang(id) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/kandang/' + id, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                namaKandang.value = response.data.data.nama;
            })
            .catch(error => {
                console.error(error);
            });
        return namaKandang.value;
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

    async function getPenjadwalan() {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        // console.log(JSON.parse(token).token);
        axios.get(baseUrl + '/penjadwalan', {
            params: {
                page_number: currentPage.value, 
                page_size: pageSize.value, 
            },
           
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                dataPenjadwalan.setResponseData(response.data);
                console.log(dataPenjadwalan.responseData.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    async function onSubmit(values, { setErrors }) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        let { id_kandang, id_tugas, waktu_pelaksanaan, penanggungjawab, pelaksana, deskripsi } = values;
        if(id_kandang == 0){
            id_kandang = null;
        }
        console.log(values);
        return axios.post(baseUrl + '/penjadwalan', {
            id_kandang: id_kandang,
            id_tugas: id_tugas,
            waktu_pelaksanaan: waktu_pelaksanaan,
            penanggungjawab: penanggungjawab,
            pelaksana: pelaksana,
            deskripsi: deskripsi,
        }, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                console.log(response);
                getPenjadwalan();
                alert('success', 'Data berhasil ditambahkan');
                closeModal();
            })
            .catch(error => {
                console.error(error);
                alert('error', 'Data gagal ditambahkan');
                setErrors({ apiError: error.response.data.message });
            });
        
    }

    async function onSubmitUpdate(values, { setErrors }) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        let { id_kandang, id_tugas, waktu_pelaksanaan, penanggungjawab, pelaksana, deskripsi } = values;
        console.log(values);
        if(id_kandang == 0){
            id_kandang = null;
        }
        return axios.put(baseUrl + '/penjadwalan/' + detailPenjadwalan.id, {
            id_tugas: id_tugas,
            id_kandang: id_kandang,
            waktu_pelaksanaan: waktu_pelaksanaan,
            penanggungjawab: penanggungjawab,
            pelaksana: pelaksana,
            deskripsi: deskripsi,
        }, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                console.log(response);
                getPenjadwalan();
                alert('success', 'Data berhasil diubah');
                closeModal();
            })
            .catch(error => {
                console.error(error);
                alert('error', 'Data gagal diubah');
                setErrors({ apiError: error.response.data.message });
            });
        
    }

    async function getIdPenjadwalan(id){
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        return axios.get(baseUrl + '/penjadwalan/' + id, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                detailPenjadwalan.id = response.data.data.id;
                detailPenjadwalan.id_tugas = response.data.data.id_tugas;
                detailPenjadwalan.id_kandang = response.data.data.id_kandang ? response.data.data.id_kandang : 0;
                detailPenjadwalan.waktu_pelaksanaan = response.data.data.waktu_pelaksanaan;
                detailPenjadwalan.deskripsi = response.data.data.deskripsi;
                detailPenjadwalan.nama_tugas = response.data.data.tugas.nama;
                detailPenjadwalan.nama_kandang = response.data.data.kandang ? response.data.data.kandang.nama : "Semua Kandang";
                detailPenjadwalan.pelaksana = response.data.data.pelaksana;
                detailPenjadwalan.penanggungjawab = response.data.data.penanggungjawab;
                console.log(detailPenjadwalan);
            })
            .catch(error => {
                console.error(error);
            });
    }

    async function deletePenjadwalan(id) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        return axios.delete(baseUrl + '/penjadwalan/' + id, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                console.log(response);
                getPenjadwalan();
                alert('success', 'Data berhasil dihapus');
            })
            .catch(error => {
                alert('error', error.response.data.message);
                console.error(error);
            });
    }

    async function searchPenjadwalan(keyword) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        return axios.get(baseUrl + '/penjadwalan', {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
            params: {
                search_value: keyword.toLowerCase(),
            },
        })
            .then(response => {
                dataPenjadwalan.setResponseData(response.data);
                console.log(dataPenjadwalan.responseData);
            })
            .catch(error => {
                console.error(error);
            });
    }

</script>