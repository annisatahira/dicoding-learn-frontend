import "../component/banner-item.js";
import banner from "../data/banner.js";

const main = () => {
  const containerElement = document.querySelector(".container");

  const bannerItemElement = document.createElement("banner-item");
  bannerItemElement.banner = banner;

  containerElement.appendChild(bannerItemElement);
};

export default main;
