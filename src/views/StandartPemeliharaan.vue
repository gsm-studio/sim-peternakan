<template>
    <HeaderItem />
    <div class="body flex-grow-1 px-3">
        <div class="container-lg">
            <!-- /.row-->
            <div class="card mb-4 ps-2 pt-2">
            <div class="row">
                <div class="col-lg-12 p-4">
                <h4 class="mb-3">Master Data <span class="text-secondary">> Standart Pemeliharaan</span></h4>
                <div class="mt-4 mb-4 d-flex">
                <span class="ms-3">
                    <button class="btn btn-success bg-status-success">
                        Usia 18-30
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
                            <path d="M1 1L4 5L8 1" stroke="white"/>
                        </svg>
                    </button>
                    
                    
                </span>
                <div class="ms-3">
                    <span class="btnPopOver color-text-rossa">
                        Pindah Kandang
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 1L5 7L9.5 1" stroke="#0FA958"/>
                            </svg>
                    </span>
                    <div id="myPopover" class="popover-content p-0">
                        <div>
                            <ul class="list-group">
                                <li class="list-group-item">Kandang 1A</li>
                                <li class="list-group-item">Kandang 1A</li>
                                <li class="list-group-item">Kandang 1A</li>
                                <li class="list-group-item">Kandang 1A</li>
                                <li class="list-group-item">Kandang 1A</li>
                                <li class="list-group-item">Kandang 1A</li>
                                </ul>
                        </div>
                    </div>
                </div>
                <div class="ms-3">
                <span id="btnStrain" class="color-text-rossa">
                    Strain: Hisex
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 1L5 7L9.5 1" stroke="#0FA958"/>
                        </svg>
                </span>
                <div id="myPopoverStrain" class="popover-content p-0">
                    <div>
                        <ul class="list-group">
                            <li class="list-group-item">Hyline</li>
                            <li class="list-group-item">Isa Brown</li>
                            <li class="list-group-item">Lohmann Brown
                            </li>
                            <li class="list-group-item">Novogen</li>
                            
                            </ul>
                    </div>
                </div>
                </div>
                </div>
                <div class="d-flex justify-content-between">
                    <!-- Button trigger modal -->
                    <div> 
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
                        <th scope="col">Usia (minggu)</th>
                        <th scope="col">HD (%)</th>
                        <th scope="col">Berat Butir (gr)</th>
                        <th scope="col">Berat Telur (gr)</th>
                        <th scope="col">FI</th>
                        <th scope="col">FC</th>
                        <th scope="col">Egg mass</th>
                        
                        </tr>
                    </thead>
                    <tbody>

                        <tr class="row-validasi text-center">
                        <td>18 minggu</td>
                        <td>4,00 %</td>
                        <td>1,520 gr</td>
                        <td>48,80 gr</td>
                        <td>
                            85,00
                        </td>
                        <td>
                            209,5
                        </td>
                        <td>
                            0,4
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
    import HeaderItem from '../components/HeaderItem.vue'

    import { onMounted } from 'vue';

    onMounted(() => {
        // Mengambil elemen button (icon SVG) dan popover
        const buttons = document.querySelectorAll('.btnPopOver');
        const popover = document.getElementById('myPopover');

        const btnStrain = document.getElementById('btnStrain');
        const popoverStrain = document.getElementById('myPopoverStrain');

        // Menampilkan atau menyembunyikan popover saat button diklik
        buttons.forEach(button => {
            button.addEventListener('click', function(event) {
                if (popover.style.display === 'block') {
                    popover.style.display = 'none';
                } else {
                    popover.style.display = 'block';
                }
                event.stopPropagation(); // Mencegah event bubbling
            });
        });

        btnStrain.addEventListener('click', function(event) {
                if (popoverStrain.style.display === 'block') {
                popoverStrain.style.display = 'none';
                } else {
                popoverStrain.style.display = 'block';
                }
                event.stopPropagation(); // Mencegah event bubbling
            });

        // Menutup popover saat klik di luar popover
        document.addEventListener('click', function(event) {
            if (!popover.contains(event.target)) {
                popover.style.display = 'none';
            }
            if (!popoverStrain.contains(event.target)) {
                popoverStrain.style.display = 'none';
            }
        });
    });
    
    
</script>