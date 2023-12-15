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
                        <!-- <small>
                          <svg class="icon color-text-rossa">
                            <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-arrow-circle-top"></use>
                          </svg> 2,4 % vs last week
                        </small> -->
                        <div class="small text-medium-emphasis mt-2">from 1-9 November, 2023</div>
                      </div>
                      <div class="btn-toolbar d-none d-md-block" role="toolbar" aria-label="Toolbar with buttons">
                        <router-link to="/pelaporan">
                          <button class="btn bg-success bg-button-rossa" type="button">
                            View report
                          </button>
                        </router-link>
                      </div>
                    </div>
                    <div class="c-chart-wrapper" style="height:300px;margin-top:40px;">
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
                        <!-- <small>
                          <svg class="icon color-text-rossa">
                            <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-arrow-circle-top"></use>
                          </svg> 2,4 % vs last week
                        </small> -->
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
                <div class="col-lg-7">
                  <div class="card-body">
                    <div class="d-flex justify-content-between mb-3">
                      <h5>Kandang</h5>
                      <router-link to="/penjadwalan">
                        <button class="btn btn-success bg-button-rossa">Lihat jadwal</button>
                      </router-link>
                    </div>
                    <div class="table-responsive">
                      <table class="table border mb-0">
                        <thead class="table-light fw-semibold">
                          <tr>
                            
                          </tr>
                        </thead>
                        <tbody>
                          <template v-if="dataPenjadwalan.responseData">
                            <tr v-for="item in dataPenjadwalan.responseData.data.items" :key="item.id">
                                <td>{{ item.id }}</td>
                                <td>{{ item.id_tugas }}</td>
                                <td>{{ item.id_kandang }}</td>
                                <td>{{ item.waktu_pelaksanaan }}</td>
                                <td>{{ item.deskripsi }}</td>
                                
                            </tr>
                         </template>
                          <template v-else>
                            <tr>
                                <td colspan="7" class="text-center">No Data Available</td>
                            </tr>
                          </template>
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
                      <!-- <small>
                        <svg class="icon color-text-rossa">
                          <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-arrow-circle-top"></use>
                        </svg> 2,4 % vs last week
                      </small> -->
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
  import { CChart } from '@coreui/vue-chartjs'
  import { storeToRefs } from 'pinia';
  import { useAuthStore, useUsersStore } from '@/stores';
  import { penjadwalanStore } from '@/stores';
  import { onMounted, reactive, ref } from 'vue'
  import axios from 'axios'
  import Swal from 'sweetalert2'

  const baseUrl = `${import.meta.env.VITE_API_URL}`;
  // const authStore = useAuthStore();
  // const { user: authUser } = storeToRefs(authStore);

  // const usersStore = useUsersStore();
  // const { users } = storeToRefs(usersStore);

  // usersStore.getAll();
  const dataPenjadwalan  = reactive(penjadwalanStore());

  onMounted(() => {
        getPenjadwalan()
  });

  async function getPenjadwalan() {
      const user = localStorage.getItem('user');
      const token = JSON.parse(user);
      // console.log(JSON.parse(token).token);
      axios.get(baseUrl + '/penjadwalan', {
          params: {
              page_number: 1, 
              page_size: 10, 
          },
          
          headers: {
              Authorization: `Bearer ${token.token}`,
          },
      })
          .then(response => {
              dataPenjadwalan.setResponseData(response.data);
              console.log(dataPenjadwalan.responseData.data);
          })
          .catch(error => {
              console.error(error);
          });
  }
  
</script>