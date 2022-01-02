(async function () {
    const response = await fetch('our-customers.json');
    const products = await response.json();

    function renderProducts(products) {
        const productsContainer = document.querySelector('.slider');
        for (const product of products) {
            productsContainer.innerHTML +=
                `<div class="slider__item">
                <img src="${product.image}"
                    alt="our-customers-one">
                <h3>${product.name}</h3>
                <p>${product.text}</p>
                <span>${product.data}</span>
                </div>`
                ;
        }
    }
    renderProducts(products);
    $(document).ready(function () {
        $('.slider').slick({
            arrows: true,
            dots: false,
            adaptiveHeight: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            easing: 'linear',
            infinite: true,
            initialSlide: 1,
            autoplay: false,
            autoplaySpeed: 1500,
            pauseOnFocus: true,
            pauseOnHover: true,
            pauseOnDotsHover: true,
            rows: 1,
            slidesPerRows: 1,
            responsive: [
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ],
        });
    });
})();