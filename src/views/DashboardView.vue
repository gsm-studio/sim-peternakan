<template>
    <HeaderItem />
    <div class="body flex-grow-1 px-3">
      <div class="container-lg">
        <!-- /.row-->
        <div class="row">
          <div class="col-md-12">
            <div class="card mb-4">
              <div class="row g-0">
                <div class="col-lg-12 border-bottom">
                  <div class="card-body">
                    <h4 class="d-inline">Dashboard</h4>
                    <small class="color-text-rossa ms-2">{{ getToday() }}</small>
                    <div class="d-flex justify-content-between mt-4">
                      <div>
                        <div class="small text-medium-emphasis mb-2">
                          {{ namaFilter }}
                          <!-- <a data-coreui-toggle="dropdown" role="button" aria-haspopup="true" id="dropdownMenuClickableInside" class="color-text-rossa ms-3" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Filter</a> -->
                            <a class="color-text-rossa ms-3" role="button" id="dropdownMenuClickableInside" data-coreui-toggle="dropdown" data-coreui-auto-close="outside" aria-expanded="false">
                              Filter
                            </a>
                          <div class="dropdown-menu dropdown-menu-start p-3 shadow" aria-labelledby="dropdownMenuClickableInside" >
                            <div class="d-flex justify-content-between">
                                    <label class="form-label">Pilih Filter</label>
                                    <a href="javascript:void(0)" @click="clearFilter()">Clear</a>
                              </div>
                            <select v-model="filter" class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                                <!-- <option value="0" selected> 
                                    Pilih Filter 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                    <path d="M1 1L5.5 7L10 1" stroke="#0FA958" stroke-width="2"/>
                                    </svg>
                                </option> -->
                                <option value="avg" selected>Avg. % produksi</option>
                                <option value="jmlButir">Jumlah Butir</option>
                                <option value="fcr">FCR</option>
                                <option value="pakan">Total Konsumsi Pakan (kg)</option>
                              </select> 
                              <label class="form-label">Waktu</label>
                              <select v-model="filterWaktu" class="form-control mb-3">
                                <option value="daily">Hari</option>
                                <option value="monthly">Bulan</option>
                                <option value="yearly">Tahun</option>
                                <option value="period">Period</option>
                              </select>
                              <!-- <div class="waktuDatePicker"> -->
                                <Datepicker
                                  v-if="filterWaktu == 'daily'"
                                  position="center"
                                  :date-format="{
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric' }"
                                  @input="inputWaktu"
                                  range
                                  v-model="selectedWaktu"
                                  lang="id"
                                />
                                <Datepicker
                                  v-else-if="filterWaktu == 'monthly'"
                                  position="center"
                                  :date-format="{
                                    month: '2-digit',
                                    year: 'numeric' }"
                                  @input="inputWaktu"
                                  range
                                  v-model="selectedWaktu"
                                  lang="id"
                                />
                                <Datepicker
                                  v-else-if="filterWaktu == 'yearly'"
                                  position="center"
                                  :date-format="{
                                    year: 'numeric' }"
                                  @input="inputWaktu"
                                  range
                                  v-model="selectedWaktu"
                                  lang="id"
                                />
                              <!-- </div> -->
                              <label class="form-label mt-3">Kandang</label>
                              <select @change="getListPeriode($event.target.value)" v-model="filterKandang" class="form-control mb-3">
                                <option value="0">Semua Kandang</option>
                                  <template v-if="dataKandang.responseData && dataKandang.responseData.data.items.length > 0">
                                    <option v-for="item in dataKandang.responseData.data.items" :key="item.id" :value="item.id">{{ item.nama }}</option>
                                  </template>
                              </select>
                              <select v-model="id_kategori_kandang" class="form-control mb-3">
                                <option value="0">Pilih Kategori Kandang</option>
                                  <template v-if="dataKandang.kategori">
                                        <option v-for="item in dataKandang.kategori" :key="item.id" :value="item.id">
                                            {{ item.nama }}
                                        </option>
                                  </template>
                              </select>
                              <select v-model="id_anak_kandang" class="form-control mb-3">
                                <option value="0">Pilih Anak Kandang</option>
                                <template v-if="dataKaryawan.responseData && dataKaryawan.responseData.data.items.length > 0">
                                        <option v-for="item in dataKaryawan.responseData.data.items" :key="item.id" :value="item.id">
                                            {{ item.nama }}
                                        </option>
                                    </template>
                              </select>
                              <template v-if="filterWaktu == 'period'">
                                <div class="mb-3">
                                  <label class="form-label">Periode</label>
                                  <select v-model="period" class="form-control">
                                    <option value="0">Pilih Periode</option>
                                    <template v-if="dataPelaporan.periode && dataPelaporan.periode.data.items.length > 0">
                                      <option v-for="item in dataPelaporan.periode.data.items" :key="item" :value="item.id">{{ item.period }}</option>
                                    </template>
                                  </select>
                                </div>
                              </template>
                              <div class="form-check form-switch">
                                <input v-model="view_by_usia" class="form-check-input" type="checkbox" id="view_by_usia">
                                <label class="form-check-label" for="view_by_usia">Lihat Usia</label>
                              </div>
                             <button @click="submitFilter()" class="btn btn-success bg-button-rossa mt-3" type="button">
                                Terapkan
                              </button>
                          </div>
                        </div>
                       
                        <h5 class="card-title mb-0">{{ valueFilter }}</h5>
                        <small v-if="metrikAktif == 'avg' && hdTerakhir !== null" class="d-block mt-1">
                          HD terakhir <strong>{{ formatAngka(hdTerakhir) }}%</strong>
                          &middot; {{ labelHdSebelumnya }} <strong>{{ hdSebelumnya !== null ? formatAngka(hdSebelumnya) + '%' : '-' }}</strong>
                          &middot; Selisih HD
                          <strong :class="selisihHd !== null && selisihHd < 0 ? 'text-danger' : 'color-text-rossa'">{{ selisihHd !== null ? formatSelisih(selisihHd) : '-' }}</strong>
                        </small>
                        <!-- <small>
                          <svg class="icon color-text-rossa">
                            <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-arrow-circle-top"></use>
                          </svg> 2,4 % vs last week
                        </small> -->
                        <div class="small text-medium-emphasis mt-2">
                          {{ formatRangeDateGrafik1.start }} - 
                          {{ formatRangeDateGrafik1.end }}
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
                        <div class="chart">
                          <CChart
                            type="line"
                            :wrapper="false"
                            :data="{
                              labels: listLabelGrafik1,
                              datasets: datasetsGrafik1
                            }"
                          />
                        
                    </div>
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
                <div class="col-lg-12">
                  <div class="card-body populasi">
                    
                    <div class="d-flex justify-content-between mt-4">
                      <div>
                        <div class="small text-medium-emphasis mb-2">
                          Populasi Ayam 
                          <span class="color-text-rossa ms-3">{{ namaKandang }}</span>
                        </div>
                        <h5 class="card-title mb-0">{{ detailPelaporan.populasi_total_alltime }} ekor</h5>
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
                        <div class="chart">
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
              <div class="row g-0 border-top">
                <div class="col-lg-7 border-end">
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
                                <!-- <td>{{ item.id }}</td> -->
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
                    <div class="ps-3 ps-lg-3">
                      <div class="small text-medium-emphasis mb-2">
                        Pakan 
                        <span class="color-text-rossa ms-3">{{ namaKandang }}</span>
                      </div>
                      <div class="small text-medium-emphasis mt-2 mb-3">
                          {{ formatRangeDate.start }} -
                          {{ formatRangeDate.end }}
                        </div>
                      <div class="pakan d-flex justify-content-around mb-3">
                        <h5 class="card-title mb-0">{{ detailPelaporan.sumall_berat_pakan }} kg</h5>
                        <h5 class="card-title mb-0">{{ detailPelaporan.avg_berat_pakan_per_ekor_gram }} gram/ekor</h5>
                      </div>
                      <!-- <small>
                        <svg class="icon color-text-rossa">
                          <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-arrow-circle-top"></use>
                        </svg> 2,4 % vs last week
                      </small> -->
                    </div>
                    <div class="pie-chart">
                    <!-- <template v-if="uniquePakan.length > 0">
                        <svg v-for="(item, index) in uniquePakan" :key="index" xmlns="http://www.w3.org/2000/svg" width="108" height="108" viewBox="0 0 108 108" fill="none">
                          <circle cx="54" cy="54" r="54" :fill="colors[index]" fill-opacity="0.6"/>
                          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="14px">
                              {{ item }}
                          </text>
                        </svg>
                    </template> -->
                    <CChart
                        type="pie"
                        :width="180"
                        :data="{
                            labels: labelJenisPakan,
                            datasets: [
                                {
                                    backgroundColor: backgroundColorJenisPakan,
                                    data: dataPresentasePakan,
                                },
                             
                            ],
                        }"
                      />
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
  import { penjadwalanStore, pelaporanStore, kandangStore, pakanStore, karyawanStore } from '@/stores';
  import { computed, onMounted, reactive, ref, watch } from 'vue'
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
  const dataKaryawan = reactive(karyawanStore());
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
  const formatRangeDateGrafik1 = reactive({
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
      avg_percentase_telur: null,
      avg_fc: null,
      avg_percentase_telur_daily: null,
      avg_fc_daily: null,
      avg_egg_mass_daily: null,
      populasi_total_alltime: null,
      sumall_berat_pakan: null,
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
  const namaFilter = ref('');
  const valueFilter = ref('');
  const labelJenisPakan = ref([]);
  const dataPresentasePakan = ref([]);
  const backgroundColorJenisPakan = ref([]);
  const jenis_pakan_items = ref([]);

  const filterWaktu = ref('daily');
  const period = ref(0);
  const filterKandang = ref(0);
  const selectedWaktu = ref([
        // new Date('2021-01-01'),
        sixDaysAgo,
        new Date()
  ]);
  const listLabelGrafik1 = ref([]);
  const listTglWaktu = ref([]);
  const listBulanWaktu = ref([]);
  const listTahunWaktu = ref([]);
  const id_kategori_kandang = ref(0);
  const id_anak_kandang = ref(0);
  const dataGrafik1 = ref([]);
  const dataHdSebelumnya = ref([]);
  const metrikAktif = ref('avg');
  const hdTerakhir = ref(null);
  const hdSebelumnya = ref(null);
  const selisihHd = ref(null);
  const labelHdSebelumnya = ref('HD kemarin');

  // Pilihan metrik pada dropdown "Pilih Filter"
  const METRIK = {
    avg: { nama: 'Avg. % produksi', field: 'avg_percentase_telur', satuan: '%', agregat: 'avg' },
    jmlButir: { nama: 'Jumlah Butir', field: 'sum_jumlah_butir', satuan: '', agregat: 'sum' },
    fcr: { nama: 'FCR', field: 'fcr', satuan: '', agregat: 'avg' },
    pakan: { nama: 'Total Konsumsi Pakan (kg)', field: 'total_konsumsi_pakan_kg', satuan: ' kg', agregat: 'sum' },
  };
  const LABEL_SEBELUMNYA = { daily: 'HD kemarin', monthly: 'HD bulan lalu', yearly: 'HD tahun lalu', period: 'HD periode sebelumnya' };

  const formatAngka = (v) => Number(v).toLocaleString('id-ID', { maximumFractionDigits: 2 });
  const formatSelisih = (v) => (v > 0 ? '+' : '') + formatAngka(v) + '%';

  const datasetsGrafik1 = computed(() => {
    const sets = [{
      label: namaFilter.value,
      backgroundColor: 'rgba(220, 220, 220, 0.2)',
      borderColor: 'rgba(220, 220, 220, 1)',
      pointBackgroundColor: 'rgba(220, 220, 220, 1)',
      pointBorderColor: '#dc3545',
      data: dataGrafik1.value,
    }];
    if (metrikAktif.value == 'avg') {
      sets.push({
        label: labelHdSebelumnya.value,
        borderColor: '#5CA882',
        pointBackgroundColor: '#5CA882',
        borderDash: [8, 5],
        borderWidth: 1,
        data: dataHdSebelumnya.value,
      });
    }
    return sets;
  });

  // Angka utama di bawah judul metrik + HD kemarin / selisih HD (dari data grafik terakhir yang diterapkan)
  function updateHeadline() {
    const m = METRIK[metrikAktif.value] || METRIK.avg;
    namaFilter.value = m.nama;
    const items = (dataPelaporan.dataGrafik1 && dataPelaporan.dataGrafik1.data && dataPelaporan.dataGrafik1.data.items) || [];
    const nilai = items.map(item => item[m.field]).filter(v => v !== null && v !== undefined).map(Number);
    if (nilai.length == 0) {
      valueFilter.value = 0;
    } else {
      const total = nilai.reduce((a, b) => a + b, 0);
      const hasil = m.agregat == 'sum' ? total : total / nilai.length;
      valueFilter.value = formatAngka(hasil) + m.satuan;
    }
    const terakhir = items.length > 0 ? items[items.length - 1] : null;
    const angka = (v) => (v === null || v === undefined ? null : Number(v));
    hdTerakhir.value = terakhir ? angka(terakhir.avg_percentase_telur) : null;
    hdSebelumnya.value = terakhir ? angka(terakhir.hd_sebelumnya) : null;
    selisihHd.value = terakhir ? angka(terakhir.selisih_hd) : null;
  }
  const view_by_usia = ref('false');

  onMounted(() => {
    console.log("Tanggal 6 hari yang lalu:", sixDaysAgo);
    formatRangeDate.start = moment(selectedDate.value[0]).format("DD MMMM YYYY");
    formatRangeDate.end = moment(selectedDate.value[1]).format("DD MMMM YYYY");
    rangeDate.start = moment(selectedDate.value[0]).format("YYYY-MM-DD");
    rangeDate.end = moment(selectedDate.value[1]).format("YYYY-MM-DD");
    formatRangeDateGrafik1.start = moment(selectedWaktu.value[0]).format("DD MMMM YYYY");
    formatRangeDateGrafik1.end = moment(selectedWaktu.value[1]).format("DD MMMM YYYY");
    getPelaporan(null, rangeDate.start, rangeDate.end);
    getPenjadwalan()
    getKandang()
    getPakan()
    getKaryawan()
    getPelaporanGrafik1();
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
    });

  watch(selectedWaktu, (newValue, oldValue) => {
      formatRangeDateGrafik1.start = moment(newValue[0]).format("DD MMMM YYYY");
      formatRangeDateGrafik1.end = moment(newValue[1]).format("DD MMMM YYYY");
  });

  function clearFilter() {
    filter.value = 'avg';
    filterWaktu.value = 'daily';
    selectedWaktu.value = [
        sixDaysAgo,
        new Date()
    ];
    period.value = 0;
    filterKandang.value = 0;
    id_kategori_kandang.value = 0;
    id_anak_kandang.value = 0;
    view_by_usia.value = 'false';
  }

  function getFilter() {
    updateHeadline();
  }

  // function getPresentaseProduksi() {
  //       dataGrafikBatang.value = [];
  //       const items = dataPelaporan.responseData.data.items;
  //       const persentaseTanggal = {};
  //       items.forEach(item => {
  //           const tanggalSubmit = new Date(item.tanggal_submit);
  //           const diffTime = Math.abs(today - tanggalSubmit);
  //           const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
         
  //           if (diffDays <= 8) {
  //               const tanggalKey = tanggalSubmit.toDateString(); 
  //               if (persentaseTanggal[tanggalKey]) {
  //                 persentaseTanggal[tanggalKey] = parseFloat(item.avg_percentase_telur_daily) || 0; 
  //               } else {
  //                 persentaseTanggal[tanggalKey] = parseFloat(item.avg_percentase_telur_daily) || 0; 
  //               }
  //           }
  //       });
       
  //       labels.value.forEach(label => {
  //         dataGrafikBatang.value.push(persentaseTanggal[label] || null);
  //       });
       
  //       console.log("Data Grafik 1 : ", dataGrafik1.value);

  //   }

  function defaultFilterWaktu() {
    const rangeSelectedWaktu = selectedWaktu.value;
    const startDate = rangeSelectedWaktu[0];
    const endDate = rangeSelectedWaktu[1];
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    for (let i = 0; i <= diffDays; i++) {
        const date = new Date(start);
        date.setDate(start.getDate() + i);
        listTglWaktu.value.push(date.toDateString());
    }
      console.log("List Data Grafik 1 : ", dataGrafik1.value);
    
  }

  function submitFilter() {
    getPelaporanGrafik1();
    // kartu Populasi & Pakan ikut filter yang sama
    const mulai = moment(selectedWaktu.value[0]).format('YYYY-MM-DD');
    const selesai = moment(selectedWaktu.value[1]).format('YYYY-MM-DD');
    formatRangeDate.start = moment(selectedWaktu.value[0]).format('DD MMMM YYYY');
    formatRangeDate.end = moment(selectedWaktu.value[1]).format('DD MMMM YYYY');
    getPelaporan(filterKandang.value, mulai, selesai, {
      id_kategori_kandang: id_kategori_kandang.value,
      id_anak_kandang: id_anak_kandang.value,
      time_filter_type: filterWaktu.value,
      period: period.value,
    });
    listLabelGrafik1.value = [];
    // const rangeSelectedWaktu = selectedWaktu.value;
    // const startDate = rangeSelectedWaktu[0];
    // const endDate = rangeSelectedWaktu[1];
    listTglWaktu.value = [];
    listBulanWaktu.value = [];
    listTahunWaktu.value = [];
    // const start = new Date(startDate);
    // const end = new Date(endDate);
    // const diffTime = Math.abs(end - start);
    // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    // const diffMonths = (end.getMonth() - start.getMonth() + (12 * (end.getFullYear() - start.getFullYear())));
    // const diffYears = end.getFullYear() - start.getFullYear();

    // for (let i = 0; i <= diffDays; i++) {
    //     const date = new Date(start);
    //     date.setDate(start.getDate() + i);
    //     listTglWaktu.value.push(date.toDateString());
    // }

    // for (let i = 0; i <= diffMonths; i++) {
    //     const date = new Date(start);
    //     date.setMonth(start.getMonth() + i);
    //     const monthYear = date.toLocaleString('default', { month: 'long' }) + ' ' + date.getFullYear();
    //     listBulanWaktu.value.push(monthYear);
    // }

    // for (let i = 0; i <= diffYears; i++) {
    //     const date = new Date(start);
    //     date.setFullYear(start.getFullYear() + i);
    //     const year = date.getFullYear();
    //     console.log("Year : ", year);
    //     listTahunWaktu.value.push(year);
    // }
    
  }

  function setDataGrafik1() {
      const m = METRIK[filter.value] || METRIK.avg;
      const items = dataPelaporan.dataGrafik1.data.items;
      metrikAktif.value = METRIK[filter.value] ? filter.value : 'avg';
      listLabelGrafik1.value = items.map(item => item.grafik_x_value);
      dataGrafik1.value = items.map(item => item[m.field]);
      dataHdSebelumnya.value = items.map(item => item.hd_sebelumnya);
      const lihatUsia = view_by_usia.value === true || view_by_usia.value === 'true';
      labelHdSebelumnya.value = lihatUsia ? 'HD minggu sebelumnya' : (LABEL_SEBELUMNYA[filterWaktu.value] || 'HD sebelumnya');
      updateHeadline();
  }

  function inputWaktu() {
      console.log("Input Waktu : ", selectedWaktu.value);
  }

  async function getPenjadwalan() {
      const user = localStorage.getItem('user');
      const token = JSON.parse(user);
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
        dataPresentasePakan.value = [];
        items.forEach(item => {
            labelJenisPakan.value.push(item.nama_jenis_pakan);
            backgroundColorJenisPakan.value.push(randomColor());
            dataPresentasePakan.value.push(item.persentase_pakan);
        });
    }

    async function getListPeriode(id_kandang) {
       
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/laporan/periodlist', {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
            params: {
                id_kandang: filterKandang.value,
            },
        })
            .then(response => {
                dataPelaporan.setPeriode(response.data);
                console.log("List Periode : ", dataPelaporan.periode);
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

    async function getPelaporanGrafik1() {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/laporan/grafikdashboard', {
            params: {
                id_kandang: filterKandang.value ? filterKandang.value : null,
                id_kategori_kandang: id_kategori_kandang.value ? id_kategori_kandang.value : null,
                id_anak_kandang: id_anak_kandang.value ? id_anak_kandang.value : null,
                start_date: selectedWaktu.value[0],
                end_date: selectedWaktu.value[1],
                period: period.value ? period.value : null,
                time_filter_type: filterWaktu.value ? filterWaktu.value : null,
                view_by_usia: view_by_usia.value ? view_by_usia.value : null,
            },
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                dataPelaporan.setDataGrafik1(response.data);
                setDataGrafik1();
                console.log("Data Grafik 1 : ", dataPelaporan.dataGrafik1.data.items);
            })
    }

  async function getPelaporan(id_kandang,  startDate, endDate, extra = {}) {
        if (id_kandang == 0) {
            id_kandang = null;
        }
        if (id_kandang) {
            getIdKandang(id_kandang);
        } else {
            namaKandang.value = 'Semua kandang';
        }
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/laporan', {
            params: {
                id_kandang: id_kandang,
                id_kategori_kandang: extra.id_kategori_kandang ? extra.id_kategori_kandang : null,
                id_anak_kandang: extra.id_anak_kandang ? extra.id_anak_kandang : null,
                time_filter_type: extra.time_filter_type ? extra.time_filter_type : null,
                period: extra.period ? extra.period : null,
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
                          jumlahMatiPerTanggal[tanggalKey] = item.sum_jumlah_mati_daily
;
                        } else {
                          jumlahMatiPerTanggal[tanggalKey] = item.sum_jumlah_mati_daily
;
                        }
                      
                    }
                });

                // Buat array untuk menyimpan data telur utuh untuk 7 hari terakhir

                labels.value.forEach(label => {
                    totalJumlahMati.value.push(jumlahMatiPerTanggal[label] || null);
                
                });

                getFilter();
               
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
                    detailPelaporan.avg_percentase_telur = parseFloat(dataPelaporan.responseData.data.items[0].avg_percentase_telur).toFixed(2);
                    detailPelaporan.avg_fc = parseFloat(dataPelaporan.responseData.data.items[0].avg_fc).toFixed(2);
                    detailPelaporan.avg_percentase_telur_daily = parseFloat(dataPelaporan.responseData.data.items[0].avg_percentase_telur_daily).toFixed(2);
                    detailPelaporan.avg_fc_daily = parseFloat(dataPelaporan.responseData.data.items[0].avg_fc_daily).toFixed(2);
                    detailPelaporan.avg_egg_mass_daily = parseFloat(dataPelaporan.responseData.data.items[0].avg_egg_mass_daily).toFixed(2);
                    detailPelaporan.populasi_total_alltime = dataPelaporan.responseData.data.populasi_total_alltime[0].populasi_total_alltime;
                    detailPelaporan.sumall_berat_pakan = dataPelaporan.responseData.data.items[0].sumall_berat_pakan;
                    // console.log("Detail Populasi Total : ", detailPelaporan.populasi_total_alltime);

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
                    detailPelaporan.avg_percentase_telur = 0;
                    detailPelaporan.avg_fc = 0;
                    detailPelaporan.avg_percentase_telur_daily = 0;
                    detailPelaporan.avg_fc_daily = 0;
                    detailPelaporan.avg_egg_mass_daily = 0;
                    detailPelaporan.populasi_total_alltime = 0;
                    detailPelaporan.sumall_berat_pakan = 0;
                    
                } 
                filteredPakan.value = dataPelaporan.responseData.data.items.filter(item => item.nama_jenis_pakan !== null && item.nama_jenis_pakan !== undefined);
                uniquePakan.value = [...new Set(filteredPakan.value.map(item => item.nama_jenis_pakan))];
                getJenisPakanItems(dataPelaporan.responseData.data.jenis_pakan_items);
                console.log("Pelaporan : ", response);
            })
            .catch(error => {
                console.error(error);
            });
    }

    async function getKandang() {
        
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/kandang', {
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                dataKandang.setResponseData(response.data);
                
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
  .card-body.populasi {
      height: 90%;
  }
  .chart {
    height: 100%;
  }
  .pie-chart {
      width: 200px !important;
  }
  .waktuDatePicker .content {
      z-index: 9999 !important;
  }
  .chartjs-tooltip {
    overflow: visible !important;
  }
</style>