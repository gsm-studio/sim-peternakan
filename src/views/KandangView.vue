<template>
    <HeaderItem />
    <div class="body flex-grow-1 px-3">
        <div class="container-lg">
            <!-- /.row-->
            <div class="card mb-4 ps-2 pt-2">
            <div class="row">
                <div class="col-lg-12 p-4">
                <h4 class="mb-3">Master Data <span class="text-secondary">> Kandang</span></h4>
                <p class="w-50">Lorem ipsum dolor sit amet consectetur. Elementum donec gravida mauris ipsum rhoncus nec tempor venenatis tellus.</p>
                <div class="mt-4 mb-4">
                
                
                <span class="ms-3">
                    <a @click="getKaryawan()" class="text-secondary add" data-bs-toggle="modal" data-bs-target="#createModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                        <path d="M0 6L13 6" stroke="#A3AAA6" stroke-width="2"/>
                        <path d="M6 0V12" stroke="#A3AAA6" stroke-width="2"/>
                        </svg>
                        Tambah Kandang
                    </a>
                    
                </span>
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
                        <button type="button" class="btn btn-success bg-button-rossa">
                        Select
                        </button>
                        <button type="button" class="btn btn-success bg-button-rossa ms-2">
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
                            <input type="text" class="form-control" v-model="search" @input="searchItem" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1">
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
                        <th scope="col">ID Kandang</th>
                        <th scope="col">Nama Kandang</th>
                        <th scope="col">Anak Kandang</th>
                        <th scope="col">Nama Mandor</th>
                        <th scope="col">Alamat Kandang</th>
                        <th scope="col">Populasi Total</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="dataKandang.responseData">
                            <tr v-for="item in dataKandang.responseData.data.items" :key="item.id" class="row-validasi text-center">
                                <td>{{ item.id }}</td>
                                <td>{{ item.nama }}</td>
                                <td>{{ item.nama_anak_kandang }}</td>
                                <td>{{ item.nama_mandor }}</td>
                                <td>{{ item.alamat }}</td>
                                <td>{{ item.populasi_total }}</td>
                                <td>
                                    <a data-coreui-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="6" viewBox="0 0 29 6" fill="none">
                                        <circle cx="2.5" cy="3" r="2.5" fill="#797979"/>
                                        <circle cx="14.5" cy="3" r="2.5" fill="#797979"/>
                                        <circle cx="26.5" cy="3" r="2.5" fill="#797979"/>
                                        </svg>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <a data-bs-toggle="modal" data-bs-target="#detailModal" @click="getIdKandang(item.id)" class="dropdown-item" href="javascript:void(0)">Detail</a>
                                        <a data-bs-toggle="modal" data-bs-target="#editModal" @click="getIdKandang(item.id)" class="dropdown-item" href="javascript:void(0)">Edit</a>
                                        <a @click="deleteKandang(item.id)" class="dropdown-item" href="javascript:void(0)">Hapus</a>
                                    </div>
                                </td>
                            </tr>
                        </template>
                        <tr v-else>
                            <td colspan="6" class="text-center">No data available</td>
                        </tr>
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

     <!-- Modal -->
     <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content p-3">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Tambah Kandang</h5>
            <button @click="closeModal()" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <Form class="form" id="form" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
                <div class="modal-body">
                
                    <Field class="form-control text-center mb-3" type="text" name="nama" placeholder="Nama" :class="{ 'is-invalid': errors.nama }" />
                    <Field class="form-control text-center mb-3" name="id_mandor" as="select" :class="{ 'is-invalid': errors.id_mandor }">
                        <option value="">----- Pilih Nama Mandor -----</option>
                        <template v-if="dataKaryawan.responseData">
                            <option v-for="item in dataKaryawan.responseData.data.items" :key="item.id" :value="item.id" >{{ item.nama }}</option>
                        </template>
                    </Field> 
                    <Field class="form-control text-center mb-3" name="id_anak_kandang" as="select" :class="{ 'is-invalid': errors.id_anak_kandang }">
                        <option value="">----- Pilih Nama Anak Kandang -----</option>
                        <template v-if="dataKaryawan.responseData">
                            <option v-for="item in dataKaryawan.responseData.data.items" :key="item.id" :value="item.id">{{ item.nama }}</option>
                        </template>
                    </Field> 
                    <Field class="form-control text-center mb-3" type="number" name="populasi_total" placeholder="Populasi Total" :class="{ 'is-invalid': errors.populasi_total }" />
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
                    <h5 class="modal-title" id="exampleModalLabel">Detail Kandang</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Nama : {{ detailKandang.nama }}</p>
                    <p>Alamat : {{ detailKandang.alamat }}</p>
                    <p>Nama Mandor : {{ detailKandang.nama_mandor }}</p>
                    <p>Nama Anak Kandang : {{ detailKandang.nama_anak_kandang }}</p>
                    <p>Populasi Total : {{ detailKandang.populasi_total }}</p>
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
                    <h5 class="modal-title" id="exampleModalLabel">Edit Kandang</h5>
                    <button @click="closeModal()" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <Form @submit="onSubmitUpdate" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
                        <Field class="form-control text-center mb-3" type="text" name="nama" placeholder="Nama" v-model="detailKandang.nama" :class="{ 'is-invalid': errors.nama }" />
                        <Field v-model="detailKandang.id_mandor" class="form-control text-center mb-3" name="id_mandor" :class="{ 'is-invalid': errors.id_mandor }" as="select">
                            <template v-if="dataKaryawan.responseData">
                                <option value="" disabled>Pilih Nama Mandor</option>
                                <option v-for="item in dataKaryawan.responseData.data.items" :key="item.id" :value="item.id">{{ item.nama }}</option>
                            </template>
                        </Field> 
                        <!-- {{ detailKandang  }} -->
                        <Field v-model="detailKandang.id_anak_kandang" class="form-control text-center mb-3" name="id_anak_kandang" :class="{ 'is-invalid': errors.id_anak_kandang }" as="select">
                            <!-- {{ detailKandang }} -->
                            <template v-if="dataKaryawan.responseData">
                                <option value="" disabled>Pilih Nama Anak Kandang</option>
                                <option value="" selected>Anjing</option>
                                <option v-for="item in dataKaryawan.responseData.data.items" :key="item.id" :value="item.id">{{ item.nama }}</option>
                            </template>
                        </Field> 
                        <Field class="form-control text-center mb-3" type="number" name="populasi_total" placeholder="Populasi Total" v-model="detailKandang.populasi_total" :class="{ 'is-invalid': errors.populasi_total }" />
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
    import HeaderItem from '../components/HeaderItem.vue';
    import { karyawanStore, kandangStore } from '@/stores';
    import { onMounted, reactive, ref } from 'vue'
    import { defineStore } from 'pinia'
    import axios from 'axios'
    import { Form, Field } from 'vee-validate';
    import * as Yup from 'yup';
    import Swal from 'sweetalert2';

    const baseUrl = `${import.meta.env.VITE_API_URL}`;

    const schema = Yup.object().shape({
        nama: Yup.string().required('Nama is required'),
        id_mandor: Yup.string().required('Nama mandor is required'),
        id_anak_kandang: Yup.string().required('Nama anak kandang is required'),
        populasi_total: Yup.number()
    });

    const dataKaryawan  = reactive(karyawanStore());
    const dataKandang  = reactive(kandangStore());
    const detailKandang = reactive({
        id: '',
        nama: '',
        alamat: '',
        id_mandor: '',
        id_anak_kandang: '',
        nama_mandor: '',
        nama_anak_kandang: '',
        populasi_total: 0,
    });
    let search = ref("");

    const currentPage = ref(1);
    const pageSize = ref(10);
    const totalItems = dataKandang.responseData ? dataKandang.responseData.data.total_record : 0;

    const onClickHandler = (page) => {
        getKandang(page);
        
    };

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

    onMounted(() => {
        getKandang()
       
    });

    function clearSearch() {
        search.value = '';
        getKandang(1);
    }

    function searchItem() {
        console.log(search.value);
        searchKandang(search.value);
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

    async function getKandang() {
        
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        // console.log(JSON.parse(token).token);
        axios.get(baseUrl + '/kandang', {
            params: {
                page_number: currentPage.value, 
                page_size: pageSize.value, 
            },
           
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

    async function onSubmit(values, { setErrors }) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        const { nama, id_mandor, id_anak_kandang, populasi_total } = values;
        console.log(values);
        return axios.post(baseUrl + '/kandang', {
            nama: nama,
            id_mandor: id_mandor,
            id_anak_kandang: id_anak_kandang,
            populasi_total: populasi_total,
        }, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                console.log(response);
                alert('success', 'Data berhasil ditambahkan');
                getKandang(1);
                closeModal();
            })
            .catch(error => {
                console.error(error);
                alert('error', 'Data gagal ditambahkan')
                setErrors({ apiError: error.response.data.message });
            });
        
    }

    async function onSubmitUpdate(values, { setErrors }) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        const { nama, id_mandor, id_anak_kandang, populasi_total } = values;
        console.log(values);
        return axios.put(baseUrl + '/kandang/' + detailKandang.id, {
            nama: nama,
            id_mandor: id_mandor,
            id_anak_kandang: id_anak_kandang,
            populasi_total: populasi_total,
        }, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                console.log(response);
                alert('success', 'Data berhasil diubah');
                getKandang(1);
                closeModal();
            })
            .catch(error => {
                console.error(error);
                alert('error', 'Data gagal diubah')
                setErrors({ apiError: error.response.data.message });
            });
        
    }

    async function getIdKandang(id) {
        getKaryawan();
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/kandang/' + id, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                detailKandang.id = response.data.data.id;
                detailKandang.nama = response.data.data.nama;
                detailKandang.alamat = response.data.data.alamat;
                detailKandang.id_mandor = response.data.data.id_mandor;
                detailKandang.id_anak_kandang = response.data.data.id_anak_kandang;
                detailKandang.nama_mandor = response.data.data.nama_mandor;
                detailKandang.nama_anak_kandang = response.data.data.nama_anak_kandang;
                detailKandang.populasi_total = response.data.data.populasi_total;
                console.log(detailKandang);
            })
            .catch(error => {
                console.error(error);
            });
    }

    async function deleteKandang(id) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.delete(baseUrl + '/kandang/' + id, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                console.log(response);
                getKandang(1);
                alert('success', 'Data berhasil dihapus');
            })
            .catch(error => {
                console.error(error);
                alert('error', error.response.data.message);
            });
    }

    async function searchKandang(keyword) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        return axios.get(baseUrl + '/kandang', {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
            params: {
                search_value: keyword.toLowerCase(),
            },
        })
            .then(response => {
                
                dataKandang.setResponseData(response.data);
                console.log(dataKandang.responseData);
            })
            .catch(error => {
                console.error(error);
            });
    }


    onMounted(() => {
        const buttons = document.querySelectorAll('.btnPersetujuan');
        const popover = document.getElementById('myPopover');

        // Menampilkan atau menyembunyikan popover saat button diklik
        buttons.forEach(button => {
            button.addEventListener('click', function(event) {
                if (popover.style.display === 'block') {
                    popover.style.display = 'none';
                } else {
                    popover.style.display = 'block';
                }
                event.stopPropagation(); // Mencegah event bubbling
            });
        });

        // Menutup popover saat klik di luar popover
        // document.addEventListener('click', function(event) {
        //     if (!popover.contains(event.target)) {
        //         popover.style.display = 'none';
        //     }
        // });
    });

</script>
