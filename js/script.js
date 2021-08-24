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

});