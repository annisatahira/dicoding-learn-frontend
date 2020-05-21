import "../component/container/banner-slider.js";
import banners from "../data/data-banners.js";

const main = () => {
  let slideIndex = 0;

  const bannerSliderElement = document.querySelector("banner-slider");
  //memanggil setter banners() pada pada banner slider
  bannerSliderElement.banners = banners;

  const renderSlider = () => {
    const bannerElement = document.querySelectorAll("banner-item");

    for (let i = 0; i < bannerElement.length; i++) {
      bannerElement[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > bannerElement.length) {
      slideIndex = 1;
    }
    bannerElement[slideIndex - 1].style.display = "block";
    setTimeout(renderSlider, 5000); // Change image every 5 seconds
  };

  renderSlider();
};

export default main;
