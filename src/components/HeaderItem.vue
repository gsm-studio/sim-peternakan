<script setup>
    import { onMounted, ref } from 'vue';
    import axios from 'axios';
    import { useAuthStore } from '@/stores';
    
    const authStore = useAuthStore();
    const baseUrl = `${import.meta.env.VITE_API_URL}`;

    const namaUser = ref(authStore.user.data.nama);

    onMounted(() => {
      getKaryawan();
      console.log("Data User : ", authStore.user.data.nama)
    })

    async function getKaryawan() {
      
      const user = localStorage.getItem('user');
      const token = JSON.parse(user);
      axios.get(baseUrl + '/karyawan', {
          params: {
              page_number: 1, 
              page_size: 10, 
          },
         
          headers: {
              Authorization: `Bearer ${token.token}`,
          },
      })
          .then(response => {
              
          })
          .catch(error => {
              console.error(error);
              authStore.logout();
          });
    }
</script>

<template>
    <header class="header header-sticky mb-4">
        <div class="container-fluid">
            <div class="d-flex">
            <button class="header-toggler px-md-0 me-md-3" type="button" onclick="coreui.Sidebar.getInstance(document.querySelector('#sidebar')).toggle()">
                <svg class="icon icon-lg">
                <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-menu"></use>
                </svg>
            </button>
            <a class="header-brand d-md-none" href="#">
                <!-- <svg width="118" height="46" alt="CoreUI Logo">
                <use xlink:href="@/assets/brand/coreui.svg#full"></use>
                </svg> -->
            </a>
            
                <div class="input-group search" style="width: 400px;">
                <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <div class="input-group-append">
                    <span class="input-group-text h-100" style="background-color: white;" id="basic-addon2">
                    <svg class="icon">
                        <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-magnifying-glass"></use>
                    </svg>
                    </span>
                </div>
                </div>
            </div>
            
            <ul class="header-nav ms-3">
            <li class="nav-item dropdown">
                <a class="nav-link py-0" data-coreui-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <div class="avatar avatar-md"><img class="avatar-img" src="@/assets/img/user-circle.png" alt="user@email.com"></div>
                <span class="me-2">{{ namaUser }}</span>
                </a>
                <div class="dropdown-menu dropdown-menu-end pt-0">
                    <a class="dropdown-item" href="#" @click="authStore.logout()">
                    <svg class="icon me-2">
                        <use xlink:href="@/assets/vendors/@coreui/icons/svg/free.svg#cil-account-logout"></use>
                    </svg>
                    
                    Keluar
                    </a>
                </div>
            </li>
            </ul>
        </div>
    </header>
</template>

