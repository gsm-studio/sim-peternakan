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
                          {{ namaFilter }}
                          <a data-coreui-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" class="color-text-rossa ms-3">Filter</a>
                          <div class="dropdown-menu dropdown-menu-start p-3">
                              <select v-model="filter" @change="getFilter($event.target.value)" class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                                <option value="0" selected> 
                                    Pilih Filter 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                    <path d="M1 1L5.5 7L10 1" stroke="#0FA958" stroke-width="2"/>
                                    </svg>
                                </option>
                                <option value="avg">Avg. % persentase produksi</option>
                                <option value="fc">FC</option>
                                <option value="egg_mass">Egg mass</option>
                              </select> 
                              <!-- <Datepicker
                                  :date-format="{
                                      day: '2-digit',
                                      month: '2-digit',
                                      year: 'numeric' }"
                                  @input="inputDate"
                                  range
                                  v-model="selectedDate"
                                  lang="en"
                              /> -->
                          </div>
                        </div>
                       
                        <h5 class="card-title mb-0">{{ dataGrafikBatangHari1 }} gr/butir</h5>
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
                    <div class="c-chart-wrapper" style="margin-top:40px;">
                      <!-- <CChart
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
                        /> -->
                        <CChart
                          type="bar"
                          :data="{
                            labels: namaLabels,
                            datasets: [
                              {
                                label: 'Total',
                                backgroundColor: '#5CA882',
                                data: dataGrafikBatang,
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
                      <!-- <CChart
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
                        /> -->
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
                                pointBorderColor: '#dc3545',
                                data: totalJumlahMati
                              },
                             
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
                          <template v-if="dataPenjadwalan.responseData && dataPenjadwalan.responseData.data.items.length > 0">
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
                      <div class="pakan d-flex justify-content-around mb-3">
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
  const today = new Date();
  const sixDaysAgo = new Date(); 
  sixDaysAgo.setDate(sixDaysAgo.getDate() - 6);
  const selectedDate = ref([
        sixDaysAgo,
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
  const getOnlyDate = (tanggal) => {
      return moment(tanggal).format('DD');
  }
  const labels = ref([]);
  const namaLabels = ref([]);
  const totalJumlahMati = ref([]);
  const filteredPakan = ref([]);
  const uniquePakan = ref([]);
  const filter = ref('avg');
  const dataGrafikBatang = ref([]);
  const dataGrafikBatangHari1 = ref(0);
  const dataGrafikBatangHari2 = ref(0);
  const dataGrafikBatangHari3 = ref(0);
  const dataGrafikBatangHari4 = ref(0);
  const dataGrafikBatangHari5 = ref(0);
  const dataGrafikBatangHari6 = ref(0);
  const dataGrafikBatangHari7 = ref(0);
  const dataGrafikGarisHari1 = ref(0);
  const dataGrafikGarisHari2 = ref(0);
  const dataGrafikGarisHari3 = ref(0);
  const dataGrafikGarisHari4 = ref(0);
  const dataGrafikGarisHari5 = ref(0);
  const dataGrafikGarisHari6 = ref(0);
  const dataGrafikGarisHari7 = ref(0);
  const namaFilter = ref('');
  let hari1 = [];
  let hari2 = [];
  let hari3 = [];
  let hari4 = [];
  let hari5 = [];
  let hari6 = [];
  let hari7 = [];

  onMounted(() => {
    console.log("Tanggal 6 hari yang lalu:", sixDaysAgo);
    formatRangeDate.start = moment(selectedDate.value[0]).format("DD MMMM YYYY");
    formatRangeDate.end = moment(selectedDate.value[1]).format("DD MMMM YYYY");
    rangeDate.start = moment(selectedDate.value[0]).format("YYYY-MM-DD");
    rangeDate.end = moment(selectedDate.value[1]).format("YYYY-MM-DD");
    getPelaporan(null, rangeDate.start, rangeDate.end);
    getPenjadwalan()
    getKandang()
    getPakan()
    // Buat label untuk 7 hari terakhir
    for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        labels.value.push(date.toDateString()); // Tambahkan label tanggal
        namaLabels.value.push(getOnlyDate(date));
    }
    
  });

  watch(selectedDate, (newValue, oldValue) => {
        date.value = new Date(newValue[0]);
        rangeDate.start = moment(newValue[0]).format("YYYY-MM-DD");
        rangeDate.end = moment(newValue[1]).format("YYYY-MM-DD");
        getPelaporan(idKandang.value, rangeDate.start, rangeDate.end);
    });

  function getDataGrafikGaris() {
        if(hari1.length > 0) {
            dataGrafikGarisHari1.value = hari1[0].sumall_jumlah_mati;

        } else {
            dataGrafikGarisHari1.value = 0;
        }
        if(hari2.length > 0) {
            dataGrafikGarisHari2.value = hari2[0].sumall_jumlah_mati;
        } else {
            dataGrafikGarisHari2.value = 0;
        }
        if(hari3.length > 0) {
            dataGrafikGarisHari3.value = hari3[0].sumall_jumlah_mati;
        } else {
            dataGrafikGarisHari3.value = 0;
        }
        if(hari4.length > 0) {
            dataGrafikGarisHari4.value = hari4[0].sumall_jumlah_mati;
        } else {
            dataGrafikGarisHari4.value = 0;
        }
        if(hari5.length > 0) {
            dataGrafikGarisHari5.value = hari5[0].sumall_jumlah_mati;
        } else {
            dataGrafikGarisHari5.value = 0;
        }
        if(hari6.length > 0) {
            dataGrafikGarisHari6.value = hari6[0].sumall_jumlah_mati;
        } else {
            dataGrafikGarisHari6.value = 0;
        }
        if(hari7.length > 0) {
            dataGrafikGarisHari7.value = hari7[0].sumall_jumlah_mati;
        } else {
            dataGrafikGarisHari7.value = 0;
        }
  }

  function getFilter(value) {
        if (value === 'avg') {
          namaFilter.value = 'Avg. % persentase produksi';
          getPresentaseProduksi();
          //  if(hari1.length > 0) {
          //       dataGrafikBatangHari1.value = hari1[0].percentase_telur;
          //  } else {
          //       dataGrafikBatangHari1.value = 0;
          //  }
          //  if(hari2.length > 0) {
          //       dataGrafikBatangHari2.value = hari2[0].percentase_telur;
          //  } else {
          //       dataGrafikBatangHari2.value = 0;
          //  }
          //  if(hari3.length > 0) {
          //       dataGrafikBatangHari3.value = hari3[0].percentase_telur;
          //  } else {
          //       dataGrafikBatangHari3.value = 0;
          //  }
          //  if(hari4.length > 0) {
          //       dataGrafikBatangHari4.value = hari4[0].percentase_telur;
          //  } else {
          //       dataGrafikBatangHari4.value = 0;
          //  }
          //  if(hari5.length > 0) {
          //       dataGrafikBatangHari5.value = hari5[0].percentase_telur;
          //  } else {
          //       dataGrafikBatangHari5.value = 0;
          //  }
          //  if(hari6.length > 0) {
          //       dataGrafikBatangHari6.value = hari6[0].percentase_telur;
          //  } else {
          //       dataGrafikBatangHari6.value = 0;
          //  }
          //  if(hari7.length > 0) {
          //       dataGrafikBatangHari7.value = hari7[0].percentase_telur;
          //  } else {
          //       dataGrafikBatangHari7.value = 0;
          //  }
          
        } else if (value === 'fc') {
          namaFilter.value = 'Avg FC';
          getAvgFc();
          // if(hari1.length > 0) {
          //       dataGrafikBatangHari1.value = hari1[0].avg_fc;
          //  } else {
          //       dataGrafikBatangHari1.value = 0;
          //  }
          //  if(hari2.length > 0) {
          //       dataGrafikBatangHari2.value = hari2[0].avg_fc;
          //  } else {
          //       dataGrafikBatangHari2.value = 0;
          //  }
          //  if(hari3.length > 0) {
          //       dataGrafikBatangHari3.value = hari3[0].avg_fc;
          //  } else {
          //       dataGrafikBatangHari3.value = 0;
          //  }
          //  if(hari4.length > 0) {
          //       dataGrafikBatangHari4.value = hari4[0].avg_fc;
          //  } else {
          //       dataGrafikBatangHari4.value = 0;
          //  }
          //  if(hari5.length > 0) {
          //       dataGrafikBatangHari5.value = hari5[0].avg_fc;
          //  } else {
          //       dataGrafikBatangHari5.value = 0;
          //  }
          //  if(hari6.length > 0) {
          //       dataGrafikBatangHari6.value = hari6[0].avg_fc;
          //  } else {
          //       dataGrafikBatangHari6.value = 0;
          //  }
          //  if(hari7.length > 0) {
          //       dataGrafikBatangHari7.value = hari7[0].avg_fc;
          //  } else {
          //       dataGrafikBatangHari7.value = 0;
          //  }
        } else if (value === 'egg_mass') {
          namaFilter.value = 'Avg Egg Mass';
          getAvgEggMass();
          // if(hari1.length > 0) {
          //       dataGrafikBatangHari1.value = hari1[0].avg_egg_mass;
          //  } else {
          //       dataGrafikBatangHari1.value = 0;
          //  }
          //  if(hari2.length > 0) {
          //       dataGrafikBatangHari2.value = hari2[0].avg_egg_mass;
          //  } else {
          //       dataGrafikBatangHari2.value = 0;
          //  }
          //  if(hari3.length > 0) {
          //       dataGrafikBatangHari3.value = hari3[0].avg_egg_mass;
          //  } else {
          //       dataGrafikBatangHari3.value = 0;
          //  }
          //  if(hari4.length > 0) {
          //       dataGrafikBatangHari4.value = hari4[0].avg_egg_mass;
          //  } else {
          //       dataGrafikBatangHari4.value = 0;
          //  }
          //  if(hari5.length > 0) {
          //       dataGrafikBatangHari5.value = hari5[0].avg_egg_mass;
          //  } else {
          //       dataGrafikBatangHari5.value = 0;
          //  }
          //  if(hari6.length > 0) {
          //       dataGrafikBatangHari6.value = hari6[0].avg_egg_mass;
          //  } else {
          //       dataGrafikBatangHari6.value = 0;
          //  }
          //  if(hari7.length > 0) {
          //       dataGrafikBatangHari7.value = hari7[0].avg_egg_mass;
          //  } else {
          //       dataGrafikBatangHari7.value = 0;
          //  }
        }
  }

  function getPresentaseProduksi() {
        dataGrafikBatang.value = [];
        const items = dataPelaporan.responseData.data.items;
        const persentaseTanggal = {};
        items.forEach(item => {
            const tanggalSubmit = new Date(item.tanggal_submit);
            const diffTime = Math.abs(today - tanggalSubmit);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays <= 6) {
                const tanggalKey = tanggalSubmit.toDateString(); 
                if (persentaseTanggal[tanggalKey]) {
                  persentaseTanggal[tanggalKey] += parseFloat(item.avg_fc) || 0; 
                } else {
                  persentaseTanggal[tanggalKey] = parseFloat(item.avg_fc) || 0; 
                }
            }
        });
       
        labels.value.forEach(label => {
            dataGrafikBatang.value.push(persentaseTanggal[label] || null);
        });

  }

  function getAvgFc() {
        dataGrafikBatang.value = [];
        const items = dataPelaporan.responseData.data.items;
        const avgTanggal = {};
        items.forEach(item => {
            const tanggalSubmit = new Date(item.tanggal_submit);
            const diffTime = Math.abs(today - tanggalSubmit);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays <= 6) {
                const tanggalKey = tanggalSubmit.toDateString(); 
                if (avgTanggal[tanggalKey]) {
                  avgTanggal[tanggalKey] += parseFloat(item.avg_egg_mass) || 0; 
                } else {
                  avgTanggal[tanggalKey] = parseFloat(item.avg_egg_mass) || 0; 
                }
            }
        });
       
        labels.value.forEach(label => {
            dataGrafikBatang.value.push(avgTanggal[label] || null);
        });

  }

  function getAvgEggMass() {
        dataGrafikBatang.value = [];
        const items = dataPelaporan.responseData.data.items;
        const eggMassTanggal = {};
        items.forEach(item => {
            const tanggalSubmit = new Date(item.tanggal_submit);
            const diffTime = Math.abs(today - tanggalSubmit);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays <= 6) {
                const tanggalKey = tanggalSubmit.toDateString(); 
                if (eggMassTanggal[tanggalKey]) {
                  eggMassTanggal[tanggalKey] += parseFloat(item.percentase_telur) || 0; 
                } else {
                  eggMassTanggal[tanggalKey] = parseFloat(item.percentase_telur) || 0; 
                }
            }
        });
       
        labels.value.forEach(label => {
            dataGrafikBatang.value.push(eggMassTanggal[label] || null);
        });

  }

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
                const items = dataPelaporan.responseData.data.items;
               
                // items.forEach(item => {
                //     const tanggalSubmit = new Date(item.tanggal_submit);
                //     const diffTime = Math.abs(today - tanggalSubmit);
                //     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                //     if (diffDays === 1) hari1.push(item);
                //     else if (diffDays === 2) hari2.push(item);
                //     else if (diffDays === 3) hari3.push(item);
                //     else if (diffDays === 4) hari4.push(item);
                //     else if (diffDays === 5) hari5.push(item);
                //     else if (diffDays === 6) hari6.push(item);
                //     else if (diffDays === 7) hari7.push(item);
                // });

                const jumlahMatiPerTanggal = {};

                // Loop melalui data respons
                items.forEach(item => {
                    const tanggalSubmit = new Date(item.tanggal_submit);
                    const diffTime = Math.abs(today - tanggalSubmit);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                    // Cek apakah tanggal submit ada di antara 7 hari terakhir
                    if (diffDays <= 6) {
                        const tanggalKey = tanggalSubmit.toDateString(); // Buat kunci berdasarkan tanggal

                        // Tambahkan data telur utuh ke dalam objek, menjumlahkan jika sudah ada
                        if (jumlahMatiPerTanggal[tanggalKey]) {
                          jumlahMatiPerTanggal[tanggalKey] = item.sumall_jumlah_mati;
                        } else {
                          jumlahMatiPerTanggal[tanggalKey] = item.sumall_jumlah_mati;
                        }
                      
                    }
                });

                // Buat array untuk menyimpan data telur utuh untuk 7 hari terakhir

                labels.value.forEach(label => {
                    totalJumlahMati.value.push(jumlahMatiPerTanggal[label] || null);
                
                });

                getFilter(filter.value);
                getDataGrafikGaris();
                console.log("Data Hari 1:", hari1);
                console.log("Data Hari 2:", hari2);
                console.log("Data Hari 3:", hari3);
                console.log("Data Hari 4:", hari4);
                console.log("Data Hari 5:", hari5);
                console.log("Data Hari 6:", hari6);

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
                console.log("Pelaporan : ", response);
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

<style scoped>
  .c-chart-wrapper {
      height: auto !important;
  }
 .pakan .card-title {
      border-right: 1px solid black; 
      padding-right: 10px; 
      margin-right: 10px; 
  }
  .pakan .card-title:last-child {
      border-right: none; 
      margin-right: 0; 
  }
</style>