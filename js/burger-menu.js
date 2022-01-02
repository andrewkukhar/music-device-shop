(function () {
    const iconBurger = document.querySelector("section nav .header_navigation-burger");
    const navigationsBody = document.querySelector("section nav .header_navigation-wrap");
    iconBurger.addEventListener("click", function (e) {
      document.body.classList.toggle("_lock");
      iconBurger.classList.toggle("active");
      navigationsBody.classList.toggle("active");
    });
  })();
  