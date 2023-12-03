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
                <span class="me-2">Rossa Lia</span>
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

<script setup>
    import { useAuthStore } from '@/stores';
    const authStore = useAuthStore();
</script>