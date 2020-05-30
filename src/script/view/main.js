import "../component/container/banner-slider.js";
import "../component/container/category-list.js";
import "../component/container/text-list.js";
import "../component/container/learn-list.js";
import { banners, about, learns } from "../data/data-app.js";

const main = () => {
  const baseUrl = "https://www.themealdb.com/api/json/v1/1";

  const getCategoryMeal = async () => {
    try {
      const response = await fetch(`${baseUrl}/categories.php`);
      const responseJson = await response.json();
      if (responseJson.error) {
        showResponeMessage(responseJson.message);
      } else {
        renderAllCategoryMeals(responseJson.categories);
      }
    } catch (error) {
      showResponeMessage(error);
    }
  };

  const getIngredientsCategory = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
      );
      const responseJson = await response.json();
      if (responseJson.error) {
        showResponeMessage(responseJson.message);
      } else {
        renderIngredients(responseJson.meals);
      }
    } catch (error) {
      showResponeMessage(error);
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
    ingredientListElement.innerHTML = "";

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

  const textListElement = document.querySelector("text-list");
  textListElement.texts = about;

  if ($("text-item").length > 2) {
    $("text-item:gt(0)").hide();
    $(".show-more").show();
  }

  $(".show-more").on("click", function() {
    //toggle elements with class text-item that their index is bigger than 2
    $("text-item:gt(0)").toggle();
    //change text of show more element just for demonstration purposes to this demo
    $(this).text() === "Show more"
      ? $(this).text("Show less")
      : $(this).text("Show more");
  });

  const learnListElement = document.querySelector("learn-list");
  learnListElement.learns = learns;

  getCategoryMeal();
  getIngredientsCategory();
};

export default main;
