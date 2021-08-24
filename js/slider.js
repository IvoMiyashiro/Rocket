document.addEventListener('DOMContentLoaded', () => {
    /* Main Carousel */

    const mainCarouselSlide = document.querySelector('.main-carousel-container');
    const mainCarouselImage = document.querySelectorAll('.main-carousel-image');

    const prevBtn = document.querySelector('#main-carousel-prevBtn');
    const nextBtn = document.querySelector('#main-carousel-nextBtn');

    let counter = 1;
    const interval = 3000;
    const size = mainCarouselImage[0].clientWidth;

    mainCarouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    nextBtn.addEventListener('click', () => {
        if (counter >= mainCarouselImage.length - 1) return;
        mainCarouselSlide.style.transition = 'transform 0.2s ease-in-out';
        counter++;
        mainCarouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        mainCarouselSlide.style.transition = 'transform 0.2s ease-in-out';
        counter--;
        mainCarouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    mainCarouselSlide.addEventListener('transitionend', () => {
        if ( mainCarouselImage[ counter ].id === 'mainLastClone' ) {
            mainCarouselSlide.style.transition = 'none';
            counter = mainCarouselImage.length - 2;
            mainCarouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }

        if ( mainCarouselImage[ counter ].id === 'mainFirstClone' ) {
            mainCarouselSlide.style.transition = 'none';
            counter = mainCarouselImage.length - counter;
            mainCarouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    });

    let autoPlay = setInterval(() => {
        nextBtn.click();
    }, interval);

    mainCarouselSlide.addEventListener('mouseover', () => {
        clearInterval( autoPlay );
    });

    mainCarouselSlide.addEventListener('mouseout', () => {
        autoPlay = setInterval(() => {
            nextBtn.click();
        }, interval);
    });
    /* Main Carousel */
});