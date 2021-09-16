document.addEventListener('DOMContentLoaded', () => {

    /* Navbar Cart */

    const openCartButton = document.querySelector("#cart-open");
    const closeCartButton = document.querySelector("#cart-close");
    const sideCart = document.querySelector("#side-cart");

    openCartButton.addEventListener('click', () => {
        sideCart.style.width === "375px"
            ? sideCart.style.width = "0"
            : sideCart.style.width = "375px"
    });

    closeCartButton.addEventListener('click', () => {
        sideCart.style.width = "0px";
    });

    /* Navbar Cart */

    /* Fade Animation */

    window.addEventListener('scroll', () => {
        const title = document.querySelectorAll('.section-title');

        for ( let i = 0; i < title.length; i++ ) {
            
            const windowheight = window.innerHeight;
            const fadeTitle = title[i].getBoundingClientRect().top;
            const revealPoint = 150;
    
            if ( fadeTitle < windowheight - revealPoint ) {
                title[i].classList.add('fade-bottom-animation');
            }
        }
    })

    /* Fade Animation */

});