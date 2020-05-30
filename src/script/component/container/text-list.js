import "../text-item.js";

class TextList extends HTMLElement {
  set texts(texts) {
    this._texts = texts;
    this.render();
  }

  render() {
    this._texts.forEach(text => {
      const textItemElement = document.createElement("text-item");
      textItemElement.text = text;
      this.appendChild(textItemElement);
    });
  }
}

customElements.define("text-list", TextList);
