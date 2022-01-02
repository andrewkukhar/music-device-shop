(function() {

    const slides = [
        '<div><img src="img/headphones/jbl-334wn.png"" alt="JBL 334WN"></div>',
        '<div><img src="img/headphones/airpulse-bb34.png" alt="AirPulse BB34"></div>',
        '<div><img src="img/headphones/bang-and-olufsen-f112.png" alt="Bang & Olufsen F112"></div>',
        '<div><img src="img/headphones/airpulse-rs45.png" alt="AirPulse RS45"></div>',
        '<div><img src="img/headphones/sony-tt56.png" alt="Sony TT56"></div>'
    ]

    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.main-headphones-carousel__slide')
        slideContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth > 600) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += slides[secondSlide];
            if (window.innerWidth > 1200) {
                const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
                slideContainer.innerHTML += slides[thirdSlide];
                const fourthSlide = thirdSlide + 1 >= slides.length ? 0 : thirdSlide + 1;
                slideContainer.innerHTML += slides[fourthSlide];
            }
        }
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        showCurrentSlide();
    }
    function prevSlide() {
        currentSlide = currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
        showCurrentSlide();
    }

    //setInterval(nextSlide, 1000);
    showCurrentSlide();

    document.querySelector('.main-headphones-carousel .forward').addEventListener('click', nextSlide);
    document.querySelector('.main-headphones-carousel .back').addEventListener('click', prevSlide);
    window.addEventListener('resize', showCurrentSlide);

})();