<template>
    <HeaderItem />
    <div class="body flex-grow-1 px-3">
        <div class="container-lg">
            <!-- /.row-->
            <div class="card mb-4 ps-2 pt-2">
            <div class="row">
                <div class="col-lg-12 p-4">
                <h4 class="mb-3">Master Data <span class="text-secondary">> Treatment</span></h4>
                <p class="w-50">Lorem ipsum dolor sit amet consectetur. Elementum donec gravida mauris ipsum rhoncus nec tempor venenatis tellus.</p>
                <div class="mt-4 mb-4">
                
                
                <span class="ms-3">
                    <a class="add text-secondary" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#createModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                            <path d="M0 6L13 6" stroke="#A3AAA6" stroke-width="2"/>
                            <path d="M6 0V12" stroke="#A3AAA6" stroke-width="2"/>
                        </svg>
                        Tambah Treatment
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
                    <div> 
                        <!-- <button type="button" class="btn btn-success bg-button-rossa">
                        Select
                        </button> -->
                        <button data-coreui-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" type="button" class="ms-3 btn btn-success bg-button-rossa">
                        Filter
                        </button>
                        <div class="dropdown-menu dropdown-menu-start p-3 shadow">
                            <select v-model="isTreatment" @change="getTreatment(currentPage, $event.target.value)" class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                                <option value="0" selected> 
                                    Pilih Is Treatment 
                                </option>
                                <option value="true">Ya</option>
                                <option value="false">Tidak</option>
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
                            <input type="text" v-model="search" @input="searchItem" class="form-control" placeholder="Search" aria-label="search" aria-describedby="basic-addon1">
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
                            <!-- <th scope="col">No</th> -->
                            <th scope="col">Nama Treatment</th>
                            <th scope="col">Treatment</th>
                            <th scope="col">Deskripsi</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="dataTreatment.responseData && dataTreatment.responseData.data.items.length > 0">
                                <tr v-for="(item, index) in dataTreatment.responseData.data.items" :key="index" class="text-center">
                                    <!-- <td>{{ item.id }}</td> -->
                                    <td>{{ item.nama }}</td>
                                    <td>{{ item.is_treatment ? "Ya" : "Tidak" }}</td>
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
                                            <a data-bs-toggle="modal" data-bs-target="#detailModal" @click="getIdTreatment(item.id)" class="dropdown-item" href="javascript:void(0)">Detail</a>
                                            <a data-bs-toggle="modal" data-bs-target="#editModal" @click="getIdTreatment(item.id)" class="dropdown-item" href="javascript:void(0)">Edit</a>
                                            <a @click="deleteTreatment(item.id)" class="dropdown-item" href="javascript:void(0)">Hapus</a>
                                        </div>
                                    </td>
                                </tr>
                            </template>
                            <tr v-else>
                                <td colspan="6" class="text-center">No data available</td>
                            </tr>
                        </tbody>
                        <!-- <tbody v-else>
                            <tr>
                                <td colspan="6" class="text-center">No data available</td>
                            </tr>
                        </tbody> -->
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
                    <h5 class="modal-title" id="exampleModalLabel">Tambah Strain Ayam</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <Form class="form" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
                        <Field class="form-control text-center mb-3" type="text" name="nama" placeholder="Nama" :class="{ 'is-invalid': errors.nama }" />
                        <Field as="select" v-model="is_treatment" class="form-control text-center mb-3" name="is_treatment" :class="{ 'is-invalid': errors.is_treatment }">
                            <option value="-1">--- Pilih Is Treatment ---</option>
                            <option value="true">Ya</option>
                            <option value="false">Tidak</option>
                        </Field>
                        <Field as="textarea" class="form-control text-center mb-3" name="deskripsi" placeholder="Deskripsi" :class="{ 'is-invalid': errors.deskripsi }"/>
                       
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

    <div class="modal fade" id="detailModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content p-3">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Detail Treatment</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Nama : {{ detailTreatment.nama }}</p>
                    <p>Is Treatment : {{ detailTreatment.is_treatment ? "Ya" : "Tidak" }}</p>
                    <p>Deskripsi : {{ detailTreatment.deskripsi }}</p>
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
                    <h5 class="modal-title" id="exampleModalLabel">Edit Treatment</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <Form @submit="onSubmitUpdate" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
                        <Field v-model="detailTreatment.nama" class="form-control text-center mb-3" type="text" name="nama" placeholder="Nama" :class="{ 'is-invalid': errors.nama }" />
                        <Field as="select" v-model="detailTreatment.is_treatment" class="form-control text-center mb-3" name="is_treatment" :class="{ 'is-invalid': errors.is_treatment }">
                            <option>--- Pilih Is Treatment ---</option>
                            <option value="true">Ya</option>
                            <option value="false">Tidak</option>
                        </Field>
                        <Field v-model="detailTreatment.deskripsi" as="textarea" class="form-control text-center mb-3" name="deskripsi" placeholder="Deskripsi" :class="{ 'is-invalid': errors.deskripsi }"/>
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
    import { treatmentStore } from '@/stores';
    import { defineStore, storeToRefs } from 'pinia'
    import { onMounted, reactive, ref } from 'vue';
    import axios from 'axios'
    import { Form, Field } from 'vee-validate';
    import * as Yup from 'yup';
    import Swal from 'sweetalert2';

    const baseUrl = `${import.meta.env.VITE_API_URL}`;

    const schema = Yup.object().shape({
        nama: Yup.string().required('Nama is required'),
        is_treatment: Yup.string().required('Is Treatment is required'),
        deskripsi: Yup.string(),
    });

    const dataTreatment  = reactive(treatmentStore());
    const detailTreatment = reactive({
        id: '',
        is_treatment: '',
        nama: '',
        deskripsi: '',
    });
    let search = ref("");
    const is_treatment = ref(-1);
    const currentPage = ref(1);
    const pageSize = ref(10);
    const totalItems = dataTreatment.responseData ? dataTreatment.responseData.data.total_record : 0;
    const onClickHandler = (page) => {
        getTreatment(page);
    };
    const isTreatment = ref(0);

    onMounted(() => {
        getTreatment(1)
    });

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

    function clearSearch() {
        search.value = '';
        isTreatment.value = 0;
        getTreatment(1);
    }

    function searchItem() {
        console.log(search.value);
        searchTreatment(search.value);
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

    async function getTreatment(page_number, is_treatment = null) {
        if(is_treatment == 0) {
            is_treatment = null;
        }
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/tugas', {
            params: {
                is_treatment: is_treatment,
                page_number: page_number, 
                page_size: pageSize.value, 
            },
           
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                dataTreatment.setResponseData(response.data);
                console.log(dataTreatment.responseData);
            })
            .catch(error => {
                console.error(error);
            });
    }

    async function onSubmit(values, { setErrors }) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        const { nama, is_treatment, deskripsi } = values;
        console.log(values);
        return axios.post(baseUrl + '/tugas', {
            nama: nama,
            is_treatment: is_treatment,
            deskripsi: deskripsi,
        }, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                console.log(response);
                getTreatment(1);
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
        const { nama, is_treatment, deskripsi } = values;
        console.log(values);
        return axios.put(baseUrl + '/tugas/' + detailTreatment.id, {
            nama: nama,
            is_treatment: is_treatment,
            deskripsi: deskripsi,
        }, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                console.log(response);
                getTreatment(1);
                alert('success', 'Data berhasil diubah');
                closeModal();
            })
            .catch(error => {
                console.error(error);
                alert('error', 'Data gagal diubah');
                setErrors({ apiError: error.response.data.message });
            });
        
    }

    async function getIdTreatment(id) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/tugas/' + id, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                detailTreatment.id = response.data.data.id;
                detailTreatment.is_treatment = response.data.data.is_treatment;
                detailTreatment.nama = response.data.data.nama;
                detailTreatment.deskripsi = response.data.data.deskripsi;
            })
            .catch(error => {
                console.error(error);
            });
    }

    async function deleteTreatment(id) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.delete(baseUrl + '/tugas/' + id, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                console.log(response);
                alert('success', 'Data berhasil dihapus');
                getTreatment(1);
            })
            .catch(error => {
                console.error(error);
                alert('error', error.response.data.message);
            });
    }

    async function searchTreatment(keyword) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        return axios.get(baseUrl + '/tugas', {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
            params: {
                search_value: keyword.toLowerCase(),
            },
        })
            .then(response => {
                dataTreatment.setResponseData(response.data);
                console.log(dataTreatment.responseData);
            })
            .catch(error => {
                console.error(error);
            });
    }

    
    onMounted(() => {

    });

   
</script>