<template>
    <HeaderItem />
     <div class="body flex-grow-1 px-3">
        <div class="container-lg">
            <!-- /.row-->
            <div class="card mb-4 ps-2 pt-2">
            <div class="row">
                <div class="col-lg-12 p-4">
                <h4 class="mb-3">Master Data <span class="text-secondary">> Validasi Data</span></h4>
                <p class="w-50">Lorem ipsum dolor sit amet consectetur. Elementum donec gravida mauris ipsum rhoncus nec tempor venenatis tellus.</p>
                <div class="mt-4 mb-4">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path d="M20 10L17.56 7.22004L17.9 3.54004L14.29 2.72004L12.4 -0.459961L9 1.00004L5.6 -0.459961L3.71 2.72004L0.0999999 3.53004L0.44 7.21004L-2 10L0.44 12.78L0.0999999 16.47L3.71 17.29L5.6 20.47L9 19L12.4 20.46L14.29 17.28L17.9 16.46L17.56 12.78L20 10ZM7 15L3 11L4.41 9.59004L7 12.17L13.59 5.58004L15 7.00004L7 15Z" fill="#0FA958"/>
                    </svg>
                    Setujui
                </span>
                <span class="ms-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 9.75C17.5 14.5826 13.5826 18.5 8.75 18.5C3.91738 18.5 0 14.5826 0 9.75C0 4.91738 3.91738 1 8.75 1C13.5826 1 17.5 4.91738 17.5 9.75ZM5.34713 13.1529C5.26511 13.0708 5.21903 12.9596 5.21903 12.8436C5.21903 12.7276 5.26511 12.6163 5.34713 12.5343L8.13138 9.75L5.34713 6.96575C5.26743 6.88324 5.22333 6.77272 5.22433 6.65801C5.22533 6.5433 5.27134 6.43357 5.35245 6.35245C5.43357 6.27134 5.5433 6.22533 5.65801 6.22433C5.77272 6.22333 5.88324 6.26743 5.96575 6.34713L8.75 9.13138L11.5343 6.34713C11.6168 6.26743 11.7273 6.22333 11.842 6.22433C11.9567 6.22533 12.0664 6.27134 12.1475 6.35245C12.2287 6.43357 12.2747 6.5433 12.2757 6.65801C12.2767 6.77272 12.2326 6.88324 12.1529 6.96575L9.36862 9.75L12.1529 12.5343C12.2326 12.6168 12.2767 12.7273 12.2757 12.842C12.2747 12.9567 12.2287 13.0664 12.1475 13.1475C12.0664 13.2287 11.9567 13.2747 11.842 13.2757C11.7273 13.2767 11.6168 13.2326 11.5343 13.1529L8.75 10.3686L5.96575 13.1529C5.88371 13.2349 5.77245 13.281 5.65644 13.281C5.54043 13.281 5.42917 13.2349 5.34713 13.1529Z" fill="#F31422"/>
                    </svg>
                    Ditolak
                </span>
                <span class="ms-3">
                    <router-link to="/kandang"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                        <path d="M0 6L13 6" stroke="#A3AAA6" stroke-width="2"/>
                        <path d="M6 0V12" stroke="#A3AAA6" stroke-width="2"/>
                        </svg>
                        Tambah Kandang
                    </router-link>
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
                        <button type="button" class="btn btn-success bg-button-rossa" data-toggle="modal" data-target="#exampleModal">
                        Select
                        </button>
                        <button type="button" class="btn btn-success bg-button-rossa ms-3" data-toggle="modal" data-target="#exampleModal">
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
                            <input @input="searchItem" v-model="search" type="text" class="form-control" placeholder="Search" aria-describedby="basic-addon1">
                        </div>
                       <a @click="clearSearch()" href="javascript:void(0)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z" fill="#0FA958"/>
                            </svg>
                       </a> 
                       
                    </div>
                </div>
                    <!-- Modal -->
                <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                    <div class="modal-dialog modal-fullscreen">
                       
                    </div>
                </div>
                <div class="table-responsive mt-3">
                    <table class="table pelaporan table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">No</th>
                        <th scope="col">ID Kandang</th>
                        <th scope="col">Anak Kandang</th>
                        <th scope="col">Nama Mandor</th>
                        <th scope="col">Status Laporan</th>
                        <th scope="col">Preview</th>
                        <th scope="col">Tanggal</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="dataPencatatan.responseData">
                        <tr v-for="(item, index) in dataPencatatan.responseData.data.items" :key="index">
                            <th scope="row">{{ item.id }}</th>
                            <td>{{ item.id_kandang }}</td>
                            <td>{{ item.nama_anak_kandang }}</td>
                            <td>{{ item.nama_mandor }}</td>
                            <td class="status-warning">
                                <span v-if="item.status == 'submitted'">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
                                        <path d="M11.8381 2.41663C17.2868 2.41663 21.7036 6.70708 21.7036 12C21.7036 17.2928 17.2868 21.5833 11.8381 21.5833C6.38943 21.5833 1.97266 17.2928 1.97266 12C1.97266 6.70708 6.38943 2.41663 11.8381 2.41663ZM11.8381 4.33329C9.74494 4.33329 7.73748 5.14103 6.25737 6.57881C4.77727 8.01659 3.94575 9.96663 3.94575 12C3.94575 14.0333 4.77727 15.9833 6.25737 17.4211C7.73748 18.8589 9.74494 19.6666 11.8381 19.6666C13.9313 19.6666 15.9388 18.8589 17.4189 17.4211C18.899 15.9833 19.7305 14.0333 19.7305 12C19.7305 9.96663 18.899 8.01659 17.4189 6.57881C15.9388 5.14103 13.9313 4.33329 11.8381 4.33329ZM11.8381 6.24996C12.0798 6.24999 12.313 6.33617 12.4936 6.49214C12.6741 6.64812 12.7895 6.86305 12.8178 7.09617L12.8247 7.20829V11.6032L15.4953 14.1974C15.6722 14.3699 15.7749 14.6013 15.7826 14.8447C15.7902 15.088 15.7022 15.3251 15.5364 15.5077C15.3707 15.6904 15.1396 15.8048 14.89 15.8279C14.6405 15.851 14.3913 15.781 14.193 15.632L14.1003 15.5525L11.1406 12.6775C10.9873 12.5284 10.8888 12.3344 10.8605 12.1255L10.8516 12V7.20829C10.8516 6.95413 10.9555 6.71037 11.1405 6.53065C11.3255 6.35093 11.5765 6.24996 11.8381 6.24996Z" fill="#D4780C"/>
                                    </svg>
                                    Menunggu persetujuan
                                </span>
                                <span v-else-if="item.status == 'accepted'">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
                                    <g clip-path="url(#clip0_209_1058)">
                                    <path d="M24 10L21.56 7.22004L21.9 3.54004L18.29 2.72004L16.4 -0.459961L13 1.00004L9.6 -0.459961L7.71 2.72004L4.1 3.53004L4.44 7.21004L2 10L4.44 12.78L4.1 16.47L7.71 17.29L9.6 20.47L13 19L16.4 20.46L18.29 17.28L21.9 16.46L21.56 12.78L24 10ZM11 15L7 11L8.41 9.59004L11 12.17L17.59 5.58004L19 7.00004L11 15Z" fill="#0FA958"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_209_1058">
                                        <rect width="28" height="24" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                    Disetujui
                                </span>
                                <span v-else>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 9.75C17.5 14.5826 13.5826 18.5 8.75 18.5C3.91738 18.5 0 14.5826 0 9.75C0 4.91738 3.91738 1 8.75 1C13.5826 1 17.5 4.91738 17.5 9.75ZM5.34713 13.1529C5.26511 13.0708 5.21903 12.9596 5.21903 12.8436C5.21903 12.7276 5.26511 12.6163 5.34713 12.5343L8.13138 9.75L5.34713 6.96575C5.26743 6.88324 5.22333 6.77272 5.22433 6.65801C5.22533 6.5433 5.27134 6.43357 5.35245 6.35245C5.43357 6.27134 5.5433 6.22533 5.65801 6.22433C5.77272 6.22333 5.88324 6.26743 5.96575 6.34713L8.75 9.13138L11.5343 6.34713C11.6168 6.26743 11.7273 6.22333 11.842 6.22433C11.9567 6.22533 12.0664 6.27134 12.1475 6.35245C12.2287 6.43357 12.2747 6.5433 12.2757 6.65801C12.2767 6.77272 12.2326 6.88324 12.1529 6.96575L9.36862 9.75L12.1529 12.5343C12.2326 12.6168 12.2767 12.7273 12.2757 12.842C12.2747 12.9567 12.2287 13.0664 12.1475 13.1475C12.0664 13.2287 11.9567 13.2747 11.842 13.2757C11.7273 13.2767 11.6168 13.2326 11.5343 13.1529L8.75 10.3686L5.96575 13.1529C5.88371 13.2349 5.77245 13.281 5.65644 13.281C5.54043 13.281 5.42917 13.2349 5.34713 13.1529Z" fill="#F31422"/>
                                    </svg>
                                    Ditolak
                                </span>
                              
                                <div id="myPopover" class="popover-content">
                                    <div>
                                        <p class="status-warning">Menunggu persetujuan</p>
                                        <button class="btn btn-success w-100 mb-2">Setuju</button> <br>
                                        <button class="btn btn-danger w-100">Tolak</button>
                                    </div>
                                </div>
                            </td>
                            <td style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#first-modal">
                                <a @click="getIdPencatatan(item.id)" href="javascript:void(0)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
                                    <path d="M1.615 18C1.155 18 0.771 17.846 0.463 17.538C0.154333 17.2293 0 16.845 0 16.385V1.615C0 1.155 0.154333 0.771 0.463 0.463C0.771 0.154333 1.155 0 1.615 0H9.5L14 4.5V16.385C14 16.845 13.846 17.229 13.538 17.537C13.2293 17.8457 12.845 18 12.385 18H1.615ZM9 5H13L9 1V5Z" fill="#0FA958"/>
                                    </svg>
                                </a>
                            </td>
                            <td>
                               {{ item.tanggal_submit }}
                            </td>
                        </tr>
                        </template>
                        <template v-else>
                            <tr>
                                <td colspan="8" class="text-center">Tidak ada data</td>
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

    <!-- <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-lg">
            <div class="modal-content p-3">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                
                
                </div>
                <div class="modal-footer">
                    <div v-if="apiError" class="alert alert-danger mt-3 mb-0">{{ apiError }}</div> 
                </div>
            </div>
        </div>
    </div> -->

    
        <!-- <h1>Working with Multiple Modals</h1>
        <div class="margin-lg">
            <button type="button" class="btn-first-modal btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#first-modal">
            Launch First Modal
            </button>
        </div>
        <div class="margin-lg">
            <button type="button" class="btn-second-modal btn btn-primary btn-lg">
            Launch second Modal
            </button>
        </div>
        <div class="margin-lg">
            <button type="button" class="btn-toggle-fade btn btn-lg">
            Toggle Fade
            </button>
        </div>
   -->

    <div class="modal" id="first-modal" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel2"></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div class="bg-light p-4">
                    <div class="title mb-5">
                    <h5 class="d-inline">ID kandang : {{ detailPencatatan.id_kandang }}</h5>
                    <div class="p-2 ms-3 bg-button-rossa d-inline rounded">{{ detailPencatatan.tanggal_submit }}</div>
                    </div>
                    <div class="mb-4">
                    <p>
                        <span class="color-text-rossa">Populasi ayam: <span class="text-secondary">{{ detailPencatatan.populasi_ayam }}</span></span>
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
                        Anak kandang : {{ detailPencatatan.nama_anak_kandang }}
                    </span>
                    <span class="ms-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                        <ellipse cx="11.5" cy="10.5" rx="11.5" ry="10.5" fill="#D9D9D9"/>
                        </svg>
                        Mandor : {{ detailPencatatan.nama_mandor }}
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
                        <template v-if="dataPencatatan.responseData">
                        <tr v-for="(item, index) in dataPencatatan.responseData.data.items" :key="index" class="text-center">
                            <td>null</td>
                            <td>{{ item.jumlah_mati }}</td>
                            <td>{{ item.jumlah_afkir }}</td>
                            <td>{{ item.jumlah_pindah }}</td>
                            <td>{{ item.jumlah_terima }}</td>

                            <td>{{ item.telur_utuh }}</td>
                            <td>{{ item.telur_bentes }}</td>

                            <td>{{ item.berat_utuh }}</td>
                            <td>{{ item.berat_bentes }}</td>

                            <td>24.2%</td>
                            <td>58gr</td>

                            <td>{{ item.id_jenis_pakan }}</td>
                            <td>{{ item.id_jenis_pakan }}</td>

                            <td>{{ item.id_treatment }}</td>
                            <td>
                                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#second-modal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <mask id="mask0_142_372" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="1" width="18" height="18">
                                        <path d="M2.91699 17.5H17.917" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M4.58398 11.1333V14.1667H7.63273L16.2507 5.545L13.2069 2.5L4.58398 11.1333Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                                    </mask>
                                    <g mask="url(#mask0_142_372)">
                                        <path d="M0 0H20V20H0V0Z" fill="#0FA958"/>
                                    </g>
                                    </svg>
                                </a>
                            </td>
                            <td class="status-warning">
                                <span v-if="item.status == 'submitted'">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
                                        <path d="M11.8381 2.41663C17.2868 2.41663 21.7036 6.70708 21.7036 12C21.7036 17.2928 17.2868 21.5833 11.8381 21.5833C6.38943 21.5833 1.97266 17.2928 1.97266 12C1.97266 6.70708 6.38943 2.41663 11.8381 2.41663ZM11.8381 4.33329C9.74494 4.33329 7.73748 5.14103 6.25737 6.57881C4.77727 8.01659 3.94575 9.96663 3.94575 12C3.94575 14.0333 4.77727 15.9833 6.25737 17.4211C7.73748 18.8589 9.74494 19.6666 11.8381 19.6666C13.9313 19.6666 15.9388 18.8589 17.4189 17.4211C18.899 15.9833 19.7305 14.0333 19.7305 12C19.7305 9.96663 18.899 8.01659 17.4189 6.57881C15.9388 5.14103 13.9313 4.33329 11.8381 4.33329ZM11.8381 6.24996C12.0798 6.24999 12.313 6.33617 12.4936 6.49214C12.6741 6.64812 12.7895 6.86305 12.8178 7.09617L12.8247 7.20829V11.6032L15.4953 14.1974C15.6722 14.3699 15.7749 14.6013 15.7826 14.8447C15.7902 15.088 15.7022 15.3251 15.5364 15.5077C15.3707 15.6904 15.1396 15.8048 14.89 15.8279C14.6405 15.851 14.3913 15.781 14.193 15.632L14.1003 15.5525L11.1406 12.6775C10.9873 12.5284 10.8888 12.3344 10.8605 12.1255L10.8516 12V7.20829C10.8516 6.95413 10.9555 6.71037 11.1405 6.53065C11.3255 6.35093 11.5765 6.24996 11.8381 6.24996Z" fill="#D4780C"/>
                                    </svg>
                                
                                </span>
                                <span v-else-if="item.status == 'accepted'">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
                                    <g clip-path="url(#clip0_209_1058)">
                                    <path d="M24 10L21.56 7.22004L21.9 3.54004L18.29 2.72004L16.4 -0.459961L13 1.00004L9.6 -0.459961L7.71 2.72004L4.1 3.53004L4.44 7.21004L2 10L4.44 12.78L4.1 16.47L7.71 17.29L9.6 20.47L13 19L16.4 20.46L18.29 17.28L21.9 16.46L21.56 12.78L24 10ZM11 15L7 11L8.41 9.59004L11 12.17L17.59 5.58004L19 7.00004L11 15Z" fill="#0FA958"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_209_1058">
                                        <rect width="28" height="24" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                    
                                </span>
                                <span v-else>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 9.75C17.5 14.5826 13.5826 18.5 8.75 18.5C3.91738 18.5 0 14.5826 0 9.75C0 4.91738 3.91738 1 8.75 1C13.5826 1 17.5 4.91738 17.5 9.75ZM5.34713 13.1529C5.26511 13.0708 5.21903 12.9596 5.21903 12.8436C5.21903 12.7276 5.26511 12.6163 5.34713 12.5343L8.13138 9.75L5.34713 6.96575C5.26743 6.88324 5.22333 6.77272 5.22433 6.65801C5.22533 6.5433 5.27134 6.43357 5.35245 6.35245C5.43357 6.27134 5.5433 6.22533 5.65801 6.22433C5.77272 6.22333 5.88324 6.26743 5.96575 6.34713L8.75 9.13138L11.5343 6.34713C11.6168 6.26743 11.7273 6.22333 11.842 6.22433C11.9567 6.22533 12.0664 6.27134 12.1475 6.35245C12.2287 6.43357 12.2747 6.5433 12.2757 6.65801C12.2767 6.77272 12.2326 6.88324 12.1529 6.96575L9.36862 9.75L12.1529 12.5343C12.2326 12.6168 12.2767 12.7273 12.2757 12.842C12.2747 12.9567 12.2287 13.0664 12.1475 13.1475C12.0664 13.2287 11.9567 13.2747 11.842 13.2757C11.7273 13.2767 11.6168 13.2326 11.5343 13.1529L8.75 10.3686L5.96575 13.1529C5.88371 13.2349 5.77245 13.281 5.65644 13.281C5.54043 13.281 5.42917 13.2349 5.34713 13.1529Z" fill="#F31422"/>
                                    </svg>
                                    
                                </span>
                            
                                <div id="myPopover" class="popover-content">
                                    <div>
                                        <p class="status-warning">Menunggu persetujuan</p>
                                        <button class="btn btn-success w-100 mb-2">Setuju</button> <br>
                                        <button class="btn btn-danger w-100">Tolak</button>
                                    </div>
                                </div>
                            </td>
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
                <!-- akhir table -->
                </div>
                <div class="modal-footer">
                <button @click="setuju(detailPencatatan.id)" type="button" class="btn btn-success bg-status-success">Setuju</button>
                <button @click="tolak(detailPencatatan.id)" type="button" class="btn btn-danger bg-status-danger">Tolak</button>
                <button @click="deletePencatatan(detailPencatatan.id)" type="button" class="btn btn-danger bg-status-danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#A3AAA6"/>
                    </svg>
                    Hapus
                </button>
                <!-- <a class="btn-second-modal within-first-modal btn btn-primary">
            Launch second Modal
                </a>
                <a class="btn-second-modal within-first-modal btn btn-primary">
            Launch second Modal
                </a>
                <a class="btn-second-modal within-first-modal btn btn-primary">
            Launch second Modal
                </a> -->
                
                </div>
            </div>
        </div>
    </div>

    <div class="modal" id="second-modal" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                   
                </div>
                <div class="modal-body">
                    This is the body of my second modal.
                </div>
                <div class="modal-footer">
                    
                </div>
            </div>
        </div>
    </div>
    

