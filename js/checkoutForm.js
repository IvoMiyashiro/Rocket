document.addEventListener('DOMContentLoaded', () => {
    
    const checkoutForm = document.querySelector('#checkout-form');
    const formInput = document.querySelectorAll('.checkout-form-input');

    const regEx = {
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        address: /[A-Za-z0-9'\.\-\s\,]{1,40}$/,
        dpto: /[A-Za-z0-9'\.\-\s\,]{1,40}$/,
        provincia: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        localidad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        cp: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        telefono: /^\d{7,14}$/,
    }

    const formErrors = {
        name: false,
        email: false,
        address: false,
        dpto: false,
        provincia: false,
        localidad: false,
        cp: false,
        // telefono: false,
    }

    const handleFormValidation = ( e ) => {
        const input = e.target;
        console.log( input.name )
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
            // case 'telefono':
            //     inputValidation( regEx.telefono, input.name, input.value, '*El telefono no es válido.');
            //     break;
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
        console.log( value )
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

    checkoutForm.addEventListener('submit', ( e ) => {
        e.preventDefault();
        console.log( formErrors )
        if ( formErrors.name && formErrors.email && formErrors.address && formErrors.dpto && formErrors.provincia && formErrors.localidad && formErrors.cp ) {
            document.querySelector('.checkout-form-error-box').style.display = 'none';
            document.querySelector('#submit-button').innerHTML = `<div class="spinner"></div>`
            document.querySelector('#submit-button').disabled = true
            setTimeout( async() => {
                document.querySelector('#submit-button').innerText = `Compra realizada`
                checkoutForm.reset();
            }, 3000);

            
        } else {
            document.querySelector('.checkout-form-error-box').style.display = 'block';
        }
    });

    formInput.forEach(( input ) => {
        input.addEventListener('keyup', handleFormValidation );
        input.addEventListener('blur', handleFormValidation );
        input.addEventListener('change', handleFormValidation );
    });


})