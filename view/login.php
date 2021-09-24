<?php

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/styles.css" >
    <script type="text/javascript" src="../js/loginForm.js"></script>
    <title> Login | Rocket </title>
</head>
<body>
    <section class="login-form-section">
        <img src="../assets/images/backgroung.jpg" alt="gradient" class="login-background">
        <div class="login-form-container">
            <form action="/" class="login-form">
                <a href="index.html">
                    <svg class="logo-icon login-logo-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rocket" class="svg-inline--fa fa-rocket fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"></path></svg>
                </a>
                <h1 class="login-form-title"> Login </h1>
                <section class="login-form-input-section">
                    <div class="login-form-control">
                        <label for="email" class="login-form-label"> Email </label>
                        <input
                            type="email"
                            name="email"
                            autocomplete="off"
                            class="login-form-input"
                            id="login-form-input-email"
                        />
                    </div>
                    <div class="login-form-control">
                        <label for="password" class="login-form-label"> Contraseña </label>
                        <input
                            type="password"
                            name="password"
                            class="login-form-input"
                            id="login-form-input-password"
                        />
                    </div>
                </section>
                <div class="login-form-error-container">
                    <p class="login-form-error"> El email y/o contraseña es incorrecta. </p>
                </div>
                <label for="remember-me" class="login-form-remember-me"> 
                    <input 
                        type="checkbox"
                        class="login-form-checkbox"
                        id="remember-me"
                    /> 
                    Recordarme 
                </label>
                <a href="signup.php" class="login-form-create-account"> Crear una cuenta nueva </a>
                <button class="login-form-button btnGradientOrange"> Login </button>
            </form>
        </div>
    </section>
</body>
</html>