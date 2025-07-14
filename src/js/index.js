document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger");
  const menu = document.getElementById("mobileMenu");
  const searchBtns = document.querySelectorAll(".header__search"); // ← NEW

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    const opened = menu.classList.toggle("open");


    document.body.classList.toggle("no-scroll", opened);


    searchBtns.forEach((btn) => {
      btn.style.display = opened ? "none" : "";
    });
  });
});
//.
// ////////////////////////////////////////////////////////////////////////////////////////////////////


document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const body = document.body;
  let headerHeight = header.offsetHeight;


  function updateHeaderHeight() {
    headerHeight = header.offsetHeight;
  }


  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;


    const scrollThreshold = 0; 

    if (scrollTop > scrollThreshold) {
      if (!header.classList.contains("header--fixed")) {
        header.classList.add("header--fixed");
        body.classList.add("header-fixed");

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


  window.addEventListener("scroll", handleScroll);


  window.addEventListener("resize", updateHeaderHeight);


  updateHeaderHeight();
});

// ////////////////////////////////////////////////////////////////////////////////////////////////////

function switchTab(tabButton, category) {

  const allTabs = document.querySelectorAll(".catalog__tab");
  allTabs.forEach((tab) => tab.classList.remove("catalog-active"));


  tabButton.classList.add("catalog-active");


  const allProducts = document.querySelectorAll(".catalog__product-card");


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


  $(".thumbnail").on("click", function (e) {
    e.preventDefault();

    var newSrc = $(this).attr("href");
    var mainImage = $("#main-image img"); 


    mainImage.attr("src", newSrc);
  });

 
  $('[data-fancybox="gallery"]').fancybox({
   
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
