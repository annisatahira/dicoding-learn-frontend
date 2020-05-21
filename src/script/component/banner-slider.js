import "./banner-item.js";

class BannerSlider extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  set banners(banners) {
    this._banners = banners;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this._banners.forEach(banner => {
      const bannerItemElement = document.createElement("banner-item");
      bannerItemElement.banner = banner;
      this.appendChild(bannerItemElement);
    });
  }
}

customElements.define("banner-slider", BannerSlider);
