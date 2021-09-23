document.addEventListener('DOMContentLoaded', () => {

    const signupForm = document.querySelector('.signup-form');
    const inputForm = document.querySelectorAll('.checkout-form-input');
    const imageContainer = document.querySelectorAll('.dashboard-create-pub-img');
    const inputImage = document.querySelectorAll('.dashboard-create-pub-input-img');
    const selectImgBtn = document.querySelectorAll('.select-img-button');
    const image = document.querySelectorAll('.create-pub-img-container');
    const img = document.querySelectorAll('.create-pub-img');
    const removeImg = document.querySelectorAll('.create-pub-delete-img');

    regEx = {
        titulo: /^[A-Za-zÀ-ÿ0-9\s\-_,\.;:()|]{5,40}$/,
        desc: /^[A-Za-zÀ-ÿ0-9\s\-_,\.;:()|]{10,200}$/,
    };

    const formErrors = {
        titulo: false,
        marca: false,
        categoria: false,
        color: false,
        desc: false,
    };

    const validExtensions = ['jpg', 'jpeg', 'png'];

    const handleFormValidation = ( e ) => {
        const input = e.target;
        switch ( input.name ) {
            case 'titulo':
                inputValidation( regEx.titulo, input.name, input.value, '*El título no es válido.');
                break;
            case 'desc':
                inputValidation( regEx.desc, input.name, input.value, '*La descripción no es válida.');
                break;
            case 'categoria':
                selectValidation( input.name, input.value, '*Selecciona una categoría.');
                break;
            case 'color':
                selectValidation( input.name, input.value, '*Selecciona un color.');
                break;
            case 'marca':
                selectValidation( input.name, input.value, '*Selecciona una marca.');
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

    for ( let i = 0; i < selectImgBtn.length; i++ ) {
        selectImgBtn[i].addEventListener('click', () => {
            inputImage[i].click();
            inputImage[i].addEventListener('change', function(e) {
                const file = this.files[0];
                const fileExtension = e.target.value.split('.');

                if ( file ) {
                    if ( !validExtensions.includes( fileExtension[1] )) {
                        document.getElementById(`img-error`).innerText = '*Archivo/s no válido/s.';
                        imageContainer[i].classList.add( 'checkout-input-error' );
                        formErrors[ inputName ] = true;
                    } else {
                        document.getElementById(`img-error`).innerText = '';
                        imageContainer[i].classList.remove( 'checkout-input-error' );

                        const reader = new FileReader();
                        reader.addEventListener('load', function() {
                            const result = reader.result;
                            img[i].src = result;
                            image[i].style.display = 'block';
                        });

                        removeImg[i].addEventListener('click', function() {
                            img[i].src = "";
                            image[i].style.display = 'none';
                        });

                        reader.readAsDataURL(file);
                        formErrors[ img ] = true;
                    }
                }

            });
        });
    };

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(formErrors)
        if ( formErrors.titulo && formErrors.marca && formErrors.categoria && formErrors.color && formErrors.desc ) {
            document.querySelector('.signup-form-error-container').style.display = 'none';
            document.querySelector('.create-pub-form-button').innerHTML = `<div class="spinner"></div>`
            document.querySelector('.create-pub-form-button').disabled = true
            setTimeout( async() => {
                signupForm.reset();
                window.location.href = "dashboard-pubs.html"
            }, 3000);
        } else {
            document.querySelector('.signup-form-error-container').style.display = 'block';
        }
    });

    inputForm.forEach(( input ) => {
        input.addEventListener('keyup', handleFormValidation);
        input.addEventListener('blur', handleFormValidation);
        input.addEventListener('change', handleFormValidation);
    });

});