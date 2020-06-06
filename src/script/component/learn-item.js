class LearnItem extends HTMLElement {
  set item(item) {
    this._item = item;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="col s4 m4 l4">
          <div class="card red accent-2 darken-1">
            <img
              src=${this._item.bgImg}
            />
            <div class="card-content white-text">
              <span class="card-title">${this._item.title}</span>
            </div>
          </div>
    </div>`;
  }
}

customElements.define("learn-item", LearnItem);
