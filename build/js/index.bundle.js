/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger");
  const menu = document.getElementById("mobileMenu");
  const searchBtns = document.querySelectorAll(".header__search"); // ← NEW

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    const opened = menu.classList.toggle("open");

    /* блокировка прокрутки */
    document.body.classList.toggle("no-scroll", opened);

    /* скрыть / показать все иконки поиска */
    searchBtns.forEach((btn) => {
      btn.style.display = opened ? "none" : "";
    });
  });
});
//.
// ////////////////////////////////////////////////////////////////////////////////////////////////////

// JavaScript для фиксированного хедера
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const body = document.body;
  let headerHeight = header.offsetHeight;

  // Функция для обновления высоты хедера (на случай изменения размеров)
  function updateHeaderHeight() {
    headerHeight = header.offsetHeight;
  }

  // Обработчик скролла
  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Порог скролла (когда хедер становится фиксированным)
    const scrollThreshold = 0; // Можете изменить это значение

    if (scrollTop > scrollThreshold) {
      if (!header.classList.contains("header--fixed")) {
        header.classList.add("header--fixed");
        body.classList.add("header-fixed");
        // Устанавливаем правильный отступ для body
        body.style.paddingTop = headerHeight + "px";
      }
    } else {
      if (header.classList.contains("header--fixed")) {
        header.classList.remove("header--fixed");
        body.classList.remove("header-fixed");
        body.style.paddingTop = "0";
      }
    }
  }

  // Добавляем обработчик события скролла
  window.addEventListener("scroll", handleScroll);

  // Обновляем высоту хедера при изменении размера окна
  window.addEventListener("resize", updateHeaderHeight);

  // Инициализируем начальную высоту
  updateHeaderHeight();
});

// ////////////////////////////////////////////////////////////////////////////////////////////////////

function switchTab(tabButton, category) {
  // Убираем активный класс со всех табов
  const allTabs = document.querySelectorAll(".catalog__tab");
  allTabs.forEach((tab) => tab.classList.remove("catalog-active"));

  // Добавляем активный класс к нажатому табу
  tabButton.classList.add("catalog-active");

  // Получаем все карточки товаров
  const allProducts = document.querySelectorAll(".catalog__product-card");

  // Показываем/скрываем товары в зависимости от выбранной категории
  let visibleCount = 0;
  allProducts.forEach((product) => {
    const productCategories = product.getAttribute("data-category");

    if (
      category === "all" ||
      (productCategories && productCategories.includes(category))
    ) {
      if (visibleCount < 8) {
        product.style.display = "block";
        visibleCount++;
      } else {
        product.style.display = "none";
      }
    } else {
      product.style.display = "none";
    }
  });
}

// Добавляем обработчики событий после загрузки DOM
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".catalog__tab");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      switchTab(this, category);
    });
  });
});

// /////////////////////////////////////////////////////////

$(document).ready(function () {
  console.log("jQuery работает!");

  // При клике на миниатюру меняем основное изображение
  $(".thumbnail").on("click", function (e) {
    e.preventDefault();

    var newSrc = $(this).attr("href"); // Получаем ссылку на новое изображение
    var mainImage = $("#main-image img"); // Находим основное изображение

    // Заменяем источник основного изображения
    mainImage.attr("src", newSrc);
  });

  // Инициализируем Fancybox для всей галереи
  $('[data-fancybox="gallery"]').fancybox({
    // Дополнительные параметры можно настроить здесь
  });
});

// /////////////////////////////////////////////////////////

document
  .querySelector(".product-info__plus")
  .addEventListener("click", function () {
    let quantityInput = document.querySelector(".product-info__quantity");
    quantityInput.value = parseInt(quantityInput.value) + 1;
  });

document
  .querySelector(".product-info__minus")
  .addEventListener("click", function () {
    let quantityInput = document.querySelector(".product-info__quantity");
    if (parseInt(quantityInput.value) > 1) {
      quantityInput.value = parseInt(quantityInput.value) - 1;
    }
  });
// //////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const property = document.querySelector(".property");
  const content = document.getElementById("content");
  const expandText = document.getElementById("expandText");
  const spanchik = document.querySelector(".property__spanchik");

  // Обработчик события для раскрытия контента
  property.addEventListener("click", function () {
    if (content.classList.contains("expanded")) {
      content.classList.remove("expanded");
      spanchik.classList.remove("expanded");
      property.classList.remove("expanded");
      expandText.textContent = "Развернуть";
    } else {
      content.classList.add("expanded");
      spanchik.classList.add("expanded");
      property.classList.add("expanded");
      expandText.textContent = "Скрыть";
    }
  });
});

/******/ })()
;