</template>

<script setup>
    import HeaderItem from '../components/HeaderItem.vue'
    import { pencatatanStore } from '@/stores';
    import { defineStore, storeToRefs } from 'pinia'
    import { onMounted, reactive, ref, computed } from 'vue';
    import axios from 'axios'

    const baseUrl = `${import.meta.env.VITE_API_URL}`;

    const dataPencatatan  = reactive(pencatatanStore());

    const detailPencatatan = reactive({
        id: '',
        id_kandang: '',
        id_mandor: '',
        id_anak_kandang: '',
        id_strain_ayam: '',
        jumlah_mati: '',
        jumlah_afkir: '',
        jumlah_pindah: '',
        id_kandang_tujuan: '',
        jumlah_terima: '',
        id_kandang_pengirim: '',
        telur_butuh: '',
        telur_bentes: '',
        berat_utuh: '',
        berat_bentes: '',
        id_treatment: '',
        id_jenis_pakan: '',
        catatan: '',
        populasi_ayam: '',
        tanggal_submit: '',
        nama_anak_kandang: '',
        nama_mandor: '',
    });
    let search = ref("");
    
    const currentPage = ref(1);
    const pageSize = ref(10);
    const totalItems = dataPencatatan.responseData ? dataPencatatan.responseData.data.total_record : 0;

    const onClickHandler = (page) => {
        getPencatatan(page);
    };

    function clearSearch() {
        search.value = '';
        getPencatatan(1);
    }

    function searchItem() {
        console.log(search.value);
        searchPencatatan(search.value);
    }

    function closeModal() {
        const closeElements = document.querySelectorAll('.btn-close');

        closeElements.forEach((closeElement) => {
            closeElement.click();
        });
    }

    async function getPencatatan(page_number) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/pencatatan', {
            params: {
                page_number: page_number, 
                page_size: pageSize.value, 
            },
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                dataPencatatan.setResponseData(response.data);
                console.log(dataPencatatan);
            })
            .catch(error => {
                console.error(error);
            });
    }

    async function getIdPencatatan(id) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/pencatatan/' + id, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                detailPencatatan.id = response.data.data.id;
                detailPencatatan.id_kandang = response.data.data.id_kandang;
                detailPencatatan.id_mandor = response.data.data.id_mandor;
                detailPencatatan.id_anak_kandang = response.data.data.id_anak_kandang;
                detailPencatatan.id_strain_ayam = response.data.data.id_strain_ayam;
                detailPencatatan.jumlah_mati = response.data.data.jumlah_mati;
                detailPencatatan.jumlah_afkir = response.data.data.jumlah_afkir;
                detailPencatatan.jumlah_pindah = response.data.data.jumlah_pindah;
                detailPencatatan.id_kandang_tujuan = response.data.data.id_kandang_tujuan;
                detailPencatatan.jumlah_terima = response.data.data.jumlah_terima;
                detailPencatatan.id_kandang_pengirim = response.data.data.id_kandang_pengirim;
                detailPencatatan.telur_butuh = response.data.data.telur_butuh;
                detailPencatatan.telur_bentes = response.data.data.telur_bentes;
                detailPencatatan.berat_utuh = response.data.data.berat_utuh;
                detailPencatatan.berat_bentes = response.data.data.berat_bentes;
                detailPencatatan.id_treatment = response.data.data.id_treatment;
                detailPencatatan.id_jenis_pakan = response.data.data.id_jenis_pakan;
                detailPencatatan.catatan = response.data.data.catatan;
                detailPencatatan.populasi_ayam = response.data.total_populasi;
                detailPencatatan.tanggal_submit = response.data.data.tanggal_submit;
                detailPencatatan.nama_anak_kandang = response.data.data.nama_anak_kandang;
                detailPencatatan.nama_mandor = response.data.data.nama_mandor;
                // console.log("Detail Pencatatan : ", detailPencatatan);
                console.log("Detail Pencatatan : ", response);
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

    async function deletePencatatan(id) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.delete(baseUrl + '/pencatatan/' + id, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                console.log(response);
                getPencatatan(1);
                getIdPencatatan(id);
            })
            .catch(error => {
                console.error(error);
            });
    }

    async function setuju(id) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        return axios.put(baseUrl + '/pencatatan/updatestatus/' + id, {
            status: 'accepted',
        }, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                console.log(response);
                getPencatatan(1);
                getIdPencatatan(id);
            })
            .catch(error => {
                console.error(error);
            });
    }

    async function tolak(id) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        return axios.put(baseUrl + '/pencatatan/updatestatus/' + id, {
            status: 'rejected',
        }, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                console.log(response);
                getPencatatan(1);
                getIdPencatatan(id);
            })
            .catch(error => {
                console.error(error);
            });
    }

    onMounted(() => {
        getPencatatan(1);

        // Mengambil elemen button (icon SVG) dan popover
        // const buttons = document.querySelectorAll('.btnPersetujuan');
        // const popover = document.getElementById('myPopover');

        // // Menampilkan atau menyembunyikan popover saat button diklik
        // buttons.forEach(button => {
        //     button.addEventListener('click', function(event) {
        //         if (popover.style.display === 'block') {
        //             popover.style.display = 'none';
        //         } else {
        //             popover.style.display = 'block';
        //         }
        //         event.stopPropagation(); // Mencegah event bubbling
        //     });
        // });

        // Menutup popover saat klik di luar popover
        // document.addEventListener('click', function(event) {
        //     if (!popover.contains(event.target)) {
        //         popover.style.display = 'none';
        //     }
        // });

            var within_first_modal = false;
            $('.btn-second-modal').on('click', function() {
            if ($(this).hasClass('within-first-modal')) {
                within_first_modal = true;
                $('#first-modal').modal('hide');
            }
            $('#second-modal').modal('show');
            });

            $('.btn-second-modal-close').on('click', function() {
            $('#second-modal').modal('hide');
            if (within_first_modal) {
                $('#first-modal').modal('show');
                within_first_modal = false;
            }
            });

            $('.btn-toggle-fade').on('click', function() {
            if ($('.modal').hasClass('fade')) {
                $('.modal').removeClass('fade');
                $(this).removeClass('btn-success');
            } else {
                $('.modal').addClass('fade');
                $(this).addClass('btn-success');
            }
            });
    });

     
</script>

<style scoped>
.margin-lg {
  margin: 15px;
}
    
</style>