document.addEventListener('DOMContentLoaded', () => {

   const loginForm = document.querySelector('.login-form');
   const loginFormError = document.querySelector('.login-form-error-container');
   const emailInput = document.getElementById('login-form-input-email');
   const passwordInput = document.getElementById('login-form-input-password');
   const validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

   loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validEmail.test(emailInput.value) || emailInput.value === "" || passwordInput.value === "") {
         loginFormError.style.display = 'block';
         document.querySelector('.login-form-button').innerText = `LOGIN `;
      } else {
         let formValues = {};
         loginFormError.style.display = 'none';

         formValues[emailInput.name] = emailInput.value;
         formValues[passwordInput.name] = passwordInput.value;
         postRequest(JSON.stringify(formValues));
      }
   });

   function postRequest(values) {
      xhr = new XMLHttpRequest();
      xhr.open('POST', '../../services/login.php', true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      xhr.onprogress = function () {
         loginFormError.style.display = 'none';
         document.querySelector('.login-form-button').innerHTML = `<div class="spinner"></div>`;
         document.querySelector('.login-form-button').disabled = true;
      }

      xhr.onload = function () {
         if (this.status == 200) {
            if (this.responseText === '1') {
               window.location.href = '../dashboard';
            } else {
               loginFormError.style.display = 'block';
               document.querySelector('.login-form-button').innerText = `LOGIN `;
               console.log(this.responseText);
            }
         } else if (this.status == 404) {
            loginFormError.style.display = 'block';
            document.querySelector('.login-form-button').innerText = `LOGIN `;
            console.log(this.responseText);
         }
      }

      xhr.send("values=" + values);
   }
});