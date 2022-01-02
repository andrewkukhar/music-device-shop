(function () {
    const tabLink = document.querySelectorAll('.tab__link');
    const tabItems = document.querySelectorAll('.fsn-tabs__item');
    tabLink.forEach(function (item) {
      item.addEventListener("click", function () {
        let currentLink = item;
        let tabId = currentLink.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
  
        if (!currentLink.classList.contains('active')) {
          tabLink.forEach(function (item) {
            item.classList.remove('active');
          });
          tabItems.forEach(function (item) {
            item.classList.remove('active');
          });
          currentLink.classList.add('active');
          currentTab.classList.add('active');
        }
      });
    });
    document.querySelector('.tab__link').click();
  })();