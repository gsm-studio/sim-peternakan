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
                    <button class="btn btn-light bg-button-rossa">
                        9 November
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
                        <path d="M1 1L4 5L8 1" stroke="white"/>
                        </svg>
                        </button>
                        <p class="ms-3">View <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                        <path d="M1 1L5.5 7L10 1" stroke="#0FA958" stroke-width="2"/>
                    </svg></p>
                    <p class="ms-3">Semua kandang <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                        <path d="M1 1L5.5 7L10 1" stroke="#0FA958" stroke-width="2"/>
                    </svg></p>
                    </div>
                    <button class="btn btn-success bg-button-rossa">Download laporan</button>
                </div> 
                <div class="d-flex">
                    <p class="color-text-rossa">Sisa populasi ayam: <span class="text-secondary">300</span></p>
                    <p class="color-text-rossa ms-4">FC: <span class="text-secondary">7,4</span></p>
                    <p class="color-text-rossa ms-4">Standart FC: <span class="text-secondary">7,6</span></p>
                    <p class="color-text-rossa ms-4">Egg mass: <span class="text-secondary">11,7</span></p>
                </div>
                <div class="table-responsive mt-5">
                    <table class="table pelaporan table-bordered">
                    <thead>
                        <tr>
                        <th rowspan="2" scope="col">ID Kandang</th>
                        <th scope="col">Usia</th>
                        <th colspan="4" scope="col">Populasi</th>
                        <th colspan="2" scope="col">Produksi Telur</th>
                        <th colspan="2" scope="col">Berat Telur</th>
                        <th colspan="2" scope="col">Standart Produksi</th>
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">Kandang 1A</th>
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
                        
                        </tr>
                        <tr>
                        <th scope="row">Kandang 1A</th>
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
                        
                        </tr>
                        <tr>
                        <th scope="row">Kandang 1A</th>
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
                        
                        </tr>
                        <tr>
                        <th scope="row">Kandang 1A</th>
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
                        
                        </tr>
                        <tr>
                        <th scope="row">Kandang 1A</th>
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