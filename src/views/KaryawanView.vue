<template>
    <HeaderItem />
    <div class="body flex-grow-1 px-3">
        <div class="container-lg">
            <!-- /.row-->
            <div class="card mb-4 ps-2 pt-2">
            <div class="row">
                <div class="col-lg-12 p-4">
                <h4 class="mb-3">Master Data <span class="text-secondary">> Karyawan</span></h4>
                <p class="w-50">Lorem ipsum dolor sit amet consectetur. Elementum donec gravida mauris ipsum rhoncus nec tempor venenatis tellus.</p>
                <div class="mt-4 mb-4">
                
                
                <span class="ms-3">
                    <a @click="getRole()" class="add text-secondary" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#createModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                            <path d="M0 6L13 6" stroke="#A3AAA6" stroke-width="2"/>
                            <path d="M6 0V12" stroke="#A3AAA6" stroke-width="2"/>
                        </svg>
                        Tambah Karyawan
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
                        <!-- <button type="button" class="btn btn-success bg-button-rossa ms-2">
                        Filter
                        </button> -->
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
                            <th scope="col">Nama karyawan</th>
                            <th scope="col">Alamat</th>
                            <th scope="col">Email</th>
                            <th scope="col">Nomor Telepon</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="dataKaryawan.responseData && dataKaryawan.responseData.data.items.length > 0">
                                <tr v-for="(item, index) in dataKaryawan.responseData.data.items" :key="index" class="text-center">
                                    <!-- <td>{{ item.id }}</td> -->
                                    <td>{{ item.nama }}</td>
                                    <td>{{ item.alamat }}</td>
                                    <td>{{ item.email }}</td>
                                    <td>
                                        {{ item.nomor_telepon  }}
                                    </td>
                                    <!-- <td>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
                                            <path d="M2.57398 18C2.11398 18 1.72998 17.846 1.42198 17.538C1.11332 17.2293 0.958984 16.845 0.958984 16.385V1.615C0.958984 1.155 1.11332 0.771 1.42198 0.463C1.72998 0.154333 2.11398 0 2.57398 0H10.459L14.959 4.5V16.385C14.959 16.845 14.805 17.229 14.497 17.537C14.1883 17.8457 13.804 18 13.344 18H2.57398ZM9.95898 5H13.959L9.95898 1V5Z" fill="#0FA958"/>
                                            </svg>
                                    </td> -->
                                    <!-- <td>
                                        09  November 2023
                                    </td> -->
                                    <td>
                                        
                                        <a data-coreui-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="6" viewBox="0 0 29 6" fill="none">
                                            <circle cx="2.5" cy="3" r="2.5" fill="#797979"/>
                                            <circle cx="14.5" cy="3" r="2.5" fill="#797979"/>
                                            <circle cx="26.5" cy="3" r="2.5" fill="#797979"/>
                                            </svg>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <a data-bs-toggle="modal" data-bs-target="#detailModal" @click="getIdKaryawan(item.id)" class="dropdown-item" href="javascript:void(0)">Detail</a>
                                            <template v-if="role == superadmin">
                                                <a data-bs-toggle="modal" data-bs-target="#editModal" @click="getIdKaryawan(item.id)" class="dropdown-item" href="javascript:void(0)">Edit</a>
                                                <template v-if="item.id !== 39">
                                                    <a @click="validasiDeleteKaryawan(item.id)" class="dropdown-item" href="javascript:void(0)">Hapus</a>
                                                </template>
                                            </template>
                                            <template v-else-if="item.id !== 39">
                                                <template v-if="getIdUser == item.id || getRoleName(item.user_roles) == 'Admin Kandang' || getRoleName(item.user_roles) == 'Anak Kandang'"> 
                                                    <a data-bs-toggle="modal" data-bs-target="#editModal" @click="getIdKaryawan(item.id)" class="dropdown-item" href="javascript:void(0)">Edit</a> 
                                                </template>
                                                <template v-if="getRoleName(item.user_roles) == 'Admin Kandang' || getRoleName(item.user_roles) == 'Anak Kandang'"> 
                                                    <a @click="validasiDeleteKaryawan(item.id)" class="dropdown-item" href="javascript:void(0)">Hapus</a>
                                                </template>
                                            </template>
                                            <!-- {{ getRoleName(item.user_roles) }} -->
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
                    <h5 class="modal-title" id="exampleModalLabel">Tambah Karyawan</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <Form class="form" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
                        <Field class="form-control text-center mb-3" type="text" name="nama" placeholder="Nama" :class="{ 'is-invalid': errors.nama }" />
                        <Field class="form-control text-center mb-3" type="email" name="email" placeholder="Email" :class="{ 'is-invalid': errors.email }"/>
                        <Field class="form-control text-center mb-3" type="password" name="password" placeholder="Password" :class="{ 'is-invalid': errors.password }"/>
                        <Field class="form-control text-center mb-3" type="text" name="nomor_telepon" placeholder="Nomot Telepon" :class="{ 'is-invalid': errors.nomor_telepon }"/>
                        <Field class="form-control text-center mb-3" type="text" name="alamat" placeholder="Alamat" :class="{ 'is-invalid': errors.alamat }"/>
                        <Field class="form-control text-center mb-3" name="role_ids" as="select" :class="{ 'is-invalid': errors.role_ids }"> 
                            <option value="">Pilih Role</option>
                            <template v-if="dataRole.responseData">
                                <option v-for="item in dataRole.responseData.data.items" :key="item.id" :value="item.id">{{ item.nama }}</option>
                            </template>
                        </Field> 
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
                    <h5 class="modal-title" id="exampleModalLabel">Detail Karyawan</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Nama : {{ detailKaryawan.nama }}</p>
                    <p>Alamat : {{ detailKaryawan.alamat }}</p>
                    <p>Email : {{ detailKaryawan.email }}</p>
                    <p>Nomor Telepon : {{ detailKaryawan.nomor_telepon }}</p>
                    <p>Role : {{ detailKaryawan.role_name }}</p>
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
                    <h5 class="modal-title" id="exampleModalLabel">Edit Karyawan</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <Form @submit="onSubmitUpdate" :validation-schema="schema2" v-slot="{ errors, isSubmitting }">
                        <Field class="form-control text-center mb-3" type="text" name="nama" placeholder="Nama" v-model="detailKaryawan.nama" :class="{ 'is-invalid': errors.nama }" />
                        <Field class="form-control text-center mb-3" type="email" name="email" placeholder="Email" v-model="detailKaryawan.email" :class="{ 'is-invalid': errors.email }"/>
                        <Field class="form-control text-center mb-3" type="password" name="password_edit" placeholder="Password" v-model="detailKaryawan.password" :class="{ 'is-invalid': errors.password_edit }"/>
                        <Field class="form-control text-center mb-3" type="text" name="nomor_telepon" placeholder="Nomot Telepon" v-model="detailKaryawan.nomor_telepon" :class="{ 'is-invalid': errors.nomor_telepon }"/>
                        <Field class="form-control text-center mb-3" type="text" name="alamat" placeholder="Alamat" v-model="detailKaryawan.alamat" :class="{ 'is-invalid': errors.alamat }"/>
                        <Field v-model="detailKaryawan.role_ids" class="form-control text-center mb-3" name="role_ids" as="select" :class="{ 'is-invalid': errors.role_ids }">
                            <option value="">Pilih Role</option>
                            <template v-if="dataRole.responseData">
                                <option v-for="item in dataRole.responseData.data.items" :key="item.id" :value="item.id">{{ item.nama }}</option>
                            </template>
                        </Field> 
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
    import { karyawanStore } from '@/stores';
    import { defineStore, storeToRefs } from 'pinia';
    import { onMounted, reactive, ref, computed } from 'vue';
    import axios from 'axios';
    import { Form, Field } from 'vee-validate';
    import * as Yup from 'yup';
    import Swal from 'sweetalert2';

    const baseUrl = `${import.meta.env.VITE_API_URL}`;
    const user = localStorage.getItem('user');
    const getIdUser = JSON.parse(user) ? JSON.parse(user).data.id : '';
    const role = JSON.parse(user) ? JSON.parse(user).data.roles[0].nama : '';
    const superadmin = ref('Super Admin');
    const adminKandang = ref('Admin Kandang');
    const adminKantor = ref('Admin Kantor');

    const schema = Yup.object().shape({
        nama: Yup.string().required('Nama is required'),
        email: Yup.string().required('Email is required'),
        password: Yup.string().required('Password is required'),
        password_edit: Yup.string().nullable(),
        nomor_telepon: Yup.string().required('Nomor Telepon is required'),
        role_ids: Yup.string().required('Role is required'),
    });

    const schema2 = Yup.object().shape({
        nama: Yup.string().required('Nama is required'),
        email: Yup.string().required('Email is required'),
        password_edit: Yup.string().nullable(),
        nomor_telepon: Yup.string().required('Nomor Telepon is required'),
        role_ids: Yup.string().required('Role is required'),
    });

    const roleStore = defineStore('roleStore', {
        state: () => ({
            responseData: null,
        }),
        actions: {
            setResponseData(data) {
                this.responseData = data;
            },
        },
    });

    const dataKaryawan  = reactive(karyawanStore());
    const dataRole = roleStore();
    const detailKaryawan = reactive({
        id: '',
        nama: '',
        alamat: '',
        email: '',
        nomor_telepon: '',
        role_name: '',
        role_ids: '',
    });
    let search = ref("");
    
    const currentPage = ref(1);
    const pageSize = ref(10);
    const totalItems = ref(0);
    const onClickHandler = (page) => {
        getKaryawan(page);
    };

    // const { karyawanList } = storeToRefs(dataKaryawan);
    // const { roleList } = storeToRefs(dataRole);

    onMounted(() => {
        getKaryawan(1)
        // getRole()
    });

    function getRoleName(userRoles) {
      if (userRoles && userRoles.length > 0) {
        return userRoles[0].role.nama;
      }
      return '-';
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

    function clearSearch() {
        search.value = '';
        getKaryawan(1);
    }

    function searchItem() {
        console.log(search.value);
        searchKaryawan(search.value);
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

    async function getKaryawan(page_number) {
        getRole();
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/karyawan', {
            params: {
                page_number: page_number, 
                page_size: pageSize.value, 
            },
           
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                dataKaryawan.setResponseData(response.data);
                totalItems.value = dataKaryawan.responseData ? dataKaryawan.responseData.data.total_record : 0;
                console.log("Daftar Karyawan", dataKaryawan.responseData.data.items);
            })
            .catch(error => {
                console.error(error);
            });
    }

    async function getRole() {
            
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
       
        axios.get(baseUrl + '/role', {
            params: {
                page_number: 1, 
                page_size: 10,
            },
        
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                dataRole.setResponseData(response.data);
                dataRole.responseData.data.items = dataRole.responseData.data.items.filter(role => role.id !== 12);
                console.log(dataRole.responseData.data.items.filter(role => role.id !== 12));
                // console.log(dataRole.responseData.data.items);
            })
            .catch(error => {
                console.error(error);
            });
    }

    async function onSubmit(values, { setErrors }) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        const { nama, email, password, nomor_telepon, alamat, role_ids } = values;
        console.log(values);
        return axios.post(baseUrl + '/karyawan', {
            nama: nama,
            email: email,
            password: password,
            nomor_telepon: nomor_telepon,
            alamat: alamat,
            role_ids: role_ids,
        }, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                console.log(response);
                getKaryawan(currentPage.value);
                alert('success', 'Data berhasil ditambahkan');
                closeModal();
            })
            .catch(error => {
                console.error(error);
                alert('error', error.response.data.message);
                setErrors({ apiError: error.response.data.message });
            });
        
    }

    async function onSubmitUpdate(values, { setErrors }) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        const { nama, email, password_edit, nomor_telepon, alamat, role_ids } = values;
        console.log(values);
        return axios.put(baseUrl + '/karyawan/' + detailKaryawan.id, {
            nama: nama,
            email: email,
            password: password_edit,
            nomor_telepon: nomor_telepon,
            alamat: alamat,
            role_ids: role_ids,
        }, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                console.log(response);
                getKaryawan(currentPage.value);
                alert('success', 'Data berhasil diubah');
                closeModal();
            })
            .catch(error => {
                console.error(error);
                alert('error', error.response.data.message);
                setErrors({ apiError: error.response.data.message });
            });
        
    }

    async function getIdKaryawan(id) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/karyawan/' + id, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                detailKaryawan.id = response.data.data.id_karyawan;
                detailKaryawan.nama = response.data.data.nama;
                detailKaryawan.alamat = response.data.data.alamat;
                detailKaryawan.email = response.data.data.email;
                detailKaryawan.nomor_telepon = response.data.data.nomor_telepon;
                detailKaryawan.role_name = response.data.data.user_roles[0].role.nama;
                detailKaryawan.role_ids = response.data.data.user_roles[0].role.id;
                console.log("Data Karyawan", response.data.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    function validasiDeleteKaryawan(id) {
        Swal.fire({
            title: 'Apakah anda yakin?',
            text: "Data yang dihapus tidak dapat dikembalikan!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0FA958',
            cancelButtonColor: '#797979',
            confirmButtonText: 'Ya, Hapus!',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteKaryawan(id);
            }
        })
    }

    async function deleteKaryawan(id) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.delete(baseUrl + '/karyawan/' + id, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                console.log(response);
                alert('success', 'Data berhasil dihapus');
                getKaryawan(currentPage.value);
            })
            .catch(error => {
                console.error(error);
                alert('error', error.response.data.message);
            });
    }

    async function searchKaryawan(keyword) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        return axios.get(baseUrl + '/karyawan', {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
            params: {
                search_value: keyword.toLowerCase(),
            },
        })
            .then(response => {
                
                dataKaryawan.setResponseData(response.data);
                console.log(dataKaryawan.responseData);
            })
            .catch(error => {
                console.error(error);
            });
    }

   
</script>