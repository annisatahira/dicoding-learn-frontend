class TestimoniItem extends HTMLElement {
  set item(testimoni) {
    this._testimoni = testimoni;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="col l12>
        <div class="col l4">
          <img src=${this._testimoni.tImg} />
          <h6>${this._testimoni.tName}</h6>
        </div>
        <div class="col l8">
          <p>${this._testimoni.tSay}</p>
        </div>
      </div>
      `;
  }
}

customElements.define("testimoni-item", TestimoniItem);
