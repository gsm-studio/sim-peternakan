<template>
    <HeaderItem />
    <div class="body flex-grow-1 px-3">
        <div class="container-lg">
            <!-- /.row-->
            <div class="row">
            <div class="col-md-12">
                <div class="card overflow-hidden mb-4">
                <div class="row">
                    <div class="col-lg-12 border-bottom">
                        <div class="card-body row">
                            <div class="col-5">
                                <h4 class="d-inline me-2">Pencatatan Produksi</h4>
                                <div class="d-inline">
                                    <svg class="icon">
                                    <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-arrow-circle-right
                                    "></use>
                                    </svg>
                                </div>
                                <h5 class="color-text-rossa d-inline ms-2">{{ detailKandang.nama }}</h5>
                                <!-- <img src="@/assets/img/vector-1.png" alt=""> -->
                            </div>
                            <!-- <div class="col-1 d-grid d-md-block text-center"> -->
                                <!-- <small class="color-text-rossa">{{ dateSubmitPencatatan }}</small> -->
                                <!-- <button class="btn btn-secondary ms-3" type="button">Hisex</button> -->
                              
                            <!-- </div> -->
                            <div class="col-7 d-flex d-md-block text-end">
                                <div class="d-flex justify-content-end align-items-center flex-wrap">   
                                    <div class="d-flex align-items-center flex-wrap"> 
                                        <h6>Status : </h6>
                                        <h5 v-if="status == 'submitted'" class="text-warning d-inline-block"> Pending</h5>
                                        <h5 v-else-if="status == 'accepted'" class="text-success d-inline-block"> Terima</h5>
                                        <h5 v-else class="text-danger"> Tolak</h5>
                                    </div>
                                    <button @click="getKandang()" class="btn btn-success ms-3 mb-lg-0 mb-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Input Harian
                                        <svg class="icon">
                                            <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-plus"></use>
                                        </svg>
                                    </button>
                                    <template v-if="role == adminKantor || role == superadmin">
                                        <button v-if="dataPencatatan.responseData && dataPencatatan.responseData.data.items.length > 0" @click="getIdPencatatan(detailPencatatan.id)" class="btn btn-secondary ms-3" type="button" data-bs-toggle="modal" data-bs-target="#editModal">
                                        Ubah 
                                        <svg class="icon">
                                            <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-pen"></use>
                                        </svg>
                                        </button>
                                    </template>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    
                    <div class="col-lg-7 border-end">
                    <div class="card-body">
                        <div class="d-flex justify-content-between mt-4">
                            <div class="w-100">
                                <div class="small text-medium-emphasis mb-2">
                                Produksi Telur 
                                <span class="color-text-rossa ms-3">{{ detailKandang.nama }}</span>
                                </div>
                                <div class="w-100 d-flex align-items-center justify-content-between">
                                <h5 class="card-title mb-0">{{ avg_total_telur }} Butir</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 8 10" fill="none">
                                    <path d="M1 9.5L7 5.5L1 1" stroke="black"/>
                                    </svg>
                                <h5 class="card-title mb-0 text-secondary">{{ avgall_berat_telur_gr }} gr/butir</h5>
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 8 10" fill="none">
                                    <path d="M1 9.5L7 5.5L1 1" stroke="black"/>
                                    </svg>
                                <!-- <h5 class="card-title mb-0 text-secondary">{{ ((parseInt(totalBeratTelurUtuh) + parseInt(totalBeratTelurBentes)) / (parseInt(totalTelurUtuh) + parseInt(totalTelurBentes))).toFixed(2) }} gr/butir</h5> -->
                                <h5 class="card-title mb-0 text-secondary">{{ avg_berat_telur_kg }} kg</h5>
                              
                                </div>
                                <!-- <small class="color-text-rossa">
                                (20,1 %)
                                </small> -->
                                <div class="row mt-3">
                                <div class="col text-center">
                                    <p>Telur utuh</p>
                                    <div class="small text-medium-emphasis mt-2">{{ totalTelurUtuh }}</div>
                                    <div class="small text-medium-emphasis mt-2">{{ totalBeratTelurUtuh }} kg</div>
                                </div>
                                <div class="col text-center border-start">
                                    <p>Telur bentes</p>
                                    <div class="small text-medium-emphasis mt-2">{{ totalTelurBentes }}</div>
                                    <div class="small text-medium-emphasis mt-2">{{ totalBeratTelurBentes }} kg</div>
                                </div>
                                </div>
                                
                            </div>
                            <div class="btn-toolbar d-none d-md-block" role="toolbar" aria-label="Toolbar with buttons">
                            
                            </div>
                        </div>
                       
                        <CChart
                            type="bar"
                            :data="{
                                labels: namaLabels,
                                datasets: [
                                    {
                                        label: 'Telur Utuh',
                                        backgroundColor: '#5CA882',
                                        data: telurUtuhData
                                    },
                                ],
                            }"
                            labels="months"
                        />
                       
                    </div>
                    <!-- <div class="card-footer d-flex justify-content-between">
                        <span> 
                        <svg class="icon bg-button-rossa">
                        <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-circle"></use> </svg> Last 6 days
                        </span>
                        <span>
                        <svg class="icon bg-grey-rossa">
                        <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-circle"></use> </svg> Last Week
                        </span>
                    </div> -->
                    </div>
                    <div class="col-lg-5">
                    <div class="card-body populasi">
                        
                        <div class="d-flex justify-content-between mt-4">
                        <div>
                            <div class="small text-medium-emphasis mb-2">
                            Populasi Ayam 
                            <span class="color-text-rossa ms-3">{{ detailKandang.nama }}</span>
                            </div>
                            <h5 class="card-title mb-0">{{ totalPopulasi ? totalPopulasi : detailKandang.populasi_awal }} ekor</h5>
                            <!-- <small>
                            <svg class="icon color-text-rossa">
                                <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-arrow-circle-top"></use>
                            </svg> 2,4 % vs last week
                            </small> -->
                            
                        </div>
                        <div class="d-flex align-items-center">
                            <button @click="getKandang()" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-success bg-button-rossa" type="button">Pindah</button>
                        </div>
                        
                        </div>
                        <div class="row text-center mt-4">
                        <div class="col mb-sm-3 mb-0">
                            <div class="text-medium-emphasis">Mati</div>
                            <div class="small color-text-rossa">{{ totalMati }}</div>
                        </div>
                        <div class="col mb-sm-3 mb-0">
                            <div class="text-medium-emphasis">Afkir</div>
                            <div class="small color-text-rossa">{{ totalAfkir }}</div>
                        </div>
                        <div class="col mb-sm-3 mb-0">
                            <div class="text-medium-emphasis">Pindah</div>
                            <div class="small color-text-rossa">{{ totalPindah }}</div>
                        </div>
                        <div class="col mb-sm-3 mb-0">
                            <div class="text-medium-emphasis">Terima</div>
                            <div class="small color-text-rossa">{{ totalTerima }}</div>
                        </div>
                        </div>
                        <div>
                       
                            <CChart
                                type="line"
                                :wrapper="false"
                                :data="{
                                    labels: namaLabels,
                                    datasets: [
                                    {
                                        label: 'Mati',
                                        backgroundColor: 'rgba(220, 220, 220, 0.2)',
                                        borderColor: 'rgba(220, 220, 220, 1)',
                                        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                                        pointBorderColor: '#e55353',
                                        data: jumlahMatiData
                                    },
                                
                                    ]
                                }"
                             />
                        </div>
                    </div>
                    <!-- <div class="card-footer d-flex justify-content-between">
                        <span> 
                        <svg class="icon bg-button-rossa">
                        <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-circle"></use> </svg> Last 6 days
                        </span>
                        <span>
                        <svg class="icon bg-grey-rossa">
                        <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-circle"></use> </svg> Last Week
                        </span>
                    </div> -->
                </div>
                </div>
                <div class="row border-top">
                    <div class="col-lg-7 border-end">
                    <div class="card-body">
                        <div class="row">
                            <div class="mb-4">
                               
                                <div class="row">
                                    <div class="col border-end">
                                        <div class="small text-medium-emphasis mb-2">
                                            Pakan  
                                            <span class="color-text-rossa ms-3">{{ detailKandang.nama }}</span>
                                        </div>
                                        <h5 class="card-title mb-0">{{ sum_berat_pakan_daily }} kg</h5>
                                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 8 10" fill="none">
                                            <path d="M1 9.5L7 5.5L1 1" stroke="black"/>
                                        </svg>
                                        <h5 class="card-title mb-0 text-secondary">85.7 gram/ekor</h5> -->
                                    </div>
                                    <div class="col border-start">
                                        <h5 class="card-title mb-0">Standar pakan</h5>
                                        <h5 class="card-title mb-0 text-secondary">{{ std_gr_perekor }} gr/ekor</h5>
                                    </div>
                                    
                                </div>
                                <!-- <small>
                                    <svg class="icon color-text-rossa">
                                    <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-arrow-circle-top"></use>
                                    </svg> 2,4 % vs last week
                                </small> -->
                                
                            </div>
                            <div class="col-md-5 d-flex align-items-end pie">
                                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180" fill="none">
                                    <circle cx="90" cy="90" r="90" fill="#0FA958" fill-opacity="0.6"/>
                                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20px">{{ persentase_pakan }} % 
                                        {{ detailPakan.nama ? detailPakan.nama : 'Tidak Ada' }}</text>
                                </svg> -->
                                <CChart
                                    type="pie"
                                    width="180"
                                    :data="{
                                        labels: labelJenisPakan,
                                        datasets: [
                                            {
                                                backgroundColor: backgroundColorJenisPakan,
                                                data: dataJenisPakan,
                                            },
                                        ],
                                    }"
                                />
                            </div>
                            <div class="col-md-7">
                               
                                <CChart
                                    type="line"

                                    :wrapper="false"
                                    :data="{
                                        labels: namaLabels,
                                        datasets: [
                                        {
                                            label: 'Hari',
                                            backgroundColor: 'rgba(220, 220, 220, 0.2)',
                                            borderColor: 'rgba(220, 220, 220, 1)',
                                            pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                                            pointBorderColor: '#e55353',
                                            data: totalGramPerEkorPakan
                                        }
                                        ]
                                    }"
                                />
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-5">
                    <div class="mt-4">
                        <div>
                        <div class="small text-medium-emphasis mb-2">
                            Ratio
                            <span class="color-text-rossa ms-3">{{ detailKandang.nama }}</span>
                        </div>
                        
                        </div>
                        <div>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="146" height="145" viewBox="0 0 146 145" fill="none">
                            <circle cx="73.1484" cy="72.5" r="72.5" fill="#6AD0B8"/>
                                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="14px">Egg Mass {{ egg_mass_pelaporan }}</text>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="118" height="117" viewBox="0 0 118 117" fill="none">
                            <circle cx="59.1484" cy="58.5" r="58.5" fill="#D8608B" fill-opacity="0.7"/>
                            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="14px">FC {{ fc_pelaporan }}</text>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="136" height="135" viewBox="0 0 136 135" fill="none">
                            <circle cx="68.1484" cy="67.5" r="67.5" fill="#8660D8" fill-opacity="0.7"/>
                            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="14px">FI {{ berat_pakan_per_ekor_gram }}</text>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="136" height="135" viewBox="0 0 136 135" fill="none">
                            <circle cx="68.1484" cy="67.5" r="67.5" fill="#638889" fill-opacity="0.7"/>
                            <text x="50%" y="40%" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="14px">Produksi Telur</text>
                            <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="14px">{{ percentase_telur }} %</text>
                            </svg>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-lg">
            <div class="modal-content p-3">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <Form
                        class="form"
                        @submit="nextStep"
                        :validation-schema="currentSchema"
                        keep-values
                        v-slot="{ handleSubmit, values }"
                        >
                        <template v-if="currentStep === 0"> 
                            <div class="mb-4 d-flex justify-content-between">
                                <button class="btn btn-success">{{ getTanggalSubmit() }}</button>
                                <h6 class="modal-title">Latest Usia Mgg : {{ latest_usia_mgg }}</h6>
                                <h6 class="modal-title">Latest Usia Hari : {{ latest_usia_hari }}</h6>
                                <h6 class="modal-title">Populasi Ayam : {{ totalPopulasi }} ekor</h6>
                            </div>
                            <div class="mb-3">                     
                                <label for="tanggal_submit" class="form-label">Tanggal Submit</label>
                                <Field v-model="tanggal_submit" name="tanggal_submit" class="form-control text-center" type="date" placeholder="Tanggal Submit" />
                                <ErrorMessage class="text-danger" name="tanggal_submit" />
                            </div>
                            <div class="mb-3">
                                <label for="nama_kandang" class="form-label">Nama Kandang</label>
                                <Field v-model="detailKandang.id" id="nama_kandang" as="select" name="nama_kandang" class="form-control text-center" readonly>
                                    <option :value="detailKandang.id">{{ detailKandang.nama }}</option>
                                </Field>
                                <ErrorMessage class="text-danger" name="nama_kandang" />
                            </div>
                            <!-- {{ values }} -->
                            <!-- <Field v-model="detailKandang.id_anak_kandang" name="id_anak_kandang" class="form-control text-center" type="hidden"/> -->
                            <div class="mb-3">
                                <label for="id_anak_kandang" class="form-label">Nama Anak Kandang</label>
                                <Field v-model="detailKandang.id_anak_kandang" id="id_anak_kandang" as="select" name="id_anak_kandang" class="form-control text-center">
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
                                <Field v-model="detailKandang.id_mandor" id="nama_mandor" as="select" name="nama_mandor" class="form-control text-center">
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
                                <Field name="usia_hari" class="form-control text-center" type="number" placeholder="Usia Hari" />
                                <ErrorMessage class="text-danger" name="usia_hari" />
                            </div>
                            <div class="mb-3">
                                <label for="usia_mgg" class="form-label">Usia Minggu</label>
                                <Field name="usia_mgg" class="form-control text-center" type="number" placeholder="Usia Minggu" />
                                <ErrorMessage class="text-danger" name="usia_mgg" />
                            </div>
                            <div class="mb-3">
                                <label for="strain_ayam" class="form-label">Strain Ayam</label>
                                <Field v-model="detailKandang.id_strain_ayam" id="strain_ayam" as="select" name="strain_ayam" class="form-control text-center">
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
                                    <p>ID Kandang : {{ detailKandang.id }} / {{ detailKandang.nama }}</p>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M4.90517 13.8423C5.57808 13.3578 6.29217 12.9749 7.04742 12.6936C7.80214 12.4118 8.61967 12.2708 9.5 12.2708C10.3798 12.2708 11.1973 12.4118 11.9526 12.6936C12.7073 12.9749 13.4214 13.3575 14.0948 13.8415C14.6173 13.3011 15.0377 12.6624 15.356 11.9257C15.6742 11.1878 15.8333 10.3793 15.8333 9.5C15.8333 7.74514 15.2166 6.25074 13.9832 5.01679C12.7498 3.78285 11.2554 3.16614 9.5 3.16667C7.74514 3.16667 6.25074 3.78338 5.01679 5.01679C3.78285 6.25021 3.16614 7.74461 3.16667 9.5C3.16667 10.3798 3.32579 11.1881 3.64404 11.9249C3.96229 12.6622 4.38267 13.3013 4.90517 13.8423ZM9.5 9.89583C8.83342 9.89583 8.27081 9.66678 7.81217 9.20867C7.35406 8.75003 7.125 8.18742 7.125 7.52083C7.125 6.85425 7.35406 6.29164 7.81217 5.833C8.27081 5.37489 8.83342 5.14583 9.5 5.14583C10.1666 5.14583 10.7292 5.37489 11.1878 5.833C11.6459 6.29164 11.875 6.85425 11.875 7.52083C11.875 8.18742 11.6459 8.75003 11.1878 9.20867C10.7292 9.66678 10.1666 9.89583 9.5 9.89583ZM9.5 16.625C8.50619 16.625 7.57599 16.44 6.70938 16.07C5.84276 15.7006 5.08857 15.195 4.44679 14.5532C3.80554 13.9114 3.29993 13.1572 2.92996 12.2906C2.55999 11.424 2.375 10.4938 2.375 9.5C2.375 8.50619 2.55999 7.57599 2.92996 6.70938C3.2994 5.84276 3.80501 5.08857 4.44679 4.44679C5.08857 3.80554 5.84276 3.29993 6.70938 2.92996C7.57599 2.55999 8.50619 2.375 9.5 2.375C10.4938 2.375 11.424 2.55999 12.2906 2.92996C13.1572 3.2994 13.9114 3.80501 14.5532 4.44679C15.1945 5.08857 15.7001 5.84276 16.07 6.70938C16.44 7.57599 16.625 8.50619 16.625 9.5C16.625 10.4938 16.44 11.424 16.07 12.2906C15.7006 13.1572 15.195 13.9114 14.5532 14.5532C13.9114 15.1945 13.1572 15.7001 12.2906 16.07C11.424 16.44 10.4938 16.625 9.5 16.625Z" fill="#0FA958"/>
                                        </svg>
                                        Anak Kandang : {{ detailKandang.nama_anak_kandang }}
                                    </p>
                                </div>
                                <div class="col-md-4">
                                    <div class="bg-grey-rossa rounded p-2 mb-2">{{ getTanggalSubmit() }}</div>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M4.90517 13.8423C5.57808 13.3578 6.29217 12.9749 7.04742 12.6936C7.80214 12.4118 8.61967 12.2708 9.5 12.2708C10.3798 12.2708 11.1973 12.4118 11.9526 12.6936C12.7073 12.9749 13.4214 13.3575 14.0948 13.8415C14.6173 13.3011 15.0377 12.6624 15.356 11.9257C15.6742 11.1878 15.8333 10.3793 15.8333 9.5C15.8333 7.74514 15.2166 6.25074 13.9832 5.01679C12.7498 3.78285 11.2554 3.16614 9.5 3.16667C7.74514 3.16667 6.25074 3.78338 5.01679 5.01679C3.78285 6.25021 3.16614 7.74461 3.16667 9.5C3.16667 10.3798 3.32579 11.1881 3.64404 11.9249C3.96229 12.6622 4.38267 13.3013 4.90517 13.8423ZM9.5 9.89583C8.83342 9.89583 8.27081 9.66678 7.81217 9.20867C7.35406 8.75003 7.125 8.18742 7.125 7.52083C7.125 6.85425 7.35406 6.29164 7.81217 5.833C8.27081 5.37489 8.83342 5.14583 9.5 5.14583C10.1666 5.14583 10.7292 5.37489 11.1878 5.833C11.6459 6.29164 11.875 6.85425 11.875 7.52083C11.875 8.18742 11.6459 8.75003 11.1878 9.20867C10.7292 9.66678 10.1666 9.89583 9.5 9.89583ZM9.5 16.625C8.50619 16.625 7.57599 16.44 6.70938 16.07C5.84276 15.7006 5.08857 15.195 4.44679 14.5532C3.80554 13.9114 3.29993 13.1572 2.92996 12.2906C2.55999 11.424 2.375 10.4938 2.375 9.5C2.375 8.50619 2.55999 7.57599 2.92996 6.70938C3.2994 5.84276 3.80501 5.08857 4.44679 4.44679C5.08857 3.80554 5.84276 3.29993 6.70938 2.92996C7.57599 2.55999 8.50619 2.375 9.5 2.375C10.4938 2.375 11.424 2.55999 12.2906 2.92996C13.1572 3.2994 13.9114 3.80501 14.5532 4.44679C15.1945 5.08857 15.7001 5.84276 16.07 6.70938C16.44 7.57599 16.625 8.50619 16.625 9.5C16.625 10.4938 16.44 11.424 16.07 12.2906C15.7006 13.1572 15.195 13.9114 14.5532 14.5532C13.9114 15.1945 13.1572 15.7001 12.2906 16.07C11.424 16.44 10.4938 16.625 9.5 16.625Z" fill="#0FA958"/>
                                        </svg>
                                        Nama Mandor : {{ detailKandang.nama_mandor }}
                                    </p>
                                </div>
                                <div class="col-md-4">
                                    <p><span class="color-text-rossa">Populasi Ayam:</span> {{ totalPopulasi }} ekor</p>
                                    <p><span class="color-text-rossa">Strain:</span> {{ detailStrain.nama }}</p>
                                </div>
                            </div>
                            <h6 class="mb-3">Ayam</h6>

                            <div class="mb-3">
                                <Field name="mati" class="form-control text-center" type="number" placeholder="Mati" />
                                <ErrorMessage class="text-danger" name="mati" />
                            </div>

                            <div class="mb-3">
                                <Field name="afkir" class="form-control text-center" type="number" placeholder="Afkir" />
                                <ErrorMessage class="text-danger" name="afkir" />
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="mb-3">
                                        <Field name="jumlah_pindah" class="form-control text-center" type="number" placeholder="Jumlah Pindah" />
                                        <ErrorMessage class="text-danger" name="jumlah_pindah" />
                                    </div>

                                </div> 
                                <div class="col">
                                    <div class="mb-3">
                                        <Field @change="getKandangPenerima($event)" as="select" name="id_kandang_tujuan" class="form-control text-center">
                                            <template v-if="dataKandang.responseData">
                                                <option value="">Pilih Nama Kandang Penerima</option>
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
                                        <Field name="jumlah_terima" class="form-control text-center" type="number" placeholder="Jumlah Terima" />
                                        <ErrorMessage class="text-danger" name="jumlah_terima" />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="mb-3">
                                        <Field @change="getKandangPengirim($event)" as="select" name="id_kandang_pengirim" class="form-control text-center">
                                            <template v-if="dataKandang.responseData">
                                                <option value="">Pilih Nama Kandang Pengirim</option>
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
                                    <p>ID Kandang : {{ detailKandang.id }} / {{ detailKandang.nama }}</p>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M4.90517 13.8423C5.57808 13.3578 6.29217 12.9749 7.04742 12.6936C7.80214 12.4118 8.61967 12.2708 9.5 12.2708C10.3798 12.2708 11.1973 12.4118 11.9526 12.6936C12.7073 12.9749 13.4214 13.3575 14.0948 13.8415C14.6173 13.3011 15.0377 12.6624 15.356 11.9257C15.6742 11.1878 15.8333 10.3793 15.8333 9.5C15.8333 7.74514 15.2166 6.25074 13.9832 5.01679C12.7498 3.78285 11.2554 3.16614 9.5 3.16667C7.74514 3.16667 6.25074 3.78338 5.01679 5.01679C3.78285 6.25021 3.16614 7.74461 3.16667 9.5C3.16667 10.3798 3.32579 11.1881 3.64404 11.9249C3.96229 12.6622 4.38267 13.3013 4.90517 13.8423ZM9.5 9.89583C8.83342 9.89583 8.27081 9.66678 7.81217 9.20867C7.35406 8.75003 7.125 8.18742 7.125 7.52083C7.125 6.85425 7.35406 6.29164 7.81217 5.833C8.27081 5.37489 8.83342 5.14583 9.5 5.14583C10.1666 5.14583 10.7292 5.37489 11.1878 5.833C11.6459 6.29164 11.875 6.85425 11.875 7.52083C11.875 8.18742 11.6459 8.75003 11.1878 9.20867C10.7292 9.66678 10.1666 9.89583 9.5 9.89583ZM9.5 16.625C8.50619 16.625 7.57599 16.44 6.70938 16.07C5.84276 15.7006 5.08857 15.195 4.44679 14.5532C3.80554 13.9114 3.29993 13.1572 2.92996 12.2906C2.55999 11.424 2.375 10.4938 2.375 9.5C2.375 8.50619 2.55999 7.57599 2.92996 6.70938C3.2994 5.84276 3.80501 5.08857 4.44679 4.44679C5.08857 3.80554 5.84276 3.29993 6.70938 2.92996C7.57599 2.55999 8.50619 2.375 9.5 2.375C10.4938 2.375 11.424 2.55999 12.2906 2.92996C13.1572 3.2994 13.9114 3.80501 14.5532 4.44679C15.1945 5.08857 15.7001 5.84276 16.07 6.70938C16.44 7.57599 16.625 8.50619 16.625 9.5C16.625 10.4938 16.44 11.424 16.07 12.2906C15.7006 13.1572 15.195 13.9114 14.5532 14.5532C13.9114 15.1945 13.1572 15.7001 12.2906 16.07C11.424 16.44 10.4938 16.625 9.5 16.625Z" fill="#0FA958"/>
                                        </svg>
                                        Anak Kandang : {{ detailKandang.nama_anak_kandang }}
                                    </p>
                                </div>
                                <div class="col-md-4">
                                    <div class="bg-grey-rossa rounded p-2">{{ getTanggalSubmit() }}</div>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M4.90517 13.8423C5.57808 13.3578 6.29217 12.9749 7.04742 12.6936C7.80214 12.4118 8.61967 12.2708 9.5 12.2708C10.3798 12.2708 11.1973 12.4118 11.9526 12.6936C12.7073 12.9749 13.4214 13.3575 14.0948 13.8415C14.6173 13.3011 15.0377 12.6624 15.356 11.9257C15.6742 11.1878 15.8333 10.3793 15.8333 9.5C15.8333 7.74514 15.2166 6.25074 13.9832 5.01679C12.7498 3.78285 11.2554 3.16614 9.5 3.16667C7.74514 3.16667 6.25074 3.78338 5.01679 5.01679C3.78285 6.25021 3.16614 7.74461 3.16667 9.5C3.16667 10.3798 3.32579 11.1881 3.64404 11.9249C3.96229 12.6622 4.38267 13.3013 4.90517 13.8423ZM9.5 9.89583C8.83342 9.89583 8.27081 9.66678 7.81217 9.20867C7.35406 8.75003 7.125 8.18742 7.125 7.52083C7.125 6.85425 7.35406 6.29164 7.81217 5.833C8.27081 5.37489 8.83342 5.14583 9.5 5.14583C10.1666 5.14583 10.7292 5.37489 11.1878 5.833C11.6459 6.29164 11.875 6.85425 11.875 7.52083C11.875 8.18742 11.6459 8.75003 11.1878 9.20867C10.7292 9.66678 10.1666 9.89583 9.5 9.89583ZM9.5 16.625C8.50619 16.625 7.57599 16.44 6.70938 16.07C5.84276 15.7006 5.08857 15.195 4.44679 14.5532C3.80554 13.9114 3.29993 13.1572 2.92996 12.2906C2.55999 11.424 2.375 10.4938 2.375 9.5C2.375 8.50619 2.55999 7.57599 2.92996 6.70938C3.2994 5.84276 3.80501 5.08857 4.44679 4.44679C5.08857 3.80554 5.84276 3.29993 6.70938 2.92996C7.57599 2.55999 8.50619 2.375 9.5 2.375C10.4938 2.375 11.424 2.55999 12.2906 2.92996C13.1572 3.2994 13.9114 3.80501 14.5532 4.44679C15.1945 5.08857 15.7001 5.84276 16.07 6.70938C16.44 7.57599 16.625 8.50619 16.625 9.5C16.625 10.4938 16.44 11.424 16.07 12.2906C15.7006 13.1572 15.195 13.9114 14.5532 14.5532C13.9114 15.1945 13.1572 15.7001 12.2906 16.07C11.424 16.44 10.4938 16.625 9.5 16.625Z" fill="#0FA958"/>
                                        </svg>
                                        Mandor : {{ detailKandang.nama_mandor }}
                                    </p>
                                </div>
                                <div class="col-md-4">
                                    <p><span class="color-text-rossa">Populasi Ayam:</span> {{ populasi_ayam }} ekor</p>
                                    <p><span class="color-text-rossa">Strain:</span> {{ detailStrain.nama }}</p>
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
                                <Field name="jml_telur_utuh" class="form-control text-center" type="number" placeholder="Jumlah Telur Utuh" />
                                <ErrorMessage class="text-danger" name="jml_telur_utuh" />
                            </div>
                            <div class="mb-3">
                                <Field name="jml_telur_bentes" class="form-control text-center" type="number" placeholder="Jumlah Telur Bentes" />
                                <ErrorMessage class="text-danger" name="jml_telur_bentes" />
                            </div>
                            <div class="mb-3">
                                <Field name="berat_telur_utuh" class="form-control text-center" type="number" placeholder="Berat Telur Utuh" />
                                <ErrorMessage class="text-danger" name="berat_telur_utuh" />
                            </div>
                            <div class="mb-3">
                                <Field name="berat_telur_bentes" class="form-control text-center" type="number" placeholder="Berat Telur Bentes" />
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
                                <Field as="select" name="jenis_pakan" class="form-control text-center">
                                    <template v-if="dataPakan.responseData">
                                        <option value="">Pilih Nama Pakan</option>
                                        <option v-for="item in dataPakan.responseData.data.items" :key="item.id" :value="item.id">{{ item.nama }}</option>
                                    </template>
                                </Field>
                                <ErrorMessage class="text-danger" name="jenis_pakan" />
                            </div>
                            <div class="mb-3">
                                <Field as="select" name="jenis_treatment" class="form-control text-center">
                                    <template v-if="dataTreatment.responseData">
                                        <option value="">Pilih Nama Treatment</option>
                                        <option v-for="item in dataTreatment.responseData.data.items" :key="item.id" :value="item.id">{{ item.nama }}</option>
                                    </template>
                                </Field>
                                <ErrorMessage class="text-danger" name="jenis_treatment" />
                            </div>
                            <div class="mb-3">
                                <Field name="berat_pakan" class="form-control text-center" type="number" placeholder="Berat Pakan" />
                                <ErrorMessage class="text-danger" name="berat_pakan" />
                            </div>
                            <div class="mb-3">
                                <Field as="textarea" name="catatan" class="form-control text-center" placeholder="Catatan" />
                                <ErrorMessage class="text-danger" name="catatan" />
                            </div>
                        </template>

                        <div class="text-end">
                            <p>{{ currentStep+1 }} / 4</p>
                            <button class="btn btn-success bg-button-rossa" v-if="currentStep !== 0" type="button" @click="prevStep">
                            Previous
                            </button>

                            <button class="ms-3 btn btn-success bg-button-rossa" v-if="currentStep !== 3" type="submit">Next</button>

                            <button type="submit" class="ms-3 btn btn-success bg-button-rossa" v-if="currentStep === 3" :disabled="isSubmitting">
                                Finish
                                <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                            </button>
                        </div>
                    
                    </Form>
                
                </div>
                <div class="modal-footer">
                    <div v-if="apiError" class="alert alert-danger mt-3 mb-0">{{ apiError }}</div> 
                </div>
            </div>
        </div>
    </div>

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
                    <h5 class="d-inline">ID Kandang : {{ detailKandang.id }} / {{ detailKandang.nama }}</h5>
                    <div class="p-2 ms-3 bg-button-rossa d-inline rounded">{{ getTanggalSubmit() }}</div>
                    </div>
                    <div class="mb-4">
                    <p>
                        <span class="color-text-rossa">Populasi ayam: <span class="text-secondary">{{ detailPencatatan.populasi_ayam }}</span></span>
                        <span class="ms-4 color-text-rossa">FC: <span class="text-secondary">{{ detailStandart.nilai_fc }}</span></span>
                        <span class="ms-4 color-text-rossa">FI: <span class="text-secondary">{{ detailStandart.nilai_fi }}</span></span>
                        <span class="ms-4 color-text-rossa">Egg mass: <span class="text-secondary">{{ detailStandart.egg_mass }}</span></span>
                        <span class="ms-4 color-text-rossa">Strain: <span class="text-secondary">{{ detailStrain.nama }}</span></span>
                    </p>
                    <p>
                        <span class="color-text-rossa">Latest Usia Mgg: <span class="text-secondary">{{ latest_usia_mgg }}</span></span>
                        <span class="ms-4 color-text-rossa">Latest Usia Hari: <span class="text-secondary">{{ latest_usia_hari }}</span></span>
                    </p>
                    </div>
                    <div>
                    <span class="ms-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                        <ellipse cx="11.5" cy="10.5" rx="11.5" ry="10.5" fill="#D9D9D9"/>
                        </svg>
                        Anak kandang : {{ detailKandang.nama_anak_kandang }}
                    </span>
                    <span class="ms-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                        <ellipse cx="11.5" cy="10.5" rx="11.5" ry="10.5" fill="#D9D9D9"/>
                        </svg>
                        Mandor : {{ detailKandang.nama_mandor }}
                    </span>
                    </div>
                </div>
                <!-- table -->
                <div class="table-responsive mt-5">
                    <table class="table pelaporan table-bordered">
                    <thead>
                        <tr>
                            <th rowspan="2" scope="col">Tanggal Submit</th>
                            <th rowspan="2" scope="col">Tanggal Validasi</th>
                            <th colspan="2" scope="col">Usia</th>
                            <th colspan="4" scope="col">Populasi</th>
                            <th colspan="2" scope="col">Produksi Telur</th>
                            <th colspan="2" scope="col">Berat Telur</th>
                         
                            <th colspan="2" scope="col">Pakan</th>
                            <th rowspan="2" scope="col">Treatment</th>
                            <!-- <th rowspan="2" scope="col">Edit</th> -->
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
                        <template v-if="dataPencatatan.responseData && dataPencatatan.responseData.data.items.length > 0">
                        <tr v-for="(item, index) in dataPencatatan.responseData.data.items" :key="index" class="text-center">
                            <td>{{ formatTanggalSubmit(item.tanggal_submit) }}</td>
                            <!-- <td>{{ item.tanggal_submit }}</td> -->
                            <td>{{ formatTanggalSubmit(item.tanggal_validasi) }}</td>
                            <td>{{ item.usia_hari }}</td>
                            <td>{{ item.usia_mgg }}</td>
                            <td>{{ item.jumlah_mati }}</td>
                            <td>{{ item.jumlah_afkir }}</td>
                            <td>{{ item.jumlah_pindah }}</td>
                            <td>{{ item.jumlah_terima }}</td>

                            <td>{{ item.telur_utuh }}</td>
                            <td>{{ item.telur_bentes }}</td>

                            <td>{{ item.berat_utuh }}</td>
                            <td>{{ item.berat_bentes }}</td>

                            <td>{{ item.berat_pakan }}</td>
                            <td>{{ item.jenis_pakan ? item.jenis_pakan.nama : '-' }}</td>

                            <td>{{ item.treatment ? item.treatment.nama : '-' }}</td>
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
                
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="editModal" data-bs-backdrop="static">
        <div class="modal-dialog modal-lg shadow-lg rounded modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <Form
                        @submit="nextStepEdit"
                        :validation-schema="currentSchema"
                        keep-values
                        v-slot="{ handleSubmit, values }"
                        >
                        <template v-if="currentStep === 0"> 
                            <!-- <label for="recipient-name" class="col-form-label">Recipient:</label>
                            <input type="text" class="form-control" id="recipient-name"> -->
                            <div class="mb-4 d-flex justify-content-between">
                                <button class="btn btn-success">{{ dateSubmitPencatatan }}</button>
                                <h6 class="modal-title">Latest Usia Mgg : {{ latest_usia_mgg }}</h6>
                                <h6 class="modal-title">Latest Usia Hari : {{ latest_usia_hari }}</h6>
                                <h6 class="modal-title" id="exampleModalLabel">Populasi Ayam : {{ detailPencatatan.populasi_ayam }} ekor</h6>
                            </div>
                            <div class="mb-3"> 
                                <label for="tanggal_submit" class="form-label">Tanggal Submit</label>
                                <Field v-model="tanggal_submit" name="tanggal_submit" class="form-control text-center" type="date" placeholder="Tanggal Submit" />
                                <ErrorMessage class="text-danger" name="tanggal_submit" />
                            </div>
                            <div class="mb-3">
                                <label for="nama_kandang" class="form-label">Nama Kandang</label>
                                <Field v-model="detailPencatatan.id_kandang" id="nama_kandang" as="select" name="nama_kandang" class="form-control text-center" readonly>
                                    <option :value="detailPencatatan.id_kandang">{{ detailPencatatan.nama_kandang }}</option>
                                </Field>
                                <ErrorMessage class="text-danger" name="nama_kandang" />
                            </div>
                            <!-- {{ values }} -->
                            <!-- <Field v-model="detailPencatatan.id_anak_kandang" name="id_anak_kandang" class="form-control text-center" type="hidden"/> -->
                            <div class="mb-3">
                                <label for="id_anak_kandang" class="form-label">Nama Anak Kandang</label>
                                <Field v-model="detailKandang.id_anak_kandang" id="id_anak_kandang" as="select" name="id_anak_kandang" class="form-control text-center">
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
                                <Field v-model="detailPencatatan.usia_hari" id="usia_hari" name="usia_hari" class="form-control text-center" type="number" />
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
                                <Field v-model="detailPencatatan.jumlah_mati" name="mati" class="form-control text-center" type="number" placeholder="Mati" />
                                <ErrorMessage class="text-danger" name="mati" />
                            </div>

                            <div class="mb-3">
                                <Field v-model="detailPencatatan.jumlah_afkir" name="afkir" class="form-control text-center" type="number" placeholder="Afkir" />
                                <ErrorMessage class="text-danger" name="afkir" />
                            </div>

                            <div class="row">
                                <div class="col">
                                    <div class="mb-3">
                                        <Field v-model="detailPencatatan.jumlah_pindah" name="jumlah_pindah" class="form-control text-center" type="number" placeholder="Jumlah Pindah" />
                                        <ErrorMessage class="text-danger" name="jumlah_pindah" />
                                    </div>

                                </div> 
                                <div class="col">
                                    <div class="mb-3">
                                        <Field @change="getKandangPenerima($event)" as="select" name="id_kandang_tujuan" class="form-control text-center">
                                            <template v-if="dataKandang.responseData">
                                                <option value="">Pilih Nama Kandang Penerima</option>
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
                                        <Field v-model="detailPencatatan.jumlah_terima" name="jumlah_terima" class="form-control text-center" type="number" placeholder="Jumlah Terima" />
                                        <ErrorMessage class="text-danger" name="jumlah_terima" />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="mb-3">
                                        <Field @change="getKandangPengirim($event)" as="select" name="id_kandang_pengirim" class="form-control text-center">
                                            <template v-if="dataKandang.responseData">
                                                <option value="">Pilih Nama Kandang Pengirim</option>
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
                                <Field v-model="detailPencatatan.telur_utuh" name="jml_telur_utuh" class="form-control text-center" type="number" placeholder="Jumlah Telur Utuh" />
                                <ErrorMessage class="text-danger" name="jml_telur_utuh" />
                            </div>
                            <div class="mb-3">
                                <Field v-model="detailPencatatan.telur_bentes" name="jml_telur_bentes" class="form-control text-center" type="number" placeholder="Jumlah Telur Bentes" />
                                <ErrorMessage class="text-danger" name="jml_telur_bentes" />
                            </div>
                            <div class="mb-3">
                                <Field v-model="detailPencatatan.berat_utuh" name="berat_telur_utuh" class="form-control text-center" type="number" placeholder="Berat Telur Utuh" />
                                <ErrorMessage class="text-danger" name="berat_telur_utuh" />
                            </div>
                            <div class="mb-3">
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
    import HeaderItem from '@/components/HeaderItem.vue'
    import { CChart } from '@coreui/vue-chartjs'
    import { onMounted, ref, computed, reactive, watch } from 'vue'
    import { Field, ErrorMessage, Form } from 'vee-validate';
    import * as yup from 'yup';
    import { kandangStore, strainStore, pakanStore, treatmentStore, pencatatanStore, standartStore, pelaporanStore, karyawanStore } from '@/stores';
    import axios from 'axios'
    import { useRoute } from 'vue-router'
    import moment from 'moment'
    import moments from 'moment-timezone';
    import Swal from 'sweetalert2'

    const baseUrl = `${import.meta.env.VITE_API_URL}`;
    const route = useRoute();
    const user = localStorage.getItem('user');
    const role = JSON.parse(user) ? JSON.parse(user).data.roles[0].nama : '';
    const superadmin = ref('Super Admin');
    const adminKandang = ref('Admin Kandang');
    const adminKantor = ref('Admin Kantor');

    const apiError = ref(null);

    const dataKandang = reactive(kandangStore());
    const dataStrain = reactive(strainStore());
    const dataPakan = reactive(pakanStore());
    const dataTreatment = reactive(treatmentStore());
    const dataPencatatan = reactive(pencatatanStore());
    const dataStandart = reactive(standartStore());
    const dataPelaporan = reactive(pelaporanStore());
    const dataKaryawan = reactive(karyawanStore());

    const detailKandang = reactive({
        id: '',
        nama: '',
        alamat: '',
        id_mandor: '',
        id_anak_kandang: '',
        nama_mandor: '',
        nama_anak_kandang: '',
        id_strain_ayam: '',
        populasi_awal: '',
    });

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

    const detailPakan = reactive({
        id: '',
        nama: '',
        deskripsi: '',
    });

    const totalTelurUtuh = ref(0);
    const totalTelurBentes = ref(0);
    const totalBeratTelurUtuh = ref(0);
    const totalBeratTelurBentes = ref(0);
    const totalMati = ref(0);
    const totalAfkir = ref(0);
    const totalPindah = ref(0);
    const totalTerima = ref(0);
    const totalPopulasi = ref(0);
    const status = ref(null);
    const date = ref(0);
    const dateSubmitPencatatan = ref(0);
    const idKandang = ref(null);
    const today = new Date();
    const latest_usia_mgg = ref(0);
    const latest_usia_hari = ref(0);
    const tanggal_submit = ref(new Date().toISOString().substr(0, 10));
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const rangeDate = reactive({
        start: null,
        end: null,
    });
    const selectedDate = ref([
        new Date(2022, 1, 1),
        tomorrow,
    ]);
    const isSubmitting = ref(false);
    
    watch(() => detailPencatatan.tanggal_submit, (newValue, oldValue) => {
        date.value = new Date(newValue);
        dateSubmitPencatatan.value = moment(date).format("DD MMMM YYYY");
    });

    function getTanggalSubmit() {
        const hariIni = tanggal_submit.value;

        const tanggalHariIni = moment(hariIni).format("DD MMMM YYYY");

        return `${tanggalHariIni}`;
    }
    
    const detailStrain = reactive({
        id: '',
        nama: '',
        deskripsi: '',
    });

    const schemas = [
        yup.object({
            tanggal_submit: yup.date().required(),
            id_anak_kandang: yup.number().required(),
            nama_kandang: yup.number().required(),
            nama_mandor: yup.string().required(),
            usia_hari: yup.number().required(),
            usia_mgg: yup.number().required(),
            strain_ayam: yup.number().required(),
        }),
        yup.object({
            mati: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null) ,
            afkir: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null) ,
            jumlah_pindah: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null) ,
            jumlah_terima: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null) ,
            id_kandang_pengirim: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null),
            id_kandang_penerima: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null),
        }),
        yup.object({
            jml_telur_utuh: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null) ,
            jml_telur_bentes: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null) ,
            berat_telur_utuh: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null) ,
            berat_telur_bentes: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null) ,
        }),
        yup.object({
            jenis_pakan: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null) ,
            jenis_treatment: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null) ,
            berat_pakan: yup.number().nullable().transform((_, val) => val === Number(val) ? val : null) ,
            catatan: yup.string().nullable(),
        }),
    ];

    const currentStep = ref(0);

    const currentSchema = computed(() => {
        return schemas[currentStep.value];
    });
    const formatTanggalSubmit = (tanggal) => {
        return moment.utc(tanggal).format('DD-MM-YYYY');
    }
    const getOnlyDate = (tanggal) => {
        return moment(tanggal).format('DD');
    }
    const labels = ref([]);
    const namaLabels = ref([]);
    const telurUtuhData = ref([]);
    const jumlahMatiData = ref([]);
    const nilai_fi = ref([]);
    const totalGramPerEkorPakan = ref([]);
    const totalAvgAllBeratTelurGr = ref([]);
    const totalAvgTotalTelur = ref([]);
    const totalAvgBeratTelur = ref([]);
    const egg_mass_pelaporan = ref(0);
    const fc_pelaporan = ref(0);
    const berat_telur_gr = ref(0);
    const berat_telur_kg = ref(0);
    const total_telur = ref(0);
    const avg_total_telur = ref(0);
    const berat_pakan_per_ekor_gram = ref(0);
    const percentase_telur = ref(0);
    const avgall_berat_telur_gr = ref(0);
    const avg_berat_telur_kg = ref(0);
    const sum_berat_pakan = ref(0);
    const total_berat_pakan = ref(0);
    const persentase_pakan = ref(0);
    const sumall_berat_pakan = ref(0);
    const std_gr_perekor = ref(0);
    const sum_berat_pakan_daily = ref(0);
    const jenis_pakan_items = ref([]);
    const labelJenisPakan = ref([]);
    const backgroundColorJenisPakan = ref([]);
    const dataJenisPakan = ref([]);

    onMounted(() => {
        getKaryawan();
        rangeDate.start = moment(selectedDate.value[0]).format("YYYY-MM-DD");
        rangeDate.end = moment(selectedDate.value[1]).format("YYYY-MM-DD");
        getIdKandang(route.params.id);
        getPencatatan(route.params.id);
        getPelaporan(route.params.id, rangeDate.start, rangeDate.end);
         // Buat label untuk 7 hari terakhir
        for (let i = 6; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            labels.value.push(date.toDateString()); // Tambahkan label tanggal
            namaLabels.value.push(getOnlyDate(date));
        }

    })

    function nextStep(values) {
        if (currentStep.value === 3) {
            onSubmit(values);
            console.log('Done: ', JSON.stringify(values, null, 2));
            return;
        }
        currentStep.value++;
    }
    
    function nextStepEdit(values) {
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

    const namaKandangPengirim = ref(null);
    function getKandangPengirim(event) {
        const selectedId = event.target.value;
        const items = dataKandang.responseData.data.items;
        for (const item of items) {
            if (item.id == selectedId) {
                namaKandangPengirim.value = item.nama;
                console.log(namaKandangPengirim.value)
            }
        }
        
    }

    const namaKandangPenerima = ref(null);
    function getKandangPenerima(event) {
        const selectedId = event.target.value;
        const items = dataKandang.responseData.data.items;
        for (const item of items) {
            if (item.id == selectedId) {
                namaKandangPenerima.value = item.nama;
                console.log(namaKandangPenerima.value)
            }
        }
        
    }

    async function getTotal() {
        if(dataPencatatan.responseData) {
            if (dataPencatatan.responseData.data.items.length > 0) {
                totalTelurUtuh.value = dataPencatatan.responseData.data.items[0].telur_utuh || 0;
                totalTelurBentes.value = dataPencatatan.responseData.data.items[0].telur_bentes || 0;
                totalBeratTelurUtuh.value = dataPencatatan.responseData.data.items[0].berat_utuh || 0;
                totalBeratTelurBentes.value = dataPencatatan.responseData.data.items[0].berat_bentes || 0;
                totalMati.value = dataPencatatan.responseData.data.items[0].jumlah_mati || 0;
                totalAfkir.value = dataPencatatan.responseData.data.items[0].jumlah_afkir || 0;
                totalPindah.value = dataPencatatan.responseData.data.items[0].jumlah_pindah || 0;
                totalTerima.value = dataPencatatan.responseData.data.items[0].jumlah_terima || 0;
                totalPopulasi.value = dataPencatatan.responseData.data.total_populasi || 0;
                status.value = dataPencatatan.responseData.data.items[0].status || 0;
                getIdPencatatan(dataPencatatan.responseData.data.items[0].id);
            }
        }
    }

    async function onSubmit(values) {
        isSubmitting.value = true;
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        const { tanggal_submit, nama_kandang, id_anak_kandang, usia_hari, usia_mgg, nama_mandor, strain_ayam, mati, afkir, jumlah_pindah, id_kandang_pengirim, jumlah_terima, id_kandang_tujuan, jml_telur_utuh, jml_telur_bentes, berat_telur_utuh, berat_telur_bentes, jenis_pakan, jenis_treatment, berat_pakan, catatan } = values;
        console.log(values);
        return axios.post(baseUrl + '/pencatatan', {
            tanggal_submit: tanggal_submit,
            id_kandang: nama_kandang,
            id_mandor: nama_mandor,
            id_anak_kandang: id_anak_kandang,
            usia_hari: usia_hari,
            usia_mgg: usia_mgg,
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
                getPencatatan(route.params.id);
                alert('success', 'Data pencatatan berhasil ditambahkan');
                closeModal();
                console.log(response);
            })
            .catch(error => {
                isSubmitting.value = false;
                console.error(error);
                alert('error', error.response.data.message);
                apiError.value = error.response.data.message;
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
                console.log(response);
                alert('success', 'Data pencatatan berhasil diubah');
                getPencatatan(detailKandang.id);
                closeModal();
            })
            .catch(error => {
                isSubmitting.value = false;
                alert('error', error.response.data.message);
                console.error(error);
            });
    }

    async function getIdPencatatan(params) {
        getStrain();
        getPakan();
        getTreatment();
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/pencatatan/' + params, {
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
                getIdStandart(response.data.data.strain_ayam.id);
                getIdPakan(detailPencatatan.id_jenis_pakan);
                // console.log("Detail Pencatatan : ", detailPencatatan);
                console.log("Detail Pencatatan : ", response);
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
            })
            .catch(error => {
                console.error(error);
            });
    }

    async function getPencatatan(id_kandang) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/pencatatan', {
            params: {
                status: "accepted",
                column_sorting: "tanggal_submit desc",
                id_kandang: id_kandang,
            },
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                dataPencatatan.setResponseData(response.data);
                const items = dataPencatatan.responseData.data.items;
        
                console.log("Data Pencatatan : ", items);

                // Buat array untuk menyimpan data telur utuh per tanggal
                const telurUtuhPerTanggal = {};
                const jumlahMatiPerTanggal = {};

                // Loop melalui data respons
                items.forEach(item => {
                    // const tanggalSubmit = new Date(item.tanggal_submit);
                    const todays = moments().utc();
                    const tanggalSubmit = moments(item.tanggal_submit).utc();
                    console.log("Tanggal Submit : ", tanggalSubmit);
                    const diffTime = Math.abs(todays - tanggalSubmit);
                    // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    const diffDays = todays.diff(tanggalSubmit, 'days'); 
                    // Cek apakah tanggal submit ada di antara 7 hari terakhir
                    console.log("Diff Days : ", item.tanggal_submit);
                    if (diffDays <= 6) {
                        const tanggalKey = tanggalSubmit.format('ddd MMM DD YYYY'); // Buat kunci berdasarkan tanggal
                        console.log("Tanggal Key : ", tanggalKey);
                        // Tambahkan data telur utuh ke dalam objek, menjumlahkan jika sudah ada
                        if (telurUtuhPerTanggal[tanggalKey]) {
                            telurUtuhPerTanggal[tanggalKey] += item.telur_utuh;
                        } else {
                            telurUtuhPerTanggal[tanggalKey] = item.telur_utuh;
                        }
                        if (jumlahMatiPerTanggal[tanggalKey]) {
                            jumlahMatiPerTanggal[tanggalKey] += item.jumlah_mati || 0; // Menambahkan jumlah_mati, jika tidak ada maka 0
                        } else {
                            jumlahMatiPerTanggal[tanggalKey] = item.jumlah_mati || 0; // Mengatur jumlah_mati, jika tidak ada maka 0
                        }
                    }
                });

                // Buat array untuk menyimpan data telur utuh untuk 7 hari terakhir
               
                labels.value.forEach(label => {
                    telurUtuhData.value.push(telurUtuhPerTanggal[label] || null);
                    jumlahMatiData.value.push(jumlahMatiPerTanggal[label] || null);
                });


                console.log("Labels : ", labels);
                console.log("Telur Utuh Data : ", telurUtuhData);

                latest_usia_mgg.value = dataPencatatan.responseData.data.latest_usia_mgg;
                latest_usia_hari.value = dataPencatatan.responseData.data.latest_usia_hari;
            
                detailPencatatan.populasi_ayam = dataPencatatan.responseData.data.total_populasi;
                console.log("List Pencatatan : ", dataPencatatan.responseData);
                getTotal();
            })
            .catch(error => {
                console.error(error);
            });
    }
 

    async function getKandang() {
        getStrain();
        getPakan();
        getTreatment();
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

    async function getIdKandang(params) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/kandang/' + params, {
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
                detailKandang.id_strain_ayam = response.data.data.id_strain_ayam;
                detailKandang.populasi_awal = response.data.data.populasi_total;
                getIdStrain(detailKandang.id_strain_ayam);
                idKandang.value = response.data.data.id;
                console.log(detailKandang);
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
                console.log("Strain Ayam : ", response);
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
                dataStandart.setResponseData(response.data);
                detailStandart.id = response.data.data.items[0].id;
                detailStandart.id_strain_ayam = response.data.data.items[0].id_strain_ayam;
                detailStandart.umur = response.data.data.items[0].umur;
                detailStandart.nilai_hd = response.data.data.items[0].nilai_hd;
                detailStandart.nilai_bb = response.data.data.items[0].nilai_bb;
                detailStandart.nilai_bt = response.data.data.items[0].nilai_bt;
                detailStandart.nilai_fi = response.data.data.items[0].nilai_fi ?? 0;
                detailStandart.nilai_fc = response.data.data.items[0].nilai_fc ?? 0;
                detailStandart.egg_mass = response.data.data.items[0].egg_mass ?? 0;
                detailStandart.deskripsi = response.data.data.items[0].deskripsi;

                const items = dataStandart.responseData.data.items;
                const nilaiFiPerTanggal = {};

                // Loop melalui data respons
                items.forEach(item => {
                    const tanggalSubmit = new Date(item.created_at);
                    const diffTime = Math.abs(today - tanggalSubmit);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                    // Cek apakah tanggal submit ada di antara 7 hari terakhir
                    if (diffDays <= 6) {
                        const tanggalKey = tanggalSubmit.toDateString(); // Buat kunci berdasarkan tanggal

                        // Tambahkan data telur utuh ke dalam objek, menjumlahkan jika sudah ada
                        if (nilaiFiPerTanggal[tanggalKey]) {
                            nilaiFiPerTanggal[tanggalKey] += item.nilai_fi;
                        } else {
                            nilaiFiPerTanggal[tanggalKey] = item.nilai_fi;
                        }
                      
                    }
                });

                // Buat array untuk menyimpan data telur utuh untuk 7 hari terakhir
               
                labels.value.forEach(label => {
                    nilai_fi.value.push(nilaiFiPerTanggal[label] || null);
                 
                });
               
            })
            .catch(error => {
                console.error(error);
            });
    }

    function getProduksiTelur(items) {
        const gramPerEkorPakan = {};
        const avgAllBeratTelurGr = {};
        const avgTotaltelur = {};
        const avgBeratTelur = {};
        
        items.forEach(item => {
            const tanggalSubmit = new Date(item.tanggal_submit);
            const diffTime = Math.abs(today - tanggalSubmit);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays <= 6) {
                const tanggalKey = tanggalSubmit.toDateString(); 
                if (gramPerEkorPakan[tanggalKey]) {
                    gramPerEkorPakan[tanggalKey] = item.berat_pakan_per_ekor_gram;
                } else {
                    gramPerEkorPakan[tanggalKey] = item.berat_pakan_per_ekor_gram;
                }
                if (avgAllBeratTelurGr[tanggalKey]) {
                    avgAllBeratTelurGr[tanggalKey] = item.avg_berat_telur_gr;
                } else {
                    avgAllBeratTelurGr[tanggalKey] = item.avg_berat_telur_gr;
                }
                if (avgTotaltelur[tanggalKey]) {
                    avgTotaltelur[tanggalKey] = item.total_telur;
                } else {
                    avgTotaltelur[tanggalKey] = item.total_telur;
                }
                if (avgBeratTelur[tanggalKey]) {
                    avgBeratTelur[tanggalKey] = item.berat_telur_kg;
                } else {
                    avgBeratTelur[tanggalKey] = item.berat_telur_kg;
                }
            }
        });

        labels.value.forEach(label => {
            totalGramPerEkorPakan.value.push(gramPerEkorPakan[label] || null);
            totalAvgAllBeratTelurGr.value.push(avgAllBeratTelurGr[label] || null);
            totalAvgTotalTelur.value.push(avgTotaltelur[label] || null);
            totalAvgBeratTelur.value.push(avgBeratTelur[label] || null);
        });
        console.log("avgAllBeratTelurGr : ", avgAllBeratTelurGr);
        avgall_berat_telur_gr.value = totalAvgAllBeratTelurGr.value[6] ? totalAvgAllBeratTelurGr.value[6] + '' : 0;
        avg_total_telur.value = totalAvgTotalTelur.value[6] ? totalAvgTotalTelur.value[6] + '' : 0;
        avg_berat_telur_kg.value = totalAvgBeratTelur.value[6] ? totalAvgBeratTelur.value[6] + '' : 0;
    }

    function getJenisPakanItems(items) {
        const randomColor = () => {
            const r = Math.floor(Math.random() * 255);
            const g = Math.floor(Math.random() * 255);
            const b = Math.floor(Math.random() * 255);

            return `rgb(${r}, ${g}, ${b})`;
        };
        jenis_pakan_items.value = items;
        labelJenisPakan.value = [];
        backgroundColorJenisPakan.value = [];
        dataJenisPakan.value = [];
        items.forEach(item => {
            labelJenisPakan.value.push(item.nama_jenis_pakan);
            backgroundColorJenisPakan.value.push(randomColor());
            dataJenisPakan.value.push(item.persentase_pakan);
        });
    }

    async function getPelaporan(id_kandang, startDate, endDate) {
        if (id_kandang == 0) {
            id_kandang = null;
        }
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/laporan', {
            params: {
                id_kandang: id_kandang,
                start_date: startDate,
                end_date: endDate,
            },
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                dataPelaporan.setResponseData(response.data);
                console.log("Data Pelaporan : ", response);
                egg_mass_pelaporan.value = dataPelaporan.responseData.data.items[0].egg_mass ?? 0;
                fc_pelaporan.value = dataPelaporan.responseData.data.items[0].fc ?? 0;
                berat_telur_gr.value = dataPelaporan.responseData.data.items[0].berat_telur_gr ?? 0;
                berat_telur_kg.value = dataPelaporan.responseData.data.items[0].berat_telur_kg ?? 0;
                total_telur.value = dataPelaporan.responseData.data.items[0].total_telur ?? 0;
                berat_pakan_per_ekor_gram.value = dataPelaporan.responseData.data.items[0].berat_pakan_per_ekor_gram ?? 0;
                percentase_telur.value = dataPelaporan.responseData.data.items[0].percentase_telur ?? 0;
                sum_berat_pakan.value = dataPelaporan.responseData.data.jenis_pakan_items[0].sum_berat_pakan ?? 0;
                total_berat_pakan.value = dataPelaporan.responseData.data.jenis_pakan_items[0].total_berat_pakan ?? 0;
                persentase_pakan.value = dataPelaporan.responseData.data.jenis_pakan_items[0].persentase_pakan ?? 0;
                sumall_berat_pakan.value = dataPelaporan.responseData.data.items[0].sumall_berat_pakan ?? 0;
                std_gr_perekor.value = dataPelaporan.responseData.data.items[0].std_gr_perekor ?? 0;
                sum_berat_pakan_daily.value = dataPelaporan.responseData.data.items[0].sum_berat_pakan_daily ?? 0;
                // avg_total_telur.value = dataPelaporan.responseData.data.items[0].avg_total_telur ?? 0;
                // avg_berat_telur_kg.value = dataPelaporan.responseData.data.items[0].avg_berat_telur_kg ?? 0;
                // avgall_berat_telur_gr.value = dataPelaporan.responseData.data.items[0].avgall_berat_telur_gr ?? 0;
                const items = dataPelaporan.responseData.data.items;
                getProduksiTelur(items);
                getJenisPakanItems(dataPelaporan.responseData.data.jenis_pakan_items);

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

    async function getIdPakan(id_jenis_pakan) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/jenis_pakan/' + id_jenis_pakan, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                detailPakan.id = response.data.data.id;
                detailPakan.nama = response.data.data.nama;
                detailPakan.deskripsi = response.data.data.deskripsi;
            })
            .catch(error => {
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
   
</script>

<style scoped>
table thead {
    background-color: #F2F2F2;
    color: #000000;
}

table thead tr:nth-child(1) th {
    background-color: #D2EADD;
}
table thead tr:nth-child(2) th {
    background-color: rgba(225, 244, 234, 1);
}
table tbody tr:nth-child(1) td {
    background-color: rgba(15, 169, 88, 0.3);
}
.card-body.populasi {
    height: 90%;
}
</style>