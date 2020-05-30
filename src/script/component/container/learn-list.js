class List extends HTMLElement {
  constructor(item, element) {
    super();
    this._item = item;
    this._element = element;
    this.render();
  }

  render() {
    this._item.forEach(item => {
      const itemELement = document.createElement(element);
      itemELement.element = item;
      this.appendChild(itemELement);
    });
  }
}

customElements.define("list-item", List);
