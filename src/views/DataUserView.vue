<template>
    <HeaderItem />
     <div class="body flex-grow-1 px-3">
        <div class="container-lg">
            <!-- /.row-->
            <div class="card mb-4 ps-2 pt-2">
            <div class="row">
                <div class="col-lg-12 p-4">
                <h4 class="mb-3">Management User <span class="text-secondary">> Data User</span></h4>
                <p class="w-50">Lorem ipsum dolor sit amet consectetur. Elementum donec gravida mauris ipsum rhoncus nec tempor venenatis tellus.</p>
                <div class="mt-4 mb-4">
                
                
                <span class="ms-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
                        <rect width="21" height="19" fill="#0FA958"/>
                        <path d="M10.208 2.375V17.4167" stroke="#0FA958" stroke-width="2"/>
                        <path d="M4 9L17 9" stroke="white" stroke-width="2"/>
                        <path d="M10 3V15" stroke="white" stroke-width="2"/>
                        </svg>
                    Tambah User
                </span>
                <span class="ms-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M3.2998 5.5C3.2998 4.91653 3.53159 4.35695 3.94417 3.94437C4.35675 3.53179 4.91633 3.3 5.4998 3.3H6.5998V7.15C6.5998 7.58761 6.77364 8.00729 7.08308 8.31673C7.39251 8.62616 7.8122 8.8 8.2498 8.8H12.6498C13.0874 8.8 13.5071 8.62616 13.8165 8.31673C14.126 8.00729 14.2998 7.58761 14.2998 7.15V3.3H14.7167C15.3001 3.30013 15.8596 3.53199 16.2721 3.9446L18.0552 5.7277C18.4678 6.14019 18.6997 6.69967 18.6998 7.2831V16.5C18.6998 17.0835 18.468 17.6431 18.0554 18.0556C17.6429 18.4682 17.0833 18.7 16.4998 18.7V12.65C16.4998 12.2124 16.326 11.7927 16.0165 11.4833C15.7071 11.1738 15.2874 11 14.8498 11H7.1498C6.7122 11 6.29251 11.1738 5.98308 11.4833C5.67364 11.7927 5.4998 12.2124 5.4998 12.65V18.7C4.91633 18.7 4.35675 18.4682 3.94417 18.0556C3.53159 17.6431 3.2998 17.0835 3.2998 16.5V5.5ZM13.1998 3.3H7.6998V7.15C7.6998 7.29587 7.75775 7.43577 7.8609 7.53891C7.96404 7.64206 8.10394 7.7 8.2498 7.7H12.6498C12.7957 7.7 12.9356 7.64206 13.0387 7.53891C13.1419 7.43577 13.1998 7.29587 13.1998 7.15V3.3ZM15.3998 12.65V18.7H6.5998V12.65C6.5998 12.5041 6.65775 12.3642 6.7609 12.2611C6.86404 12.1579 7.00394 12.1 7.1498 12.1H14.8498C14.9957 12.1 15.1356 12.1579 15.2387 12.2611C15.3419 12.3642 15.3998 12.5041 15.3998 12.65Z" fill="#0FA958"/>
                        </svg>
                    Simpan
                    </span>
                <span class="ms-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#A3AAA6"/>
                    </svg>
                    Hapus
                </span>
                </div>
                <div class="d-flex justify-content-between">
                    <!-- Button trigger modal -->
                    <div> 
                        <button type="button" class="btn btn-success bg-button-rossa" data-toggle="modal" data-target="#exampleModal">
                        Select
                        </button>
                        <button type="button" class="btn btn-success bg-button-rossa" data-toggle="modal" data-target="#exampleModal">
                        Filter
                        </button>
                    </div>
                    
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                        <div class="modal-content p-3">
                            <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Populasi Ayam : 3000 ekor</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div class="modal-body">
                                <form action="">
                                    <input class="form-control text-center mb-3" type="date" placeholder="Pilih jadwal">
                                    <input class="form-control text-center mb-3" type="text" placeholder="ID Kandang">
                                    <input class="form-control text-center mb-3" type="text" placeholder="Nama anak kandang">
                                    <input class="form-control text-center mb-3" type="text" placeholder="Pelaksana">
                                    <input class="form-control text-center mb-3" type="text" placeholder="Penanggung jawab">
                                    <input class="form-control text-center mb-3" type="text" placeholder="Pekerjaan/tugas">
                                    <input class="form-control text-center mb-3" type="text" placeholder="Tuliskan catatan">
                                </form>
                            </div>
                            <div class="modal-footer">
                            <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
                            <button type="button" class="btn btn-success bg-button-rossa">Atur jadwal</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="input-group search-table me-3">
                            <span class="input-group-text" id="basic-addon1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.84 8.84667L13.66 12.6667L12.6667 13.66L8.84667 9.84C8.13333 10.3533 7.27333 10.6667 6.33333 10.6667C3.94 10.6667 2 8.72667 2 6.33333C2 3.94 3.94 2 6.33333 2C8.72667 2 10.6667 3.94 10.6667 6.33333C10.6667 7.27333 10.3533 8.13333 9.84 8.84667ZM6.33333 3.33333C4.67333 3.33333 3.33333 4.67333 3.33333 6.33333C3.33333 7.99333 4.67333 9.33333 6.33333 9.33333C7.99333 9.33333 9.33333 7.99333 9.33333 6.33333C9.33333 4.67333 7.99333 3.33333 6.33333 3.33333Z" fill="#0FA958"/>
                                </svg>
                            </span>
                            <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1">
                        </div>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z" fill="#0FA958"/>
                            </svg>
                    </div>
                </div>
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <div class="bg-light p-4">
                            <div class="title mb-5">
                            <h5 class="d-inline">ID kandang</h5>
                            <div class="p-2 ms-3 bg-button-rossa d-inline rounded">09 November 2023</div>
                            </div>
                            <div class="mb-4">
                            <p>
                                <span class="color-text-rossa">Populasi ayam: <span class="text-secondary">300</span></span>
                                <span class="ms-4 color-text-rossa">FC: <span class="text-secondary">7,4</span></span>
                                <span class="ms-4 color-text-rossa">Standart FC: <span class="text-secondary">7,6</span></span>
                                <span class="ms-4 color-text-rossa">Egg mass: <span class="text-secondary">11,7</span></span>
                                <span class="ms-4 color-text-rossa">Strain: <span class="text-secondary">11,7</span></span>
                            </p>

                            </div>
                            <div>
                            <span class="ms-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                                <ellipse cx="11.5" cy="10.5" rx="11.5" ry="10.5" fill="#D9D9D9"/>
                                </svg>
                                Anak kandang
                            </span>
                            <span class="ms-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                                <ellipse cx="11.5" cy="10.5" rx="11.5" ry="10.5" fill="#D9D9D9"/>
                                </svg>
                                Mandor
                            </span>
                            </div>
                        </div>
                        <!-- table -->
                        <div class="table-responsive mt-5">
                            <table class="table pelaporan table-bordered">
                            <thead>
                                <tr>
                                
                                <th scope="col">Usia</th>
                                <th colspan="4" scope="col">Populasi</th>
                                <th colspan="2" scope="col">Produksi Telur</th>
                                <th colspan="2" scope="col">Berat Telur</th>
                                <th colspan="2" scope="col">Standart Produksi</th>
                                <th colspan="2" scope="col">Pakan</th>
                                <th rowspan="2" scope="col">Treatment</th>
                                <th rowspan="2" scope="col">Edit</th>
                                <th rowspan="2" scope="col">Status</th>
                                </tr>
                                <tr>
                                
                                <th scope="col">Mgg</th>
                                <th scope="col">Mati</th>
                                <th scope="col">Afkir</th>
                                <th scope="col">Pindah</th>
                                <th scope="col">Terima</th>
    
                                <th scope="col">Telur utuh</th>
                                <th scope="col">Telur bentes</th>
    
                                <th scope="col">Telur utuh</th>
                                <th scope="col">Telur bentes</th>
    
                                <th scope="col">%</th>
                                <th scope="col">gr/butir</th>

                                <th scope="col">Jumlah (kg)</th>
                                <th scope="col">Jenis pakan</th>

                                
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center">
                                <td>14</td>
                                <td>1</td>
                                <td>-</td>
                                <td>400</td>
                                <td>-</td>
                                <td>7000</td>
                                <td>34</td>
                                <td>406.0</td>
                                <td>2.0</td>
                                <td>24.2%</td>
                                <td>58gr</td>
                                <td>300 Kg</td>
                                <td>Omega</td>
                                <td>Vaksinasi ND-IB</td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <mask id="mask0_142_372" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="1" width="18" height="18">
                                        <path d="M2.91699 17.5H17.917" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M4.58398 11.1333V14.1667H7.63273L16.2507 5.545L13.2069 2.5L4.58398 11.1333Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                                    </mask>
                                    <g mask="url(#mask0_142_372)">
                                        <path d="M0 0H20V20H0V0Z" fill="#0FA958"/>
                                    </g>
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="23" viewBox="0 0 28 23" fill="none">
                                    <path d="M11.8381 1.91675C17.2868 1.91675 21.7036 6.20721 21.7036 11.5001C21.7036 16.793 17.2868 21.0834 11.8381 21.0834C6.38943 21.0834 1.97266 16.793 1.97266 11.5001C1.97266 6.20721 6.38943 1.91675 11.8381 1.91675ZM11.8381 3.83341C9.74494 3.83341 7.73748 4.64115 6.25737 6.07893C4.77727 7.51671 3.94575 9.46675 3.94575 11.5001C3.94575 13.5334 4.77727 15.4835 6.25737 16.9212C7.73748 18.359 9.74494 19.1667 11.8381 19.1667C13.9313 19.1667 15.9388 18.359 17.4189 16.9212C18.899 15.4835 19.7305 13.5334 19.7305 11.5001C19.7305 9.46675 18.899 7.51671 17.4189 6.07893C15.9388 4.64115 13.9313 3.83341 11.8381 3.83341ZM11.8381 5.75008C12.0798 5.75011 12.313 5.83629 12.4936 5.99227C12.6741 6.14824 12.7895 6.36317 12.8178 6.59629L12.8247 6.70841V11.1033L15.4953 13.6975C15.6722 13.87 15.7749 14.1014 15.7826 14.3448C15.7902 14.5882 15.7022 14.8252 15.5364 15.0078C15.3707 15.1905 15.1396 15.305 14.89 15.328C14.6405 15.3511 14.3913 15.2811 14.193 15.1322L14.1003 15.0526L11.1406 12.1776C10.9873 12.0286 10.8888 11.8345 10.8605 11.6256L10.8516 11.5001V6.70841C10.8516 6.45425 10.9555 6.21049 11.1405 6.03077C11.3255 5.85105 11.5765 5.75008 11.8381 5.75008Z" fill="#D4780C"/>
                                    </svg>
                                </td>
                                </tr>
                                
                            </tbody>
                            </table>
                        </div>
                        <!-- akhir table -->
                        </div>
                        <div class="modal-footer">
                        
                        
                        </div>
                    </div>
                    </div>
                </div>
                <div class="table-responsive mt-3">
                    <table class="table pelaporan table-bordered">
                    <thead>
                        <tr>
                        
                        <th scope="col">Nama karyawan</th>
                        <th scope="col">Email</th>
                        <th scope="col">ID Kandang</th>
                        <th scope="col">Pilih Peran</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr class="row-validasi text-center">
                        
                        <td>Rossa Lia</td>
                        <td>rossalia_99@gmail.com</td>
                        <td>Kandang 1A</td>
                        <td id="idKandangPopOver">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                <path d="M14.3747 3.83333C14.3747 3.30385 12.9429 2.875 11.4997 2.875C10.0564 2.875 8.62467 3.30385 8.62467 3.83333L8.21642 5.19465C8.38557 5.22052 8.57197 5.24783 8.7689 5.27515C9.62949 5.39494 10.6808 5.51042 11.4997 5.51042C12.319 5.51042 13.3699 5.39446 14.2304 5.27563C14.4274 5.24783 14.6138 5.22052 14.7829 5.19465L14.3747 3.83333ZM15.1351 6.10985C14.9109 6.14531 14.6478 6.18508 14.3617 6.22485C13.493 6.34465 12.3876 6.46875 11.4997 6.46875C10.6113 6.46875 9.50634 6.34512 8.63761 6.22438C8.37947 6.18862 8.12167 6.15044 7.86424 6.10985C6.29353 6.45821 5.27051 7.02554 5.27051 7.66667C5.27051 8.72563 8.05926 9.58333 11.4997 9.58333C14.9401 9.58333 17.7288 8.72563 17.7288 7.66667C17.7288 7.02554 16.7058 6.45821 15.1351 6.10985Z" fill="#0FA958"/>
                                <path d="M7.66797 9.17796C7.68741 10.1816 8.09974 11.1375 8.81638 11.8404C9.53302 12.5433 10.4968 12.9371 11.5006 12.9371C12.5044 12.9371 13.4681 12.5433 14.1848 11.8404C14.9014 11.1375 15.3138 10.1816 15.3332 9.17796C15.0125 9.25434 14.689 9.31828 14.3634 9.36963C14.298 10.0838 13.9681 10.7477 13.4384 11.2311C12.9087 11.7145 12.2175 11.9825 11.5003 11.9825C10.7832 11.9825 10.092 11.7145 9.56232 11.2311C9.03263 10.7477 8.70272 10.0838 8.63732 9.36963C8.31185 9.31827 7.98849 9.25433 7.66797 9.17796Z" fill="#0FA958"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.24031 16.7708C7.89722 17.364 7.35417 17.8157 6.70841 18.0449V19.6458C6.70841 19.8135 6.67966 19.975 6.62695 20.125H20.1251V17.25C20.1251 14.6543 14.3789 13.8958 11.5001 13.8958C10.5385 13.9008 9.57822 13.9671 8.62508 14.0942V16.7708H8.24031ZM11.5001 17.25C10.8557 17.2493 10.2132 17.1802 9.58341 17.044V14.95C10.2863 14.8839 10.9481 14.8542 11.5001 14.8542C12.2984 14.8542 13.3252 14.916 14.3751 15.0612V16.7708C14.3688 16.7732 13.1724 17.25 11.5001 17.25ZM16.6286 15.5212C16.3641 15.4455 16.091 15.3774 15.8126 15.3156V16.7708H16.7709C16.898 16.7708 17.0199 16.8213 17.1097 16.9112C17.1996 17.001 17.2501 17.1229 17.2501 17.25V19.1667H19.1667V17.25C19.1667 17.0075 19.0479 16.7267 18.6085 16.3985C18.1581 16.0621 17.4762 15.7636 16.6286 15.5212Z" fill="#0FA958"/>
                                <path d="M3.83333 11.9792C3.83333 11.8521 3.78285 11.7302 3.69299 11.6403C3.60313 11.5505 3.48125 11.5 3.35417 11.5C3.22708 11.5 3.10521 11.5505 3.01534 11.6403C2.92548 11.7302 2.875 11.8521 2.875 11.9792V15.3333C2.875 15.8417 3.07693 16.3292 3.43638 16.6886C3.79582 17.0481 4.28333 17.25 4.79167 17.25V19.6458C4.79167 19.7729 4.84215 19.8948 4.93201 19.9847C5.02187 20.0745 5.14375 20.125 5.27083 20.125C5.39792 20.125 5.51979 20.0745 5.60966 19.9847C5.69952 19.8948 5.75 19.7729 5.75 19.6458V17.25C6.25833 17.25 6.74584 17.0481 7.10529 16.6886C7.46473 16.3292 7.66667 15.8417 7.66667 15.3333V11.9792C7.66667 11.8521 7.61618 11.7302 7.52632 11.6403C7.43646 11.5505 7.31458 11.5 7.1875 11.5C7.06042 11.5 6.93854 11.5505 6.84868 11.6403C6.75882 11.7302 6.70833 11.8521 6.70833 11.9792V15.3333C6.70833 15.5875 6.60737 15.8313 6.42764 16.011C6.24792 16.1907 6.00417 16.2917 5.75 16.2917V11.9792C5.75 11.8521 5.69952 11.7302 5.60966 11.6403C5.51979 11.5505 5.39792 11.5 5.27083 11.5C5.14375 11.5 5.02187 11.5505 4.93201 11.6403C4.84215 11.7302 4.79167 11.8521 4.79167 11.9792V16.2917C4.5375 16.2917 4.29375 16.1907 4.11402 16.011C3.9343 15.8313 3.83333 15.5875 3.83333 15.3333V11.9792Z" fill="#0FA958"/>
                                </svg>
                                Admin Kandang
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="9" viewBox="0 0 13 9" fill="none">
                                <path d="M1 1.5L6.5 7.5L12 1.5" stroke="#0FA958" stroke-width="2"/>
                                </svg>
                                <div id="myPopover" class="popover-content p-0">
                                <div>
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M16 9C16 14.33 8 14.33 8 9H10C10 11.67 14 11.67 14 9M20 18V21H4V18C4 15.33 9.33 14 12 14C14.67 14 20 15.33 20 18ZM18.1 18C18.1 17.36 14.97 15.9 12 15.9C9.03 15.9 5.9 17.36 5.9 18V19.1H18.1M12.5 2C12.78 2 13 2.22 13 2.5V5.5H14V3C14.7077 3.32752 15.3006 3.86019 15.7019 4.52889C16.1031 5.19758 16.294 5.97142 16.25 6.75C16.25 6.75 16.95 6.89 17 8H7C7 6.89 7.75 6.75 7.75 6.75C7.70595 5.97142 7.89693 5.19758 8.29814 4.52889C8.69936 3.86019 9.29229 3.32752 10 3V5.5H11V2.5C11 2.22 11.22 2 11.5 2" fill="#0FA958"/>
                                                </svg>
                                            Admin Kantor
                                        </li>
                                        <li class="list-group-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4173 8.66667C18.4173 11.6583 15.9923 14.0833 13.0007 14.0833C10.009 14.0833 7.58398 11.6583 7.58398 8.66667C7.58398 5.67504 10.009 3.25 13.0007 3.25C15.9923 3.25 18.4173 5.67504 18.4173 8.66667ZM17.334 8.66667C17.334 9.81594 16.8774 10.9181 16.0648 11.7308C15.2521 12.5435 14.1499 13 13.0007 13C11.8514 13 10.7492 12.5435 9.93652 11.7308C9.12386 10.9181 8.66732 9.81594 8.66732 8.66667C8.66732 7.5174 9.12386 6.41519 9.93652 5.60254C10.7492 4.78988 11.8514 4.33333 13.0007 4.33333C14.1499 4.33333 15.2521 4.78988 16.0648 5.60254C16.8774 6.41519 17.334 7.5174 17.334 8.66667Z" fill="#0FA958"/>
                                                <path d="M16.5212 15.1666C16.4635 15.1535 16.4032 15.1604 16.35 15.1862C16.2968 15.212 16.254 15.2552 16.2287 15.3085L14.0837 21.4348V19.5L13.7722 17.3219C13.8716 17.301 13.9632 17.2525 14.0363 17.182C14.1095 17.1115 14.1614 17.0218 14.186 16.9233L14.4569 15.8399C14.4769 15.7601 14.4784 15.6768 14.4614 15.5963C14.4444 15.5157 14.4092 15.4402 14.3586 15.3753C14.308 15.3104 14.2433 15.2579 14.1694 15.2217C14.0955 15.1856 14.0143 15.1667 13.932 15.1666H12.0697C11.9875 15.1667 11.9063 15.1854 11.8323 15.2215C11.7584 15.2576 11.6936 15.31 11.643 15.3749C11.5923 15.4397 11.5571 15.5153 11.54 15.5958C11.523 15.6762 11.5244 15.7596 11.5443 15.8394L11.8152 16.9227C11.8397 17.0214 11.8915 17.1112 11.9647 17.1818C12.0379 17.2524 12.1295 17.3009 12.229 17.3219L11.917 19.5V20.9603L9.77199 15.3085C9.74662 15.2552 9.70383 15.212 9.65066 15.1862C9.59749 15.1604 9.53712 15.1535 9.47949 15.1666C9.27242 15.2166 9.06514 15.2657 8.85766 15.314C7.63241 15.601 6.11791 15.9553 5.31299 16.484C4.35803 17.1107 3.79199 17.8495 3.79199 18.6875V22.2083H22.2087V18.6875C22.2087 17.8495 21.6426 17.1112 20.6877 16.484C19.8827 15.9553 18.3682 15.601 17.143 15.314C16.9247 15.263 16.7151 15.2143 16.5212 15.1666Z" fill="#0FA958"/>
                                                </svg>
                                            Admin Kandang
                                        </li>
                                        </ul>
                                </div>
                            </div>
                        </td>
                        
                        <td id="actionPopOver">
                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="6" viewBox="0 0 29 6" fill="none">
                            <circle cx="2.5" cy="3" r="2.5" fill="#797979"/>
                            <circle cx="14.5" cy="3" r="2.5" fill="#797979"/>
                            <circle cx="26.5" cy="3" r="2.5" fill="#797979"/>
                            </svg>
                            <div id="myPopover2" class="popover-content p-0">
                            <div>
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        
                                        Edit
                                    </li>
                                    <li class="list-group-item">
                                        
                                        View profile
                                    </li>
                                    <li class="list-group-item">
                                        
                                        Ganti password
                                    </li>
                                    </ul>
                            </div>
                        </div>
                        </td>
                        </tr>
                    
                        
                        
                    </tbody>
                    </table>
                </div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end align-items-center">
                    <li class="me-3">
                        Row per page: 
                    </li>
                    <li class="me-3">
                        <a href="!#" type="button" class="border p-2 rounded">10 <svg xmlns="http://www.w3.org/2000/svg" width="6" height="4" viewBox="0 0 6 4" fill="none">
                        <path d="M0.705 0.289978L3 2.58498L5.295 0.289978L6 0.999978L3 3.99998L0 0.999978L0.705 0.289978Z" fill="black"/>
                        </svg></a>
                    </li>
                    <li class="me-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M12.8415 13.8167L9.02484 10L12.8415 6.175L11.6665 5L6.6665 10L11.6665 15L12.8415 13.8167Z" fill="black"/>
                        </svg>
                    </li>
                    <li class="me-3">
                        Page 1
                    </li>
                    <li class="me-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7.1582 13.8167L10.9749 10L7.1582 6.175L8.3332 5L13.3332 10L8.3332 15L7.1582 13.8167Z" fill="black"/>
                        </svg>
                    </li>
                    </ul>
                </nav>
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

    import { onMounted } from 'vue'

    onMounted(() => {
        // Mengambil elemen button (icon SVG) dan popover
        const button = document.getElementById('idKandangPopOver');
        const button2 = document.getElementById('actionPopOver');
        const popover = document.getElementById('myPopover');
        const popover2 = document.getElementById('myPopover2');

        // Menampilkan atau menyembunyikan popover saat button diklik
        
            button.addEventListener('click', function(event) {
                if (popover.style.display === 'block') {
                    popover.style.display = 'none';
                } else {
                    popover.style.display = 'block';
                }
                event.stopPropagation(); // Mencegah event bubbling
            });

            button2.addEventListener('click', function(event) {
                if (popover2.style.display === 'block') {
                popover2.style.display = 'none';
                } else {
                popover2.style.display = 'block';
                }
                event.stopPropagation(); // Mencegah event bubbling
            });


        // Menutup popover saat klik di luar popover
        document.addEventListener('click', function(event) {
            if (!popover.contains(event.target)) {
                popover.style.display = 'none';
            }
            if (!popover2.contains(event.target)) {
                popover2.style.display = 'none';
            }
        });
    })

    
</script>