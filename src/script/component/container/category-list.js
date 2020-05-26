import "../category-item.js";

class CategoryList extends HTMLElement {
  set categories(categories) {
    this._categories = categories;
    this.render();
  }

  render() {
    this._categories.forEach(category => {
      const categoryItemElement = document.createElement("category-item");
      categoryItemElement.category = category;
      this.appendChild(categoryItemElement);
    });
  }
}

customElements.define("category-list", CategoryList);
