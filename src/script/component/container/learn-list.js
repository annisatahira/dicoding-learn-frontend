import "../learn-item.js";

class LearnList extends HTMLElement {
  set learns(learns) {
    this._learns = learns;
    this.render();
  }

  render() {
    this._learns.forEach(learn => {
      const itemELement = document.createElement("learn-item");
      itemELement.learn = learn;
      this.appendChild(itemELement);
    });
  }
}

customElements.define("learn-list", LearnList);
