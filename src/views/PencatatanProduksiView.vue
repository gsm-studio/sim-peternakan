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
                                <h5 class="color-text-rossa d-inline">Kandang 1A</h5>
                                <img src="@/assets/img/vector-1.png" alt="">
                            </div>
                            <div class="col d-grid gap-2 d-md-block">
                                <small class="color-text-rossa">09 November 2023</small>
                                <button class="btn btn-secondary ms-3" type="button">Hisex</button>
                            </div>
                            <div class="col d-grid gap-2 d-md-block">
                                <button class="btn btn-warning" type="button">Pending</button>
                                <button class="btn btn-success ms-3" type="button">
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
                            <span class="color-text-rossa ms-3">Kandang 1A</span>
                            </div>
                            <div class="w-100 d-flex align-items-center justify-content-between">
                            <h5 class="card-title mb-0">52 gr/butir</h5>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 8 10" fill="none">
                                <path d="M1 9.5L7 5.5L1 1" stroke="black"/>
                                </svg>
                            <h5 class="card-title mb-0 text-secondary">408 gram</h5>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 8 10" fill="none">
                                <path d="M1 9.5L7 5.5L1 1" stroke="black"/>
                                </svg>
                            <h5 class="card-title mb-0 text-secondary">58gr/butir</h5>
                            </div>
                            <small class="color-text-rossa">
                            (20,1 %)
                            </small>
                            <div class="row mt-3">
                            <div class="col text-center">
                                <p>Telur utuh</p>
                                <div class="small text-medium-emphasis mt-2">7000</div>
                                <div class="small text-medium-emphasis mt-2">406 gr</div>
                            </div>
                            <div class="col text-center border-start">
                                <p>Telur utuh</p>
                                <div class="small text-medium-emphasis mt-2">7000</div>
                                <div class="small text-medium-emphasis mt-2">406 gr</div>
                            </div>
                            </div>
                            
                        </div>
                        <div class="btn-toolbar d-none d-md-block" role="toolbar" aria-label="Toolbar with buttons">
                            
                        
                        </div>
                        </div>
                        <div class="c-chart-wrapper" style="height:300px;margin-top:40px;">
                        <canvas class="chart" id="main-chart" height="300"></canvas>
                        </div>
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
                            <span class="color-text-rossa ms-3">Kandang 1A</span>
                            </div>
                            <h5 class="card-title mb-0">34,999 ekor</h5>
                            <small>
                            <svg class="icon color-text-rossa">
                                <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-arrow-circle-top"></use>
                            </svg> 2,4 % vs last week
                            </small>
                            
                        </div>
                        <div class="d-flex align-items-center">
                            <button class="btn btn-success bg-button-rossa" type="button">Pindah</button>
                        </div>
                        
                        </div>
                        <div class="row text-center mt-4">
                        <div class="col mb-sm-3 mb-0">
                            <div class="text-medium-emphasis">Mati</div>
                            <div class="small color-text-rossa">1</div>
                        </div>
                        <div class="col mb-sm-3 mb-0">
                            <div class="text-medium-emphasis">Afkir</div>
                            <div class="small color-text-rossa">-</div>
                        </div>
                        <div class="col mb-sm-3 mb-0">
                            <div class="text-medium-emphasis">Pindah</div>
                            <div class="small color-text-rossa">400</div>
                        </div>
                        <div class="col mb-sm-3 mb-0">
                            <div class="text-medium-emphasis">Terima</div>
                            <div class="small color-text-rossa">-</div>
                        </div>
                        </div>
                        <div class="c-chart-wrapper" style="height:300px;margin-top:40px;">
                        <canvas class="chart" id="main-chart-2" height="300"></canvas>
                        </div>
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
                                    <span class="color-text-rossa ms-3">Kandang 1A</span>
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
                                <div class="c-chart-wrapper" style="height:300px;margin-top:40px;">
                                    <canvas class="chart" id="main-chart-3" height="300"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-4">
                    <div class="mt-4">
                        <div>
                        <div class="small text-medium-emphasis mb-2">
                            Ration 
                            <span class="color-text-rossa ms-3">Kandang 1A</span>
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
            
            
            <!-- /.row-->
        
            <!-- /.row-->
        </div>
    </div>
</template>

<script setup>
import HeaderItem from '../components/HeaderItem.vue'

</script>