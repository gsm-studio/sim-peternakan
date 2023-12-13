<template>
    <HeaderItem />
    <div class="body flex-grow-1 px-3">
        <div class="container-lg">
            <!-- /.row-->
            <div class="row">
            <div class="col-md-12">
                <div class="card mb-4">
                <div class="row mb-5">
                    <div class="col-lg-12">
                        <div class="card-body gx-2 row">
                            <div class="col">
                                <h4 class="d-inline">Pencatatan produksi</h4>
                                <div class="d-inline">
                                    <svg class="icon">
                                    <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-arrow-circle-right
                                    "></use>
                                    </svg>
                                </div>
                                <h5 class="color-text-rossa d-inline">{{ detailKandang.nama }}</h5>
                                <img src="@/assets/img/vector-1.png" alt="">
                            </div>
                            <div class="col d-grid gap-2 d-md-block">
                                <small class="color-text-rossa">{{ formatTanggal() }}</small>
                                <!-- <button class="btn btn-secondary ms-3" type="button">Hisex</button> -->
                            </div>
                            <div class="col d-grid gap-2 d-md-block">
                                <button class="btn btn-warning" type="button">Pending</button>
                                <button @click="getKandang()" class="btn btn-success ms-3" type="button" data-toggle="modal" data-target="#exampleModal">
                                    Input 
                                    <svg class="icon">
                                        <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-plus"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    <hr>
                    </div>
                    
                    <div class="col-lg-7">
                    <div class="card-body">
                        <div class="d-flex justify-content-between mt-4">
                            <div class="w-100">
                                <div class="small text-medium-emphasis mb-2">
                                Produksi Telur 
                                <span class="color-text-rossa ms-3">{{ detailKandang.nama }}</span>
                                </div>
                                <div class="w-100 d-flex align-items-center justify-content-between">
                                <h5 class="card-title mb-0">{{ parseInt(totalTelurUtuh) + parseInt(totalTelurBentes) }} Butir</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 8 10" fill="none">
                                    <path d="M1 9.5L7 5.5L1 1" stroke="black"/>
                                    </svg>
                                <h5 class="card-title mb-0 text-secondary">{{ parseInt(totalBeratTelurUtuh) + parseInt(totalBeratTelurBentes) }} Gram</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 8 10" fill="none">
                                    <path d="M1 9.5L7 5.5L1 1" stroke="black"/>
                                    </svg>
                                <h5 class="card-title mb-0 text-secondary">58 gr/butir</h5>
                                </div>
                                <small class="color-text-rossa">
                                (20,1 %)
                                </small>
                                <div class="row mt-3">
                                <div class="col text-center">
                                    <p>Telur utuh</p>
                                    <div class="small text-medium-emphasis mt-2">{{ totalTelurUtuh }}</div>
                                    <div class="small text-medium-emphasis mt-2">{{ totalBeratTelurUtuh }} gr</div>
                                </div>
                                <div class="col text-center border-start">
                                    <p>Telur bentes</p>
                                    <div class="small text-medium-emphasis mt-2">{{ totalTelurBentes }}</div>
                                    <div class="small text-medium-emphasis mt-2">{{ totalBeratTelurBentes }} gr</div>
                                </div>
                                </div>
                                
                            </div>
                            <div class="btn-toolbar d-none d-md-block" role="toolbar" aria-label="Toolbar with buttons">
                            
                            </div>
                        </div>
                        <CChart
                            type="bar"
                            :data="{
                                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                datasets: [
                                {
                                    label: 'GitHub Commits',
                                    backgroundColor: '#f87979',
                                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                                },
                                ],
                            }"
                            labels="months"
                        />
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <span> 
                        <svg class="icon bg-button-rossa">
                        <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-circle"></use> </svg> Last 6 days
                        </span>
                        <span>
                        <svg class="icon bg-grey-rossa">
                        <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-circle"></use> </svg> Last Week
                        </span>
                    </div>
                    </div>
                    <div class="col-lg-5">
                    <div class="card-body">
                        
                        <div class="d-flex justify-content-between mt-4">
                        <div>
                            <div class="small text-medium-emphasis mb-2">
                            Populasi Ayam 
                            <span class="color-text-rossa ms-3">{{ detailKandang.nama }}</span>
                            </div>
                            <h5 class="card-title mb-0">{{ totalPopulasi }} ekor</h5>
                            <small>
                            <svg class="icon color-text-rossa">
                                <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-arrow-circle-top"></use>
                            </svg> 2,4 % vs last week
                            </small>
                            
                        </div>
                        <div class="d-flex align-items-center">
                            <button @click="getKandang()" data-toggle="modal" data-target="#exampleModal" class="btn btn-success bg-button-rossa" type="button">Pindah</button>
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
                        <CChart
                            type="line"
                            :wrapper="false"
                            :data="{
                                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                datasets: [
                                {
                                    label: 'My First dataset',
                                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                                    borderColor: 'rgba(220, 220, 220, 1)',
                                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                                    pointBorderColor: '#fff',
                                    data: [40, 20, 12, 39, 10, 40, 39]
                                },
                                {
                                    label: 'My Second dataset',
                                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                    borderColor: 'rgba(151, 187, 205, 1)',
                                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                    pointBorderColor: '#fff',
                                    data: [50, 12, 28, 29, 7, 25, 12]
                                }
                                ]
                            }"
                        />
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <span> 
                        <svg class="icon bg-button-rossa">
                        <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-circle"></use> </svg> Last 6 days
                        </span>
                        <span>
                        <svg class="icon bg-grey-rossa">
                        <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-circle"></use> </svg> Last Week
                        </span>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8">
                    <div class="card-body">
                        <div class="row">
                            <div>
                                <div class="small text-medium-emphasis mb-2">
                                    Pakan  
                                    <span class="color-text-rossa ms-3">{{ detailKandang.nama }}</span>
                                </div>
                                <div class="row mb-3">
                                    <div class="col">
                                        <h5 class="card-title mb-0">3000 kg</h5>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 8 10" fill="none">
                                            <path d="M1 9.5L7 5.5L1 1" stroke="black"/>
                                        </svg>
                                        <h5 class="card-title mb-0 text-secondary">85.7 gram/ekor</h5>
                                    </div>
                                    <div class="col">
                                        <h5 class="card-title mb-0">Standar pakan</h5>
                                        <h5 class="card-title mb-0 text-secondary">90.2 gr/ekor</h5>
                                    </div>
                                    
                                </div>
                                <small>
                                    <svg class="icon color-text-rossa">
                                    <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-arrow-circle-top"></use>
                                    </svg> 2,4 % vs last week
                                </small>
                                
                            </div>
                            <div class="col-md-6 d-flex align-items-end">
                                <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180" fill="none">
                                    <circle cx="90" cy="90" r="90" fill="#0FA958" fill-opacity="0.6"/>
                                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="14px">100 % 
                                        Omega</text>
                                </svg>
                            </div>
                            <div class="col-md-6">
                                <CChart
                                    type="line"
                                    :wrapper="false"
                                    :data="{
                                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                        datasets: [
                                        {
                                            label: 'My First dataset',
                                            backgroundColor: 'rgba(220, 220, 220, 0.2)',
                                            borderColor: 'rgba(220, 220, 220, 1)',
                                            pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                                            pointBorderColor: '#fff',
                                            data: [40, 20, 12, 39, 10, 40, 39]
                                        },
                                        {
                                            label: 'My Second dataset',
                                            backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                            borderColor: 'rgba(151, 187, 205, 1)',
                                            pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                            pointBorderColor: '#fff',
                                            data: [50, 12, 28, 29, 7, 25, 12]
                                        }
                                        ]
                                    }"
                                />
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-4">
                    <div class="mt-4">
                        <div>
                        <div class="small text-medium-emphasis mb-2">
                            Ration 
                            <span class="color-text-rossa ms-3">{{ detailKandang.nama }}</span>
                        </div>
                        
                        </div>
                        <div>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="146" height="145" viewBox="0 0 146 145" fill="none">
                            <circle cx="73.1484" cy="72.5" r="72.5" fill="#6AD0B8"/>
                                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="14px">Egg Mass 11.7</text>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="118" height="117" viewBox="0 0 118 117" fill="none">
                            <circle cx="59.1484" cy="58.5" r="58.5" fill="#D8608B" fill-opacity="0.7"/>
                            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="14px">FC 7.4</text>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="136" height="135" viewBox="0 0 136 135" fill="none">
                            <circle cx="68.1484" cy="67.5" r="67.5" fill="#8660D8" fill-opacity="0.7"/>
                            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="14px">Standart 
                                FC 7.6</text>
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
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <Form
                        @submit="nextStep"
                        :validation-schema="currentSchema"
                        keep-values
                        v-slot="{ handleSubmit, values }"
                        >
                        <template v-if="currentStep === 0"> 
                            <div class="mb-4 d-flex justify-content-between">
                                <button class="btn btn-success">{{ formatTanggal() }}</button>
                                <h6 class="modal-title" id="exampleModalLabel">Populasi Ayam : {{ totalPopulasi }} ekor</h6>
                            </div>
                            <div class="mb-3">
                                <Field @change="getIdKandang($event)" as="select" name="nama_anak_kandang" class="form-control text-center">
                                    <template v-if="dataKandang.responseData">
                                        <option value="" disabled>Pilih Nama Kandang</option>
                                        <option v-for="item in dataKandang.responseData.data.items" :key="item.id" :value="item.id">{{ item.nama }}</option>
                                    </template>
                                </Field>
                                <ErrorMessage class="text-danger" name="nama_anak_kandang" />
                            </div>
                            <!-- {{ values }} -->
                            <Field v-model="detailKandang.id_anak_kandang" name="id_anak_kandang" class="form-control text-center" type="hidden"/>
                            <div class="mb-3">
                                <Field v-model="detailKandang.nama_mandor" name="nama_mandor" class="form-control text-center" type="text" placeholder="Nama mandor" readonly/>
                                <ErrorMessage class="text-danger" name="nama_mandor" />
                            </div>
                            <div class="mb-3">
                                <Field @change="getIdStrain($event)" as="select" name="strain_ayam" class="form-control text-center">
                                    <template v-if="dataStrain.responseData">
                                        <option value="" disabled>Pilih Strain Ayam</option>
                                        <option v-for="item in dataStrain.responseData.data.items" :key="item.id" :value="item.id">{{ item.nama }}</option>
                                    </template>
                                </Field>
                                <ErrorMessage class="text-danger" name="strain_ayam" />
                            </div>
                        </template>

                        <template v-if="currentStep === 1">
                            <div class="row mb-3 p-2 bg-light rounded">
                                <div class="col-md-4">
                                    <p>ID Kandang : {{ values.id_kandang }}</p>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M4.90517 13.8423C5.57808 13.3578 6.29217 12.9749 7.04742 12.6936C7.80214 12.4118 8.61967 12.2708 9.5 12.2708C10.3798 12.2708 11.1973 12.4118 11.9526 12.6936C12.7073 12.9749 13.4214 13.3575 14.0948 13.8415C14.6173 13.3011 15.0377 12.6624 15.356 11.9257C15.6742 11.1878 15.8333 10.3793 15.8333 9.5C15.8333 7.74514 15.2166 6.25074 13.9832 5.01679C12.7498 3.78285 11.2554 3.16614 9.5 3.16667C7.74514 3.16667 6.25074 3.78338 5.01679 5.01679C3.78285 6.25021 3.16614 7.74461 3.16667 9.5C3.16667 10.3798 3.32579 11.1881 3.64404 11.9249C3.96229 12.6622 4.38267 13.3013 4.90517 13.8423ZM9.5 9.89583C8.83342 9.89583 8.27081 9.66678 7.81217 9.20867C7.35406 8.75003 7.125 8.18742 7.125 7.52083C7.125 6.85425 7.35406 6.29164 7.81217 5.833C8.27081 5.37489 8.83342 5.14583 9.5 5.14583C10.1666 5.14583 10.7292 5.37489 11.1878 5.833C11.6459 6.29164 11.875 6.85425 11.875 7.52083C11.875 8.18742 11.6459 8.75003 11.1878 9.20867C10.7292 9.66678 10.1666 9.89583 9.5 9.89583ZM9.5 16.625C8.50619 16.625 7.57599 16.44 6.70938 16.07C5.84276 15.7006 5.08857 15.195 4.44679 14.5532C3.80554 13.9114 3.29993 13.1572 2.92996 12.2906C2.55999 11.424 2.375 10.4938 2.375 9.5C2.375 8.50619 2.55999 7.57599 2.92996 6.70938C3.2994 5.84276 3.80501 5.08857 4.44679 4.44679C5.08857 3.80554 5.84276 3.29993 6.70938 2.92996C7.57599 2.55999 8.50619 2.375 9.5 2.375C10.4938 2.375 11.424 2.55999 12.2906 2.92996C13.1572 3.2994 13.9114 3.80501 14.5532 4.44679C15.1945 5.08857 15.7001 5.84276 16.07 6.70938C16.44 7.57599 16.625 8.50619 16.625 9.5C16.625 10.4938 16.44 11.424 16.07 12.2906C15.7006 13.1572 15.195 13.9114 14.5532 14.5532C13.9114 15.1945 13.1572 15.7001 12.2906 16.07C11.424 16.44 10.4938 16.625 9.5 16.625Z" fill="#0FA958"/>
                                        </svg>
                                        Anak Kandang : {{ detailKandang.nama_anak_kandang }}
                                    </p>
                                </div>
                                <div class="col-md-4">
                                    <div class="bg-grey-rossa rounded p-2 mb-2">{{ formatTanggal() }}</div>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M4.90517 13.8423C5.57808 13.3578 6.29217 12.9749 7.04742 12.6936C7.80214 12.4118 8.61967 12.2708 9.5 12.2708C10.3798 12.2708 11.1973 12.4118 11.9526 12.6936C12.7073 12.9749 13.4214 13.3575 14.0948 13.8415C14.6173 13.3011 15.0377 12.6624 15.356 11.9257C15.6742 11.1878 15.8333 10.3793 15.8333 9.5C15.8333 7.74514 15.2166 6.25074 13.9832 5.01679C12.7498 3.78285 11.2554 3.16614 9.5 3.16667C7.74514 3.16667 6.25074 3.78338 5.01679 5.01679C3.78285 6.25021 3.16614 7.74461 3.16667 9.5C3.16667 10.3798 3.32579 11.1881 3.64404 11.9249C3.96229 12.6622 4.38267 13.3013 4.90517 13.8423ZM9.5 9.89583C8.83342 9.89583 8.27081 9.66678 7.81217 9.20867C7.35406 8.75003 7.125 8.18742 7.125 7.52083C7.125 6.85425 7.35406 6.29164 7.81217 5.833C8.27081 5.37489 8.83342 5.14583 9.5 5.14583C10.1666 5.14583 10.7292 5.37489 11.1878 5.833C11.6459 6.29164 11.875 6.85425 11.875 7.52083C11.875 8.18742 11.6459 8.75003 11.1878 9.20867C10.7292 9.66678 10.1666 9.89583 9.5 9.89583ZM9.5 16.625C8.50619 16.625 7.57599 16.44 6.70938 16.07C5.84276 15.7006 5.08857 15.195 4.44679 14.5532C3.80554 13.9114 3.29993 13.1572 2.92996 12.2906C2.55999 11.424 2.375 10.4938 2.375 9.5C2.375 8.50619 2.55999 7.57599 2.92996 6.70938C3.2994 5.84276 3.80501 5.08857 4.44679 4.44679C5.08857 3.80554 5.84276 3.29993 6.70938 2.92996C7.57599 2.55999 8.50619 2.375 9.5 2.375C10.4938 2.375 11.424 2.55999 12.2906 2.92996C13.1572 3.2994 13.9114 3.80501 14.5532 4.44679C15.1945 5.08857 15.7001 5.84276 16.07 6.70938C16.44 7.57599 16.625 8.50619 16.625 9.5C16.625 10.4938 16.44 11.424 16.07 12.2906C15.7006 13.1572 15.195 13.9114 14.5532 14.5532C13.9114 15.1945 13.1572 15.7001 12.2906 16.07C11.424 16.44 10.4938 16.625 9.5 16.625Z" fill="#0FA958"/>
                                        </svg>
                                        Nama Mandor : {{ detailKandang.nama_mandor }}
                                    </p>
                                </div>
                                <div class="col-md-4">
                                    <p><span class="color-text-rossa">Populasi Ayam:</span> 3000 ekor</p>
                                    <p><span class="color-text-rossa">Strain:</span> {{ detailStrain.nama }}</p>
                                </div>
                            </div>
                            <h6 class="mb-3">Ayam</h6>

                            <div class="mb-3">
                                <Field name="mati" class="form-control text-center" type="text" placeholder="Mati" />
                                <ErrorMessage class="text-danger" name="mati" />
                            </div>

                            <div class="mb-3">
                                <Field name="afkir" class="form-control text-center" type="text" placeholder="Afkir" />
                                <ErrorMessage class="text-danger" name="afkir" />
                            </div>

                            <div class="mb-3">
                                <Field name="jumlah_pindah" class="form-control text-center" type="text" placeholder="Jumlah Pindah" />
                                <ErrorMessage class="text-danger" name="jumlah_pindah" />
                            </div>
                            <div class="mb-3">
                                <Field @change="getKandangPengirim($event)" as="select" name="id_kandang_pengirim" class="form-control text-center">
                                    <template v-if="dataKandang.responseData">
                                        <option value="" disabled>Pilih Nama Kandang Pengirim</option>
                                        <option v-for="item in dataKandang.responseData.data.items" :key="item.id" :value="item.id">{{ item.nama }}</option>
                                    </template>
                                </Field>
                                <ErrorMessage class="text-danger" name="id_kandang_pengirim" />
                            </div>
                            <div class="mb-3">
                                <Field name="jumlah_terima" class="form-control text-center" type="text" placeholder="Jumlah Terima" />
                                <ErrorMessage class="text-danger" name="jumlah_terima" />
                            </div>
                            <div class="mb-3">
                                <Field @change="getKandangPenerima($event)" as="select" name="id_kandang_tujuan" class="form-control text-center">
                                    <template v-if="dataKandang.responseData">
                                        <option value="" disabled>Pilih Nama Kandang Penerima</option>
                                        <option v-for="item in dataKandang.responseData.data.items" :key="item.id" :value="item.id">{{ item.nama }}</option>
                                    </template>
                                </Field>
                                <ErrorMessage class="text-danger" name="id_kandang_tujuan" />
                            </div>
                        </template>

                        <template v-if="currentStep === 2">
                            <div class="row mb-3 p-2 bg-light rounded">
                                <div class="col-md-4">
                                    <p>ID Kandang : {{ values.id_kandang }} </p>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M4.90517 13.8423C5.57808 13.3578 6.29217 12.9749 7.04742 12.6936C7.80214 12.4118 8.61967 12.2708 9.5 12.2708C10.3798 12.2708 11.1973 12.4118 11.9526 12.6936C12.7073 12.9749 13.4214 13.3575 14.0948 13.8415C14.6173 13.3011 15.0377 12.6624 15.356 11.9257C15.6742 11.1878 15.8333 10.3793 15.8333 9.5C15.8333 7.74514 15.2166 6.25074 13.9832 5.01679C12.7498 3.78285 11.2554 3.16614 9.5 3.16667C7.74514 3.16667 6.25074 3.78338 5.01679 5.01679C3.78285 6.25021 3.16614 7.74461 3.16667 9.5C3.16667 10.3798 3.32579 11.1881 3.64404 11.9249C3.96229 12.6622 4.38267 13.3013 4.90517 13.8423ZM9.5 9.89583C8.83342 9.89583 8.27081 9.66678 7.81217 9.20867C7.35406 8.75003 7.125 8.18742 7.125 7.52083C7.125 6.85425 7.35406 6.29164 7.81217 5.833C8.27081 5.37489 8.83342 5.14583 9.5 5.14583C10.1666 5.14583 10.7292 5.37489 11.1878 5.833C11.6459 6.29164 11.875 6.85425 11.875 7.52083C11.875 8.18742 11.6459 8.75003 11.1878 9.20867C10.7292 9.66678 10.1666 9.89583 9.5 9.89583ZM9.5 16.625C8.50619 16.625 7.57599 16.44 6.70938 16.07C5.84276 15.7006 5.08857 15.195 4.44679 14.5532C3.80554 13.9114 3.29993 13.1572 2.92996 12.2906C2.55999 11.424 2.375 10.4938 2.375 9.5C2.375 8.50619 2.55999 7.57599 2.92996 6.70938C3.2994 5.84276 3.80501 5.08857 4.44679 4.44679C5.08857 3.80554 5.84276 3.29993 6.70938 2.92996C7.57599 2.55999 8.50619 2.375 9.5 2.375C10.4938 2.375 11.424 2.55999 12.2906 2.92996C13.1572 3.2994 13.9114 3.80501 14.5532 4.44679C15.1945 5.08857 15.7001 5.84276 16.07 6.70938C16.44 7.57599 16.625 8.50619 16.625 9.5C16.625 10.4938 16.44 11.424 16.07 12.2906C15.7006 13.1572 15.195 13.9114 14.5532 14.5532C13.9114 15.1945 13.1572 15.7001 12.2906 16.07C11.424 16.44 10.4938 16.625 9.5 16.625Z" fill="#0FA958"/>
                                        </svg>
                                        Anak Kandang : {{ detailKandang.nama_anak_kandang }}
                                    </p>
                                </div>
                                <div class="col-md-4">
                                    <div class="bg-grey-rossa rounded p-2">{{ formatTanggal() }}</div>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M4.90517 13.8423C5.57808 13.3578 6.29217 12.9749 7.04742 12.6936C7.80214 12.4118 8.61967 12.2708 9.5 12.2708C10.3798 12.2708 11.1973 12.4118 11.9526 12.6936C12.7073 12.9749 13.4214 13.3575 14.0948 13.8415C14.6173 13.3011 15.0377 12.6624 15.356 11.9257C15.6742 11.1878 15.8333 10.3793 15.8333 9.5C15.8333 7.74514 15.2166 6.25074 13.9832 5.01679C12.7498 3.78285 11.2554 3.16614 9.5 3.16667C7.74514 3.16667 6.25074 3.78338 5.01679 5.01679C3.78285 6.25021 3.16614 7.74461 3.16667 9.5C3.16667 10.3798 3.32579 11.1881 3.64404 11.9249C3.96229 12.6622 4.38267 13.3013 4.90517 13.8423ZM9.5 9.89583C8.83342 9.89583 8.27081 9.66678 7.81217 9.20867C7.35406 8.75003 7.125 8.18742 7.125 7.52083C7.125 6.85425 7.35406 6.29164 7.81217 5.833C8.27081 5.37489 8.83342 5.14583 9.5 5.14583C10.1666 5.14583 10.7292 5.37489 11.1878 5.833C11.6459 6.29164 11.875 6.85425 11.875 7.52083C11.875 8.18742 11.6459 8.75003 11.1878 9.20867C10.7292 9.66678 10.1666 9.89583 9.5 9.89583ZM9.5 16.625C8.50619 16.625 7.57599 16.44 6.70938 16.07C5.84276 15.7006 5.08857 15.195 4.44679 14.5532C3.80554 13.9114 3.29993 13.1572 2.92996 12.2906C2.55999 11.424 2.375 10.4938 2.375 9.5C2.375 8.50619 2.55999 7.57599 2.92996 6.70938C3.2994 5.84276 3.80501 5.08857 4.44679 4.44679C5.08857 3.80554 5.84276 3.29993 6.70938 2.92996C7.57599 2.55999 8.50619 2.375 9.5 2.375C10.4938 2.375 11.424 2.55999 12.2906 2.92996C13.1572 3.2994 13.9114 3.80501 14.5532 4.44679C15.1945 5.08857 15.7001 5.84276 16.07 6.70938C16.44 7.57599 16.625 8.50619 16.625 9.5C16.625 10.4938 16.44 11.424 16.07 12.2906C15.7006 13.1572 15.195 13.9114 14.5532 14.5532C13.9114 15.1945 13.1572 15.7001 12.2906 16.07C11.424 16.44 10.4938 16.625 9.5 16.625Z" fill="#0FA958"/>
                                        </svg>
                                        Mandor : {{ detailKandang.nama_mandor }}
                                    </p>
                                </div>
                                <div class="col-md-4">
                                    <p><span class="color-text-rossa">Populasi Ayam:</span> 3000 ekor</p>
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
                                <Field name="jml_telur_butuh" class="form-control text-center" type="text" placeholder="Jumlah Telur Utuh" />
                                <ErrorMessage class="text-danger" name="jml_telur_butuh" />
                            </div>
                            <div class="mb-3">
                                <Field name="jml_telur_bentes" class="form-control text-center" type="text" placeholder="Jumlah Telur Bentes" />
                                <ErrorMessage class="text-danger" name="jml_telur_bentes" />
                            </div>
                            <div class="mb-3">
                                <Field name="berat_telur_butuh" class="form-control text-center" type="text" placeholder="Berat Telur Utuh" />
                                <ErrorMessage class="text-danger" name="berat_telur_butuh" />
                            </div>
                            <div class="mb-3">
                                <Field name="berat_telur_bentes" class="form-control text-center" type="text" placeholder="Berat Telur Bentes" />
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
                                    <p>Jumlah Telur Utuh : {{ values.jml_telur_butuh }}</p>
                                    <P>Berat Telur Utuh : {{ values.berat_telur_butuh }}</P>
                                </div>
                                <div class="col-md-4">
                                    <p>Jumlah Telur Bentes : {{ values.jml_telur_bentes }}</p>
                                    <p>Berat Telur Bentes : {{ values.berat_telur_bentes }}</p>
                                </div>
                                <div class="col-md-4">
                                    <p><span class="color-text-rossa">Total:</span> {{ parseInt(values.jml_telur_butuh) + parseInt(values.jml_telur_bentes) }}</p>
                                    <p><span class="color-text-rossa">Total:</span> {{ parseInt(values.berat_telur_butuh) + parseInt(values.berat_telur_bentes) }}</p>
                                </div>
                            </div>
                            <h6 class="mb-3">Pakan & Treatment Ayam</h6>
                        
                            <div class="mb-3">
                                <Field as="select" name="jenis_pakan" class="form-control text-center">
                                    <template v-if="dataPakan.responseData">
                                        <option value="" disabled>Pilih Nama Pakan</option>
                                        <option v-for="item in dataKandang.responseData.data.items" :key="item.id" :value="item.id">{{ item.nama }}</option>
                                    </template>
                                </Field>
                                <ErrorMessage class="text-danger" name="jenis_pakan" />
                            </div>
                            <div class="mb-3">
                                <Field as="select" name="jenis_treatment" class="form-control text-center">
                                    <template v-if="dataTreatment.responseData">
                                        <option value="" disabled>Pilih Nama Treatment</option>
                                        <option v-for="item in dataTreatment.responseData.data.items" :key="item.id" :value="item.id">{{ item.nama }}</option>
                                    </template>
                                </Field>
                                <ErrorMessage class="text-danger" name="jenis_treatment" />
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

                            <button class="ms-3 btn btn-success bg-button-rossa" v-if="currentStep === 3" type="submit">Finish</button>
                        </div>
                    
                    </Form>
                
                </div>
                <div class="modal-footer">
                    <div v-if="apiError" class="alert alert-danger mt-3 mb-0">{{ apiError }}</div> 
                </div>
            </div>
        </div>
    </div>
  
