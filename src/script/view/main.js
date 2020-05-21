import "../component/banner-item.js";
import banners from "../data/banners.js";

const main = () => {
  const containerElement = document.querySelector("banner-slider");

  const bannerItemElement = document.createElement("banner-item");
  bannerItemElement.banner = banners;

  containerElement.appendChild(bannerItemElement);
};

export default main;
