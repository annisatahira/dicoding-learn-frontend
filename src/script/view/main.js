import "../component/category-item.js";
import "../component/banner-item.js";
import "../component/text-item.js";
import "../component/learn-item.js";
import "../component/area-item.js";
import "../component/video-item.js";
import "../component/ingredient-item.js";
import "../component/testimoni-item.js";
import {
  banners,
  about,
  learns,
  areas,
  testimonials,
  videos
} from "../data/data-app.js";

import List from "../component/container/list.js";
import TitleList from "../component/container/list-w-title.js";
import PassValue from "./pass-value.js";

const main = () => {
  const baseUrl = "https://www.themealdb.com/api/json/v1/1";

  const getCategoryMeal = async () => {
    try {
      const response = await fetch(`${baseUrl}/categories.php`);
      const responseJson = await response.json();
      await renderAllCategoryMeals(responseJson.categories);
      await slick();
      // changeList();
    } catch (message) {
      showResponeMessage(message);
    }
  };

  const getIngredientsCategory = async () => {
    try {
      const response = await fetch(`${baseUrl}/list.php?i=list`);
      const responseJson = await response.json();
      await renderIngredients(responseJson.meals);
      // changeList();
    } catch (message) {
      showResponeMessage(message);
    }
  };

  const categoryTitle = document.querySelector("#categoryTitle");
  const title = document.createElement("h1");
  title.innerHTML = `Meal Categories`;
  categoryTitle.appendChild(title);

  const renderAllCategoryMeals = categories => {
    const categoryList = new List("#categoryList", "category-item", categories);
    categoryList.renderItems();
  };

  const slick = () => {
    $("#categoryList").slick({
      slidesToShow: 5,
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
    const IngredientList = new TitleList(
      "#ingredientList",
      "ingredient-item",
      meals,
      "Ingedient Category"
    );
    IngredientList.renderItems();

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

  const bannerList = new List("#banner", "banner-item", banners);
  bannerList.renderItems();

  $("#banner").slick({
    dots: true,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });

  const textList = new List("#textList", "text-item", about);
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

  const learnList = new TitleList(
    "#learnList",
    "learn-item",
    learns,
    "Why Cooking"
  );
  learnList.renderItems();

  const getAreaList = async () => {
    try {
      const areaList = await new TitleList(
        "#areaList",
        "area-item",
        areas,
        "Area Categories"
      );
      await areaList.renderItems();
      await pagination();
      changeListArea();
    } catch (message) {
      showResponeMessage(message);
    }
  };

  const pagination = () => {
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
  };

  const TestimoniTitle = document.querySelector("#testimoniTitle");
  const tTitle = document.createElement("h1");
  tTitle.innerHTML = `Testimonials`;
  TestimoniTitle.appendChild(tTitle);

  const testimoniList = new List(
    "#testimoniList",
    "testimoni-item",
    testimonials
  );

  testimoniList.renderItems();

  $("#testimoniList").slick({
    dots: true,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true
  });

  const videoList = new TitleList(
    "#videoList",
    "video-item",
    videos,
    "Cooking Video"
  );
  videoList.renderItems();

  const changeListArea = () => {
    $(".changeList").click(function() {
      const index = $(".changeList").index(this);
      let element = document.querySelectorAll(".textValue");
      let value = element[index].innerHTML;
      let listArea = `a=${value}`;
      localStorage.setItem("data", listArea);
      $(location).attr("href", "list-page.html");
    });
  };

  // const areaListChange = new PassValue("a");

  getCategoryMeal();
  getIngredientsCategory();
  getAreaList();
};

export default main;
