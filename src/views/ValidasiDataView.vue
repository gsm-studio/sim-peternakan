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
                        <!-- <button type="button" class="btn btn-success bg-button-rossa" data-toggle="modal" data-target="#exampleModal">
                        Select
                        </button> -->
                        <button data-coreui-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" type="button" class="dropdown-toggle ms-3 btn btn-success bg-button-rossa">
                        Filter
                        </button>
                        <div class="dropdown-menu dropdown-menu-start p-3 shadow">
                            <label class="form-label">Pilih Arsip</label>
                            <select v-model="is_archived" @change="getPencatatan(1, id_mandor, id_kandang, id_anak_Kandang, id_strain_ayam, id_treatment, id_jenis_pakan, $event.target.value)" class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                                <option value="-1">Semua Laporan</option>
                                <option value="0">Tidak</option>
                                <option value="1">Ya</option>
                            </select>
                            <label class="form-label">Pilih Filter</label> 
                            <select v-model="id_mandor" @change="getPencatatan(1, $event.target.value, id_kandang, id_anak_Kandang, id_strain_ayam, id_treatment, id_jenis_pakan, is_archived)" class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                                <option value="0" selected> 
                                    Semua Mandor 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                    <path d="M1 1L5.5 7L10 1" stroke="#0FA958" stroke-width="2"/>
                                    </svg>
                                </option>
                                <template v-if="dataKaryawan.responseData && dataKaryawan.responseData.data.items.length > 0">
                                    <option v-for="item in dataKaryawan.responseData.data.items" :key="item.id" :value="item.id">
                                        {{ item.nama }}
                                    </option>
                                </template>
                                <template v-else>
                                    <option>Belum ada mandor</option>
                                </template>
                            </select> 
                            <select v-model="id_kandang" @change="getPencatatan(1, id_mandor, $event.target.value, id_anak_Kandang, id_strain_ayam, id_treatment, id_jenis_pakan, is_archived)" class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                                <option value="0" selected> 
                                    Semua Kandang 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                    <path d="M1 1L5.5 7L10 1" stroke="#0FA958" stroke-width="2"/>
                                    </svg>
                                </option>
                                <template v-if="dataKandang.responseData && dataKandang.responseData.data.items.length > 0">
                                    <option v-for="item in dataKandang.responseData.data.items" :key="item.id" :value="item.id">
                                        {{ item.nama }}
                                    </option>
                                </template>
                                <template v-else>
                                    <option>Belum ada Kandang</option>
                                </template>
                            </select> 
                            <select v-model="id_anak_kandang" @change="getPencatatan(1, id_mandor, id_kandang, $event.target.value, id_strain_ayam, id_treatment, id_jenis_pakan, is_archived)" class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                                <option value="0" selected> 
                                    Semua Anak Kandang 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                    <path d="M1 1L5.5 7L10 1" stroke="#0FA958" stroke-width="2"/>
                                    </svg>
                                </option>
                                <template v-if="dataKaryawan.responseData && dataKaryawan.responseData.data.items.length > 0">
                                    <option v-for="item in dataKaryawan.responseData.data.items" :key="item.id" :value="item.id">
                                        {{ item.nama }}
                                    </option>
                                </template>
                                <template v-else>
                                    <option>Belum ada Anak Kandang</option>
                                </template>
                            </select> 
                            <select v-model="id_strain_ayam" @change="getPencatatan(1, id_mandor, id_kandang, id_anak_kandang, $event.target.value, id_treatment, id_jenis_pakan, is_archived)" class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                                <option value="0" selected> 
                                    Semua Strain Ayam 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                    <path d="M1 1L5.5 7L10 1" stroke="#0FA958" stroke-width="2"/>
                                    </svg>
                                </option>
                                <template v-if="dataStrain.responseData && dataStrain.responseData.data.items.length > 0">
                                    <option v-for="item in dataStrain.responseData.data.items" :key="item.id" :value="item.id">
                                        {{ item.nama }}
                                    </option>
                                </template>
                                <template v-else>
                                    <option>Belum ada Strain Ayam</option>
                                </template>
                            </select>
                            <select v-model="id_treatment" @change="getPencatatan(1, id_mandor, id_kandang, id_anak_kandang, id_strain_ayam, $event.target.value, id_jenis_pakan, is_archived)" class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                                <option value="0" selected> 
                                    Semua Treatment 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                    <path d="M1 1L5.5 7L10 1" stroke="#0FA958" stroke-width="2"/>
                                    </svg>
                                </option>
                                <template v-if="dataTreatment.responseData && dataTreatment.responseData.data.items.length > 0">
                                    <option v-for="item in dataTreatment.responseData.data.items" :key="item.id" :value="item.id">
                                        {{ item.nama }}
                                    </option>
                                </template>
                                <template v-else>
                                    <option>Belum ada Treatment</option>
                                </template>
                            </select>
                            <select v-model="id_jenis_pakan" @change="getPencatatan(1, id_mandor, id_kandang, id_anak_kandang, id_strain_ayam, id_treatment, $event.target.value, is_archived)" class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                                <option value="0" selected> 
                                    Semua Jenis Pakan 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                    <path d="M1 1L5.5 7L10 1" stroke="#0FA958" stroke-width="2"/>
                                    </svg>
                                </option>
                                <template v-if="dataPakan.responseData && dataPakan.responseData.data.items.length > 0">
                                    <option v-for="item in dataPakan.responseData.data.items" :key="item.id" :value="item.id">
                                        {{ item.nama }}
                                    </option>
                                </template>
                                <template v-else>
                                    <option>Belum ada Pakan</option>
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
                            <input @input="searchItem" v-model="search" type="text" class="form-control" placeholder="Search" aria-describedby="basic-addon1">
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
                            <!-- <th>No</th> -->
                            <!-- <th scope="col">ID Kandang</th> -->
                            <th scope="col">Nama Kandang</th>
                            <th scope="col">Anak Kandang</th>
                            <th scope="col">Nama Mandor</th>
                            <th scope="col">Status Laporan</th>
                            <th scope="col">Preview</th>
                            <th scope="col">Tanggal</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="isLoadingValidasiData">
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
                            <template v-if="dataPencatatan.responseData && dataPencatatan.responseData.data.items.length > 0">
                            <tr v-for="(item, index) in dataPencatatan.responseData.data.items" :key="index">
                                <!-- <td>{{ item.id }}</td> -->
                                <!-- <td>{{ item.id_kandang }}</td> -->
                                <td>{{ item.kandang.nama }}</td>
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
                                <td class="text-center" @click="getIdPencatatan(item.id)" style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#first-modal">
                                    <a href="javascript:void(0)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
                                        <path d="M1.615 18C1.155 18 0.771 17.846 0.463 17.538C0.154333 17.2293 0 16.845 0 16.385V1.615C0 1.155 0.154333 0.771 0.463 0.463C0.771 0.154333 1.155 0 1.615 0H9.5L14 4.5V16.385C14 16.845 13.846 17.229 13.538 17.537C13.2293 17.8457 12.845 18 12.385 18H1.615ZM9 5H13L9 1V5Z" fill="#0FA958"/>
                                        </svg>
                                    </a>
                                </td>
                                <td>
                                {{ formatTanggalSubmit(item.tanggal_submit) }}
                                </td>
                            </tr>
                            </template>
                            <template v-else>
                                <tr>
                                    <td colspan="8" class="text-center">Tidak ada data</td>
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

    <div class="modal fade" id="first-modal" data-bs-backdrop="static" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-fullscreen modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel2"></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div class="bg-light p-4">
                    <div class="title mb-5">
                    <h5 class="d-inline">ID kandang : {{ detailPencatatan.id_kandang }} / {{ detailPencatatan.nama_kandang }}</h5>
                    <div class="p-2 ms-3 bg-button-rossa d-inline rounded">{{ dateSubmitPencatatan }}</div>
                    </div>
                    <div class="mb-4">
                    <p>
                        <span class="color-text-rossa">Populasi ayam: <span class="text-secondary">{{ detailPencatatan.populasi_ayam }}</span></span>
                        <span class="ms-4 color-text-rossa">FC: <span class="text-secondary">{{ detailStandart.nilai_fc }}</span></span>
                        <span class="ms-4 color-text-rossa">FI: <span class="text-secondary">{{ detailStandart.nilai_fi }}</span></span>
                        <span class="ms-4 color-text-rossa">Egg mass: <span class="text-secondary">{{ detailStandart.egg_mass }}</span></span>
                        <span class="ms-4 color-text-rossa">Strain: <span class="text-secondary">{{ detailStrain.nama }}</span></span>
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
                        
                            <th colspan="2" scope="col">Usia</th>
                            <th colspan="4" scope="col">Populasi</th>
                            <th colspan="2" scope="col">Produksi Telur</th>
                            <th colspan="2" scope="col">Berat Telur</th>
                       
                            <th colspan="2" scope="col">Pakan</th>
                            <th rowspan="2" scope="col">Treatment</th>
                            <th rowspan="2" scope="col">Edit</th>
                            <th rowspan="2" scope="col">Status</th>
                        </tr>
                        <tr>
                        
                        <th scope="col">Hari</th>
                        <th scope="col">Mgg</th>

                        <th scope="col">Mati</th>
                        <th scope="col">Afkir</th>
                        <th scope="col">Pindah</th>
                        <th scope="col">Terima</th>

                        <th scope="col">Telur utuh</th>
                        <th scope="col">Telur bentes</th>

                        <th scope="col">Telur utuh</th>
                        <th scope="col">Telur bentes</th>

                        <th scope="col">Jumlah (kg)</th>
                        <th scope="col">Jenis pakan</th>

                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="!isLoading">
                            <template v-if="detailPencatatan">
                                <tr class="text-center">
                                    <td>{{ detailPencatatan.usia_hari }}</td>
                                    <td>{{ detailPencatatan.usia_mgg }}</td>

                                    <td>{{ detailPencatatan.jumlah_mati }}</td>
                                    <td>{{ detailPencatatan.jumlah_afkir }}</td>
                                    <td>{{ detailPencatatan.jumlah_pindah }}</td>
                                    <td>{{ detailPencatatan.jumlah_terima }}</td>

                                    <td>{{ detailPencatatan.telur_utuh }}</td>
                                    <td>{{ detailPencatatan.telur_bentes }}</td>

                                    <td>{{ detailPencatatan.berat_utuh }}</td>
                                    <td>{{ detailPencatatan.berat_bentes }}</td>

                                    <td>{{ detailPencatatan.berat_pakan }}</td>
                                    <td>{{ detailPencatatan.nama_jenis_pakan }}</td>

                                    <td>{{ detailPencatatan.nama_treatment }}</td>
                                    <td>
                                        <a @click="clickSecondModal()" href="javascript:void(0)" class="btn-second-modal within-first-modal">
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
                                        <span v-if="detailPencatatan.status == 'submitted'">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
                                                <path d="M11.8381 2.41663C17.2868 2.41663 21.7036 6.70708 21.7036 12C21.7036 17.2928 17.2868 21.5833 11.8381 21.5833C6.38943 21.5833 1.97266 17.2928 1.97266 12C1.97266 6.70708 6.38943 2.41663 11.8381 2.41663ZM11.8381 4.33329C9.74494 4.33329 7.73748 5.14103 6.25737 6.57881C4.77727 8.01659 3.94575 9.96663 3.94575 12C3.94575 14.0333 4.77727 15.9833 6.25737 17.4211C7.73748 18.8589 9.74494 19.6666 11.8381 19.6666C13.9313 19.6666 15.9388 18.8589 17.4189 17.4211C18.899 15.9833 19.7305 14.0333 19.7305 12C19.7305 9.96663 18.899 8.01659 17.4189 6.57881C15.9388 5.14103 13.9313 4.33329 11.8381 4.33329ZM11.8381 6.24996C12.0798 6.24999 12.313 6.33617 12.4936 6.49214C12.6741 6.64812 12.7895 6.86305 12.8178 7.09617L12.8247 7.20829V11.6032L15.4953 14.1974C15.6722 14.3699 15.7749 14.6013 15.7826 14.8447C15.7902 15.088 15.7022 15.3251 15.5364 15.5077C15.3707 15.6904 15.1396 15.8048 14.89 15.8279C14.6405 15.851 14.3913 15.781 14.193 15.632L14.1003 15.5525L11.1406 12.6775C10.9873 12.5284 10.8888 12.3344 10.8605 12.1255L10.8516 12V7.20829C10.8516 6.95413 10.9555 6.71037 11.1405 6.53065C11.3255 6.35093 11.5765 6.24996 11.8381 6.24996Z" fill="#D4780C"/>
                                            </svg>
                                        
                                        </span>
                                        <span v-else-if="detailPencatatan.status == 'accepted'">
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
                        </template>
                        <template v-else>
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
                
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="second-modal" data-bs-backdrop="static" role="dialog">
        <div class="modal-dialog modal-lg shadow-lg modal-dialog-scrollable rounded" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button @click="clickCloseSecondModal" type="button" class="btn-close btn-second-modal-close"></button>
                   
                </div>
                <div class="modal-body">
                    <Form
                        @submit="nextStep"
                        :validation-schema="currentSchema"
                        keep-values
                        v-slot="{ handleSubmit, values }"
                        >
                        <template v-if="currentStep === 0"> 
                            <!-- <label for="recipient-name" class="col-form-label">Recipient:</label>
                            <input type="text" class="form-control" id="recipient-name"> -->
                            <div class="mb-4 d-flex justify-content-between">
                                <button class="btn btn-success">{{ dateSubmitPencatatan }}</button>
                                <h6 class="modal-title" id="exampleModalLabel">Populasi Ayam : {{ detailPencatatan.populasi_ayam }} ekor</h6>
                            </div>
                            <div class="mb-3"> 
                                <label for="tanggal_submit" class="form-label">Tanggal Submit</label>
                                <Field v-model="tanggal_submit" name="tanggal_submit" class="form-control text-center" type="date" placeholder="Tanggal Submit" />
                                <ErrorMessage class="text-danger" name="tanggal_submit" />
                            </div>
                            <div class="mb-3">
                                <label for="nama_kandang" class="form-label">Nama Kandang</label>
                                <Field v-model="detailPencatatan.id_kandang" id="nama_kandang" as="select" name="nama_kandang" class="form-control text-center">
                                    <option :value="detailPencatatan.id_kandang">{{ detailPencatatan.nama_kandang }}</option>
                                </Field>
                                <ErrorMessage class="text-danger" name="nama_kandang" />
                            </div>
                            <!-- {{ values }} -->
                            <!-- <Field v-model="detailPencatatan.id_anak_kandang" name="id_anak_kandang" class="form-control text-center" type="hidden"/> -->
                            <div class="mb-3">
                                <label for="id_anak_kandang" class="form-label">Nama Anak Kandang</label>
                                <Field v-model="detailPencatatan.id_anak_kandang" id="id_anak_kandang" as="select" name="id_anak_kandang" class="form-control text-center">
                                    <template v-if="dataKaryawan.responseData && dataKaryawan.responseData.data.items.length > 0">
                                        <option v-for="item in dataKaryawan.responseData.data.items" :key="item.id" :value="item.id">
                                            {{ item.nama }}
                                        </option>
                                    </template>
                                    <template v-else>
                                        <option>Belum ada anak kandang</option>
                                    </template>
                                </Field>
                                <ErrorMessage class="text-danger" name="id_anak_kandang" />
                            </div>
                            <div class="mb-3">
                                <label for="nama_mandor" class="form-label">Nama Mandor</label>
                                <Field v-model="detailPencatatan.id_mandor" id="nama_mandor" as="select" name="nama_mandor" class="form-control text-center">
                                    <template v-if="dataKaryawan.responseData && dataKaryawan.responseData.data.items.length > 0">
                                        <option v-for="item in dataKaryawan.responseData.data.items" :key="item.id" :value="item.id">
                                            {{ item.nama }}
                                        </option>
                                    </template>
                                    <template v-else>
                                        <option>Belum ada mandor</option>
                                    </template>
                                </Field>
                                <ErrorMessage class="text-danger" name="nama_mandor" />
                            </div>
                            <div class="mb-3">
                                <label for="usia_hari" class="form-label">Usia Hari</label>
                                <Field v-model="detailPencatatan.usia_hari" id="usia_hari" name="usia_hari" class="form-control text-center" type="number" autofocus />
                                <ErrorMessage class="text-danger" name="usia_hari" />
                            </div>
                            <div class="mb-3">
                                <label for="usia_mgg" class="form-label">Usia Minggu</label>
                                <Field v-model="detailPencatatan.usia_mgg" id="usia_mgg" name="usia_mgg" class="form-control text-center" type="number" />
                                <ErrorMessage class="text-danger" name="usia_mgg" />
                            </div>
                            <div class="mb-3">
                                <label for="strain_ayam" class="form-label">Strain Ayam</label>
                                <Field v-model="detailPencatatan.id_strain_ayam" id="strain_ayam" as="select" name="strain_ayam" class="form-control text-center">
                                    <template v-if="dataStrain.responseData">
                                        <option v-for="item in dataStrain.responseData.data.items" :key="item.id" :value="item.id" disabled>{{ item.nama }}</option>
                                    </template>
                                </Field>
                                <ErrorMessage class="text-danger" name="strain_ayam" />
                            </div>
                        </template>

                        <template v-if="currentStep === 1">
                            <div class="row mb-3 p-2 bg-light rounded">
                                <div class="col-md-4">
                                    <p>ID Kandang : {{ detailPencatatan.id_kandang }} / {{ detailPencatatan.nama_kandang }}</p>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M4.90517 13.8423C5.57808 13.3578 6.29217 12.9749 7.04742 12.6936C7.80214 12.4118 8.61967 12.2708 9.5 12.2708C10.3798 12.2708 11.1973 12.4118 11.9526 12.6936C12.7073 12.9749 13.4214 13.3575 14.0948 13.8415C14.6173 13.3011 15.0377 12.6624 15.356 11.9257C15.6742 11.1878 15.8333 10.3793 15.8333 9.5C15.8333 7.74514 15.2166 6.25074 13.9832 5.01679C12.7498 3.78285 11.2554 3.16614 9.5 3.16667C7.74514 3.16667 6.25074 3.78338 5.01679 5.01679C3.78285 6.25021 3.16614 7.74461 3.16667 9.5C3.16667 10.3798 3.32579 11.1881 3.64404 11.9249C3.96229 12.6622 4.38267 13.3013 4.90517 13.8423ZM9.5 9.89583C8.83342 9.89583 8.27081 9.66678 7.81217 9.20867C7.35406 8.75003 7.125 8.18742 7.125 7.52083C7.125 6.85425 7.35406 6.29164 7.81217 5.833C8.27081 5.37489 8.83342 5.14583 9.5 5.14583C10.1666 5.14583 10.7292 5.37489 11.1878 5.833C11.6459 6.29164 11.875 6.85425 11.875 7.52083C11.875 8.18742 11.6459 8.75003 11.1878 9.20867C10.7292 9.66678 10.1666 9.89583 9.5 9.89583ZM9.5 16.625C8.50619 16.625 7.57599 16.44 6.70938 16.07C5.84276 15.7006 5.08857 15.195 4.44679 14.5532C3.80554 13.9114 3.29993 13.1572 2.92996 12.2906C2.55999 11.424 2.375 10.4938 2.375 9.5C2.375 8.50619 2.55999 7.57599 2.92996 6.70938C3.2994 5.84276 3.80501 5.08857 4.44679 4.44679C5.08857 3.80554 5.84276 3.29993 6.70938 2.92996C7.57599 2.55999 8.50619 2.375 9.5 2.375C10.4938 2.375 11.424 2.55999 12.2906 2.92996C13.1572 3.2994 13.9114 3.80501 14.5532 4.44679C15.1945 5.08857 15.7001 5.84276 16.07 6.70938C16.44 7.57599 16.625 8.50619 16.625 9.5C16.625 10.4938 16.44 11.424 16.07 12.2906C15.7006 13.1572 15.195 13.9114 14.5532 14.5532C13.9114 15.1945 13.1572 15.7001 12.2906 16.07C11.424 16.44 10.4938 16.625 9.5 16.625Z" fill="#0FA958"/>
                                        </svg>
                                        Anak Kandang : {{ detailPencatatan.nama_anak_kandang }}
                                    </p>
                                </div>
                                <div class="col-md-4">
                                    <div class="bg-grey-rossa rounded p-2 mb-2">{{ dateSubmitPencatatan }}</div>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M4.90517 13.8423C5.57808 13.3578 6.29217 12.9749 7.04742 12.6936C7.80214 12.4118 8.61967 12.2708 9.5 12.2708C10.3798 12.2708 11.1973 12.4118 11.9526 12.6936C12.7073 12.9749 13.4214 13.3575 14.0948 13.8415C14.6173 13.3011 15.0377 12.6624 15.356 11.9257C15.6742 11.1878 15.8333 10.3793 15.8333 9.5C15.8333 7.74514 15.2166 6.25074 13.9832 5.01679C12.7498 3.78285 11.2554 3.16614 9.5 3.16667C7.74514 3.16667 6.25074 3.78338 5.01679 5.01679C3.78285 6.25021 3.16614 7.74461 3.16667 9.5C3.16667 10.3798 3.32579 11.1881 3.64404 11.9249C3.96229 12.6622 4.38267 13.3013 4.90517 13.8423ZM9.5 9.89583C8.83342 9.89583 8.27081 9.66678 7.81217 9.20867C7.35406 8.75003 7.125 8.18742 7.125 7.52083C7.125 6.85425 7.35406 6.29164 7.81217 5.833C8.27081 5.37489 8.83342 5.14583 9.5 5.14583C10.1666 5.14583 10.7292 5.37489 11.1878 5.833C11.6459 6.29164 11.875 6.85425 11.875 7.52083C11.875 8.18742 11.6459 8.75003 11.1878 9.20867C10.7292 9.66678 10.1666 9.89583 9.5 9.89583ZM9.5 16.625C8.50619 16.625 7.57599 16.44 6.70938 16.07C5.84276 15.7006 5.08857 15.195 4.44679 14.5532C3.80554 13.9114 3.29993 13.1572 2.92996 12.2906C2.55999 11.424 2.375 10.4938 2.375 9.5C2.375 8.50619 2.55999 7.57599 2.92996 6.70938C3.2994 5.84276 3.80501 5.08857 4.44679 4.44679C5.08857 3.80554 5.84276 3.29993 6.70938 2.92996C7.57599 2.55999 8.50619 2.375 9.5 2.375C10.4938 2.375 11.424 2.55999 12.2906 2.92996C13.1572 3.2994 13.9114 3.80501 14.5532 4.44679C15.1945 5.08857 15.7001 5.84276 16.07 6.70938C16.44 7.57599 16.625 8.50619 16.625 9.5C16.625 10.4938 16.44 11.424 16.07 12.2906C15.7006 13.1572 15.195 13.9114 14.5532 14.5532C13.9114 15.1945 13.1572 15.7001 12.2906 16.07C11.424 16.44 10.4938 16.625 9.5 16.625Z" fill="#0FA958"/>
                                        </svg>
                                        Nama Mandor : {{ detailPencatatan.nama_mandor }}
                                    </p>
                                </div>
                                <div class="col-md-4">
                                    <p><span class="color-text-rossa">Populasi Ayam:</span> {{ detailPencatatan.populasi_ayam }} ekor</p>
                                    <p><span class="color-text-rossa">Strain:</span> {{ detailPencatatan.nama_strain }}</p>
                                </div>
                            </div>
                            <h6 class="mb-3">Ayam</h6>

                            <div class="mb-3">
                                <label for="mati" class="form-label">Mati</label>
                                <Field v-model="detailPencatatan.jumlah_mati" name="mati" class="form-control text-center" type="number" placeholder="Mati" />
                                <ErrorMessage class="text-danger" name="mati" />
                            </div>

                            <div class="mb-3">
                                <label for="afkir" class="form-label">Afkir</label>
                                <Field v-model="detailPencatatan.jumlah_afkir" name="afkir" class="form-control text-center" type="number" placeholder="Afkir" />
                                <ErrorMessage class="text-danger" name="afkir" />
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="mb-3">
                                    <label for="jumlah_pindah" class="form-label">Jumlah Pindah</label>
                                    <Field v-model="detailPencatatan.jumlah_pindah" name="jumlah_pindah" class="form-control text-center" type="number" placeholder="Jumlah Pindah" />
                                    <ErrorMessage class="text-danger" name="jumlah_pindah" />
                                </div>
                                </div>
                                <div class="col">
                                    <div class="mb-3">
                                        <label></label>
                                        <Field v-model="detailPencatatan.id_kandang_tujuan" @change="getKandangPenerima($event.target.value)" as="select" name="id_kandang_tujuan" class="form-control text-center">
                                            <template v-if="dataKandang.responseData">
                                                <option value="" disabled>Pilih Nama Kandang Penerima</option>
                                                <option v-for="item in dataKandang.responseData.data.items" :key="item.id" :value="item.id">{{ item.nama }}</option>
                                            </template>
                                        </Field>
                                        <ErrorMessage class="text-danger" name="id_kandang_tujuan" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="mb-3">
                                        <label for="mati" class="form-label">Jumlah Terima</label>
                                        <Field v-model="detailPencatatan.jumlah_terima" name="jumlah_terima" class="form-control text-center" type="number" placeholder="Jumlah Terima" />
                                        <ErrorMessage class="text-danger" name="jumlah_terima" />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="mb-3">
                                        <label></label>
                                        <Field v-model="detailPencatatan.id_kandang_pengirim" @change="getKandangPengirim($event.target.value)" as="select" name="id_kandang_pengirim" class="form-control text-center">
                                            <template v-if="dataKandang.responseData">
                                                <option value="" disabled>Pilih Nama Kandang Pengirim</option>
                                                <option v-for="item in dataKandang.responseData.data.items" :key="item.id" :value="item.id">{{ item.nama }}</option>
                                            </template>
                                        </Field>
                                        <ErrorMessage class="text-danger" name="id_kandang_pengirim" />
                                    </div>
                                </div>
                            </div>
                        </template>

                        <template v-if="currentStep === 2">
                            <div class="row mb-3 p-2 bg-light rounded">
                                <div class="col-md-4">
                                    <p>ID Kandang : {{ detailPencatatan.id_kandang }} / {{ detailPencatatan.nama_kandang }}</p>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M4.90517 13.8423C5.57808 13.3578 6.29217 12.9749 7.04742 12.6936C7.80214 12.4118 8.61967 12.2708 9.5 12.2708C10.3798 12.2708 11.1973 12.4118 11.9526 12.6936C12.7073 12.9749 13.4214 13.3575 14.0948 13.8415C14.6173 13.3011 15.0377 12.6624 15.356 11.9257C15.6742 11.1878 15.8333 10.3793 15.8333 9.5C15.8333 7.74514 15.2166 6.25074 13.9832 5.01679C12.7498 3.78285 11.2554 3.16614 9.5 3.16667C7.74514 3.16667 6.25074 3.78338 5.01679 5.01679C3.78285 6.25021 3.16614 7.74461 3.16667 9.5C3.16667 10.3798 3.32579 11.1881 3.64404 11.9249C3.96229 12.6622 4.38267 13.3013 4.90517 13.8423ZM9.5 9.89583C8.83342 9.89583 8.27081 9.66678 7.81217 9.20867C7.35406 8.75003 7.125 8.18742 7.125 7.52083C7.125 6.85425 7.35406 6.29164 7.81217 5.833C8.27081 5.37489 8.83342 5.14583 9.5 5.14583C10.1666 5.14583 10.7292 5.37489 11.1878 5.833C11.6459 6.29164 11.875 6.85425 11.875 7.52083C11.875 8.18742 11.6459 8.75003 11.1878 9.20867C10.7292 9.66678 10.1666 9.89583 9.5 9.89583ZM9.5 16.625C8.50619 16.625 7.57599 16.44 6.70938 16.07C5.84276 15.7006 5.08857 15.195 4.44679 14.5532C3.80554 13.9114 3.29993 13.1572 2.92996 12.2906C2.55999 11.424 2.375 10.4938 2.375 9.5C2.375 8.50619 2.55999 7.57599 2.92996 6.70938C3.2994 5.84276 3.80501 5.08857 4.44679 4.44679C5.08857 3.80554 5.84276 3.29993 6.70938 2.92996C7.57599 2.55999 8.50619 2.375 9.5 2.375C10.4938 2.375 11.424 2.55999 12.2906 2.92996C13.1572 3.2994 13.9114 3.80501 14.5532 4.44679C15.1945 5.08857 15.7001 5.84276 16.07 6.70938C16.44 7.57599 16.625 8.50619 16.625 9.5C16.625 10.4938 16.44 11.424 16.07 12.2906C15.7006 13.1572 15.195 13.9114 14.5532 14.5532C13.9114 15.1945 13.1572 15.7001 12.2906 16.07C11.424 16.44 10.4938 16.625 9.5 16.625Z" fill="#0FA958"/>
                                        </svg>
                                        Anak Kandang : {{ detailPencatatan.nama_anak_kandang }}
                                    </p>
                                </div>
                                <div class="col-md-4">
                                    <div class="bg-grey-rossa rounded p-2">{{ dateSubmitPencatatan }}</div>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M4.90517 13.8423C5.57808 13.3578 6.29217 12.9749 7.04742 12.6936C7.80214 12.4118 8.61967 12.2708 9.5 12.2708C10.3798 12.2708 11.1973 12.4118 11.9526 12.6936C12.7073 12.9749 13.4214 13.3575 14.0948 13.8415C14.6173 13.3011 15.0377 12.6624 15.356 11.9257C15.6742 11.1878 15.8333 10.3793 15.8333 9.5C15.8333 7.74514 15.2166 6.25074 13.9832 5.01679C12.7498 3.78285 11.2554 3.16614 9.5 3.16667C7.74514 3.16667 6.25074 3.78338 5.01679 5.01679C3.78285 6.25021 3.16614 7.74461 3.16667 9.5C3.16667 10.3798 3.32579 11.1881 3.64404 11.9249C3.96229 12.6622 4.38267 13.3013 4.90517 13.8423ZM9.5 9.89583C8.83342 9.89583 8.27081 9.66678 7.81217 9.20867C7.35406 8.75003 7.125 8.18742 7.125 7.52083C7.125 6.85425 7.35406 6.29164 7.81217 5.833C8.27081 5.37489 8.83342 5.14583 9.5 5.14583C10.1666 5.14583 10.7292 5.37489 11.1878 5.833C11.6459 6.29164 11.875 6.85425 11.875 7.52083C11.875 8.18742 11.6459 8.75003 11.1878 9.20867C10.7292 9.66678 10.1666 9.89583 9.5 9.89583ZM9.5 16.625C8.50619 16.625 7.57599 16.44 6.70938 16.07C5.84276 15.7006 5.08857 15.195 4.44679 14.5532C3.80554 13.9114 3.29993 13.1572 2.92996 12.2906C2.55999 11.424 2.375 10.4938 2.375 9.5C2.375 8.50619 2.55999 7.57599 2.92996 6.70938C3.2994 5.84276 3.80501 5.08857 4.44679 4.44679C5.08857 3.80554 5.84276 3.29993 6.70938 2.92996C7.57599 2.55999 8.50619 2.375 9.5 2.375C10.4938 2.375 11.424 2.55999 12.2906 2.92996C13.1572 3.2994 13.9114 3.80501 14.5532 4.44679C15.1945 5.08857 15.7001 5.84276 16.07 6.70938C16.44 7.57599 16.625 8.50619 16.625 9.5C16.625 10.4938 16.44 11.424 16.07 12.2906C15.7006 13.1572 15.195 13.9114 14.5532 14.5532C13.9114 15.1945 13.1572 15.7001 12.2906 16.07C11.424 16.44 10.4938 16.625 9.5 16.625Z" fill="#0FA958"/>
                                        </svg>
                                        Mandor : {{ detailPencatatan.nama_mandor }}
                                    </p>
                                </div>
                                <div class="col-md-4">
                                    <p><span class="color-text-rossa">Populasi Ayam:</span> {{ detailPencatatan.populasi_ayam }} ekor</p>
                                    <p><span class="color-text-rossa">Strain:</span> {{ detailPencatatan.nama_strain }}</p>
                                </div>
                            </div>
                            <h6 class="mb-3">Ayam</h6>
                            <div class="row mb-3 p-2 bg-light rounded">
                                <div class="col-md-4">
                                    <p>Mati : {{ values.mati }} </p>
                                    <p>Afkir : {{ values.afkir }}</p>
                                </div>
                                <div class="col-md-4">
                                    <p>Jumlah Pindah : {{ values.jumlah_pindah }}</p>
                                    <p>Jumlah Terima : {{ values.jumlah_terima }}</p>
                                </div>
                                <div class="col-md-4">
                                    <p>Kandang Pengirim : {{ namaKandangPengirim }}</p>
                                    <p>Kandang Penerima : {{ namaKandangPenerima }}</p>
                                </div>
                            </div>
                            <h6 class="mb-3">Produksi telur</h6>
                            <div class="mb-3">
                                <label for="jml_telur_utuh" class="form-label">Jml Telur Utuh</label>
                                <Field v-model="detailPencatatan.telur_utuh" name="jml_telur_utuh" class="form-control text-center" type="number" placeholder="Jumlah Telur Utuh" />
                                <ErrorMessage class="text-danger" name="jml_telur_utuh" />
                            </div>
                            <div class="mb-3">
                                <label for="jml_telur_bentes" class="form-label">Jml Telur Bentes</label>
                                <Field v-model="detailPencatatan.telur_bentes" name="jml_telur_bentes" class="form-control text-center" type="number" placeholder="Jumlah Telur Bentes" />
                                <ErrorMessage class="text-danger" name="jml_telur_bentes" />
                            </div>
                            <div class="mb-3">
                                <label for="berat_telur_utuh" class="form-label">Berat Telur Utuh</label>
                                <Field v-model="detailPencatatan.berat_utuh" name="berat_telur_utuh" class="form-control text-center" type="number" placeholder="Berat Telur Utuh" />
                                <ErrorMessage class="text-danger" name="berat_telur_utuh" />
                            </div>
                            <div class="mb-3">
                                <label for="berat_telur_bentes" class="form-label">Berat Telur Bentes</label>
                                <Field v-model="detailPencatatan.berat_bentes" name="berat_telur_bentes" class="form-control text-center" type="number" placeholder="Berat Telur Bentes" />
                                <ErrorMessage class="text-danger" name="berat_telur_bentes" />
                            </div>
                        </template>

                        <template v-if="currentStep === 3">
                            <h6 class="mb-3">Ayam</h6>
                            <div class="row mb-3 p-2 bg-light rounded">
                                <div class="col-md-4">
                                    <p>Mati : {{ values.mati }} </p>
                                    <p>Afkir : {{ values.afkir }}</p>
                                </div>
                                <div class="col-md-4">
                                    <p>Jumlah Pindah : {{ values.jumlah_pindah }}</p>
                                    <p>Jumlah Terima : {{ values.jumlah_terima }}</p>
                                </div>
                                <div class="col-md-4">
                                    <p>Kandang Pengirim : {{ namaKandangPengirim }}</p>
                                    <p>Kandang Penerima : {{ namaKandangPenerima }}</p>
                                </div>
                            </div>
                            <div class="row mb-3 p-2 bg-light rounded">
                                <div class="col-md-4">
                                    <p>Jumlah Telur Utuh : {{ values.jml_telur_utuh }}</p>
                                    <P>Berat Telur Utuh : {{ values.berat_telur_utuh }}</P>
                                </div>
                                <div class="col-md-4">
                                    <p>Jumlah Telur Bentes : {{ values.jml_telur_bentes }}</p>
                                    <p>Berat Telur Bentes : {{ values.berat_telur_bentes }}</p>
                                </div>
                                <div class="col-md-4">
                                    <p><span class="color-text-rossa">Total:</span> {{ (parseFloat(values.jml_telur_utuh) + parseFloat(values.jml_telur_bentes)).toFixed(2) }}</p>
                                    <p><span class="color-text-rossa">Total:</span> {{ (parseFloat(values.berat_telur_utuh) + parseFloat(values.berat_telur_bentes)).toFixed(2) }}</p>
                                </div>
                            </div>
                            <h6 class="mb-3">Pakan & Treatment Ayam</h6>
                            
                            <div class="mb-3">
                                <Field v-model="detailPencatatan.id_jenis_pakan" as="select" name="jenis_pakan" class="form-control text-center">
                                    <template v-if="dataPakan.responseData">
                                        <option value="">Pilih Nama Pakan</option>
                                        <option v-for="item in dataPakan.responseData.data.items" :key="item.id" :value="item.id">{{ item.nama }}</option>
                                    </template>
                                </Field>
                                <ErrorMessage class="text-danger" name="jenis_pakan" />
                            </div>
                            <div class="mb-3">
                                <Field v-model="detailPencatatan.id_treatment" as="select" name="jenis_treatment" class="form-control text-center">
                                    <template v-if="dataTreatment.responseData">
                                        <option value="">Pilih Nama Treatment</option>
                                        <option v-for="item in dataTreatment.responseData.data.items" :key="item.id" :value="item.id">{{ item.nama }}</option>
                                    </template>
                                </Field>
                                <ErrorMessage class="text-danger" name="jenis_treatment" />
                            </div>
                            <div class="mb-3">
                                <label for="berat_pakan" class="form-label">Berat Pakan</label>
                                <Field v-model="detailPencatatan.berat_pakan" name="berat_pakan" class="form-control text-center" type="number" placeholder="Berat Pakan" />
                                <ErrorMessage class="text-danger" name="berat_pakan" />
                            </div>
                            <div class="mb-3">
                                <Field v-model="detailPencatatan.catatan" type="text" name="catatan" class="form-control text-center" placeholder="Catatan" />
                                <ErrorMessage class="text-danger" name="catatan" />
                            </div>
                           
                        </template>

                        <div class="text-end">
                            <p>{{ currentStep+1 }} / 4</p>
                            <button class="btn btn-success bg-button-rossa" v-if="currentStep !== 0" type="button" @click="prevStep">
                            Previous
                            </button>

                            <button type="submit" class="ms-3 btn btn-success bg-button-rossa" v-if="currentStep !== 3">Next</button>

                            <button type="submit" class="ms-3 btn btn-success bg-button-rossa" v-if="currentStep === 3" :disabled="isSubmitting">
                                Finish
                                <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                            </button>
                        </div>
                    
                    </Form>
                
                </div>
                <!-- <div class="modal-footer">
                    
                </div> -->
            </div>
        </div>
    </div>
    
