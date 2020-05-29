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

    $("category-list").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5
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

  const showResponeMessage = (message = "Check Your Connection") => {
    alert(message);
  };

  const bannerSliderElement = document.querySelector("banner-slider");

  //memanggil setter banners() pada pada banner slider
  bannerSliderElement.banners = banners;

  $("banner-slider").slick({
    dots: true,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000
  });

  getCategoryMeal();
};

export default main;
