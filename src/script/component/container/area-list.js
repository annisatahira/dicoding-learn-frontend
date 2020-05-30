import "../area-item.js";

class AreaList extends HTMLElement {
  set meals(meals) {
    this._meals = meals;
    this.render();
  }

  render() {
    this._meals.forEach(meal => {
      const areaItemElement = document.createElement("area-item");
      areaItemElement.meal = meal;
      this.appendChild(areaItemElement);
    });
  }
}

customElements.define("area-list", AreaList);
