import "../component/container/banner-slider.js";
import "../component/container/category-list.js";
import "../component/container/text-list.js";
import "../component/learn-item.js";
import "../component/container/area-list.js";
import { banners, about, learns, meals } from "../data/data-app.js";
import List from "../component/container/list.js";

const main = () => {
  const baseUrl = "https://www.themealdb.com/api/json/v1/1";

  const getCategoryMeal = async () => {
    try {
      const response = await fetch(`${baseUrl}/categories.php`);
      const responseJson = await response.json();
      renderAllCategoryMeals(responseJson.categories);
    } catch (message) {
      showResponeMessage(message);
    }
  };

  const getIngredientsCategory = async () => {
    try {
      const response = await fetch(`${baseUrl}/list.php?i=list`);
      const responseJson = await response.json();
      renderIngredients(responseJson.meals);
    } catch (message) {
      showResponeMessage(message);
    }
  };

  const renderAllCategoryMeals = categories => {
    const categoryListElement = document.querySelector("category-list");
    categoryListElement.categories = categories;

    $("category-list").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  };

  const renderIngredients = meals => {
    const ingredientListElement = document.querySelector("#ingredientList");
    ingredientListElement.innerHTML = "<h1>Ingredients Category</h1>";

    meals.forEach(meal => {
      ingredientListElement.innerHTML += `
      <div id="ingredientItem" class="col s12 m4 l3">
        <p>${meal.strIngredient}</p>
      </div>
      `;
    });

    const ingredientItemElement = document.querySelectorAll("#ingredientItem");

    for (let i = 0; i < ingredientItemElement.length; i++) {
      ingredientItemElement[i].style.display = "none";
    }

    for (let i = 0; i < 40; i++) {
      ingredientItemElement[i].style.display = "block";
    }
  };

  const showResponeMessage = (message = "Check Your Connection") => {
    alert(message);
  };

  const bannerSliderElement = document.querySelector("banner-slider");
  bannerSliderElement.banners = banners;

  $("banner-slider").slick({
    dots: true,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });

  const textList = new List("#textList", "text-item", "", about);
  textList.renderItems();
  textList.renderMore();

  if ($("text-item").length > 2) {
    $("text-item:gt(0)").hide();
    $(".show-more").show();
  }

  $(".show-more").on("click", function() {
    $("text-item:gt(0)").toggle();
    $(this).text() === "Show more"
      ? $(this).text("Show less")
      : $(this).text("Show more");
  });

  const learnList = new List("#learnList", "learn-item", "Why Cooking", learns);
  learnList.renderTitle();
  learnList.renderItems();

  const areaListElement = document.querySelector("area-list");
  areaListElement.meals = meals;

  $(function() {
    //
    //  get num of item and compute num of pages
    //
    var nItem = $("area-item").length;
    var nPages = Math.ceil(nItem / $(".pagination").data("page-size"));
    //
    // save num pages as a data attribute of pagination element
    //
    $(".pagination").data("num-pages", nPages);
    //
    // Create the buttons on the fly
    //
    for (var i = 1; i < nPages; i++) {
      $("<li/>")
        .append($("<a/>", { href: "#", text: i + 1 }))
        .insertBefore(".pagination li:has([rel]):last");
    }
    //
    // handle pagination
    //
    $(".pagination li").on("click", function(e) {
      //
      // prevent default action
      //
      e.preventDefault();

      //
      // The clicked element is the next one......
      //
      var clickedElement = $(this);
      var nextElement = clickedElement;

      //
      // ....if the clicked element is Next or Prev buttons
      //
      var nextPrevAnchorElement = clickedElement.find("a[rel]");
      if (nextPrevAnchorElement.length == 1) {
        //
        // compute the next element
        //
        if (nextPrevAnchorElement.text().trim() == "Next") {
          nextElement = $(".pagination li.active").next("li:not(:has([rel]))");
          if (nextElement.length == 0) {
            nextElement = $(".pagination li:not(:has([rel])):first");
          }
        } else {
          nextElement = $(".pagination li.active").prev("li:not(:has([rel]))");
          if (nextElement.length == 0) {
            nextElement = $(".pagination li:not(:has([rel])):last");
          }
        }
      }
      //
      // toggle active page
      //
      $(".pagination li.active").removeClass("active");
      nextElement.addClass("active");

      //
      // get the number of active page
      //
      var currentPageNumber =
        +nextElement
          .find("a")
          .text()
          .trim() - 1;

      //
      // get the page size
      //
      var pageSize = +$(".pagination").data("page-size");
      //
      // toggle visibility
      //
      $("area-item:visible").toggle(false);
      $("area-item")
        .slice(currentPageNumber * pageSize, (currentPageNumber + 1) * pageSize)
        .toggle(true);
    });
    //
    // show the active page
    //
    $(".pagination li.active a").trigger("click");
  });

  //using class List
  getCategoryMeal();
  getIngredientsCategory();
};

export default main;
