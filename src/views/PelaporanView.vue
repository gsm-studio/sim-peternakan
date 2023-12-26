<template>
    <HeaderItem />
    <div class="body flex-grow-1 px-3">
        <div class="container-lg">
            <!-- /.row-->
            <div class="card mb-4">
            <div class="row">
                <div class="col-lg-12 p-4">
                <div class="d-flex justify-content-between mb-3">
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
                                lang="en"
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
                            <path d="M1 1L4 5L8 1" stroke="white"/>
                            </svg>
                        </p>
                        <!-- <p class="ms-3">View <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                        <path d="M1 1L5.5 7L10 1" stroke="#0FA958" stroke-width="2"/>
                        </svg></p> -->
                        <p>
                            <select v-model="idKandang" @change="getPelaporan($event.target.value, rangeDate.start, rangeDate.end)" class="form-select form-select-sm ms-3" aria-label=".form-select-sm example">
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
                         </p>
                    </div>
                    <div class="d-inline">
                        <button @click="printLaporan()" type="button" class="btn btn-success bg-button-rossa">Download laporan</button>
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
                            <th rowspan="2" scope="col">Tanggal</th>
                            <th rowspan="2" scope="col">Kandang</th>
                           
                            <th scope="col">Usia</th>
                            <th colspan="4" scope="col">Populasi</th>

                            <th rowspan="2" scope="col">Total Populasi</th>

                            <th colspan="5" scope="col">Produksi Telur</th>

                            <th colspan="3" scope="col">Berat Telur</th>

                            <th colspan="2" scope="col">Standart Produksi</th>

                            <th colspan="3" scope="col">Pakan</th>

                            <th rowspan="2" scope="col">Standar gr/ekor</th>

                            <th rowspan="2" scope="col">FC</th>

                            <th rowspan="2" scope="col">Standar FC</th>

                            <th rowspan="2" scope="col">Egg Mass</th>

                            <th rowspan="2" scope="col">Strain</th>

                            <th rowspan="2" scope="col">Treatment</th>
                        </tr>
                        <tr>
                        
                            <th scope="col">Mgg</th>

                            <th scope="col">Mati</th>
                            <th scope="col">Afkir</th>
                            <th scope="col">Pindah</th>
                            <th scope="col">Terima</th>

                            <th scope="col">Telur utuh</th>
                            <th scope="col">Telur bentes</th>
                            <th scope="col">Total Telur</th>
                            <th scope="col">%</th>
                            <th scope="col">gr/butir</th>

                            <th scope="col">Berat Telur utuh</th>
                            <th scope="col">Berat Telur bentes</th>
                            <th scope="col">Total</th>
                        
                            <th scope="col">%</th>
                            <th scope="col">gr/butir</th>

                            <th scope="col">gr/ekor</th>
                            <th scope="col">KG</th>
                            <th scope="col">Jenis</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="dataPelaporan.responseData">
                        <tr v-for="(item, index) in dataPelaporan.responseData.data.items" :key="index" class="text-center">
                            <td>{{ formatTanggalSubmit(item.tanggal_submit) }}</td>
                            <td>{{ item.nama_kandang }}</td>
                            <td>{{ item.usia_mgg }}</td>
                            
                            <td>{{ item.jumlah_mati }}</td>
                            <td>{{ item.jumlah_afkir }}</td>
                            <td>{{ item.jumlah_pindah }}</td>
                            <td>{{ item.jumlah_terima }}</td>

                            <td>{{ item.populasi_total }}</td>

                            <td>{{ item.telur_utuh }}</td>
                            <td>{{ item.telur_bentes }}</td>
                            <td>{{ item.total_telur }}</td>
                            <td>{{ item.percentase_telur }}</td>
                            <td>{{ item.berat_telur_gr }}</td>

                            <td>{{ item.berat_telur_utuh_kg }}</td>
                            <td>{{ item.berat_telur_bentes_kg }}</td>
                            <td>{{ item.berat_telur_kg }}</td>

                            <td>{{ item.std_egg_mass }}</td>
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
                        
                        </tr>
                        <tr>
                             <td colspan="2">Total</td>
                             <td>{{ dataPelaporan.responseData.data.items[0].sumall_usia_mgg ?? 0 }}</td>
                             <td>{{ dataPelaporan.responseData.data.items[0].sumall_jumlah_mati ?? 0 }}</td>
                             <td>{{ dataPelaporan.responseData.data.items[0].sumall_jumlah_afkir ?? 0 }}</td>
                             <td>{{ dataPelaporan.responseData.data.items[0].sumall_jumlah_pindah ?? 0 }}</td>
                             <td>{{ dataPelaporan.responseData.data.items[0].sumall_jumlah_terima ?? 0 }}</td>
                             <td>{{ dataPelaporan.responseData.data.items[0].sumall_populasi_total ?? 0 }}</td>
                             <td>{{ dataPelaporan.responseData.data.items[0].sumall_telur_utuh ?? 0 }}</td>
                             <td>{{ dataPelaporan.responseData.data.items[0].sumall_telur_bentes ?? 0 }}</td>
                             <td>{{ dataPelaporan.responseData.data.items[0].sumall_total_telur ?? 0 }}</td>
                             <td></td>
                             <td></td>
                             <td>{{ dataPelaporan.responseData.data.items[0].sumall_berat_telur_utuh_kg ?? 0 }}</td>
                             <td>{{ dataPelaporan.responseData.data.items[0].sumall_berat_telur_bentes_kg ?? 0 }}</td>
                             <td>{{ dataPelaporan.responseData.data.items[0].sumall_berat_telur_kg ?? 0 }}</td>
                             <td></td>
                             <td></td>
                             <td></td>
                             <td>{{ dataPelaporan.responseData.data.items[0].sumall_berat_pakan ?? 0 }}</td>
                             <td></td>
                             <td></td>
                             <td></td>
                             <td>{{ dataPelaporan.responseData.data.items[0].sumall_std_fc ?? 0 }}</td>
                             <td>{{ dataPelaporan.responseData.data.items[0].sumall_egg_mass ?? 0 }}</td>
                        </tr>
                        <tr>
                             <td colspan="2">Rata - rata</td>
                             <td>{{ dataPelaporan.responseData.data.items[0].avg_usia_mgg ?? 0 }}</td>
                             <td>{{ dataPelaporan.responseData.data.items[0].avg_jumlah_mati ?? 0 }}</td>
                             <td colspan="3"></td>
                             <td>{{ dataPelaporan.responseData.data.items[0].avg_populasi_total ?? 0 }}</td>
                             <td>{{ dataPelaporan.responseData.data.items[0].avg_telur_utuh ?? 0 }}</td>
                             <td>{{ dataPelaporan.responseData.data.items[0].avg_telur_bentes ?? 0 }}</td>
                             <td>{{ dataPelaporan.responseData.data.items[0].avg_total_telur ?? 0 }}</td>
                             <td>{{ dataPelaporan.responseData.data.items[0].avg_percentase_telur ?? 0 }}</td>
                             <td>{{ dataPelaporan.responseData.data.items[0].avg_berat_telur_gr ?? 0 }}</td>
                             <td>{{ dataPelaporan.responseData.data.items[0].avg_berat_telur_utuh_kg ?? 0 }}</td>
                             <td>{{ dataPelaporan.responseData.data.items[0].avg_berat_telur_bentes_kg ?? 0 }}</td>
                             <td>{{ dataPelaporan.responseData.data.items[0].avg_berat_telur_kg ?? 0 }}</td>
                             <td></td>
                             <td></td>
                             <td>{{ dataPelaporan.responseData.data.items[0].avg_berat_pakan_per_ekor_gram ?? 0 }}</td>
                             <td>{{ dataPelaporan.responseData.data.items[0].avg_berat_pakan ?? 0 }}</td>
                             <td></td>
                             <td></td>
                             <td>{{ dataPelaporan.responseData.data.items[0].avg_fc ?? 0 }}</td>
                             <td>{{ dataPelaporan.responseData.data.items[0].avg_std_fc ?? 0 }}</td>
                             <td>{{ dataPelaporan.responseData.data.items[0].avg_egg_mass ?? 0 }}</td>
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
                    
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import HeaderItem from '@/components/HeaderItem.vue';
    import { reactive, onMounted, ref, watch } from 'vue';
    import { pencatatanStore, kandangStore, pelaporanStore } from '@/stores';
    import axios from 'axios'
    import moment from 'moment';
    import jsPDF from "jspdf";

    const baseUrl = `${import.meta.env.VITE_API_URL}`;

    const dataPencatatan = reactive(pencatatanStore());
    const dataKandang = reactive(kandangStore());
    const dataPelaporan = reactive(pelaporanStore());
    const idKandang = ref(0);
    const date = ref(0);
    const rangeDate = reactive({
        start: null,
        end: null,
    });
    const selectedDate = ref([
        new Date(2022, 1, 1),
        new Date()
    ]);

    const formatTanggalSubmit = (tanggal) => {
        return moment(tanggal).format('YYYY-MM-DD');
    }
    const doc = new jsPDF("l", "px", [595, 2000]); 


    onMounted(() => {
        rangeDate.start = moment(selectedDate.value[0]).format("YYYY-MM-DD");
        rangeDate.end = moment(selectedDate.value[1]).format("YYYY-MM-DD");
        getPelaporan(null, rangeDate.start, rangeDate.end);
        getKandang();
    });

    const generateData = function() {
        const dataKandang = dataPelaporan.responseData.data.items;
        const result = [];
        dataKandang.forEach((item) => {
            result.push({
                tanggal_submit: formatTanggalSubmit(item.tanggal_submit),
                nama_kandang: item.nama_kandang,
                usia_mgg: item.usia_mgg ? item.usia_mgg : '-',
                jumlah_mati: item.jumlah_mati ? item.jumlah_mati : '-',
                jumlah_afkir: item.jumlah_afkir ? item.jumlah_afkir : '-',
                jumlah_pindah: item.jumlah_pindah ? item.jumlah_pindah : '-',
                jumlah_terima: item.jumlah_terima ? item.jumlah_terima : '-',
                populasi_total: item.populasi_total ? item.populasi_total : '-',
                telur_utuh: item.telur_utuh ? item.telur_utuh : '-',
                telur_bentes: item.telur_bentes ? item.telur_bentes : '-',
                total_telur: item.total_telur ? item.total_telur : '-',
                percentase_telur: item.percentase_telur ? item.percentase_telur : '-',
                berat_telur_gr: item.berat_telur_gr ? item.berat_telur_gr : '-',
                berat_telur_utuh_kg: item.berat_telur_utuh_kg ? item.berat_telur_utuh_kg : '-',
                berat_telur_bentes_kg: item.berat_telur_bentes_kg ? item.berat_telur_bentes_kg : '-',
                berat_telur_kg: item.berat_telur_kg ? item.berat_telur_kg : '-',
                std_egg_mass: item.std_egg_mass ? item.std_egg_mass : '-',
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
            usia_mgg: dataPelaporan.responseData.data.items[0].sumall_usia_mgg ?? 0,
            jumlah_mati: dataPelaporan.responseData.data.items[0].sumall_jumlah_mati ?? 0,
            jumlah_afkir: dataPelaporan.responseData.data.items[0].sumall_jumlah_afkir ?? 0,
            jumlah_pindah: dataPelaporan.responseData.data.items[0].sumall_jumlah_pindah ?? 0,
            jumlah_terima: dataPelaporan.responseData.data.items[0].sumall_jumlah_terima ?? 0,
            populasi_total: dataPelaporan.responseData.data.items[0].sumall_populasi_total ?? 0,
            telur_utuh: dataPelaporan.responseData.data.items[0].sumall_telur_utuh ?? 0,
            telur_bentes: dataPelaporan.responseData.data.items[0].sumall_telur_bentes ?? 0,
            total_telur: dataPelaporan.responseData.data.items[0].sumall_total_telur ?? 0,
            percentase_telur: '-',
            berat_telur_gr: '-',
            berat_telur_utuh_kg: dataPelaporan.responseData.data.items[0].sumall_berat_telur_utuh_kg ?? 0,
            berat_telur_bentes_kg: dataPelaporan.responseData.data.items[0].sumall_berat_telur_bentes_kg ?? 0,
            berat_telur_kg: dataPelaporan.responseData.data.items[0].sumall_berat_telur_kg ?? 0,
            std_egg_mass: '-',
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
            jumlah_mati: dataPelaporan.responseData.data.items[0].avg_jumlah_mati ?? 0,
            jumlah_afkir: '-',
            jumlah_pindah: '-',
            jumlah_terima: '-',
            populasi_total: dataPelaporan.responseData.data.items[0].avg_populasi_total ?? 0,
            telur_utuh: dataPelaporan.responseData.data.items[0].avg_telur_utuh ?? 0,
            telur_bentes: dataPelaporan.responseData.data.items[0].avg_telur_bentes ?? 0,
            total_telur: dataPelaporan.responseData.data.items[0].avg_total_telur ?? 0,
            percentase_telur: dataPelaporan.responseData.data.items[0].avg_percentase_telur ?? 0,
            berat_telur_gr: dataPelaporan.responseData.data.items[0].avg_berat_telur_gr ?? 0,
            berat_telur_utuh_kg: dataPelaporan.responseData.data.items[0].avg_berat_telur_utuh_kg ?? 0,
            berat_telur_bentes_kg: dataPelaporan.responseData.data.items[0].avg_berat_telur_bentes_kg ?? 0,
            berat_telur_kg: dataPelaporan.responseData.data.items[0].avg_berat_telur_kg ?? 0,
            std_egg_mass: '-',
            std_berat_telur: '-',
            berat_pakan_per_ekor_gram: '-',
            berat_pakan: dataPelaporan.responseData.data.items[0].avg_berat_pakan ?? 0,
            nama_jenis_pakan: '-',
            std_gr_perekor: '-',
            fc: '-',
            std_fc: dataPelaporan.responseData.data.items[0].avg_std_fc ?? 0,
            egg_mass: dataPelaporan.responseData.data.items[0].avg_egg_mass ?? 0,
            nama_strain_ayam: '-',
            nama_treatment: '-',
        
        });
        return result;
    };

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
        "std_egg_mass",
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

    function printLaporan() {
        const namaKandang = ref('');
        if (idKandang.value == 0) {
            namaKandang.value = 'Semua Kandang';
        } else {
            namaKandang.value = dataKandang.responseData.data.items.find(item => item.id == idKandang.value).nama;
        }
        doc.setFontSize(24);
        doc.text(`Nama Kandang: ${namaKandang.value}`, 10, 30)
        doc.text(`Tanggal: ${rangeDate.start} - ${rangeDate.end}`, 10, 60)
        // doc.html(document.getElementById('element-to-convert'), {
        //     callback: function (doc) {
        //         doc.save("a4.pdf")
        //     },
        //     x: 10,
        //     y: 10,
        // });
        doc.table(10, 90, generateData(), headers, { autoSize: true });
        doc.save("laporan.pdf")

    }

    function inputDate() {
       console.log("Input Data : ", selectedDate);
    }

    watch(selectedDate, (newValue, oldValue) => {
        date.value = new Date(newValue[0]);
        rangeDate.start = moment(newValue[0]).format("YYYY-MM-DD");
        rangeDate.end = moment(newValue[1]).format("YYYY-MM-DD");
        getPelaporan(idKandang.value, rangeDate.start, rangeDate.end);
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
                console.log(dataPelaporan.responseData.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

   
</script>