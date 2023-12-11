<template>
    <HeaderItem />
    <div class="body flex-grow-1 px-3">
        <div class="container-lg">
            <!-- /.row-->
            <div class="card mb-4">
            <div class="row">
                <div class="col-lg-12 p-4">
                <h4 class="mb-5">Penjadwalan</h4>
                <div class="d-flex justify-content-between">
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-success bg-button-rossa" data-toggle="modal" data-target="#exampleModal">
                        Atur Jadwal
                    </button>
                    
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
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.84 8.84667L13.66 12.6667L12.6667 13.66L8.84667 9.84C8.13333 10.3533 7.27333 10.6667 6.33333 10.6667C3.94 10.6667 2 8.72667 2 6.33333C2 3.94 3.94 2 6.33333 2C8.72667 2 10.6667 3.94 10.6667 6.33333C10.6667 7.27333 10.3533 8.13333 9.84 8.84667ZM6.33333 3.33333C4.67333 3.33333 3.33333 4.67333 3.33333 6.33333C3.33333 7.99333 4.67333 9.33333 6.33333 9.33333C7.99333 9.33333 9.33333 7.99333 9.33333 6.33333C9.33333 4.67333 7.99333 3.33333 6.33333 3.33333Z" fill="#625B71"/>
                                </svg>
                            </span>
                            <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1">
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.0003 12V19.88C14.0403 20.18 13.9403 20.5 13.7103 20.71C13.3203 21.1 12.6903 21.1 12.3003 20.71L10.2903 18.7C10.0603 18.47 9.96035 18.16 10.0003 17.87V12H9.97035L4.21035 4.62C3.87035 4.19 3.95035 3.56 4.38035 3.22C4.57035 3.08 4.78035 3 5.00035 3H19.0003C19.2203 3 19.4303 3.08 19.6203 3.22C20.0503 3.56 20.1303 4.19 19.7903 4.62L14.0303 12H14.0003Z" fill="#0FA958"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z" fill="#0FA958"/>
                            </svg>
                    </div>
                </div>
                <div class="table-responsive mt-3">
                    <table class="table pelaporan table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">No</th>
                        <th scope="col">ID Kandang</th>
                        <th scope="col">Pekerjaan</th>
                        <th scope="col">Penanggung Jawab</th>
                        <th scope="col">Pelaksana</th>
                        <th scope="col">Catatan</th>
                        <th scope="col">History Jadwal</th>
                        <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Kandang 1 A</td>
                        <td>Vaksin ND</td>
                        <td>Rossa Lia</td>
                        <td>Vaksinator</td>
                        <td>Telah divaksin</td>
                        <td><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <path d="M13 0.5C19.9037 0.5 25.5 6.09625 25.5 13C25.5 19.9037 19.9037 25.5 13 25.5C6.09625 25.5 0.5 19.9037 0.5 13C0.5 6.09625 6.09625 0.5 13 0.5ZM13 3C10.3478 3 7.8043 4.05357 5.92893 5.92893C4.05357 7.8043 3 10.3478 3 13C3 15.6522 4.05357 18.1957 5.92893 20.0711C7.8043 21.9464 10.3478 23 13 23C15.6522 23 18.1957 21.9464 20.0711 20.0711C21.9464 18.1957 23 15.6522 23 13C23 10.3478 21.9464 7.8043 20.0711 5.92893C18.1957 4.05357 15.6522 3 13 3ZM13 5.5C13.3062 5.50004 13.6017 5.61244 13.8305 5.81589C14.0593 6.01934 14.2054 6.29969 14.2413 6.60375L14.25 6.75V12.4825L17.6337 15.8663C17.8579 16.0912 17.9881 16.393 17.9978 16.7105C18.0075 17.0279 17.896 17.3371 17.6859 17.5753C17.4759 17.8136 17.1831 17.9629 16.8669 17.993C16.5508 18.0231 16.235 17.9318 15.9838 17.7375L15.8663 17.6337L12.1163 13.8837C11.922 13.6893 11.7972 13.4363 11.7612 13.1637L11.75 13V6.75C11.75 6.41848 11.8817 6.10054 12.1161 5.86612C12.3505 5.6317 12.6685 5.5 13 5.5Z" fill="#0FA958"/>
                            </svg></td>
                        <td><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <mask id="mask0_127_2005" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="1" width="18" height="18">
                                <path d="M2.91699 17.5H17.917" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.58398 11.1333V14.1667H7.63273L16.2507 5.545L13.2069 2.5L4.58398 11.1333Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                            </mask>
                            <g mask="url(#mask0_127_2005)">
                                <path d="M0 0H20V20H0V0Z" fill="#0FA958"/>
                            </g>
                            </svg></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Kandang 1 A</td>
                            <td>Vaksin ND</td>
                            <td>Rossa Lia</td>
                            <td>Vaksinator</td>
                            <td>Telah divaksin</td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path d="M13 0.5C19.9037 0.5 25.5 6.09625 25.5 13C25.5 19.9037 19.9037 25.5 13 25.5C6.09625 25.5 0.5 19.9037 0.5 13C0.5 6.09625 6.09625 0.5 13 0.5ZM13 3C10.3478 3 7.8043 4.05357 5.92893 5.92893C4.05357 7.8043 3 10.3478 3 13C3 15.6522 4.05357 18.1957 5.92893 20.0711C7.8043 21.9464 10.3478 23 13 23C15.6522 23 18.1957 21.9464 20.0711 20.0711C21.9464 18.1957 23 15.6522 23 13C23 10.3478 21.9464 7.8043 20.0711 5.92893C18.1957 4.05357 15.6522 3 13 3ZM13 5.5C13.3062 5.50004 13.6017 5.61244 13.8305 5.81589C14.0593 6.01934 14.2054 6.29969 14.2413 6.60375L14.25 6.75V12.4825L17.6337 15.8663C17.8579 16.0912 17.9881 16.393 17.9978 16.7105C18.0075 17.0279 17.896 17.3371 17.6859 17.5753C17.4759 17.8136 17.1831 17.9629 16.8669 17.993C16.5508 18.0231 16.235 17.9318 15.9838 17.7375L15.8663 17.6337L12.1163 13.8837C11.922 13.6893 11.7972 13.4363 11.7612 13.1637L11.75 13V6.75C11.75 6.41848 11.8817 6.10054 12.1161 5.86612C12.3505 5.6317 12.6685 5.5 13 5.5Z" fill="#0FA958"/>
                                </svg></td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <mask id="mask0_127_2005" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="1" width="18" height="18">
                                    <path d="M2.91699 17.5H17.917" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.58398 11.1333V14.1667H7.63273L16.2507 5.545L13.2069 2.5L4.58398 11.1333Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                                </mask>
                                <g mask="url(#mask0_127_2005)">
                                    <path d="M0 0H20V20H0V0Z" fill="#0FA958"/>
                                </g>
                                </svg></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Kandang 1 A</td>
                            <td>Vaksin ND</td>
                            <td>Rossa Lia</td>
                            <td>Vaksinator</td>
                            <td>Telah divaksin</td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path d="M13 0.5C19.9037 0.5 25.5 6.09625 25.5 13C25.5 19.9037 19.9037 25.5 13 25.5C6.09625 25.5 0.5 19.9037 0.5 13C0.5 6.09625 6.09625 0.5 13 0.5ZM13 3C10.3478 3 7.8043 4.05357 5.92893 5.92893C4.05357 7.8043 3 10.3478 3 13C3 15.6522 4.05357 18.1957 5.92893 20.0711C7.8043 21.9464 10.3478 23 13 23C15.6522 23 18.1957 21.9464 20.0711 20.0711C21.9464 18.1957 23 15.6522 23 13C23 10.3478 21.9464 7.8043 20.0711 5.92893C18.1957 4.05357 15.6522 3 13 3ZM13 5.5C13.3062 5.50004 13.6017 5.61244 13.8305 5.81589C14.0593 6.01934 14.2054 6.29969 14.2413 6.60375L14.25 6.75V12.4825L17.6337 15.8663C17.8579 16.0912 17.9881 16.393 17.9978 16.7105C18.0075 17.0279 17.896 17.3371 17.6859 17.5753C17.4759 17.8136 17.1831 17.9629 16.8669 17.993C16.5508 18.0231 16.235 17.9318 15.9838 17.7375L15.8663 17.6337L12.1163 13.8837C11.922 13.6893 11.7972 13.4363 11.7612 13.1637L11.75 13V6.75C11.75 6.41848 11.8817 6.10054 12.1161 5.86612C12.3505 5.6317 12.6685 5.5 13 5.5Z" fill="#0FA958"/>
                                </svg></td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <mask id="mask0_127_2005" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="1" width="18" height="18">
                                    <path d="M2.91699 17.5H17.917" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.58398 11.1333V14.1667H7.63273L16.2507 5.545L13.2069 2.5L4.58398 11.1333Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                                </mask>
                                <g mask="url(#mask0_127_2005)">
                                    <path d="M0 0H20V20H0V0Z" fill="#0FA958"/>
                                </g>
                                </svg></td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Kandang 1 A</td>
                            <td>Vaksin ND</td>
                            <td>Rossa Lia</td>
                            <td>Vaksinator</td>
                            <td>Telah divaksin</td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path d="M13 0.5C19.9037 0.5 25.5 6.09625 25.5 13C25.5 19.9037 19.9037 25.5 13 25.5C6.09625 25.5 0.5 19.9037 0.5 13C0.5 6.09625 6.09625 0.5 13 0.5ZM13 3C10.3478 3 7.8043 4.05357 5.92893 5.92893C4.05357 7.8043 3 10.3478 3 13C3 15.6522 4.05357 18.1957 5.92893 20.0711C7.8043 21.9464 10.3478 23 13 23C15.6522 23 18.1957 21.9464 20.0711 20.0711C21.9464 18.1957 23 15.6522 23 13C23 10.3478 21.9464 7.8043 20.0711 5.92893C18.1957 4.05357 15.6522 3 13 3ZM13 5.5C13.3062 5.50004 13.6017 5.61244 13.8305 5.81589C14.0593 6.01934 14.2054 6.29969 14.2413 6.60375L14.25 6.75V12.4825L17.6337 15.8663C17.8579 16.0912 17.9881 16.393 17.9978 16.7105C18.0075 17.0279 17.896 17.3371 17.6859 17.5753C17.4759 17.8136 17.1831 17.9629 16.8669 17.993C16.5508 18.0231 16.235 17.9318 15.9838 17.7375L15.8663 17.6337L12.1163 13.8837C11.922 13.6893 11.7972 13.4363 11.7612 13.1637L11.75 13V6.75C11.75 6.41848 11.8817 6.10054 12.1161 5.86612C12.3505 5.6317 12.6685 5.5 13 5.5Z" fill="#0FA958"/>
                                </svg></td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <mask id="mask0_127_2005" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="1" width="18" height="18">
                                    <path d="M2.91699 17.5H17.917" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.58398 11.1333V14.1667H7.63273L16.2507 5.545L13.2069 2.5L4.58398 11.1333Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                                </mask>
                                <g mask="url(#mask0_127_2005)">
                                    <path d="M0 0H20V20H0V0Z" fill="#0FA958"/>
                                </g>
                                </svg></td>
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

    
</script>