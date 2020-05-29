import "../component/container/banner-slider.js";
import "../component/container/category-list.js";
import banners from "../data/data-banner.js";

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

  const renderAllCategoryMeals = categories => {
    const categoryListElement = document.querySelector("category-list");
    categoryListElement.categories = categories;

    const categoryItem = document.querySelectorAll("category-item");

    //show 8 category
    for (let i = 0; i < categoryItem.length; i++) {
      categoryItem[i].style.display = "none";
    }
    for (let i = 0; i < 6; i++) {
      categoryItem[i].style.display = "block";
    }
  };

  const showResponeMessage = (message = "Check Your Connection") => {
    alert(message);
  };

  const bannerSliderElement = document.querySelector("banner-slider");

  //memanggil setter banners() pada pada banner slider
  bannerSliderElement.banners = banners;

  $(".single-item").slick({
    dots: true,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000
  });
  getCategoryMeal();
};

export default main;
