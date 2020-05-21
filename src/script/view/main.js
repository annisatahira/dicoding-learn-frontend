import "../component/container/banner-slider.js";
import banners from "../data/data-banners.js";

const main = () => {
  const bannerSliderElement = document.querySelector("banner-slider");
  bannerSliderElement.banners = banners;

  document.header.appendChild(bannerSliderElement);
};

export default main;
