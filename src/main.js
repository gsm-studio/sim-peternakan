import '@/assets/main.css'
import '@/assets/css/style.css'
import '@/assets/css/vendors/simplebar.css'
import '@/assets/vendors/simplebar/css/simplebar.css'
import '@/assets/css/examples.css'
import '@/assets/vendors/@coreui/chartjs/css/coreui-chartjs.css'
import '@/assets/vendors/@coreui/icons/css/brand.min.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";

import '@/assets/vendors/@coreui/coreui/js/coreui.bundle.min.js'
import '@/assets/vendors/simplebar/js/simplebar.min.js'
// import './assets/vendors/chart.js/js/Chart.min.js'
import '@/assets/vendors/@coreui/chartjs/js/coreui-chartjs.js'
// import './assets/vendors/@coreui/utils/js/coreui-utils.js'
// import './assets/js/main.js'

import Paginate from 'vuejs-paginate';

import VueAwesomePaginate from "vue-awesome-paginate";

import "vue-awesome-paginate/dist/style.css";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import VueRangedatePicker from 'vue-rangedate-picker';
import VueDatepickerUi from 'vue-datepicker-ui'
import 'vue-datepicker-ui/lib/vuedatepickerui.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// setup fake backend
import { fakeBackend } from './helpers';
fakeBackend();

const app = createApp(App)

app.use(createPinia());
app.use(router);
app.use(VueSweetalert2);
app.use(VueAwesomePaginate);
// app.use(Vue3Html2pdf);
app.component('vue-rangedate-picker', VueRangedatePicker);
app.component('paginate', Paginate);
app.component('Datepicker', VueDatepickerUi);

app.mount('#app')
