class CategoryItem extends HTMLElement {
  //mendapatkan data
  set item(category) {
    this._category = category;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="changeList">
          <figure>
            <h6>${this._category.idCategory}</h6>
            <img src=${this._category.strCategoryThumb} alt="food category" />
            <figcaption>${this._category.strCategory}</figcaption>
          </figure>
        </div>
        `;
  }
}

customElements.define("category-item", CategoryItem);
