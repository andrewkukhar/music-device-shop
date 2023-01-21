(function () {
    const iconBurger = document.querySelector(".header__nav-burger");
    const navigationsBody = document.querySelector(".header__nav-wrap");
    iconBurger.addEventListener("click", function (e) {
      document.body.classList.toggle("_lock");
      iconBurger.classList.toggle("active");
      navigationsBody.classList.toggle("active");
    });
  })();