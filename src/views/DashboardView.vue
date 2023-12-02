<template>
    <HeaderItem />
    <div class="body flex-grow-1 px-3">
      <div class="container-lg">
        <!-- /.row-->
        <div class="row">
          <div class="col-md-12">
            <div class="card mb-4">
              <div class="row mb-5">
                <div class="col-lg-7">
                  <div class="card-body">
                    <h4 class="d-inline">Dashboard</h4>
                    <small class="color-text-rossa ms-2">09 November 2023</small>
                    <div class="d-flex justify-content-between mt-4">
                      <div>
                        <div class="small text-medium-emphasis mb-2">
                          Egg Mass Average 
                          <span class="color-text-rossa ms-3">Filter</span>
                        </div>
                        <h5 class="card-title mb-0">52 gr/butir</h5>
                        <small>
                          <svg class="icon color-text-rossa">
                            <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-arrow-circle-top"></use>
                          </svg> 2,4 % vs last week
                        </small>
                        <div class="small text-medium-emphasis mt-2">from 1-9 November, 2023</div>
                      </div>
                      <div class="btn-toolbar d-none d-md-block" role="toolbar" aria-label="Toolbar with buttons">
                        
                        <button class="btn bg-success bg-button-rossa" type="button">
                            View report
                        </button>
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
                          Egg Mass Average 
                          <span class="color-text-rossa ms-3">Semua kandang</span>
                        </div>
                        <h5 class="card-title mb-0">52 gr/butir</h5>
                        <small>
                          <svg class="icon color-text-rossa">
                            <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-arrow-circle-top"></use>
                          </svg> 2,4 % vs last week
                        </small>
                        <div class="small text-medium-emphasis mt-2">from 1-9 November, 2023</div>
                      </div>
                      
                    </div>
                    <div class="row text-center mt-4">
                      <div class="col mb-sm-3 mb-0">
                        <div class="text-medium-emphasis">Mati</div>
                        <div class="small color-text-rossa">8</div>
                      </div>
                      <div class="col mb-sm-3 mb-0">
                        <div class="text-medium-emphasis">Afkir</div>
                        <div class="small color-text-rossa">1,200</div>
                      </div>
                      <div class="col mb-sm-3 mb-0">
                        <div class="text-medium-emphasis">Pindah</div>
                        <div class="small color-text-rossa">400</div>
                      </div>
                      <div class="col mb-sm-3 mb-0">
                        <div class="text-medium-emphasis">Terima</div>
                        <div class="small color-text-rossa">400</div>
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
                <div class="col-lg-7">
                  <div class="card-body">
                    <div class="d-flex justify-content-between mb-3">
                      <h5>Kandang</h5>
                      <button class="btn btn-success bg-button-rossa">Lihat jadwal</button>
                    </div>
                    <div class="table-responsive">
                      <table class="table border mb-0">
                        <thead class="table-light fw-semibold">
                          <tr>
                            
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-center">
                              Kandang 1A
                            </td>
                            <td>
                              <svg class="icon me-2">
                                <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-circle"></use>
                              </svg>
                              Rosa
                            </td>
                            <td class="text-center">
                              20/12/2023
                            </td>
                            <td>
                              Vaksin ND
                            </td>
                            <td class="text-center">
                              <img class="img-fluid" src="@/assets/img/worker-outline.png" alt="">
                            </td>
                            <td>
                              <img class="img-fluid" src="@/assets/img/symbols-note.png" alt="">
                            </td>
                          </tr>
                          <tr>
                            <td class="text-center">
                              Kandang 1A
                            </td>
                            <td>
                              <svg class="icon me-2">
                                <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-circle"></use>
                              </svg>
                              Rosa
                            </td>
                            <td class="text-center">
                              20/12/2023
                            </td>
                            <td>
                              Vaksin ND
                            </td>
                            <td class="text-center">
                              <img class="img-fluid" src="@/assets/img/worker-outline.png" alt="">
                            </td>
                            <td>
                              <img class="img-fluid" src="@/assets/img/symbols-note.png" alt="">
                            </td>
                          </tr>
                          <tr>
                            <td class="text-center">
                              Kandang 1A
                            </td>
                            <td>
                              <svg class="icon me-2">
                                <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-circle"></use>
                              </svg>
                              Rosa
                            </td>
                            <td class="text-center">
                              20/12/2023
                            </td>
                            <td>
                              Vaksin ND
                            </td>
                            <td class="text-center">
                              <img class="img-fluid" src="@/assets/img/worker-outline.png" alt="">
                            </td>
                            <td>
                              <img class="img-fluid" src="@/assets/img/symbols-note.png" alt="">
                            </td>
                          </tr>
                          <tr>
                            <td class="text-center">
                              Kandang 1A
                            </td>
                            <td>
                              <svg class="icon me-2">
                                <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-circle"></use>
                              </svg>
                              Rosa
                            </td>
                            <td class="text-center">
                              20/12/2023
                            </td>
                            <td>
                              Vaksin ND
                            </td>
                            <td class="text-center">
                              <img class="img-fluid" src="@/assets/img/worker-outline.png" alt="">
                            </td>
                            <td>
                              <img class="img-fluid" src="@/assets/img/symbols-note.png" alt="">
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5">
                  <div class="mt-4">
                    <div>
                      <div class="small text-medium-emphasis mb-2">
                        Pakan 
                        <span class="color-text-rossa ms-3">Semua kandang</span>
                      </div>
                      <div class="d-flex justify-content-around mb-3">
                        <h5 class="card-title mb-0">16,900 kg</h5>
                        <h5 class="card-title mb-0">106.4 gram/ekor</h5>
                      </div>
                      <small>
                        <svg class="icon color-text-rossa">
                          <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-arrow-circle-top"></use>
                        </svg> 2,4 % vs last week
                      </small>
                    </div>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="108" height="108" viewBox="0 0 108 108" fill="none">
                        <circle cx="54" cy="54" r="54" fill="#0FA958" fill-opacity="0.6"/>
                        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="14px">40,7 %
                            Omega</text>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="108" height="108" viewBox="0 0 108 108" fill="none">
                        <circle cx="54" cy="54" r="54" fill="#D8608B" fill-opacity="0.7"/>
                        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="14px">59,3 %
                            Selfmix</text>
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
import HeaderItem from '@/components/HeaderItem.vue'

</script>