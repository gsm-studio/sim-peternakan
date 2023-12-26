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
                    <small class="color-text-rossa ms-2">{{ getToday() }}</small>
                    <div class="d-flex justify-content-between mt-4">
                      <div>
                        <div class="small text-medium-emphasis mb-2">
                          Egg Mass Average 
                          <a data-coreui-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" class="color-text-rossa ms-3">Filter</a>
                          <div class="dropdown-menu dropdown-menu-start p-3">
                              <select v-model="idKandang" @change="getPelaporan($event.target.value, rangeDate.start, rangeDate.end)" class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                                <option value="0" selected> 
                                    Semua kandang 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                    <path d="M1 1L5.5 7L10 1" stroke="#0FA958" stroke-width="2"/>
                                    </svg>
                                </option>
                                <template v-if="dataKandang.responseData">
                                    <option v-for="item in dataKandang.responseData.data.items" :key="item.id" :value="item.id">
                                        {{ item.id }} - {{ item.nama }}
                                    </option>
                                </template>
                                <template v-else>
                                    <option>Belum ada kandang</option>
                                </template>
                              </select> 
                              <Datepicker
                                  :date-format="{
                                      day: '2-digit',
                                      month: '2-digit',
                                      year: 'numeric' }"
                                  @input="inputDate"
                                  range
                                  v-model="selectedDate"
                                  lang="en"
                              />
                          </div>
                        </div>
                       
                        <h5 class="card-title mb-0">{{ detailPelaporan.avg_egg_mass }} gr/butir</h5>
                        <!-- <small>
                          <svg class="icon color-text-rossa">
                            <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-arrow-circle-top"></use>
                          </svg> 2,4 % vs last week
                        </small> -->
                        <div class="small text-medium-emphasis mt-2">
                          {{ formatRangeDate.start }} - 
                          {{ formatRangeDate.end }}
                        </div>
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
                            labels: ['Telur Utuh', 'Telur Bentes'],
                            datasets: [
                              {
                                label: 'Total',
                                backgroundColor: '#5CA882',
                                data: [detailPelaporan.sumall_telur_utuh, detailPelaporan.sumall_telur_bentes],
                              },
                              {
                                label: 'Berat (kg)',
                                backgroundColor: '#D9D9D9',
                                data: [detailPelaporan.sumall_berat_telur_utuh_kg, detailPelaporan.sumall_berat_telur_bentes_kg],
                              },
                              {
                                label: 'Rata-rata Total',
                                backgroundColor: '#5CA882',
                                data: [detailPelaporan.avg_telur_utuh, detailPelaporan.avg_telur_bentes],
                              },
                              {
                                label: 'Rata-rata Berat (kg)',
                                backgroundColor: '#D9D9D9',
                                data: [detailPelaporan.avg_berat_telur_utuh_kg, detailPelaporan.avg_berat_telur_bentes_kg],
                              },
                            ],
                          }"
                          labels="Diagram Batang"
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
                          Populasi Ayam 
                          <span class="color-text-rossa ms-3">{{ namaKandang }}</span>
                        </div>
                        <h5 class="card-title mb-0">{{ detailPelaporan.sumall_populasi_total }} ekor</h5>
                        <!-- <small>
                          <svg class="icon color-text-rossa">
                            <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-arrow-circle-top"></use>
                          </svg> 2,4 % vs last week
                        </small> -->
                        <div class="small text-medium-emphasis mt-2">
                          {{ formatRangeDate.start }} -
                          {{ formatRangeDate.end }}
                        </div>
                      </div>
                      
                    </div>
                    <div class="row text-center mt-4">
                      <div class="col mb-sm-3 mb-0">
                        <div class="text-medium-emphasis">Mati</div>
                        <div class="small color-text-rossa">{{ detailPelaporan.sumall_jumlah_mati }}</div>
                      </div>
                      <div class="col mb-sm-3 mb-0">
                        <div class="text-medium-emphasis">Afkir</div>
                        <div class="small color-text-rossa">{{ detailPelaporan.sumall_jumlah_afkir }}</div>
                      </div>
                      <div class="col mb-sm-3 mb-0">
                        <div class="text-medium-emphasis">Pindah</div>
                        <div class="small color-text-rossa">{{ detailPelaporan.sumall_jumlah_pindah }}</div>
                      </div>
                      <div class="col mb-sm-3 mb-0">
                        <div class="text-medium-emphasis">Terima</div>
                        <div class="small color-text-rossa">{{ detailPelaporan.sumall_jumlah_terima }}</div>
                      </div>
                    </div>
                    <div>
                      <CChart
                          type="line"
                          :wrapper="false"
                          :data="{
                            labels: ['Mati', 'Afkir', 'Pindah', 'Terima', 'Populasi Total'],
                            datasets: [
                              {
                                label: 'Total',
                                backgroundColor: 'rgba(220, 220, 220, 0.2)',
                                borderColor: 'rgba(220, 220, 220, 1)',
                                pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                                pointBorderColor: '#dc3545',
                                data: [detailPelaporan.sumall_jumlah_mati, detailPelaporan.sumall_jumlah_afkir, detailPelaporan.sumall_jumlah_pindah, detailPelaporan.sumall_jumlah_terima, detailPelaporan.sumall_populasi_total]
                              },
                              {
                                label: 'Rata-rata',
                                backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                borderColor: 'rgba(151, 187, 205, 1)',
                                pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                pointBorderColor: '#dc3545',
                                data: [detailPelaporan.avg_jumlah_mati, 0, 0, 0, detailPelaporan.avg_populasi_total]
                              }
                            ]
                          }"
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
                                <td>{{ item.tugas.nama }}</td>
                                <td>{{ item.kandang.nama }}</td>
                                <td>{{ formatTanggal(item.waktu_pelaksanaan) }}</td>
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
                        <span class="color-text-rossa ms-3">{{ namaKandang }}</span>
                      </div>
                      <div class="d-flex justify-content-around mb-3">
                        <h5 class="card-title mb-0">{{ detailPelaporan.avg_berat_pakan }} kg</h5>
                        <h5 class="card-title mb-0">{{ detailPelaporan.avg_berat_pakan_per_ekor_gram }} gram/ekor</h5>
                      </div>
                      <!-- <small>
                        <svg class="icon color-text-rossa">
                          <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-arrow-circle-top"></use>
                        </svg> 2,4 % vs last week
                      </small> -->
                    </div>
                    <div>
                    <template v-if="uniquePakan.length > 0">
                        <svg v-for="(item, index) in uniquePakan" :key="index" xmlns="http://www.w3.org/2000/svg" width="108" height="108" viewBox="0 0 108 108" fill="none">
                          <circle cx="54" cy="54" r="54" :fill="colors[index]" fill-opacity="0.6"/>
                          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="14px">
                              {{ item }}
                          </text>
                        </svg>
                    </template>
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
  import { penjadwalanStore, pelaporanStore, kandangStore, pakanStore } from '@/stores';
  import { onMounted, reactive, ref, watch } from 'vue'
  import axios from 'axios'
  import Swal from 'sweetalert2'
  import moment from 'moment'

  const baseUrl = `${import.meta.env.VITE_API_URL}`;
  // const authStore = useAuthStore();
  // const { user: authUser } = storeToRefs(authStore);

  // const usersStore = useUsersStore();
  // const { users } = storeToRefs(usersStore);

  // usersStore.getAll();
  const dataPenjadwalan  = reactive(penjadwalanStore());
  const dataPelaporan  = reactive(pelaporanStore());
  const dataKandang = reactive(kandangStore());
  const dataPakan = reactive(pakanStore());
  const idKandang = ref(0);
  const date = ref(0);
  const colors = ref(['#6AD0B8', '#D8608BB2', '#8660D8B2']);
  const formatTanggal = (tanggal) => {
        return moment(tanggal).format('DD-MM-YYYY');
    }
  const namaKandang = ref('Semua kandang');
  const getListNamaPakan = ref([]);
  const selectedDate = ref([
        new Date(2022, 1, 1),
        new Date()
  ]);
  const rangeDate = reactive({
        start: null,
        end: null,
  });
  const formatRangeDate = reactive({
        start: null,
        end: null,
  }); 
  const getToday = () => {
        const today = new Date();
        const format  = moment(today).format("DD MMMM YYYY");
        return format;
  }
  const detailPelaporan = reactive({
      avg_egg_mass: null,
      sumall_jumlah_mati: null,
      sumall_jumlah_afkir: null,
      sumall_jumlah_pindah: null,
      sumall_jumlah_terima: null,
      sumall_populasi_total: null,
      avg_berat_pakan: null,
      avg_berat_pakan_per_ekor_gram: null,
      sumall_berat_telur_utuh_kg: null,
      sumall_berat_telur_bentes_kg: null,
      avg_berat_telur_utuh_kg: null,
      avg_berat_telur_bentes_kg: null,
      sumall_telur_utuh: null,
      sumall_telur_bentes: null,
      avg_telur_utuh: null,
      avg_telur_bentes: null,
      avg_jumlah_mati: null,
      avg_populasi_total: null,
  });
  const filteredPakan = ref([]);
  const uniquePakan = ref([]);

  onMounted(() => {
      formatRangeDate.start = moment(selectedDate.value[0]).format("DD MMMM YYYY");
      formatRangeDate.end = moment(selectedDate.value[1]).format("DD MMMM YYYY");
      rangeDate.start = moment(selectedDate.value[0]).format("YYYY-MM-DD");
      rangeDate.end = moment(selectedDate.value[1]).format("YYYY-MM-DD");
      getPelaporan(null, rangeDate.start, rangeDate.end);
      getPenjadwalan()
      getKandang()
      getPakan()
     
    
  });

  function inputDate() {
       console.log("Input Data : ", selectedDate);
  }
  watch(selectedDate, (newValue, oldValue) => {
        date.value = new Date(newValue[0]);
        rangeDate.start = moment(newValue[0]).format("YYYY-MM-DD");
        rangeDate.end = moment(newValue[1]).format("YYYY-MM-DD");
        getPelaporan(idKandang.value, rangeDate.start, rangeDate.end);
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

  async function getPelaporan(id_kandang, startDate, endDate) {
        if (id_kandang == 0) {
            id_kandang = null;
        }
        getIdKandang(id_kandang);
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
                if(dataPelaporan.responseData.data.items.length > 0) {
                    detailPelaporan.avg_egg_mass = parseFloat(dataPelaporan.responseData.data.items[0].avg_egg_mass).toFixed(2);
                    detailPelaporan.sumall_populasi_total = dataPelaporan.responseData.data.items[0].sumall_populasi_total;
                    detailPelaporan.sumall_jumlah_mati = dataPelaporan.responseData.data.items[0].sumall_jumlah_mati;
                    detailPelaporan.sumall_jumlah_afkir = dataPelaporan.responseData.data.items[0].sumall_jumlah_afkir;
                    detailPelaporan.sumall_jumlah_pindah = dataPelaporan.responseData.data.items[0].sumall_jumlah_pindah;
                    detailPelaporan.sumall_jumlah_terima = dataPelaporan.responseData.data.items[0].sumall_jumlah_terima;
                    detailPelaporan.avg_berat_pakan = parseFloat(dataPelaporan.responseData.data.items[0].avg_berat_pakan).toFixed(2);
                    detailPelaporan.avg_berat_pakan_per_ekor_gram = parseFloat(dataPelaporan.responseData.data.items[0].avg_berat_pakan_per_ekor_gram).toFixed(2);
                    detailPelaporan.sumall_populasi_total = dataPelaporan.responseData.data.items[0].sumall_populasi_total;
                    detailPelaporan.sumall_berat_telur_utuh_kg = parseFloat(dataPelaporan.responseData.data.items[0].sumall_berat_telur_utuh_kg).toFixed(2);
                    detailPelaporan.sumall_berat_telur_bentes_kg = parseFloat(dataPelaporan.responseData.data.items[0].sumall_berat_telur_bentes_kg).toFixed(2);
                    detailPelaporan.sumall_telur_utuh = parseFloat(dataPelaporan.responseData.data.items[0].sumall_telur_utuh).toFixed(2);
                    detailPelaporan.sumall_telur_bentes = parseFloat(dataPelaporan.responseData.data.items[0].sumall_telur_bentes).toFixed(2);
                    detailPelaporan.avg_telur_utuh = parseFloat(dataPelaporan.responseData.data.items[0].avg_telur_utuh).toFixed(2);
                    detailPelaporan.avg_telur_bentes = parseFloat(dataPelaporan.responseData.data.items[0].avg_telur_bentes).toFixed(2);
                    detailPelaporan.avg_jumlah_mati = parseFloat(dataPelaporan.responseData.data.items[0].avg_jumlah_mati).toFixed(2);
                    detailPelaporan.avg_populasi_total = parseFloat(dataPelaporan.responseData.data.items[0].avg_populasi_total).toFixed(2);

                } else {
                    detailPelaporan.avg_egg_mass = 0;
                    detailPelaporan.sumall_populasi_total = 0;
                    detailPelaporan.sumall_jumlah_mati = 0;
                    detailPelaporan.sumall_jumlah_afkir = 0;
                    detailPelaporan.sumall_jumlah_pindah = 0;
                    detailPelaporan.sumall_jumlah_terima = 0;
                    detailPelaporan.avg_berat_pakan = 0;
                    detailPelaporan.avg_berat_pakan_per_ekor_gram = 0;
                    detailPelaporan.sumall_populasi_total = 0;
                    detailPelaporan.sumall_berat_telur_utuh_kg = 0;
                    detailPelaporan.sumall_berat_telur_bentes_kg = 0;
                    detailPelaporan.sumall_telur_utuh = 0;
                    detailPelaporan.sumall_telur_bentes = 0;
                    detailPelaporan.avg_telur_utuh = 0;
                    detailPelaporan.avg_telur_bentes = 0;
                    detailPelaporan.avg_jumlah_mati = 0;
                    detailPelaporan.avg_populasi_total = 0;
                    
                } 
                filteredPakan.value = dataPelaporan.responseData.data.items.filter(item => item.nama_jenis_pakan !== null && item.nama_jenis_pakan !== undefined);
                uniquePakan.value = [...new Set(filteredPakan.value.map(item => item.nama_jenis_pakan))];
                console.log("Pelaporan : ", dataPelaporan.responseData.data.items);
            })
            .catch(error => {
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
                // console.log(dataKandang.responseData.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    async function getIdKandang(id) {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/kandang/' + id, {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                namaKandang.value = response.data.data.nama ? response.data.data.nama : 'Semua kandang';
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
                console.log("Data Pakan : ", dataPakan.responseData.data);
            })
            .catch(error => {
                console.error(error);
            });
    }
  
</script>