<template>
    <HeaderItem />
    <div class="body flex-grow-1 px-3">
        <div class="container-lg">
            <!-- /.row-->
            <div class="card mb-4">
            <div class="row">
                <div class="col-lg-12 p-4">
                <div class="d-flex justify-content-between flex-wrap mb-3">
                    <div class="d-flex">
                        <p>
                            <Datepicker
                                :date-format="{
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric' }"
                                @input="inputDate"
                                range
                                v-model="selectedDate"
                                lang="id"
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
                            <path d="M1 1L4 5L8 1" stroke="white"/>
                            </svg>
                        </p>
                        <!-- <p class="ms-3">View <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                        <path d="M1 1L5.5 7L10 1" stroke="#0FA958" stroke-width="2"/>
                        </svg></p> -->
                        <p>
                            <button data-coreui-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" type="button" class="dropdown-toggle ms-3 btn btn-secondary">
                                Filter
                            </button>
                            <div class="dropdown-menu dropdown-menu-start p-3 shadow">
                                <div class="d-flex justify-content-between">
                                    <label class="form-label">Pilih Arsip</label>
                                    <a href="javascript:void(0)" @click="clearFilter()">Clear</a>
                                </div>
                                <select v-model="is_archived" @change="getPelaporanX($event.target.value, idKandang, id_kategori_kandang, id_treatment, id_mandor, id_anak_kandang, rangeDate.start, rangeDate.end)" class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                                    <option value="-1">Semua Laporan</option>
                                    <option value="0">Tidak</option>
                                    <option value="1">Ya</option>
                                </select>
                                <label class="form-label">Pilih Filter</label> 
                                <select v-model="idKandang" @change="getPelaporanX(is_archived, $event.target.value, id_kategori_kandang, id_treatment, id_mandor, id_anak_kandang, rangeDate.start, rangeDate.end)" class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
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
                                <select v-model="id_kategori_kandang" @change="getPelaporanX(is_archived, idKandang, $event.target.value, id_treatment, id_mandor, id_anak_kandang, rangeDate.start, rangeDate.end)" class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                                    <option value="0" selected> 
                                        Semua Kategori Kandang 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                        <path d="M1 1L5.5 7L10 1" stroke="#0FA958" stroke-width="2"/>
                                        </svg>
                                    </option>
                                    <template v-if="dataKandang.kategori">
                                        <option v-for="item in dataKandang.kategori" :key="item.id" :value="item.id">
                                            {{ item.nama }}
                                        </option>
                                    </template>
                                    <template v-else>
                                        <option>Belum ada Kategori Kandang</option>
                                    </template>
                                </select>
                                <select v-model="id_treatment" @change="getPelaporanX(is_archived, idKandang, id_kategori_kandang, $event.target.value, id_mandor, id_anak_kandang, rangeDate.start, rangeDate.end)" class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                                    <option value="0" selected> 
                                        Semua Treatment 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                        <path d="M1 1L5.5 7L10 1" stroke="#0FA958" stroke-width="2"/>
                                        </svg>
                                    </option>
                                    <template v-if="dataTreatment.responseData">
                                        <option v-for="item in dataTreatment.responseData.data.items" :key="item.id" :value="item.id">
                                            {{ item.nama }}
                                        </option>
                                    </template>
                                    <template v-else>
                                        <option>Belum ada Treatment</option>
                                    </template>
                                </select> 
                                <select v-model="id_mandor" @change="getPelaporanX(is_archived, idKandang, id_kategori_kandang, id_treatment, $event.target.value, id_anak_kandang, rangeDate.start, rangeDate.end)" class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
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
                                        <option>Belum ada Mandor</option>
                                    </template>
                                </select> 
                                <select v-model="id_anak_kandang" @change="getPelaporanX(is_archived, idKandang, id_kategori_kandang, id_treatment, id_mandor, $event.target.value, rangeDate.start, rangeDate.end)" class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
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
                                <button @click="getFilterLaporan()" type="button" class="btn btn-success">Terapkan</button>
                            </div> 
                        </p>
                    </div>
                    <div class="d-inline">
                        <template v-if="role == adminKantor || role == superadmin">
                            <button data-coreui-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" type="button" class="dropdown-toggle ms-3 btn btn-secondary bg-button-rossa">
                                Download Laporan
                            </button>
                            <div class="dropdown-menu dropdown-menu-start p-3 shadow">
                                <button @click="cekPrintLaporan()" type="button" class="btn btn-danger bg-button-rossa">Download PDF</button>
                                <!-- <button @click="downloadExcel()" class="btn btn-success ms-3">Download Excel</button> -->
                                <download-excel
                                    class="btn btn-success ms-3"
                                    :data="downloadExcels()"
                                    :fields="json_fields"
                                    type="xlsx" worksheet="My Worksheet"
                                    name="laporan.xlsx"
                                    >
                                    Download Excel
                                </download-excel>
                            </div>
                        </template>
                    </div>
                </div> 
                <!-- <div class="d-flex">
                    <p class="color-text-rossa">Sisa populasi ayam: <span class="text-secondary">300</span></p>
                    <p class="color-text-rossa ms-4">FC: <span class="text-secondary">7,4</span></p>
                    <p class="color-text-rossa ms-4">Standart FC: <span class="text-secondary">7,6</span></p>
                    <p class="color-text-rossa ms-4">Egg mass: <span class="text-secondary">11,7</span></p>
                </div> -->
               
                <div class="table-responsive mt-3">
                    <table id="element-to-convert" class="table pelaporan table-bordered">
                    <thead>
                        <tr>
                            <th class="row-atas-bg" rowspan="2" scope="col">Tanggal</th>
                            <th class="row-atas-bg" rowspan="2" scope="col">Kandang</th>
                           
                            <th class="row-atas-bg" scope="col">Usia</th>
                            <th class="row-atas-bg" colspan="6" scope="col">Populasi</th>

                            <th class="row-atas-bg" rowspan="2" scope="col">Total Populasi</th>

                            <th class="row-atas-bg" colspan="5" scope="col">Produksi Telur</th>

                            <th class="row-atas-bg" colspan="3" scope="col">Berat Telur</th>

                            <th class="row-atas-bg" colspan="2" scope="col">Standart Produksi</th>

                            <th class="row-atas-bg" colspan="3" scope="col">Pakan</th>

                            <th class="row-atas-bg" rowspan="2" scope="col">Standar gr/ekor</th>

                            <th class="row-atas-bg" rowspan="2" scope="col">FC</th>

                            <th class="row-atas-bg" rowspan="2" scope="col">Standar FC</th>

                            <th class="row-atas-bg" rowspan="2" scope="col">Egg Mass</th>

                            <th class="row-atas-bg" rowspan="2" scope="col">Strain</th>

                            <th class="row-atas-bg" rowspan="2" scope="col">Treatment</th>
                        </tr>
                        <tr>
                        
                            <th class="row-bawah-bg" scope="col">Mgg</th>

                            <th class="row-bawah-bg" scope="col">Populasi Awal</th>
                            <th class="row-bawah-bg" scope="col">Populasi Kemarin</th>
                            <th class="row-bawah-bg" scope="col">Mati</th>
                            <th class="row-bawah-bg" scope="col">Afkir</th>
                            <th class="row-bawah-bg" scope="col">Pindah</th>
                            <th class="row-bawah-bg" scope="col">Terima</th>

                            <th class="row-bawah-bg" scope="col">Telur utuh</th>
                            <th class="row-bawah-bg" scope="col">Telur bentes</th>
                            <th class="row-bawah-bg" scope="col">Total Telur</th>
                            <th class="row-bawah-bg" scope="col">%</th>
                            <th class="row-bawah-bg" scope="col">gr/butir</th>

                            <th class="row-bawah-bg" scope="col">Berat Telur utuh</th>
                            <th class="row-bawah-bg" scope="col">Berat Telur bentes</th>
                            <th class="row-bawah-bg" scope="col">Total (kg)</th>
                        
                            <th class="row-bawah-bg" scope="col">%</th>
                            <th class="row-bawah-bg" scope="col">gr/butir</th>

                            <th class="row-bawah-bg" scope="col">gr/ekor</th>
                            <th class="row-bawah-bg" scope="col">KG</th>
                            <th class="row-bawah-bg" scope="col">Jenis</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="isLoading">
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
                            <template v-if="dataPelaporan.responseData && dataPelaporan.responseData.data.items.length > 0">
                            <tr v-for="(item, index) in dataPelaporan.responseData.data.items" :key="index" class="text-center">
                                <td>{{ formatTanggalSubmit(item.tanggal_submit) }}</td>
                                <!-- <td>{{ item.tanggal_submit }}</td> -->
                                <td>{{ item.nama_kandang }}</td>
                                <td>{{ item.usia_mgg }}</td>
                                
                                <td>{{ item.populasi_awal }}</td>
                                <td>{{ item.populasi_kemarin }}</td>
                                <td>{{ item.jumlah_mati }}</td>
                                <td>{{ item.jumlah_afkir }}</td>
                                <td>{{ item.jumlah_pindah }}</td>
                                <td>{{ item.jumlah_terima }}</td>

                                <td>{{ item.populasi_terakhir }}</td>

                                <td>{{ item.telur_utuh }}</td>
                                <td>{{ item.telur_bentes }}</td>
                                <td>{{ item.total_telur }}</td>
                                <td>{{ item.percentase_telur }}</td>
                                <td>{{ item.avg_berat_telur_gr }}</td>

                                <td>{{ item.berat_telur_utuh_kg }}</td>
                                <td>{{ item.berat_telur_bentes_kg }}</td>
                                <td>{{ item.berat_telur_kg }}</td>

                                <td>{{ item.std_nilai_hd }}</td>
                                <td>{{ item.std_berat_telur }}</td>

                                <td>{{ item.berat_pakan_per_ekor_gram }}</td>
                                <td>{{ item.berat_pakan }}</td>
                                <td>{{ item.nama_jenis_pakan }}</td>

                                <td>{{ item.std_gr_perekor }}</td>

                                <td>{{ item.fc }}</td>

                                <td>{{ item.std_fc }}</td>

                                <td>{{ item.egg_mass }}</td>

                                <td>{{ item.nama_strain_ayam }}</td>

                                <td>{{ item.nama_treatment }}</td>
                            
                            
                            </tr>
                            <tr class="row-total text-center">
                                <td colspan="2">Total</td>
                                <td colspan="3">-</td>
                                <!-- <td>{{ dataPelaporan.responseData.data.items[0].sumall_usia_mgg ?? 0 }}</td> -->
                                <td>{{ dataPelaporan.responseData.data.items[0].sumall_jumlah_mati ?? 0 }}</td>
                                <td>{{ dataPelaporan.responseData.data.items[0].sumall_jumlah_afkir ?? 0 }}</td>
                                <td>{{ dataPelaporan.responseData.data.items[0].sumall_jumlah_pindah ?? 0 }}</td>
                                <td>{{ dataPelaporan.responseData.data.items[0].sumall_jumlah_terima ?? 0 }}</td>
                                <!-- <td>{{ dataPelaporan.responseData.data.items[0].sumall_populasi_total ?? 0 }} </td> -->
                                <td> - </td>
                                <td>{{ dataPelaporan.responseData.data.items[0].sumall_telur_utuh ?? 0 }}</td>
                                <td>{{ dataPelaporan.responseData.data.items[0].sumall_telur_bentes ?? 0 }}</td>
                                <td>{{ dataPelaporan.responseData.data.items[0].sumall_total_telur ?? 0 }}</td>
                                <td>-</td>
                                <td>-</td>
                                <td>{{ dataPelaporan.responseData.data.items[0].sumall_berat_telur_utuh_kg ?? 0 }}</td>
                                <td>{{ dataPelaporan.responseData.data.items[0].sumall_berat_telur_bentes_kg ?? 0 }}</td>
                                <td>{{ dataPelaporan.responseData.data.items[0].sumall_berat_telur_kg ?? 0 }}</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>{{ dataPelaporan.responseData.data.items[0].sumall_berat_pakan ?? 0 }}</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>{{ dataPelaporan.responseData.data.items[0].sumall_std_fc ?? 0 }}</td>
                                <td>{{ dataPelaporan.responseData.data.items[0].sumall_egg_mass ?? 0 }}</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr class="row-rata text-center">
                                <td colspan="2">Rata - rata</td>

                                <td>{{ dataPelaporan.responseData.data.items[0].avg_usia_mgg ?? 0 }}</td>
                                <td colspan="2">-</td>
                                <td>{{ dataPelaporan.responseData.data.items[0].avg_jumlah_mati ?? 0 }}</td>
                                <td colspan="3">-</td>
                                <!-- <td>{{ dataPelaporan.responseData.data.items[0].avg_populasi_total ?? 0 }} </td> -->
                                <td> - </td>
                                <td>{{ dataPelaporan.responseData.data.items[0].avg_telur_utuh ?? 0 }}</td>
                                <td>{{ dataPelaporan.responseData.data.items[0].avg_telur_bentes ?? 0 }}</td>
                                <td>{{ dataPelaporan.responseData.data.items[0].avg_total_telur ?? 0 }}</td>
                                <td>{{ dataPelaporan.responseData.data.items[0].avg_percentase_telur ?? 0 }}</td>
                                <td>{{ dataPelaporan.responseData.data.items[0].avgall_berat_telur_gr ?? 0 }}</td>
                                <td>{{ dataPelaporan.responseData.data.items[0].avg_berat_telur_utuh_kg ?? 0 }}</td>
                                <td>{{ dataPelaporan.responseData.data.items[0].avg_berat_telur_bentes_kg ?? 0 }}</td>
                                <td>{{ dataPelaporan.responseData.data.items[0].avg_berat_telur_kg ?? 0 }}</td>
                                <td>-</td>
                                <td>-</td>
                                <td>{{ dataPelaporan.responseData.data.items[0].avg_berat_pakan_per_ekor_gram ?? 0 }}</td>
                                <td>{{ dataPelaporan.responseData.data.items[0].avg_berat_pakan ?? 0 }}</td>
                                <td>-</td>
                                <td>-</td>
                                <td>{{ dataPelaporan.responseData.data.items[0].avg_fc ?? 0 }}</td>
                                <td>{{ dataPelaporan.responseData.data.items[0].avg_std_fc ?? 0 }}</td>
                                <td>{{ dataPelaporan.responseData.data.items[0].avg_egg_mass ?? 0 }}</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            </template>
                            <template v-else>
                                <tr>
                                    <td colspan="27" class="text-center">Data tidak ditemukan</td>
                                </tr>
                            </template> 
                        </template>
                    </tbody>
                    </table>
                </div>
                    
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import HeaderItem from '@/components/HeaderItem.vue';
    import { reactive, onMounted, ref, watch } from 'vue';
    import { pencatatanStore, kandangStore, pelaporanStore, treatmentStore, karyawanStore } from '@/stores';
    import axios from 'axios'
    import moment from 'moment';
    import jsPDF from "jspdf";
    import autoTable from 'jspdf-autotable';
    import { excelParser } from "@/helpers/excel-parser";
    import Swal from 'sweetalert2';
   

    const baseUrl = `${import.meta.env.VITE_API_URL}`;
    const user = localStorage.getItem('user');
    const role = JSON.parse(user) ? JSON.parse(user).data.roles[0].nama : '';
    const superadmin = ref('Super Admin');
    const adminKandang = ref('Admin Kandang');
    const adminKantor = ref('Admin Kantor');

    const dataPencatatan = reactive(pencatatanStore());
    const dataKandang = reactive(kandangStore());
    const dataPelaporan = reactive(pelaporanStore());
    const dataKaryawan = reactive(karyawanStore());
    const dataTreatment = reactive(treatmentStore());

    const currentPage = ref(1);
    const pageSize = ref(10);
    const id_mandor = ref(0);
    const id_anak_kandang = ref(0);
    const id_strain_ayam = ref(0);
    const is_archived = ref(0);
    const id_kategori_kandang = ref(0);
    const id_treatment = ref(0);
    const isLoading = ref(false);

    const idKandang = ref(0);
    const date = ref(0);
    const rangeDate = reactive({
        start: null,
        end: null,
    });
    const today = new Date();
    const tomorrow = new Date(today);
    const yesterday = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    yesterday.setDate(today.getDate() - 1);

    const selectedDate = ref([
        yesterday,
        tomorrow,
    ]);

    const formatTanggalSubmit = (tanggal) => {
        return moment(tanggal).format('DD-MM-YYYY');
    }
    const formatTanggalSubmitExcel = (tanggal) => {
        return moment(tanggal).format('DD-MM-YYYY');
    }
   
    onMounted(() => {
        rangeDate.start = moment(selectedDate.value[0]).format("YYYY-MM-DD");
        rangeDate.end = moment(selectedDate.value[1]).format("YYYY-MM-DD");
        getPelaporan(is_archived.value, idKandang.value, id_kategori_kandang.value, id_treatment.value, id_mandor.value, id_anak_kandang.value, rangeDate.start, rangeDate.end);
        getKandang();
        getTreatment();
        getKaryawan();
    });

    const generateData = function() {
        const dataKandang = dataPelaporan.responseData.data.items;
        console.log("Data Generate laporan : ", dataKandang);
        const result = [];
        console.log("Data Result : ", result);
        dataKandang.forEach((item) => {
        result.push({
            tanggal_submit: formatTanggalSubmit(item.tanggal_submit),
            nama_kandang: item.nama_kandang,
            usia_mgg: item.usia_mgg ? item.usia_mgg : '-',
            populasi_awal: item.populasi_awal ? item.populasi_awal : '-',
            populasi_kemarin: item.populasi_kemarin ? item.populasi_kemarin : '-',
            jumlah_mati: item.jumlah_mati ? item.jumlah_mati : '-',
            jumlah_afkir: item.jumlah_afkir ? item.jumlah_afkir : '-',
            jumlah_pindah: item.jumlah_pindah ? item.jumlah_pindah : '-',
            jumlah_terima: item.jumlah_terima ? item.jumlah_terima : '-',
            populasi_total: item.populasi_terakhir ? item.populasi_terakhir : '-',
            telur_utuh: item.telur_utuh ? item.telur_utuh : '-',
            telur_bentes: item.telur_bentes ? item.telur_bentes : '-',
            total_telur: item.total_telur ? item.total_telur : '-',
            percentase_telur: item.percentase_telur ? item.percentase_telur : '-',
            berat_telur_gr: item.avg_berat_telur_gr ? item.avg_berat_telur_gr : '-',
            berat_telur_utuh_kg: item.berat_telur_utuh_kg ? item.berat_telur_utuh_kg : '-',
            berat_telur_bentes_kg: item.berat_telur_bentes_kg ? item.berat_telur_bentes_kg : '-',
            berat_telur_kg: item.berat_telur_kg ? item.berat_telur_kg : '-',
            std_nilai_hd: item.std_nilai_hd ? item.std_nilai_hd : '-',
            std_berat_telur: item.std_berat_telur ? item.std_berat_telur : '-',
            berat_pakan_per_ekor_gram: item.berat_pakan_per_ekor_gram ? item.berat_pakan_per_ekor_gram : '-',
            berat_pakan: item.berat_pakan ? item.berat_pakan : '-',
            nama_jenis_pakan: item.nama_jenis_pakan ? item.nama_jenis_pakan : '-',
            std_gr_perekor: item.std_gr_perekor ? item.std_gr_perekor : '-',
            fc: item.fc ? item.fc : '-',
            std_fc: item.std_fc ? item.std_fc : '-',
            egg_mass: item.egg_mass ? item.egg_mass : '-',
            nama_strain_ayam: item.nama_strain_ayam ? item.nama_strain_ayam : '-',
            nama_treatment: item.nama_treatment ? item.nama_treatment : '-',

        });
        });
        result.push({
            tanggal_submit: 'Total',
            nama_kandang: '-',
            usia_mgg: '-',
            populasi_awal: '-',
            populasi_kemarin: '-',
            jumlah_mati: dataPelaporan.responseData.data.items[0].sumall_jumlah_mati ?? 0,
            jumlah_afkir: dataPelaporan.responseData.data.items[0].sumall_jumlah_afkir ?? 0,
            jumlah_pindah: dataPelaporan.responseData.data.items[0].sumall_jumlah_pindah ?? 0,
            jumlah_terima: dataPelaporan.responseData.data.items[0].sumall_jumlah_terima ?? 0,
            // populasi_total: dataPelaporan.responseData.data.items[0].sumall_populasi_total ?? 0,
            populasi_total: '-',
            telur_utuh: dataPelaporan.responseData.data.items[0].sumall_telur_utuh ?? 0,
            telur_bentes: dataPelaporan.responseData.data.items[0].sumall_telur_bentes ?? 0,
            total_telur: dataPelaporan.responseData.data.items[0].sumall_total_telur ?? 0,
            percentase_telur: '-',
            berat_telur_gr: '-',
            berat_telur_utuh_kg: dataPelaporan.responseData.data.items[0].sumall_berat_telur_utuh_kg ?? 0,
            berat_telur_bentes_kg: dataPelaporan.responseData.data.items[0].sumall_berat_telur_bentes_kg ?? 0,
            berat_telur_kg: dataPelaporan.responseData.data.items[0].sumall_berat_telur_kg ?? 0,
            std_nilai_hd: '-',
            std_berat_telur: '-',
            berat_pakan_per_ekor_gram: '-',
            berat_pakan: dataPelaporan.responseData.data.items[0].sumall_berat_pakan ?? 0,
            nama_jenis_pakan: '-',
            std_gr_perekor: '-',
            fc: '-',
            std_fc: dataPelaporan.responseData.data.items[0].sumall_std_fc ?? 0,
            egg_mass: dataPelaporan.responseData.data.items[0].sumall_egg_mass ?? 0,
            nama_strain_ayam: '-',
            nama_treatment: '-',
        });
        result.push({
            tanggal_submit: 'Rata - rata',
            nama_kandang: '-',
            usia_mgg: dataPelaporan.responseData.data.items[0].avg_usia_mgg ?? 0,
            populasi_awal: '-',
            populasi_kemarin: '-',
            jumlah_mati: dataPelaporan.responseData.data.items[0].avg_jumlah_mati ?? 0,
            jumlah_afkir: '-',
            jumlah_pindah: '-',
            jumlah_terima: '-',
            // populasi_total: dataPelaporan.responseData.data.items[0].avg_populasi_total ?? 0,
            populasi_total: '-',
            telur_utuh: dataPelaporan.responseData.data.items[0].avg_telur_utuh ?? 0,
            telur_bentes: dataPelaporan.responseData.data.items[0].avg_telur_bentes ?? 0,
            total_telur: dataPelaporan.responseData.data.items[0].avg_total_telur ?? 0,
            percentase_telur: dataPelaporan.responseData.data.items[0].avg_percentase_telur ?? 0,
            berat_telur_gr: dataPelaporan.responseData.data.items[0].avgall_berat_telur_gr ?? 0,
            berat_telur_utuh_kg: dataPelaporan.responseData.data.items[0].avg_berat_telur_utuh_kg ?? 0,
            berat_telur_bentes_kg: dataPelaporan.responseData.data.items[0].avg_berat_telur_bentes_kg ?? 0,
            berat_telur_kg: dataPelaporan.responseData.data.items[0].avg_berat_telur_kg ?? 0,
            std_nilai_hd: '-',
            std_berat_telur: '-',
            berat_pakan_per_ekor_gram: dataPelaporan.responseData.data.items[0].avg_berat_pakan_per_ekor_gram ?? 0,
            berat_pakan: dataPelaporan.responseData.data.items[0].avg_berat_pakan ?? 0,
            nama_jenis_pakan: '-',
            std_gr_perekor: '-',
            fc: dataPelaporan.responseData.data.items[0].avg_fc ?? 0,
            std_fc: dataPelaporan.responseData.data.items[0].avg_std_fc ?? 0,
            egg_mass: dataPelaporan.responseData.data.items[0].avg_egg_mass ?? 0,
            nama_strain_ayam: '-',
            nama_treatment: '-',
        
        });
        return result;
      
    };

    const customHeaders = [
        "Tgl Submit",
        "Kandang",
        "Usia Mgg",
        "P. Awal",
        "P. Kemarin",
        "Mati",
        "Afkir",
        "Pindah",
        "Terima",
        "P. Total",
        "Tlr Utuh",
        "Tlr Bentes",
        "Total Tlr",
        "Hd %",
        "gr/butir",
        "Utuh (kg)",
        "Bentes (kg)",
        "Tlr total (kg)",
        "Std HD %",
        "Std g/btr",
        "g/ekor",
        "Pakan (kg)",
        "Jns Pakan",
        "Std gr/ekor",
        "FC",
        "Std FC",
        "Egg Mass",
        "Strain",
        "Treatment",
    ];

    function createHeaders(keys) {
        var result = [];
        for (var i = 0; i < keys.length; i += 1) {
            result.push({
            id: keys[i],
            name: keys[i],
            prompt: keys[i],
            width: 65,
            align: "center",
            padding: 0
            });
        }
        return result;
    }

  

    const headers = createHeaders([
        "tanggal_submit",
        "nama_kandang",
        "usia_mgg",
        "populasi_awal",
        "populasi_kemarin",
        "jumlah_mati",
        "jumlah_afkir",
        "jumlah_pindah",
        "jumlah_terima",
        "populasi_total",
        "telur_utuh",
        "telur_bentes",
        "total_telur",
        "percentase_telur",
        "berat_telur_gr",
        "berat_telur_utuh_kg",
        "berat_telur_bentes_kg",
        "berat_telur_kg",
        "std_nilai_hd",
        "std_berat_telur",
        "berat_pakan_per_ekor_gram",
        "berat_pakan",
        "nama_jenis_pakan",
        "std_gr_perekor",
        "fc",
        "std_fc",
        "egg_mass",
        "nama_strain_ayam",
        "nama_treatment",
    ]);

    function cekPrintLaporan() {
        if (dataPelaporan.responseData.data.items.length > 0) {
            printLaporan();
        } else {
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
                    icon: "error",
                    title: "Data tidak ditemukan"
            });
        }
    }

    function printLaporan() {
        const namaKandang = ref('');
        if (idKandang.value == 0) {
            namaKandang.value = 'Semua Kandang';
        } else {
            namaKandang.value = dataKandang.responseData.data.items.find(item => item.id == idKandang.value).nama;
        }
       const dataBody = generateData().map((item) => {
            return [
                item.tanggal_submit,
                item.nama_kandang,
                item.usia_mgg,
                item.populasi_awal,
                item.populasi_kemarin,
                item.jumlah_mati,
                item.jumlah_afkir,
                item.jumlah_pindah,
                item.jumlah_terima,
                item.populasi_total,
                item.telur_utuh,
                item.telur_bentes,
                item.total_telur,
                item.percentase_telur,
                item.berat_telur_gr,
                item.berat_telur_utuh_kg,
                item.berat_telur_bentes_kg,
                item.berat_telur_kg,
                item.std_nilai_hd,
                item.std_berat_telur,
                item.berat_pakan_per_ekor_gram,
                item.berat_pakan,
                item.nama_jenis_pakan,
                item.std_gr_perekor,
                item.fc,
                item.std_fc,
                item.egg_mass,
                item.nama_strain_ayam,
                item.nama_treatment,
            ];
        });
        console.log("Data Body : ", dataBody);  
        // const doc = new jsPDF("l", "px", [768, 2200]); 
        const doc = new jsPDF("l", "mm", "legal");
        
        console.log("Data Generate : ", generateData());
        doc.setFontSize(18);
        doc.text(`Nama Kandang: ${namaKandang.value}`, 10, 10)
        doc.text(`Tanggal: ${rangeDate.start} - ${rangeDate.end}`, 10, 20)
        // doc.table(10, 90, generateData(), headers, { autoSize: true });
        doc.autoTable({
            head: [customHeaders],
            body: [
                ...dataBody
            ],
            startY: 30,
            theme: 'grid',
            styles: {
                fontSize: 8,
                overflow: 'linebreak',
                // cellWidth: 50,
                textColor: [0, 0, 0],
            },
            columnStyles: {
                0: {cellWidth: '50'},
                1: {cellWidth: '50'},
                2: {cellWidth: '30'},
                3: {cellWidth: '30'},
                4: {cellWidth: '30'},
                5: {cellWidth: '30'},
                6: {cellWidth: '30'},
                7: {cellWidth: '30'},
                8: {cellWidth: '30'},
                9: {cellWidth: '30'},
                10: {cellWidth: '30'},
                11: {cellWidth: '30'},
                12: {cellWidth: '30'},
                13: {cellWidth: '30'},
                14: {cellWidth: '30'},
                15: {cellWidth: '30'},
                16: {cellWidth: '30'},
                17: {cellWidth: '30'},
                18: {cellWidth: '30'},
                19: {cellWidth: '30'},
                20: {cellWidth: '50'},
                21: {cellWidth: '30'},
                22: {cellWidth: '20'},
                23: {cellWidth: '30'},
                24: {cellWidth: '30'},
                25: {cellWidth: '30'},
                26: {cellWidth: '30'},
                27: {cellWidth: '50'},
                28: {cellWidth: '30'},
            },
            margin: { top: 10, right: 5, bottom: 10, left: 5 },
        });
        doc.save("laporan.pdf")
    }

    function inputDate() {
       console.log("Input Data : ", selectedDate);
    }

    watch(selectedDate, (newValue, oldValue) => {
        date.value = new Date(newValue[0]);
        rangeDate.start = moment(newValue[0]).format("YYYY-MM-DD");
        rangeDate.end = moment(newValue[1]).format("YYYY-MM-DD");
        getPelaporan(is_archived.value, idKandang.value, id_kategori_kandang.value, id_treatment.value, id_mandor.value, id_anak_kandang.value, rangeDate.start, rangeDate.end);
    });

    async function getPencatatan(page, id_kandang = idKandang.value, startDate = rangeDate.start, endDate = rangeDate.end) {
        if (id_kandang == 0) {
            id_kandang = null;
        }
        const user = localStorage.getItem('user');
        const token = JSON.parse(user);
        axios.get(baseUrl + '/pencatatan', {
            params: {
                submit_start: startDate,
                submit_end: endDate,
                page_number: page, 
                page_size: pageSize.value, 
                id_kandang: id_kandang,
            },
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                console.log(response);
                dataPencatatan.setResponseData(response.data);
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

    function getPelaporanX(is_archived, id_kandang, id_kategori_kandang, id_treatment, id_mandor, id_anak_kandang, startDate, endDate) {
       console.log("Data Filter : ", is_archived, id_kandang, id_kategori_kandang, id_treatment, id_mandor, id_anak_kandang, startDate, endDate);
    }

    function getFilterLaporan() {
        getPelaporan(is_archived.value, idKandang.value, id_kategori_kandang.value, id_treatment.value, id_mandor.value, id_anak_kandang.value, rangeDate.start, rangeDate.end);
    }

    async function getPelaporan(is_archived, id_kandang, id_kategori_kandang, id_treatment, id_mandor, id_anak_kandang, startDate, endDate) {
        isLoading.value = true;
        if (id_kandang == 0) {
            id_kandang = null;
        }
        if (id_kategori_kandang == 0) {
            id_kategori_kandang = null;
        }
        if (id_treatment == 0) {
            id_treatment = null;
        }
        if (id_mandor == 0) {
            id_mandor = null;
        }
        if (id_anak_kandang == 0) {
            id_anak_kandang = null;
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
        axios.get(baseUrl + '/laporan', {
            params: {
                is_archived: is_archived,
                id_kandang: id_kandang,
                id_kategori_kandang: id_kategori_kandang,
                id_treatment: id_treatment,
                id_mandor: id_mandor,
                id_anak_kandang: id_anak_kandang,
                start_date: startDate,
                end_date: endDate,
            },
            headers: {
                Authorization: `Bearer ${token.token}`,
            },
        })
            .then(response => {
                isLoading.value = false;
                dataPelaporan.setResponseData(response.data);
                console.log("Data JSON Laporan : ", dataPelaporan.exportData.items);
            })
            .catch(error => {
                isLoading.value = false;
                console.error(error);
            });
    }

    function clearFilter() {
        idKandang.value = 0;
        id_kategori_kandang.value = 0;
        id_treatment.value = 0;
        id_mandor.value = 0;
        id_anak_kandang.value = 0;
        is_archived.value = 0;
        getPelaporan(is_archived.value, idKandang.value, id_kategori_kandang.value, id_treatment.value, id_mandor.value, id_anak_kandang.value, rangeDate.start, rangeDate.end);
    }

    function downloadExcels() {
        if (dataPelaporan && dataPelaporan.exportData && dataPelaporan.exportData.items) {
                const dataToExport = dataPelaporan.exportData.items.map(item => {
                    // Buat salinan item agar tidak mempengaruhi data asli
                    const newItem = {...item};
                    // Ubah format tanggal_submit
                    newItem.tanggal_submit = formatTanggalSubmitExcel(newItem.tanggal_submit);
                    return newItem;
                });

                dataToExport.push({
                    tanggal_submit: 'Total',
                    nama_kandang: '-',
                    usia_mgg: '-',
                    populasi_awal: '-',
                    populasi_kemarin: '-',
                    jumlah_mati: dataPelaporan.responseData.data.items[0].sumall_jumlah_mati ?? 0,  
                    jumlah_afkir: dataPelaporan.responseData.data.items[0].sumall_jumlah_afkir ?? 0,
                    jumlah_pindah: dataPelaporan.responseData.data.items[0].sumall_jumlah_pindah ?? 0,
                    jumlah_terima: dataPelaporan.responseData.data.items[0].sumall_jumlah_terima ?? 0,
                    populasi_total: '-',
                    telur_utuh: dataPelaporan.responseData.data.items[0].sumall_telur_utuh ?? 0,
                    telur_bentes: dataPelaporan.responseData.data.items[0].sumall_telur_bentes ?? 0,
                    total_telur: dataPelaporan.responseData.data.items[0].sumall_total_telur ?? 0,
                    percentase_telur: '-',
                    avg_berat_telur_gr: '-',
                    berat_telur_utuh_kg: dataPelaporan.responseData.data.items[0].sumall_berat_telur_utuh_kg ?? 0,
                    berat_telur_bentes_kg: dataPelaporan.responseData.data.items[0].sumall_berat_telur_bentes_kg ?? 0,
                    berat_telur_kg: dataPelaporan.responseData.data.items[0].sumall_berat_telur_kg ?? 0,
                    std_nilai_hd: '-',
                    std_berat_telur: '-',
                    berat_pakan_per_ekor_gram: '-',
                    berat_pakan: dataPelaporan.responseData.data.items[0].sumall_berat_pakan ?? 0,
                    nama_jenis_pakan: '-',
                    std_gr_perekor: '-',
                    fc: '-',
                    std_fc: dataPelaporan.responseData.data.items[0].sumall_std_fc ?? 0,
                    egg_mass: dataPelaporan.responseData.data.items[0].sumall_egg_mass ?? 0,
                    nama_strain_ayam: '-',
                    nama_treatment: '-',
                });

                dataToExport.push({
                    tanggal_submit: 'Rata - rata',
                    nama_kandang: '-',
                    usia_mgg: dataPelaporan.responseData.data.items[0].avg_usia_mgg ?? 0,
                    populasi_awal: '-',
                    populasi_kemarin: '-',
                    jumlah_mati: dataPelaporan.responseData.data.items[0].avg_jumlah_mati ?? 0,
                    jumlah_afkir: '-',
                    jumlah_pindah: '-',
                    jumlah_terima: '-',
                    populasi_total: '-',
                    telur_utuh: dataPelaporan.responseData.data.items[0].avg_telur_utuh ?? 0,
                    telur_bentes: dataPelaporan.responseData.data.items[0].avg_telur_bentes ?? 0,
                    total_telur: dataPelaporan.responseData.data.items[0].avg_total_telur ?? 0,
                    percentase_telur: dataPelaporan.responseData.data.items[0].avg_percentase_telur ?? 0,
                    avg_berat_telur_gr: dataPelaporan.responseData.data.items[0].avgall_berat_telur_gr ?? 0,
                    berat_telur_utuh_kg: dataPelaporan.responseData.data.items[0].avg_berat_telur_utuh_kg ?? 0,
                    berat_telur_bentes_kg: dataPelaporan.responseData.data.items[0].avg_berat_telur_bentes_kg ?? 0,
                    berat_telur_kg: dataPelaporan.responseData.data.items[0].avg_berat_telur_kg ?? 0,
                    std_nilai_hd: '-',
                    std_berat_telur: '-',
                    berat_pakan_per_ekor_gram: dataPelaporan.responseData.data.items[0].avg_berat_pakan_per_ekor_gram ?? 0,
                    berat_pakan: dataPelaporan.responseData.data.items[0].avg_berat_pakan ?? 0,
                    nama_jenis_pakan: '-',
                    std_gr_perekor: '-',
                    fc: dataPelaporan.responseData.data.items[0].avg_fc ?? 0,
                    std_fc: dataPelaporan.responseData.data.items[0].avg_std_fc ?? 0,
                    egg_mass: dataPelaporan.responseData.data.items[0].avg_egg_mass ?? 0,
                    nama_strain_ayam: '-',
                    nama_treatment: '-',
                });
            console.log("Data Excel : ", dataToExport);
            return dataToExport;
        }

        const customHeaders = {
            "tanggal_submit": "Tgl Submit",
            "nama_kandang": "Kandang",
            "usia_mgg": "Usia Mgg",
            "populasi_awal": "Populasi Awal",
            "populasi_kemarin": "Populasi Kemarin",
            "jumlah_mati": "Jumlah Mati",
            "jumlah_afkir": "Jumlah Afkir",
            "jumlah_pindah": "Jumlah Pindah",
            "jumlah_terima": "Jumlah Terima",
            "populasi_terakhir": "Populasi Total",
            "telur_utuh": "Telur Utuh",
            "telur_bentes": "Telur Bentes",
            "total_telur": "Total Telur",
            "percentase_telur": "Percentase Telur",
            "berat_telur_gr": "Berat Telur gr",
            "berat_telur_utuh_kg": "Berat Telur Utuh kg",
            "berat_telur_bentes_kg": "Berat Telur Bentes kg",
            "berat_telur_kg": "Berat Telur kg",
            "std_nilai_hd": "Std Nilai HD",
            "std_berat_telur": "Std Berat Telur",
            "berat_pakan_per_ekor_gram": "Berat Pakan / ekor gram",
            "berat_pakan": "Berat Pakan",
            "nama_jenis_pakan": "Jenis Pakan",
            "std_gr_perekor": "Std gr perekor",
            "fc": "FC",
            "std_fc": "Std FC",
            "egg_mass": "Egg Mas",
            "nama_strain_ayam": "Strain Ayam",
            "nama_treatment": "Treatment",
        }
        // excelParser().exportDataFromJSON(dataToExport, null, null, customHeaders)
        // console.log("Data Excel : ", dataToExport);
    }

    const json_fields = {
        "Tanggal Submit": "tanggal_submit",
        "Nama Kandang": "nama_kandang",
        "Usia Mgg": "usia_mgg",
        "Populasi Awal": "populasi_awal",
        "Populasi Kemarin":
        "populasi_kemarin",
        "Jumlah Mati": "jumlah_mati",
        "Jumlah Afkir": "jumlah_afkir",
        "Jumlah Pindah": "jumlah_pindah",
        "Jumlah Terima": "jumlah_terima",
        "Populasi Total": "populasi_total",
        "Telur Utuh": "telur_utuh",
        "Telur Bentes": "telur_bentes",
        "Total Telur": "total_telur",
        "Percentase Telur": "percentase_telur",
        "Berat Telur gr/butir": "avg_berat_telur_gr",
        "Berat Telur Utuh kg": "berat_telur_utuh_kg",
        "Berat Telur Bentes kg": "berat_telur_bentes_kg",
        "Berat Telur kg": "berat_telur_kg",
        "Std Nilai HD": "std_nilai_hd",
        "Std Berat Telur": "std_berat_telur",
        "Berat Pakan per Ekor gram": "berat_pakan_per_ekor_gram",
        "Berat Pakan": "berat_pakan",
        "Nama Jenis Pakan": "nama_jenis_pakan",
        "Std gr perekor": "std_gr_perekor",
        "FC": "fc",
        "Std FC": "std_fc",
        "Egg Mass": "egg_mass",
        "Nama Strain Ayam": "nama_strain_ayam",
        "Nama Treatment": "nama_treatment",
    };
          



    
   
</script>

<style scoped>
    .row-atas-bg {
        background-color: #D2EADD;
    }
    .row-bawah-bg {
        background-color: #E1F4EA;
    }
    /* tbody tr:first-child td {
        background-color: rgba(15, 169, 88, 0.3);
    } */
    tbody .row-total td {
        background-color: rgba(15, 169, 88, 0.3);
    }
    tbody .row-rata td {
        background-color: rgba(15, 169, 88, 0.3);
    }
    table {
        border-width: 3px;
        border-color: grey;
    }
    .table-responsive {
        max-height: 600px;
        overflow: auto;
        /* height: 80vh; */
    }

    thead{
        position: sticky;
        top: 0;
        left: 0;
        z-index: 999;
    }
</style>