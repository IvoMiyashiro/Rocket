document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('.signup-form');
    const inputForm = document.querySelectorAll('.checkout-form-input');

    const regEx = {
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        address: /[A-Za-z0-9'\.\-\s\,]{1,40}$/,
        dpto: /[A-Za-z0-9'\.\-\s\,]{1,40}$/,
        provincia: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        localidad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        cp: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        telefono: /^\d{7,14}$/,
        password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{6,}$/,
    }

    const formErrors = {
        name: false,
        email: false,
        address: false,
        dpto: false,
        provincia: false,
        localidad: false,
        cp: false,
        telefono: false,
        password: false,
    }

    const handleFormValidation = ( e ) => {
        const input = e.target;
        switch ( input.name ) {
            case 'name':
                inputValidation( regEx.name, input.name, input.value, '*El nombre no es válido.');
                break;
            case 'email':
                inputValidation( regEx.email, input.name, input.value, '*El email no es válido.');
                break;
            case 'address':
                inputValidation( regEx.address, input.name, input.value, '*La dirección no es válida.');
                break;
            case 'dpto':
                inputValidation( regEx.dpto, input.name, input.value, '*El campo no es válido.');
                break;
            case 'provincia':
                selectValidation( input.name, input.value, '*Selecciona una opción.');
                break;
            case 'localidad':
                inputValidation( regEx.localidad, input.name, input.value, '*La localidad no válida.');
                break;
            case 'cp':
                inputValidation( regEx.cp, input.name, input.value, '*El código postal no es válido.');
                break;
            case 'telefono':
                inputValidation( regEx.telefono, input.name, input.value, '*El número de telefono no es válido.');
                break;
            case 'password1':
                inputValidation( regEx.password, input.name, input.value, '*Al menos 6 caracteres y 1 número.');
                passwordValidation();
                break;
            case 'password2':
                passwordValidation();
                break;
            default:
                return;
        }
    }

    const inputValidation = ( regEx, inputName, inputValue, message ) => {
        if ( regEx.test( inputValue ) ) {
            document.getElementById(`${ inputName }-error`).innerText = '';
            document.getElementById(`${ inputName }-input`).classList.remove( 'checkout-input-error' );
            formErrors[ inputName ] = true;
        } else {
            document.getElementById(`${ inputName }-error`).innerText = message;
            document.getElementById(`${ inputName }-input`).classList.add( 'checkout-input-error' );
            formErrors[ inputName ] = false;
        }
    }

    const selectValidation = ( inputName, value, message ) => {
        if ( value !== "" ) {
            document.getElementById(`${ inputName }-error`).innerText = '';
            document.getElementById(`${ inputName }-select`).classList.remove( 'checkout-input-error' );
            formErrors[ inputName ] = true;
        } else {
            document.getElementById(`${ inputName }-select`).classList.add( 'checkout-input-error' );
            document.getElementById(`${ inputName }-error`).innerText = message;
            formErrors[ inputName ] = false;
        }
    }

    const passwordValidation = () => {
        const inputPassword1 = document.getElementById('password1-input');
	    const inputPassword2 = document.getElementById('password2-input');

        if( inputPassword1.value !== inputPassword2.value ) {
            document.getElementById(`password2-input`).classList.add('checkout-input-error');
            document.getElementById('password2-error').innerText = '*Las contraseñas deben ser iguales.';
            formErrors[ 'password' ] = false;
        } else {
            document.getElementById(`password2-input`).classList.remove('checkout-input-error');
            document.getElementById('password2-error').innerText = '';
            formErrors[ 'password' ] = true;
            console.log(formErrors.password)
        }
    }

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if ( formErrors.name && formErrors.email && formErrors.password && formErrors.address && formErrors.dpto && formErrors.provincia && formErrors.localidad && formErrors.cp && formErrors.telefono ) {
            document.querySelector('.dashboard-signup-form-error-container').style.display = 'none';
            document.querySelector('.signup-form-button').innerHTML = `<div class="spinner"></div>`
            document.querySelector('.signup-form-button').disabled = true
            setTimeout( async() => {
                checkoutForm.reset();
            }, 3000);
        } else {
            document.querySelector('.dashboard-signup-form-error-container').style.display = 'block';
        }
    });

    inputForm.forEach(( input ) => {
        input.addEventListener('keyup', handleFormValidation );
        input.addEventListener('blur', handleFormValidation );
        input.addEventListener('change', handleFormValidation );
    });
});