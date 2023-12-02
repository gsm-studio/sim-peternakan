import './assets/main.css'
import './assets/vendors/@coreui/coreui/js/coreui.bundle.min.js'
import './assets/vendors/simplebar/js/simplebar.min.js'
import './assets/vendors/chart.js/js/Chart.min.js'
import './assets/vendors/@coreui/chartjs/js/coreui-chartjs.js'
// import './assets/vendors/@coreui/utils/js/coreui-utils.js'
// import './assets/js/main.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
