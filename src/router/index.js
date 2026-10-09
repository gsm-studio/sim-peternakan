import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores';
import { ref } from 'vue';

import DashboardView from '../views/DashboardView.vue'
import PencatatanProduksiView from '../views/PencatatanProduksiView.vue'
import PelaporanView from '../views/PelaporanView.vue'
import PenjadwalanView from '../views/PenjadwalanView.vue'
import ValidasiDataView from '../views/ValidasiDataView.vue'
import KandangView from '../views/KandangView.vue'
import KaryawanView from '../views/KaryawanView.vue'
import StandartPemeliharaan from '../views/StandartPemeliharaan.vue'
import HistoryUserView from '../views/HistoryUserView.vue'
import LoginView from '../views/LoginView.vue'
import JenisPakanView from '../views/JenisPakanView.vue'
import StrainAyamView from '../views/StrainAyamView.vue'
import TreatmentView from '../views/TreatmentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashboardView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        hideNavbar: true,
      }
    },
    {
      path: '/pencatatan-produksi/:id',
      name: 'pencatatan-produksi',
      component: PencatatanProduksiView
    },
    {
      path: '/pelaporan',
      name: 'pelaporan',
      component: PelaporanView
    },
    {
      path: '/penjadwalan',
      name: 'penjadwalan',
      component: PenjadwalanView
    },
    {
      path: '/validasi-data',
      name: 'validasi-data',
      component: ValidasiDataView
    },
    {
      path: '/kandang',
      name: 'kandang',
      component: KandangView
    },
    {
      path: '/karyawan',
      name: 'karyawan',
      component: KaryawanView
    },
    {
      path: '/standar-pemeliharaan',
      name: 'standar-pemeliharaan',
      component: StandartPemeliharaan
    },
    {
      path: '/history-user',
      name: 'history-user',
      component: HistoryUserView
    },
    {
      path: '/jenis-pakan',
      name: 'jenis-pakan',
      component: JenisPakanView
    },
    {
      path: '/strain-ayam',
      name: 'strain-ayam',
      component: StrainAyamView
    },
    {
      path: '/treatment',
      name: 'treatment',
      component: TreatmentView
    },
  ]
})

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();
  const roles = auth.user ? auth.user.data.roles : [];
  const isSuperadmin = roles.some(r => r.nama === 'Super Admin');
  const role = roles[0] ? roles[0].nama : null;
  const adminKandang = ref('Admin Kandang');
  const adminKantor = ref('Admin Kantor');
  const getPathUrl = ref(to.path);

  if (authRequired && !auth.user) {
      auth.returnUrl = to.fullPath;
      return '/login';
  }

  // Super Admin bebas dari semua pembatasan halaman di bawah ini, apapun
  // role lain yang juga dimiliki dan posisinya di array roles.
  if (isSuperadmin) {
    return;
  }

  if (role == adminKantor.value && getPathUrl.value == '/validasi-data') {
    return '/';
  }

  if (role == adminKandang.value && getPathUrl.value == '/validasi-data' || role == adminKandang.value && getPathUrl.value == '/kandang' || role == adminKandang.value && getPathUrl.value == '/karyawan' || role == adminKandang.value && getPathUrl.value == '/standar-pemeliharaan' || role == adminKandang.value && getPathUrl.value == '/history-user' || role == adminKandang.value && getPathUrl.value == '/jenis-pakan' || role == adminKandang.value && getPathUrl.value == '/strain-ayam' || role == adminKandang.value && getPathUrl.value == '/treatment') {
    return '/';
  }
  

});

export default router
