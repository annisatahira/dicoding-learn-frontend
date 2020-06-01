class List {
  constructor(selector, item, title, data) {
    const selectorElement = document.querySelector(selector);

    this.selector = selectorElement;
    this.listElement = item;
    this.title = title;
    this.data = data;
  }

  renderTitle() {
    const title = document.createElement("h1");
    title.innerHTML = `${this.title}`;
    this.selector.appendChild(title);
  }

  renderItems() {
    this.data.forEach(item => {
      const dataElement = document.createElement(this.listElement);
      dataElement.item = item;
      this.selector.appendChild(dataElement);
    });
  }

  renderMore() {
    const more = document.createElement("div");
    more.innerHTML = '<a class="show-more">Show more</a>';
    this.selector.appendChild(more);
  }
}

export default List;