</template>

<script setup>
    import HeaderItem from '../components/HeaderItem.vue'
    import { CChart } from '@coreui/vue-chartjs'
    import { onMounted, ref, computed, reactive } from 'vue'
    import { Field, ErrorMessage, Form } from 'vee-validate';
    import * as yup from 'yup';
    import { kandangStore, strainStore, pakanStore, treatmentStore, pencatatanStore } from '@/stores';
    import axios from 'axios'
    import { storeToRefs } from 'pinia';
    import {useRoute} from 'vue-router'

    const baseUrl = `${import.meta.env.VITE_API_URL}`;
    const route = useRoute();

    function formatTanggal() {
        const hariIni = new Date();

        const tanggalHariIni = hariIni.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });

        return `${tanggalHariIni}`;
    }

    const apiError = ref(null);

    const dataKandang = reactive(kandangStore());
    const dataStrain = reactive(strainStore());
    const dataPakan = reactive(pakanStore());
    const dataTreatment = reactive(treatmentStore());
    const dataPencatatan = reactive(pencatatanStore());

    const detailKandang = reactive({
        id: '',
        nama: '',
        alamat: '',
        id_mandor: '',
        id_anak_kandang: '',
        nama_mandor: '',
        nama_anak_kandang: '',
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
        telur_butuh: '',
        telur_bentes: '',
        berat_utuh: '',
        berat_bentes: '',
        id_treatment: '',
        id_jenis_pakan: '',
        catatan: '',
        populasi_ayam: '',

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
    
    const detailStrain = reactive({
        id: '',
        nama: '',
        deskripsi: '',
    });

    onMounted(() => {
        getIdKandang(route.params.id);
        getPencatatan(route.params.id);
        getIdPencatatan(route.params.id);
        // console.log("List Pencatatan : ", dataPencatatan.responseData.data.items);
        console.log("Telur Utuh : ", totalTelurUtuh);

       
    })

    const schemas = [
        yup.object({
            id_anak_kandang: yup.number().required(),
            nama_anak_kandang: yup.number().required(),
            nama_mandor: yup.string().required(),
            strain_ayam: yup.number().required(),
        }),
        yup.object({
            mati: yup.number(),
            afkir: yup.number(),
            jumlah_pindah: yup.number(),
            jumlah_terima: yup.number(),
            id_kandang_pengirim: yup.number(),
            id_kandang_penerima: yup.number(),
        }),
        yup.object({
            jml_telur_butuh: yup.number(),
            jml_telur_bentes: yup.number(),
            berat_telur_butuh: yup.number(),
            berat_telur_bentes: yup.number(),
        }),
        yup.object({
            jumlah_pakan: yup.number(),
            jenis_pakan: yup.number(),
            jenis_treatment: yup.number(),
            catatan: yup.string(),
        }),
    ];

    const currentStep = ref(0);

    const currentSchema = computed(() => {
        return schemas[currentStep.value];
    });

    function nextStep(values) {
    if (currentStep.value === 3) {
        onSubmit(values);
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
        const closeElements = document.querySelectorAll('.close');

        closeElements.forEach((closeElement) => {
            closeElement.click();
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
            totalTelurUtuh.value = dataPencatatan.responseData.data.items.reduce((total, data) => {
                return total + data.telur_utuh;
            }, 0);
            totalTelurBentes.value = dataPencatatan.responseData.data.items.reduce((total, data) => {
                return total + data.telur_bentes;
            }, 0);
            totalBeratTelurUtuh.value = dataPencatatan.responseData.data.items.reduce((total, data) => {
                return total + data.berat_utuh;
            }, 0);
            totalBeratTelurBentes.value = dataPencatatan.responseData.data.items.reduce((total, data) => {
                return total + data.berat_bentes;
            }, 0); 
            totalMati.value = dataPencatatan.responseData.data.items.reduce((total, data) => {
                return total + data.jumlah_mati;
            }, 0); 
            totalAfkir.value = dataPencatatan.responseData.data.items.reduce((total, data) => {
                return total + data.jumlah_afkir;
            }, 0);
            totalPindah.value = dataPencatatan.responseData.data.items.reduce((total, data) => {
                return total + data.jumlah_pindah;
            }, 0);
            totalTerima.value = dataPencatatan.responseData.data.items.reduce((total, data) => {
                return total + data.jumlah_terima;
            }, 0);
            totalPopulasi.value = dataPencatatan.responseData.data.items.reduce((total, data) => {
                return total + data.jumlah_terima;
            }, 0);
        }
    }

    async function onSubmit(values) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        const { nama_anak_kandang, id_anak_kandang, nama_mandor, strin_ayam, mati, afkir, jumlah_pindah, id_kandang_pengirim, jumlah_terima, id_kandang_tujuan, jml_telur_butuh, jml_telur_bentes, berat_telur_butuh, berat_telur_bentes, jenis_pakan, jenis_treatment, catatan } = values;
        console.log(values);
        return axios.post(baseUrl + '/pencatatan', {
            id_kandang: nama_anak_kandang,
            id_mandor: nama_mandor,
            id_anak_kandang: id_anak_kandang,
            id_strain_ayam: strin_ayam,
            jumlah_mati: mati,
            jumlah_afkir: afkir,
            jumlah_pindah: jumlah_pindah,
            id_kandang_tujuan: id_kandang_tujuan,
            jumlah_terima: jumlah_terima,
            id_kandang_pengirim: id_kandang_pengirim,
            telur_butuh: jml_telur_butuh,
            telur_bentes: jml_telur_bentes,
            berat_utuh: berat_telur_butuh,
            berat_bentes: berat_telur_bentes,
            id_treatment: jenis_treatment,
            id_jenis_pakan: jenis_pakan,
            catatan: catatan,
        }, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                closeModal();
                console.log(response);
            })
            .catch(error => {
                console.error(error);
                apiError.value = error;
            });
    }

    

    async function getIdPencatatan(params) {
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
                detailPencatatan.telur_butuh = response.data.data.telur_butuh;
                detailPencatatan.telur_bentes = response.data.data.telur_bentes;
                detailPencatatan.berat_utuh = response.data.data.berat_utuh;
                detailPencatatan.berat_bentes = response.data.data.berat_bentes;
                detailPencatatan.id_treatment = response.data.data.id_treatment;
                detailPencatatan.id_jenis_pakan = response.data.data.id_jenis_pakan;
                detailPencatatan.catatan = response.data.data.catatan;
                // console.log("Detail Pencatatan : ", detailPencatatan);
                console.log("Detail Pencatatan : ", response);
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
                id_kandang: id_kandang,
            },
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                dataPencatatan.setResponseData(response.data);
                detailPencatatan.populasi_ayam = dataPencatatan.responseData.data.total_populasi;
                // console.log("List Pencatatan : ", dataPencatatan.responseData.data.total_populasi);
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

    async function getIdStrain(event) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/strain_ayam/' + event.target.value, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                detailStrain.id = response.data.data.id;
                detailStrain.nama = response.data.data.nama;
                detailStrain.deskripsi = response.data.data.deskripsi;
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

    async function getTreatment() {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/tugas', {
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