class CategoryItem extends HTMLElement {
  //mendapatkan data
  set category(category) {
    this._category = category;
    this.render();
  }

  render() {
    this.innerHTML = `
        <figure>
          <img src=${this._category.bannerImage} alt="food category" />
          <figcaption>${this._category.title}</figcaption>
        </figure>
        `;
  }
}

customElements.define("category-item", CategoryItem);
