import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores';

import DashboardView from '../views/DashboardView.vue'
import PencatatanProduksiView from '../views/PencatatanProduksiView.vue'
import PelaporanView from '../views/PelaporanView.vue'
import PenjadwalanView from '../views/PenjadwalanView.vue'
import ValidasiDataView from '../views/ValidasiDataView.vue'
import KandangView from '../views/KandangView.vue'
import KaryawanView from '../views/KaryawanView.vue'
import StandartPemeliharaan from '../views/StandartPemeliharaan.vue'
import DataUserView from '../views/DataUserView.vue'
import HistoryUserView from '../views/HistoryUserView.vue'
import LoginView from '../views/LoginView.vue'

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
      path: '/data-user',
      name: 'data-user',
      component: DataUserView
    },
    {
      path: '/history-user',
      name: 'history-user',
      component: HistoryUserView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();

  if (authRequired && !auth.user) {
      auth.returnUrl = to.fullPath;
      return '/login';
  }
});

export default router
