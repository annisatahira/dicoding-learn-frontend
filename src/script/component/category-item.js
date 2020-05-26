class CategoryItem extends HTMLElement {
  //mendapatkan data
  set category(category) {
    this._category = category;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="col s12 m6 l3">
          <figure>
          <img src=${this._category.bannerImage} alt="food category" />
          <figcaption>${this._category.title}</figcaption>
          </figure>
        </div>
        `;
  }
}

customElements.define("category-item", CategoryItem);
