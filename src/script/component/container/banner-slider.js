import "../banner-item.js";

class BannerSlider extends HTMLElement {
  set banners(banners) {
    this._banners = banners;
    this.render();
  }

  render() {
    this._banners.forEach(banner => {
      const bannerItemElement = document.createElement("banner-item");
      // memanggil fungsi setter banner() pada banner-item.
      bannerItemElement.banner = banner;
      this.appendChild(bannerItemElement);
    });
  }
}

customElements.define("banner-slider", BannerSlider);
