class TextItem extends HTMLElement {
  set text(text) {
    this._text = text;
    this.render();
  }

  render() {
    this.innerHTML = `
    <h1>${this._text.title}</h1>
    <p>${this._text.description}</p>`;
  }
}

customElements.define("text-item", TextItem);
