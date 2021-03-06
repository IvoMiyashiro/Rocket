<body>
   <div class="login-form-section">
      <img src="../../assets/images/backgroung.jpg" alt="gradient" class="login-background">
      <form class="signup-form">
         <section class="signup-form-section">
            <a href="index.html">
               <svg class="logo-icon login-logo-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rocket" class="svg-inline--fa fa-rocket fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z">
                  </path>
               </svg>
            </a>
            <h1 class="login-form-title"> Sign Up </h1>
            <section class="signup-form-user-section">
               <div class="checkout-form-control">
                  <label for="name" class="checkout-form-label"> Nombre Completo * </label>
                  <input type="text" class="checkout-form-input" name="name" autocomplete="off" id="name-input" />
                  <small class="checkout-form-error" id="name-error"></small>
               </div>
               <div class="checkout-form-control">
                  <label for="name" class="checkout-form-label"> Email * </label>
                  <input type="email" class="checkout-form-input" name="email" autocomplete="off" id="email-input" />
                  <small class="checkout-form-error" id="email-error"></small>
               </div>
               <div class="checkout-form-control">
                  <label for="name" class="checkout-form-label"> Contrase??a * </label>
                  <input type="password" class="checkout-form-input" name="password1" autocomplete="off" id="password1-input" />
                  <small class="checkout-form-error" id="password1-error"></small>
               </div>
               <div class="checkout-form-control">
                  <label for="name" class="checkout-form-label"> Repetir Contrase??a * </label>
                  <input type="password" class="checkout-form-input" name="password2" autocomplete="off" id="password2-input" />
                  <small class="checkout-form-error" id="password2-error"></small>
               </div>
            </section>
         </section>
         <section class="signup-form-section">
            <h1 class="login-form-title signup-form-subtitle"> Informaci??n Adicional </h1>
            <section class="signup-form-info-section">
               <section class="checkout-form-section">
                  <div class="checkout-form-control">
                     <label for="name" class="checkout-form-label "> Direcci??n * </label>
                     <input type="text" class="checkout-form-input checkout-address-input" name="address" autocomplete="off" id="address-input" />
                     <small class="checkout-form-error" id="address-error"></small>
                  </div>
                  <div class="checkout-form-control">
                     <label for="name" class="checkout-form-label "> Dpto. * </label>
                     <input type="text" class="checkout-form-input checkout-dpto-input" name="dpto" autocomplete="off" id="dpto-input" />
                     <small class="checkout-form-error" id="dpto-error"></small>
                  </div>
               </section>
               <section class="checkout-form-section">
                  <div class="checkout-form-control">
                     <label for="name" class="checkout-form-label"> Provincia * </label>
                     <select name="province" class="checkout-form-input checkout-form-select" id="province-select">
                        <option value=""> Seleccionar </option>
                        <option value="Buenos Aires">Buenos Aires</option>
                        <option value="Buenos Aires Capital"> Ciudad Aut??noma de Buenos Aires </option>
                        <option value="Catamarca">Catamarca</option>
                        <option value="Chaco">Chaco</option>
                        <option value="Chubut">Chubut</option>
                        <option value="Cordoba">Cordoba</option>
                        <option value="Corrientes">Corrientes</option>
                        <option value="Entre Rios">Entre Rios</option>
                        <option value="Formosa">Formosa</option>
                        <option value="Jujuy">Jujuy</option>
                        <option value="La Pampa">La Pampa</option>
                        <option value="La Rioja">La Rioja</option>
                        <option value="Mendoza">Mendoza</option>
                        <option value="Misiones">Misiones</option>
                        <option value="Neuquen">Neuquen</option>
                        <option value="Rio Negro">Rio Negro</option>
                        <option value="Salta">Salta</option>
                        <option value="San Juan">San Juan</option>
                        <option value="San Luis">San Luis</option>
                        <option value="Santa Cruz">Santa Cruz</option>
                        <option value="Santa Fe">Santa Fe</option>
                        <option value="Santiago del Estero">Santiago del Estero</option>
                        <option value="Tierra del Fuego">Tierra del Fuego</option>
                        <option value="Tucuman">Tucuman</option>
                     </select>
                     <small class="checkout-form-error" id="province-error"></small>
                  </div>
                  <div class="checkout-form-control">
                     <label for="name" class="checkout-form-label"> Localidad * </label>
                     <input type="text" class="checkout-form-input" name="locality" autocomplete="off" id="locality-input" />
                     <small class="checkout-form-error" id="locality-error"></small>
                  </div>
               </section>
               <section class="checkout-form-section">
                  <div class="checkout-form-control">
                     <label for="name" class="checkout-form-label"> Codigo Postal * </label>
                     <input type="text" class="checkout-form-input checkout-dpto-input" name="zip" autocomplete="off" id="zip-input" />
                     <small class="checkout-form-error" id="zip-error"></small>
                  </div>
                  <div class="checkout-form-control">
                     <label for="phone" class="checkout-form-label"> N??mero de Tel??fono * </label>
                     <input type="text" class="checkout-form-input checkout-address-input" name="phone" autocomplete="off" id="phone-input" />
                     <small class="checkout-form-error" id="phone-error"></small>
                  </div>
               </section>
            </section>
            <div class="signup-form-error-container">
               <p class="signup-form-error"> Revisar los campos incorrectos. </p>
            </div>
            <div class="signup-button-container">
               <button type="submit" class="btnGradientOrange signup-form-button"> Sign Up </button>
               <a href="../login" class="login-form-create-account"> Ya tengo una cuenta </a>
            </div>
         </section>
      </form>
   </div>
</body>