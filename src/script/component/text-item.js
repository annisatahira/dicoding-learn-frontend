class TextItem extends HTMLElement {
  set text(text) {
    this._text = text;
    this.render();
  }

  render() {
    this.innerHTML = `
    <h1>${this._text.title}</h1>
    <p>${this._text.description}</p>
    <a class="show">selengkapnya</a>
    <div class="long-p">
        <p>${this._text.long_desc}</p>
        <a class="min-content">Hide Content</a>
        
    </div>`;
  }
}

customElements.define("text-item", TextItem);
