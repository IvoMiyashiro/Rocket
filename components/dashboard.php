<body>
    <section class="dashboard">
        <?php include_once '../../components/dashboardNavbar.php' ?>
        <section class="dashboard-home">
            <section class="dashboard-head">
                <h1 class="dashboard-title gradient-1"> Dashboard </h1>
                <a href="settings.html">
                    <div class="dashboard-image-container">
                        <svg class="dashboard-user-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" class="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                        </svg>
                        <p class="dashboard-user-name"> <?php echo $_SESSION['name'] ?></p>
                    </div>
                </a>
            </section>
            <section class="dashboard-cards-section">
                <a href="orders.html">
                    <div class="dashboard-card-1">
                        <svg class="dashboard-card-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exchange-alt" class="svg-inline--fa fa-exchange-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"></path>
                        </svg>
                        <h3 class="dashboard-card-title"> Ventas totales </h3>
                        <h1 class="dashboard-card-data"> 300 </h1>
                    </div>
                </a>
                <a href="pubs.html">
                    <div class="dashboard-card-2">
                        <svg class="dashboard-card-icon" aria-hidden="true" focusable="false" data-prefix="far" data-icon="window-restore" class="svg-inline--fa fa-window-restore fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M464 0H144c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-96 464H48V256h320v208zm96-96h-48V144c0-26.5-21.5-48-48-48H144V48h320v320z"></path>
                        </svg>
                        <h3 class="dashboard-card-title"> Publicaciones totales </h3>
                        <h1 class="dashboard-card-data"> 300 </h1>
                    </div>
                </a>
                <a href="create-pub.html">
                    <div class="dashboard-card-3">
                        <svg class="dashboard-card-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                        <h3 class="dashboard-card-title dashboard-card-3-title"> Agregar <br> nueva publicación </h3>
                    </div>
                </a>
            </section>
            <section class="dashboard-table-section">
                <h3 class="dashboard-table-title"> Últimas Ventas </h1>
                    <section class="dashboard-state-info-section">
                        <div class="dashboard-state-info">
                            <div class="dashboard-table-state-delivered"></div>
                            Enviado
                        </div>
                        <div class="dashboard-state-info">
                            <div class="dashboard-table-state-pending"></div>
                            Pendiente
                        </div>
                    </section>
                    <table class="dashboard-table">
                        <thead class="dashboard-table-header">
                            <th class="dashboard-table-orders-col"> Órden </th>
                            <th class="dashboard-table-product-col"> Producto </th>
                            <th class="dashboard-table-price-col"> Precio </th>
                            <th class="dashboard-table-quantity-col"> Cantidad </th>
                            <th class="dashboard-table-state-col"> Estado </th>
                            <th class="dashboard-table-date-col"> Fecha </th>
                        </thead>
                        <tbody class="dashboard-table-body">
                            <tr class="dashboard-table-row">
                                <td class="dashboard-table-orders-cell"><a href="order.html"> 12345678 </a> </td>
                                <td class="dashboard-table-orders-cell"><a href="pub.html"> iPhone 11 | 32 GB | Black </a></td>
                                <td class="dashboard-table-orders-cell"> 6000$ </td>
                                <td> 2 </td>
                                <td class="table-status">
                                    <div class="dashboard-table-state-delivered"></div>
                                </td>
                                <td> 27 Ago. 2021 </td>
                            </tr>
                            <tr class="dashboard-table-row">
                                <td class="dashboard-table-orders-cell"><a href="order.html"> 12345678 </a> </td>
                                <td class="dashboard-table-orders-cell"><a href="pub.html"> iPhone 11 | 32 GB | Black </a></td>
                                <td class="dashboard-table-orders-cell"> 6000$ </td>
                                <td> 2 </td>
                                <td class="table-status">
                                    <div class="dashboard-table-state-delivered"></div>
                                </td>
                                <td> 27 Ago. 2021 </td>
                            </tr>
                            <tr class="dashboard-table-row">
                                <td class="dashboard-table-orders-cell"><a href="order.html"> 12345678 </a> </td>
                                <td class="dashboard-table-orders-cell"><a href="pub.html"> iPhone 11 | 32 GB | Black </a></td>
                                <td class="dashboard-table-orders-cell"> 6000$ </td>
                                <td> 2 </td>
                                <td class="table-status">
                                    <div class="dashboard-table-state-delivered"></div>
                                </td>
                                <td> 27 Ago. 2021 </td>
                            </tr>
                            <tr class="dashboard-table-row">
                                <td class="dashboard-table-orders-cell"><a href="order.html"> 12345678 </a> </td>
                                <td class="dashboard-table-orders-cell"><a href="pub.html"> iPhone 11 | 32 GB | Black </a></td>
                                <td class="dashboard-table-orders-cell"> 6000$ </td>
                                <td> 2 </td>
                                <td class="table-status">
                                    <div class="dashboard-table-state-delivered"></div>
                                </td>
                                <td> 27 Ago. 2021 </td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="orders.html" class="dashboard-see-all gradient-3"> Ver todos </a>
            </section>
        </section>
    </section>
</body>