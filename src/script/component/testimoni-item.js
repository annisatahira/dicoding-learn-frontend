class TestimoniItem extends HTMLElement {
  set item(testimoni) {
    this._testimoni = testimoni;
    this.render();
  }

  render() {
    this.innerHTML = `
      <h1>Testimonial</h1>
      <img src=${this._testimoni.tImg} />
      <h6>${this._testimoni.tName}</h6>
      <p>${this._testimoni.tSay}</p>`;
  }
}

customElements.define("testimoni-item", TestimoniItem);
