class CategoryItem extends HTMLElement {
  //mendapatkan data
  set category(category) {
    this._category = category;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="col s12 m12 l3">
          <figure>
          <img src=${this._category.strCategoryThumb} alt="food category" />
          <figcaption>${this._category.strCategory}</figcaption>
          </figure>
        </div>
        `;
  }
}

customElements.define("category-item", CategoryItem);
