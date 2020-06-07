class TestimoniItem extends HTMLElement {
  set item(testimoni) {
    this._testimoni = testimoni;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="col s12 l12>
        <div class="col s12 m12 l4">
          <img src=${this._testimoni.tImg} />
          <h6>${this._testimoni.tName}</h6>
        </div>
        <div class="col s12 m12 l8">
          <p>${this._testimoni.tSay}</p>
        </div>
      </div>
      `;
  }
}

customElements.define("testimoni-item", TestimoniItem);
