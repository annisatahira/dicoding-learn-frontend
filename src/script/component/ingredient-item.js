class IngredientItem extends HTMLElement {
  //mendapatkan data
  set item(ingredient) {
    this._ingredient = ingredient;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div id="ingredientItem" class="col s12 m4 l3 changeListIngredient">
         <p><a class="textValue">${this._ingredient.strIngredient}</a></p>
     </div>
          `;
  }
}

customElements.define("ingredient-item", IngredientItem);
