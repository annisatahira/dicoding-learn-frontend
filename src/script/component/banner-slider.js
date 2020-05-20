class BannerSlider extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <img src="src/images/bg02.jpg" alt="food wallpaper" />
        <div class="text-banner">
          <h1>Quick Learn</h1>
          <p>
            It's Easy to understand how to COOK it,
            <br />
            cooka using API that provide you a step-by-step how to cook it.
          </p>
        </div>`;
  }
}

customElements.define("banner-slider", BannerSlider);