</template>

<script setup>
    import HeaderItem from '../components/HeaderItem.vue'
    import { pencatatanStore, strainStore, pakanStore, treatmentStore, kandangStore, karyawanStore } from '@/stores';
    import { defineStore, storeToRefs } from 'pinia'
    import { onMounted, reactive, ref, computed, watch } from 'vue';
    import { Field, ErrorMessage, Form } from 'vee-validate';
    import * as yup from 'yup';
    import axios from 'axios';
    import Swal from 'sweetalert2';
    import moment from 'moment';

    const baseUrl = `${import.meta.env.VITE_API_URL}`;

    const dataPencatatan  = reactive(pencatatanStore());
    const dataStrain = reactive(strainStore());
    const dataPakan = reactive(pakanStore());
    const dataTreatment = reactive(treatmentStore());
    const dataKandang = reactive(kandangStore());
    const dataKaryawan = reactive(karyawanStore());

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
        telur_utuh: '',
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
        nama_kandang: '',
        nama_strain: '',
        nama_kandang_pengirim: '',
        nama_kandang_penerima: '',
        status: '',
        usia_hari: '',
        usia_mgg: '',
        berat_pakan: '',
        nama_jenis_pakan: '',   
        nama_treatment: '',
    });

    const detailStrain = reactive({
        id: '',
        nama: '',
        deskripsi: '',
    });

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

    const dateSubmitPencatatan = ref('');

    let search = ref("");
    
    const date = ref(0);
    const currentPage = ref(1);
    const pageSize = ref(10);
    const totalItems = ref(0);
    const isSubmitting = ref(false);
    const onClickHandler = (page) => {
        // getPencatatan(page);
        if(search.value == "") {
            getPencatatan(currentPage.value, id_mandor.value, id_kandang.value, id_anak_kandang.value, id_strain_ayam.value, id_treatment.value, id_jenis_pakan.value, is_archived.value)
        } else {
            searchPencatatan(search.value);
        }
        
    };

    const schemas = [
        yup.object({
            tanggal_submit: yup.date().required(),  
            id_anak_kandang: yup.number().required(),
            nama_kandang: yup.number().required(),
            nama_mandor: yup.string().required(),
            usia_hari: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null),
            usia_mgg: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null),
            strain_ayam: yup.number().required(),
        }),
        yup.object({
            mati: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null),
            afkir: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null),
            jumlah_pindah: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null),
            jumlah_terima: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null),
            id_kandang_pengirim: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null),
            id_kandang_tujuan: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null),
        }),
        yup.object({
            jml_telur_utuh: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null) ,
            jml_telur_bentes: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null),
            berat_telur_utuh: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null),
            berat_telur_bentes: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null),
        }),
        yup.object({
            jenis_pakan: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null) ,
            jenis_treatment: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null) ,
            berat_pakan: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null),
            catatan: yup.string().nullable(),
        }),
    ];

    const currentStep = ref(0);
    const currentSchema = computed(() => {
        return schemas[currentStep.value];
    });
    const namaKandang = ref(null);
    const id_kandang = ref(0);
    const id_mandor = ref(0);
    const id_anak_kandang = ref(0);
    const id_strain_ayam = ref(0);
    const id_treatment = ref(0);
    const id_jenis_pakan = ref(0);
    const is_archived = ref(0);
    const tanggal_submit = ref(null);
    const isLoading = ref(false);
    const isLoadingValidasiData = ref(false);

    function nextStep(values) {
        if (currentStep.value === 3) {
            onUpdateSubmit(values);
            console.log('Done: ', JSON.stringify(values, null, 2));
            return;
        }

        currentStep.value++;
    }

    function prevStep() {
        if (currentStep.value <= 0) {
            return;
        }

        currentStep.value--;
    }

    let within_first_modal = false;

    watch(() => tanggal_submit.value, (newValue, oldValue) => {
        console.log("change tanggal submit: ", newValue);
        date.value = new Date(newValue);
        dateSubmitPencatatan.value = moment(newValue).format('DD MMMM YYYY');
    });

    const namaKandangPengirim = ref(null);
    function getKandangPengirim(id) {
        const selectedId = id;
        const items = dataKandang.responseData.data.items;
        for (const item of items) {
            if (item.id == selectedId) {
                namaKandangPengirim.value = item.nama;
                console.log(namaKandangPengirim.value)
            }
        }
        
    }

    const namaKandangPenerima = ref(null);
    function getKandangPenerima(id) {
        const selectedId = id;
        const items = dataKandang.responseData.data.items;
        for (const item of items) {
            if (item.id == selectedId) {
                namaKandangPenerima.value = item.nama;
                console.log(namaKandangPenerima.value)
            }
        }
        
    }

    const formatTanggalSubmit = (tanggal) => {
        return moment(tanggal).format('DD-MM-YYYY');
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

    function clearSearch() {
        search.value = '';
        id_kandang.value = 0;
        id_mandor.value = 0;
        id_anak_kandang.value = 0;
        id_strain_ayam.value = 0;
        id_treatment.value = 0;
        id_jenis_pakan.value = 0;
        is_archived.value = 0;
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

    function alert(icon, title) {
        const Toast = Swal.mixin({   
          toast: true,
          position: "bottom-start",
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
          title: title,
          target: document.getElementById('first-modal'),
        });
    }

    function alertAfterSubmit(icon, title) {
        const Toast = Swal.mixin({   
          toast: true,
          position: "bottom-start",
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
          title: title,
          target: document.getElementById('second-modal'),
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                closeModal();
            }
        });
    }

    function clickSecondModal() {
        $('#first-modal').modal('hide');
        console.log('click second modal');
        if ($(this).hasClass('within-first-modal')) {
            within_first_modal = true;
            $('#first-modal').modal('hide');
        }
        $('#second-modal').modal('show');

        getKandangPengirim(detailPencatatan.id_kandang_pengirim);
        getKandangPenerima(detailPencatatan.id_kandang_tujuan);
    }

    function clickCloseSecondModal() { 
        console.log('click close second modal');
        $('#second-modal').modal('hide');
        $('#first-modal').modal('show');
        if (within_first_modal) {
            $('#first-modal').modal('show');
            within_first_modal = false;
        }
        
    }

    async function getKaryawan(page_number) {
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
                console.log(dataKaryawan);
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

    async function getIdStrain(id) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/strain_ayam/' + id, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                detailStrain.id = response.data.data.id;
                detailStrain.nama = response.data.data.nama;
                detailStrain.deskripsi = response.data.data.deskripsi;
                getIdStandart(detailStrain.id);
            })
            .catch(error => {
                console.error(error);
            });
    }

    async function getIdStandart(id_strain_ayam) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/standar_pemeliharaan', {
            params: {
                id_strain_ayam: id_strain_ayam,
            },
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                console.log("Standart Pemeliharaan : ", response);
                detailStandart.id = response.data.data.items[0].id;
                detailStandart.id_strain_ayam = response.data.data.items[0].id_strain_ayam;
                detailStandart.umur = response.data.data.items[0].umur;
                detailStandart.nilai_hd = response.data.data.items[0].nilai_hd;
                detailStandart.nilai_bb = response.data.data.items[0].nilai_bb;
                detailStandart.nilai_bt = response.data.data.items[0].nilai_bt;
                detailStandart.nilai_fi = response.data.data.items[0].nilai_fi;
                detailStandart.nilai_fc = response.data.data.items[0].nilai_fc;
                detailStandart.egg_mass = response.data.data.items[0].egg_mass;
                detailStandart.deskripsi = response.data.data.items[0].deskripsi;
               
            })
            .catch(error => {
                detailStandart.id = '';
                detailStandart.id_strain_ayam = '';
                detailStandart.umur = '';
                detailStandart.nilai_hd = '';
                detailStandart.nilai_bb = '';
                detailStandart.nilai_bt = '';
                detailStandart.nilai_fi = '';
                detailStandart.nilai_fc = '';
                detailStandart.egg_mass = '';
                detailStandart.deskripsi = '';
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

    async function onUpdateSubmit(values) {
        isSubmitting.value = true;
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        const { tanggal_submit, usia_hari, usia_mgg, nama_kandang, id_anak_kandang, nama_mandor, strain_ayam, mati, afkir, jumlah_pindah, id_kandang_pengirim, jumlah_terima, id_kandang_tujuan, jml_telur_utuh, jml_telur_bentes, berat_telur_utuh, berat_telur_bentes, jenis_pakan, jenis_treatment, berat_pakan, catatan } = values;
        console.log(values);
        return axios.put(baseUrl + '/pencatatan/' + detailPencatatan.id, {
            tanggal_submit: tanggal_submit,
            usia_hari: usia_hari,
            usia_mgg: usia_mgg,
            id_kandang: nama_kandang,
            id_mandor: nama_mandor,
            id_anak_kandang: id_anak_kandang,
            id_strain_ayam: strain_ayam,
            jumlah_mati: mati,
            jumlah_afkir: afkir,
            jumlah_pindah: jumlah_pindah,
            id_kandang_tujuan: id_kandang_tujuan,
            jumlah_terima: jumlah_terima,
            id_kandang_pengirim: id_kandang_pengirim,
            telur_utuh: jml_telur_utuh,
            telur_bentes: jml_telur_bentes,
            berat_utuh: berat_telur_utuh,
            berat_bentes: berat_telur_bentes,
            id_treatment: jenis_treatment,
            id_jenis_pakan: jenis_pakan,
            berat_pakan: berat_pakan,
            catatan: catatan,
        }, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                isSubmitting.value = false;
                console.log("Response Update Pencatatan : ", response);
                alertAfterSubmit('success', 'Data pencatatan berhasil diubah');
                getPencatatan(currentPage.value);
                // closeModal();
            })
            .catch(error => {
                isSubmitting.value = false;
                alertAfterSubmit('error', error.response.data.message);
                console.error(error);
            });
    }

    async function getTreatment() {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/tugas', {
            params: {
                is_treatment: true,
            },
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                dataTreatment.setResponseData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    async function getPakan() {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/jenis_pakan', {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                dataPakan.setResponseData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    async function getPencatatan(page_number, id_mandor = null, id_kandang = null, id_anak_kandang = null, id_strain_ayam = null, id_treatment = null, id_jenis_pakan = null, is_archived = null) {
        isLoadingValidasiData.value = true;
        if(page_number == 1) {
            currentPage.value = 1;
        }
        if(id_mandor == 0) {
            id_mandor = null;
        }
        if(id_kandang == 0) {
            id_kandang = null;
        }
        if(id_anak_kandang == 0) {
            id_anak_kandang = null;
        }
        if(id_strain_ayam == 0) {
            id_strain_ayam = null;
        }
        if(id_treatment == 0) {
            id_treatment = null;
        }
        if(id_jenis_pakan == 0) {
            id_jenis_pakan = null;
        }
        if(is_archived == 0) {
            is_archived = false;
        } else if(is_archived == 1) {
            is_archived = true;
        } else {
            is_archived = null;
        }
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/pencatatan', {
            params: {
                id_mandor: id_mandor,
                id_kandang: id_kandang,
                id_anak_kandang: id_anak_kandang,
                id_strain_ayam: id_strain_ayam,
                id_treatment: id_treatment,
                id_jenis_pakan: id_jenis_pakan,
                is_archived: is_archived,
                column_sorting: 'tanggal_submit desc',
                page_number: page_number, 
                page_size: pageSize.value, 
            },
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                isLoadingValidasiData.value = false;
                dataPencatatan.setResponseData(response.data);
                totalItems.value = dataPencatatan.responseData ? dataPencatatan.responseData.data.total_record : 0;
                console.log("Response Pencatatan : ", response);
            })
            .catch(error => {
                isLoadingValidasiData.value = false;
                console.error(error);
            });
    }

    async function getIdPencatatan(id) {
        isLoading.value = true;
        getTreatment();
        getPakan();
        getStrain();
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/pencatatan/' + id, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                console.log("Data Pencatatan : ", response);
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
                detailPencatatan.telur_utuh = response.data.data.telur_utuh;
                detailPencatatan.telur_bentes = response.data.data.telur_bentes;
                detailPencatatan.berat_utuh = response.data.data.berat_utuh;
                detailPencatatan.berat_bentes = response.data.data.berat_bentes;
                detailPencatatan.id_treatment = response.data.data.id_treatment;
                detailPencatatan.id_jenis_pakan = response.data.data.id_jenis_pakan;
                detailPencatatan.catatan = response.data.data.catatan;
                detailPencatatan.populasi_ayam = response.data.data.kandang.populasi_total;
                detailPencatatan.tanggal_submit = response.data.data.tanggal_submit;
                detailPencatatan.nama_anak_kandang = response.data.data.nama_anak_kandang;
                detailPencatatan.nama_mandor = response.data.data.nama_mandor;
                detailPencatatan.nama_kandang = response.data.data.kandang.nama;
                detailPencatatan.nama_strain = response.data.data.strain_ayam.nama; 
                detailPencatatan.status = response.data.data.status;
                if(response.data.data.id_kandang_pengirim != null) {
                    detailPencatatan.nama_kandang_pengirim = response.data.data.kandang_pengirim.nama;
                } else {
                    detailPencatatan.nama_kandang_pengirim = '-';
                }  
                if(response.data.data.id_kandang_tujuan != null) {
                    detailPencatatan.nama_kandang_penerima = response.data.data.kandang_tujuan.nama;
                } else {
                    detailPencatatan.nama_kandang_penerima = '-';
                }    
                detailPencatatan.usia_hari = response.data.data.usia_hari;
                detailPencatatan.usia_mgg = response.data.data.usia_mgg;
                detailPencatatan.berat_pakan = response.data.data.berat_pakan;
                detailPencatatan.nama_jenis_pakan = response.data.data.jenis_pakan ? response.data.data.jenis_pakan.nama : '-';
                detailPencatatan.nama_treatment = response.data.data.treatment ? response.data.data.treatment.nama : '-';
                detailPencatatan.telur_utuh = response.data.data.telur_utuh;
                tanggal_submit.value = moment(response.data.data.tanggal_submit).format("YYYY-MM-DD");
                isLoading.value = false;
                getIdStrain(detailPencatatan.id_strain_ayam);
                // console.log("Detail Pencatatan : ", detailPencatatan);
                console.log("Detail Pencatatan : ", response);
            })
            .catch(error => {
                isLoading.value = false;
                console.error(error);
            });
    }

    async function searchPencatatan(keyword) {
        if(is_archived.value == 0) {
            is_archived.value = false;
        } else if(is_archived.value == 1) {
            is_archived.value = true;
        } else {
            is_archived.value = null;
        }
        isLoadingValidasiData.value = true;
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        return axios.get(baseUrl + '/pencatatan', {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
            params: {
                search_value: keyword.toLowerCase(),
                is_archived: is_archived.value,
                page_number: currentPage.value,
                page_size: pageSize.value,
            },
        })
            .then(response => {
                isLoadingValidasiData.value = false;
                dataPencatatan.setResponseData(response.data);
                totalItems.value = dataPencatatan.responseData ? dataPencatatan.responseData.data.total_record : 0;
                console.log("Search: ", response);
            })
            .catch(error => {
                isLoadingValidasiData.value = false;
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
                alert('success', 'Data berhasil dihapus');
                getPencatatan(currentPage.value);
                closeModal();
            })
            .catch(error => {
                alert('error', error.response.data.message)
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
                alert('success', 'Data berhasil disetujui');
                getPencatatan(currentPage.value);
                getIdPencatatan(id);
            })
            .catch(error => {
                alert('error', error.response.data.message);
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
                alert('success', 'Data berhasil ditolak');
                getPencatatan(currentPage.value);
                getIdPencatatan(id);
            })
            .catch(error => {
                alert('error', error.response.data.message);
                console.error(error);
            });
    }

    onMounted(() => {
        getPencatatan(1);
        getKandang();
        getKaryawan();
        getStrain();
        getTreatment();
        getPakan();
       
    });

     
</script>

<style scoped>
.margin-lg {
  margin: 15px;
}

#second-modal {
    z-index: 1102 !important;
}

#first-modal {
    z-index: 1101 !important;
}

.swal2-container {
  display: -webkit-box;
  display: flex;
  z-index: 300000;
}
</style>