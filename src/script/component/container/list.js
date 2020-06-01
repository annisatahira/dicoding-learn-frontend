class List {
  constructor(selector, item, data) {
    const selectorElement = document.querySelector(selector);

    this.selector = selectorElement;
    this.listElement = item;
    this.data = data;
  }

  renderItems() {
    this.data.forEach(learn => {
      const dataElement = document.createElement(this.listElement);
      dataElement.learn = learn;
      console.log(dataElement);
      this.selector.appendChild(dataElement);
    });
  }
}

export default List;
