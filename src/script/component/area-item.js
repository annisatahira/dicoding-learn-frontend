class AreaItem extends HTMLElement {
  set item(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="col s12 m6 l3">
    <div class="card">
      <div class="card-image">
        <img
          src="${this._meal.imgArea}"
        />
        <span class="card-title">${this._meal.strArea}</span>
        <a class="btn-floating halfway-fab waves-effect waves-light red"
          ><i class="material-icons">cooka</i></a
        >
      </div>
    </div>
  </div>`;
  }
}

customElements.define("area-item", AreaItem);
