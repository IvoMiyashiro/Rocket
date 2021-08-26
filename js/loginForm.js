document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.querySelector('.login-form');
    const loginFormError = document.querySelector('.login-form-error-container');
    const emailInput = document.getElementById('login-form-input-email');
    const passwordInput = document.getElementById('login-form-input-password');
    const validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if ( !validEmail.test( emailInput.value ) || emailInput.value === "" || passwordInput.value === "" ) {
            loginFormError.style.display = 'block';
        } else {
            loginFormError.style.display = 'none';
            document.querySelector('.login-form-button').innerHTML = `<div class="spinner"></div>`;

            setTimeout( async() => {
                loginForm.reset();
            }, 3000);
        }
    });

});