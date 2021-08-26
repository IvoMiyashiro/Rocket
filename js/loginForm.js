document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.querySelector('.login-form');
    const loginFormError = document.querySelector('.login-form-error-container');
    const emailInput = document.getElementById('login-form-input-email');
    const passwordInput = document.getElementById('login-form-input-password');
    const validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if ( !validEmail.test( emailInput.value ) || emailInput.value === "" || passwordInput.value === "" ) {
            document.querySelector('.login-form-button').innerHTML = `<div class="spinner"></div>`;
            setTimeout(() => {
                loginFormError.style.display = 'block';
                document.querySelector('.login-form-button').innerText = `LOGIN `;
            }, 2000);
        } else {
            loginFormError.style.display = 'none';
            document.querySelector('.login-form-button').innerHTML = `<div class="spinner"></div>`;

            setTimeout(() => {
                loginForm.reset();
            }, 2000);
        }
    });

});