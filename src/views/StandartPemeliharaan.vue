<template>
    <HeaderItem />
    <div class="body flex-grow-1 px-3">
        <div class="container-lg">
            <!-- /.row-->
            <div class="card mb-4 ps-2 pt-2">
            <div class="row">
                <div class="col-lg-12 p-4">
                <h4 class="mb-3">Master Data <span class="text-secondary">> Standart Pemeliharaan</span></h4>
                <div class="mt-4 mb-4 d-flex">
                    <span>
                        <a @click="getStrain()" class="add text-secondary" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#createModal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                <path d="M0 6L13 6" stroke="#A3AAA6" stroke-width="2"/>
                                <path d="M6 0V12" stroke="#A3AAA6" stroke-width="2"/>
                            </svg>
                            Tambah Data
                        </a>
                    </span>
                    <!-- <span class="ms-3">
                        <button class="btn btn-success bg-status-success">
                            Usia 18-30
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
                                <path d="M1 1L4 5L8 1" stroke="white"/>
                            </svg>
                        </button>
                    </span> -->
                <!-- <div class="ms-3">
                    <span class="btnPopOver color-text-rossa">
                        Pindah Kandang
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 1L5 7L9.5 1" stroke="#0FA958"/>
                            </svg>
                    </span>
                    <div id="myPopover" class="popover-content p-0">
                        <div>
                            <ul class="list-group">
                                <li class="list-group-item">Kandang 1A</li>
                                <li class="list-group-item">Kandang 1A</li>
                                <li class="list-group-item">Kandang 1A</li>
                                <li class="list-group-item">Kandang 1A</li>
                                <li class="list-group-item">Kandang 1A</li>
                                <li class="list-group-item">Kandang 1A</li>
                                </ul>
                        </div>
                    </div>
                </div> -->
                <!-- <div class="ms-3">
                    <span id="btnStrain" class="color-text-rossa">
                        Strain: Hisex
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 1L5 7L9.5 1" stroke="#0FA958"/>
                            </svg>
                    </span>
                    <div id="myPopoverStrain" class="popover-content p-0">
                        <div>
                            <ul class="list-group">
                                <li class="list-group-item">Hyline</li>
                                <li class="list-group-item">Isa Brown</li>
                                <li class="list-group-item">Lohmann Brown
                                </li>
                                <li class="list-group-item">Novogen</li>
                                
                                </ul>
                        </div>
                    </div>
                </div> -->
                </div>
                <div class="d-flex justify-content-between">
                    <!-- Button trigger modal -->
                    <div> 
                        <button type="button" class="btn btn-success bg-button-rossa" data-toggle="modal" data-target="#exampleModal">
                        Filter
                        </button>
                    </div>
                    
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                        <div class="modal-content p-3">
                            <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Populasi Ayam : 3000 ekor</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.84 8.84667L13.66 12.6667L12.6667 13.66L8.84667 9.84C8.13333 10.3533 7.27333 10.6667 6.33333 10.6667C3.94 10.6667 2 8.72667 2 6.33333C2 3.94 3.94 2 6.33333 2C8.72667 2 10.6667 3.94 10.6667 6.33333C10.6667 7.27333 10.3533 8.13333 9.84 8.84667ZM6.33333 3.33333C4.67333 3.33333 3.33333 4.67333 3.33333 6.33333C3.33333 7.99333 4.67333 9.33333 6.33333 9.33333C7.99333 9.33333 9.33333 7.99333 9.33333 6.33333C9.33333 4.67333 7.99333 3.33333 6.33333 3.33333Z" fill="#0FA958"/>
                                </svg>
                            </span>
                            <input type="text" @input="searchItem" v-model="search" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1">
                        </div>
                        <a @click="clearSearch" href="javascript:void(0)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z" fill="#0FA958"/>
                            </svg>
                        </a>
                    </div>
                </div>
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <div class="bg-light p-4">
                            <div class="title mb-5">
                            <h5 class="d-inline">ID kandang</h5>
                            <div class="p-2 ms-3 bg-button-rossa d-inline rounded">09 November 2023</div>
                            </div>
                            <div class="mb-4">
                            <p>
                                <span class="color-text-rossa">Populasi ayam: <span class="text-secondary">300</span></span>
                                <span class="ms-4 color-text-rossa">FC: <span class="text-secondary">7,4</span></span>
                                <span class="ms-4 color-text-rossa">Standart FC: <span class="text-secondary">7,6</span></span>
                                <span class="ms-4 color-text-rossa">Egg mass: <span class="text-secondary">11,7</span></span>
                                <span class="ms-4 color-text-rossa">Strain: <span class="text-secondary">11,7</span></span>
                            </p>

                            </div>
                            <div>
                            <span class="ms-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                                <ellipse cx="11.5" cy="10.5" rx="11.5" ry="10.5" fill="#D9D9D9"/>
                                </svg>
                                Anak kandang
                            </span>
                            <span class="ms-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                                <ellipse cx="11.5" cy="10.5" rx="11.5" ry="10.5" fill="#D9D9D9"/>
                                </svg>
                                Mandor
                            </span>
                            </div>
                        </div>
                        <!-- table -->
                        <div class="table-responsive mt-5">
                            <table class="table pelaporan table-bordered">
                            <thead>
                                <tr>
                                
                                <th scope="col">Usia</th>
                                <th colspan="4" scope="col">Populasi</th>
                                <th colspan="2" scope="col">Produksi Telur</th>
                                <th colspan="2" scope="col">Berat Telur</th>
                                <th colspan="2" scope="col">Standart Produksi</th>
                                <th colspan="2" scope="col">Pakan</th>
                                <th rowspan="2" scope="col">Treatment</th>
                                <th rowspan="2" scope="col">Edit</th>
                                <th rowspan="2" scope="col">Status</th>
                                </tr>
                                <tr>
                                
                                <th scope="col">Mgg</th>
                                <th scope="col">Mati</th>
                                <th scope="col">Afkir</th>
                                <th scope="col">Pindah</th>
                                <th scope="col">Terima</th>
    
                                <th scope="col">Telur utuh</th>
                                <th scope="col">Telur bentes</th>
    
                                <th scope="col">Telur utuh</th>
                                <th scope="col">Telur bentes</th>
    
                                <th scope="col">%</th>
                                <th scope="col">gr/butir</th>

                                <th scope="col">Jumlah (kg)</th>
                                <th scope="col">Jenis pakan</th>

                                
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center">
                                <td>14</td>
                                <td>1</td>
                                <td>-</td>
                                <td>400</td>
                                <td>-</td>
                                <td>7000</td>
                                <td>34</td>
                                <td>406.0</td>
                                <td>2.0</td>
                                <td>24.2%</td>
                                <td>58gr</td>
                                <td>300 Kg</td>
                                <td>Omega</td>
                                <td>Vaksinasi ND-IB</td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <mask id="mask0_142_372" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="1" width="18" height="18">
                                        <path d="M2.91699 17.5H17.917" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M4.58398 11.1333V14.1667H7.63273L16.2507 5.545L13.2069 2.5L4.58398 11.1333Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                                    </mask>
                                    <g mask="url(#mask0_142_372)">
                                        <path d="M0 0H20V20H0V0Z" fill="#0FA958"/>
                                    </g>
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="23" viewBox="0 0 28 23" fill="none">
                                    <path d="M11.8381 1.91675C17.2868 1.91675 21.7036 6.20721 21.7036 11.5001C21.7036 16.793 17.2868 21.0834 11.8381 21.0834C6.38943 21.0834 1.97266 16.793 1.97266 11.5001C1.97266 6.20721 6.38943 1.91675 11.8381 1.91675ZM11.8381 3.83341C9.74494 3.83341 7.73748 4.64115 6.25737 6.07893C4.77727 7.51671 3.94575 9.46675 3.94575 11.5001C3.94575 13.5334 4.77727 15.4835 6.25737 16.9212C7.73748 18.359 9.74494 19.1667 11.8381 19.1667C13.9313 19.1667 15.9388 18.359 17.4189 16.9212C18.899 15.4835 19.7305 13.5334 19.7305 11.5001C19.7305 9.46675 18.899 7.51671 17.4189 6.07893C15.9388 4.64115 13.9313 3.83341 11.8381 3.83341ZM11.8381 5.75008C12.0798 5.75011 12.313 5.83629 12.4936 5.99227C12.6741 6.14824 12.7895 6.36317 12.8178 6.59629L12.8247 6.70841V11.1033L15.4953 13.6975C15.6722 13.87 15.7749 14.1014 15.7826 14.3448C15.7902 14.5882 15.7022 14.8252 15.5364 15.0078C15.3707 15.1905 15.1396 15.305 14.89 15.328C14.6405 15.3511 14.3913 15.2811 14.193 15.1322L14.1003 15.0526L11.1406 12.1776C10.9873 12.0286 10.8888 11.8345 10.8605 11.6256L10.8516 11.5001V6.70841C10.8516 6.45425 10.9555 6.21049 11.1405 6.03077C11.3255 5.85105 11.5765 5.75008 11.8381 5.75008Z" fill="#D4780C"/>
                                    </svg>
                                </td>
                                </tr>
                                
                            </tbody>
                            </table>
                        </div>
                        <!-- akhir table -->
                        </div>
                        <div class="modal-footer">
                        
                        </div>
                    </div>
                    </div>
                </div>
                <div class="table-responsive mt-3">
                    <table class="table pelaporan table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Strain Ayam</th>
                            <th scope="col">Usia (minggu)</th>
                            <th scope="col">HD (%)</th>
                            <th scope="col">Berat Butir (gr)</th>
                            <th scope="col">Berat Telur (gr)</th>
                            <th scope="col">FI</th>
                            <th scope="col">FC</th>
                            <th scope="col">Egg mass</th>
                            <th scope="col">Deskripsi</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="dataStandart.responseData">
                            <tr class="row-validasi text-center" v-for="(item, index) in dataStandart.responseData.data.items" :key="index">
                                <td>{{ item.id_strain_ayam }}</td>
                                <td>{{ item.umur }}</td>
                                <td>{{ item.nilai_hd }}</td>
                                <td>{{ item.nilai_bb }}</td>
                                <td>
                                    {{ item.nilai_bt }}
                                </td>
                                <td>
                                    {{ item.nilai_fi }}
                                </td>
                                <td>
                                    {{ item.nilai_fc }}
                                </td>
                                <td>
                                    {{ item.egg_mass }}
                                </td>
                                <td>
                                    {{ item.deskripsi }}
                                </td>
                                <td>     
                                     <a data-coreui-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="6" viewBox="0 0 29 6" fill="none">
                                        <circle cx="2.5" cy="3" r="2.5" fill="#797979"/>
                                        <circle cx="14.5" cy="3" r="2.5" fill="#797979"/>
                                        <circle cx="26.5" cy="3" r="2.5" fill="#797979"/>
                                        </svg>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <a data-toggle="modal" data-target="#detailModal" @click="getIdStandart(item.id)" class="dropdown-item" href="javascript:void(0)">Detail</a>
                                        <a data-toggle="modal" data-target="#editModal" @click="getIdStandart(item.id)" class="dropdown-item" href="javascript:void(0)">Edit</a>
                                        <a @click="deleteStandart(item.id)" class="dropdown-item" href="javascript:void(0)">Hapus</a>
                                    </div>
                                </td>
                            </tr>
                        </template>
                        <template v-else>
                            <tr class="row-validasi text-center">
                                <td colspan="9">Data tidak ditemukan</td>
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
                    <h5 class="modal-title" id="exampleModalLabel">Tambah Standart Pemeliharaan</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
                        <Field class="form-control text-center mb-3" name="id_strain_ayam" as="select" :class="{ 'is-invalid': errors.id_strain_ayam }"> 
                            <option value="">Pilih Strain Ayam</option>
                            <template v-if="dataStrain.responseData">
                                <option v-for="item in dataStrain.responseData.data.items" :key="item.id" :value="item.id">{{ item.nama }}</option>
                            </template>
                        </Field> 
                        <Field class="form-control text-center mb-3" type="text" name="umur" placeholder="Umur" :class="{ 'is-invalid': errors.umur }" />
                        <Field class="form-control text-center mb-3" type="text" name="nilai_hd" placeholder="Nilai HD" :class="{ 'is-invalid': errors.nilai_hd }"/>
                        <Field class="form-control text-center mb-3" type="text" name="nilai_bb" placeholder="Nilai BB" :class="{ 'is-invalid': errors.nilai_bb }"/>
                        <Field class="form-control text-center mb-3" type="text" name="nilai_bt" placeholder="Nilai BT" :class="{ 'is-invalid': errors.nilai_bt }"/>
                        <Field class="form-control text-center mb-3" type="text" name="nilai_fi" placeholder="Nilai FI" :class="{ 'is-invalid': errors.nilai_fi }"/>
                        <Field class="form-control text-center mb-3" type="text" name="nilai_fc" placeholder="Nilai FC" :class="{ 'is-invalid': errors.nilai_fc }"/>
                        <Field class="form-control text-center mb-3" type="text" name="egg_mass" placeholder="Egg Mass" :class="{ 'is-invalid': errors.egg_mass }"/>
                        <Field class="form-control text-center mb-3" type="text" name="deskripsi" placeholder="Deskripsi" :class="{ 'is-invalid': errors.deskripsi }"/>
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
                    <h5 class="modal-title" id="exampleModalLabel">Detail Standart Pemeliharaan</h5>
                    <button type="button" id="closeModal" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Nama Strain Ayam : {{ detailStandart.nama_strain_ayam }}</p>
                    <p>Umur : {{ detailStandart.umur }}</p>
                    <p>Nilai HD : {{ detailStandart.nilai_hd }}</p>
                    <p>Nilai BB : {{ detailStandart.nilai_bb }}</p>
                    <p>Nilai BT : {{ detailStandart.nilai_bt }}</p>
                    <p>Nilai FI : {{ detailStandart.nilai_fi }}</p>
                    <p>Egg Mass : {{ detailStandart.egg_mass }}</p>
                    <p>Deskripsi : {{ detailStandart.deskripsi }}</p>
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
                    <h5 class="modal-title" id="exampleModalLabel">Edit Standart Pemeliharaan</h5>
                    <button type="button" id="closeModal" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <Form @submit="onSubmitUpdate" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
                        <Field class="form-control text-center mb-3" name="id_strain_ayam" as="select" :class="{ 'is-invalid': errors.id_strain_ayam }"> 
                            <option value="">Pilih Strain Ayam</option>
                            <template v-if="dataStrain.responseData">
                                <option v-for="item in dataStrain.responseData.data.items" :key="item.id" :value="item.id" :selected="item.id && detailStandart.id_strain_ayam">{{ item.nama }}</option>
                            </template>
                        </Field> 
                        <Field class="form-control text-center mb-3" type="text" name="umur" placeholder="Umur" :class="{ 'is-invalid': errors.umur }" v-model="detailStandart.umur" />
                        <Field class="form-control text-center mb-3" type="text" name="nilai_hd" placeholder="Nilai HD" :class="{ 'is-invalid': errors.nilai_hd }" v-model="detailStandart.nilai_hd"/>
                        <Field class="form-control text-center mb-3" type="text" name="nilai_bb" placeholder="Nilai BB" :class="{ 'is-invalid': errors.nilai_bb }" v-model="detailStandart.nilai_bb" />
                        <Field class="form-control text-center mb-3" type="text" name="nilai_bt" placeholder="Nilai BT" :class="{ 'is-invalid': errors.nilai_bt }" v-model="detailStandart.nilai_bt" />
                        <Field class="form-control text-center mb-3" type="text" name="nilai_fi" placeholder="Nilai FI" :class="{ 'is-invalid': errors.nilai_fi }" v-model="detailStandart.nilai_fi" />
                        <Field class="form-control text-center mb-3" type="text" name="nilai_fc" placeholder="Nilai FC" :class="{ 'is-invalid': errors.nilai_fc }" v-model="detailStandart.nilai_fc" />
                        <Field class="form-control text-center mb-3" type="text" name="egg_mass" placeholder="Egg Mass" :class="{ 'is-invalid': errors.egg_mass }" v-model="detailStandart.egg_mass" />
                        <Field class="form-control text-center mb-3" type="text" name="deskripsi" placeholder="Deskripsi" :class="{ 'is-invalid': errors.deskripsi }" v-model="detailStandart.deskripsi" />
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
    import { reactive, ref, onMounted } from 'vue'
    import { standartStore, strainStore } from '@/stores';
    import axios from 'axios'
    import { Form, Field } from 'vee-validate';
    import * as Yup from 'yup';
    import Swal from 'sweetalert2';

    const baseUrl = `${import.meta.env.VITE_API_URL}`;

    const dataStandart  = reactive(standartStore());
    const dataStrain = reactive(strainStore());

    const detailStandart = reactive({
        id_strain_ayam: '',
        nama_strain_ayam: '',
        umur: '',
        nilai_hd: '',
        nilai_bb: '',
        nilai_bt: '',
        nilai_fi: '',
        nilai_fc: '',
        egg_mass: '',
        deskripsi: '',
    });
    let search = ref("");

    const currentPage = ref(1);
    const pageSize = ref(10);
    const totalItems = dataStandart.responseData ? dataStandart.responseData.data.total_record : 0;

    const schema = Yup.object().shape({
        id_strain_ayam: Yup.string().required('Strain ayam is required'),
        umur: Yup.string().required('Umur is required'),
        nilai_hd: Yup.string().required('Nilai hd is required'),
        nilai_bb: Yup.string().required('Nilai bb is required'),
        nilai_bt: Yup.string().required('Nilai bt is required'),
        nilai_fi: Yup.string().required('Nilai fi is required'),
        nilai_fc: Yup.string().required('Nilai fc is required'),
        egg_mass: Yup.string().required('Nilai Egg mass is required'),
        deskripsi: Yup.string().required('Deskripsi is required'),
    });

    const onClickHandler = (page) => {
        getStandart(page);
    };

    onMounted(() => {
        getStandart(1)
        // getRole()
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
        getStandart(1);
    }

    function searchItem() {
        console.log(search.value);
        searchStandart(search.value);
    }

    function closeModal() {
        const closeElements = document.querySelectorAll('.btn-close');

        closeElements.forEach((closeElement) => {
            closeElement.click();
        });
    }

    async function getStandart(page_number) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/standar_pemeliharaan', {
            params: {
                page_number: page_number, 
                page_size: pageSize.value, 
            },
           
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                dataStandart.setResponseData(response.data);
                console.log(dataStandart);
            })
            .catch(error => {
                console.error(error);
            });
    }    

    async function getStrain() {
            
            const user = localStorage.getItem('user');
            const token = JSON.parse(user);
           
            axios.get(baseUrl + '/strain_ayam', {
                headers: {
                    Authorization: `Bearer ${token.token}`,
                },
            })
                .then(response => {
                    dataStrain.setResponseData(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }

    async function onSubmit(values, { setErrors }) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        const { id_strain_ayam, umur, nilai_hd, nilai_bb, nilai_bt, nilai_fi, nilai_fc, egg_mass, deskripsi } = values;
        console.log(values);
        return axios.post(baseUrl + '/standar_pemeliharaan', {
            id_strain_ayam: id_strain_ayam,
            umur: umur,
            nilai_hd: nilai_hd,
            nilai_bb: nilai_bb,
            nilai_bt: nilai_bt,
            nilai_fi: nilai_fi,
            nilai_fc: nilai_fc,
            egg_mass: egg_mass,
            deskripsi: deskripsi,
        }, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                console.log(response);
                getStandart(1);
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
        const { id_strain_ayam, umur, nilai_hd, nilai_bb, nilai_bt, nilai_fi, nilai_fc, egg_mass, deskripsi } = values;
        console.log(values);
        return axios.put(baseUrl + '/standar_pemeliharaan/' + detailStandart.id, {
            id_strain_ayam: id_strain_ayam,
            umur: umur,
            nilai_hd: nilai_hd,
            nilai_bb: nilai_bb,
            nilai_bt: nilai_bt,
            nilai_fi: nilai_fi,
            nilai_fc: nilai_fc,
            egg_mass: egg_mass,
            deskripsi: deskripsi,
        }, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                console.log(response);
                alert('success', 'Data berhasil diubah');
                getStandart(1);
                closeModal();
            })
            .catch(error => {
                console.error(error);
                alert('error', 'Data gagal diubah');
                setErrors({ apiError: error.response.data.message });
            });
        
    }

    async function getIdStandart(id) {
        getStrain();
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/standar_pemeliharaan/' + id, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                detailStandart.id = response.data.data.id;
                detailStandart.id_strain_ayam = response.data.data.id_strain_ayam;
                detailStandart.umur = response.data.data.umur;
                detailStandart.nilai_hd = response.data.data.nilai_hd;
                detailStandart.nilai_bb = response.data.data.nilai_bb;
                detailStandart.nilai_bt = response.data.data.nilai_bt;
                detailStandart.nilai_fi = response.data.data.nilai_fi;
                detailStandart.nilai_fc = response.data.data.nilai_fc;
                detailStandart.egg_mass = response.data.data.egg_mass;
                detailStandart.deskripsi = response.data.data.deskripsi;
                detailStandart.nama_strain_ayam = response.data.data.strain_ayam.nama;
            })
            .catch(error => {
                console.error(error);
            });
    }

    async function deleteStandart(id) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.delete(baseUrl + '/standar_pemeliharaan/' + id, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                console.log(response);
                getStandart(1);
            })
            .catch(error => {
                console.error(error);
            });
    }

    async function searchStandart(keyword) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        return axios.get(baseUrl + '/standar_pemeliharaan', {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
            params: {
                search_value: keyword.toLowerCase(),
            },
        })
            .then(response => {
                dataStandart.setResponseData(response.data);
                console.log(dataStandart.responseData);
            })
            .catch(error => {
                console.error(error);
            });
    }


    onMounted(() => {
    //     // Mengambil elemen button (icon SVG) dan popover
    //     const buttons = document.querySelectorAll('.btnPopOver');
    //     const popover = document.getElementById('myPopover');

    //     const btnStrain = document.getElementById('btnStrain');
    //     const popoverStrain = document.getElementById('myPopoverStrain');

    //     // Menampilkan atau menyembunyikan popover saat button diklik
    //     buttons.forEach(button => {
    //         button.addEventListener('click', function(event) {
    //             if (popover.style.display === 'block') {
    //                 popover.style.display = 'none';
    //             } else {
    //                 popover.style.display = 'block';
    //             }
    //             event.stopPropagation(); // Mencegah event bubbling
    //         });
    //     });

    //     btnStrain.addEventListener('click', function(event) {
    //             if (popoverStrain.style.display === 'block') {
    //             popoverStrain.style.display = 'none';
    //             } else {
    //             popoverStrain.style.display = 'block';
    //             }
    //             event.stopPropagation(); // Mencegah event bubbling
    //         });

    //     // Menutup popover saat klik di luar popover
    //     document.addEventListener('click', function(event) {
    //         if (!popover.contains(event.target)) {
    //             popover.style.display = 'none';
    //         }
    //         if (!popoverStrain.contains(event.target)) {
    //             popoverStrain.style.display = 'none';
    //         }
    //     });
    });
    
    
</script>