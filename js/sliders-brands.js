(function () {
  $(document).ready(function () {
    $('.slider-brands').slick({
      arrows: true,
      dots: false,
      adaptiveHeight: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      speed: 700,
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
          breakpoint: 1068,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ],
    });
  });
})();