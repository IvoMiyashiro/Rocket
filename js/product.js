document.addEventListener('DOMContentLoaded', () => {

    const main_img = document.querySelector('#product-img-container');
    const img_1 = document.querySelector('#img-1');
    const img_2 = document.querySelector('#img-2');
    const img_3 = document.querySelector('#img-3');

    img_1.addEventListener('click', () => {
        const url = img_1.src;
        main_img.innerHTML = `
            <img src=${ url } class="product-main-img" />
        `;
    });

    img_2.addEventListener('click', () => {
        const url = img_2.src;
        main_img.innerHTML = `
            <img src=${ url } class="product-main-img" />
        `;
    });

    img_3.addEventListener('click', () => {
        const url = img_3.src;
        main_img.innerHTML = `
            <img src=${ url } class="product-main-img" />
        `;
    });

});