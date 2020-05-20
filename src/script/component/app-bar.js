class AppBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="#" class="logo">COOKA</a>
      <div class="search-wrapper">
        <input
          type="text"
          onclick="openSearch()"
          placeholder="Search All Recipe You Want"
        />
        <button type="submit"><i class="fa fa-search"></i></button>
      </div>`;
  }
}

//for export

customElements.define("app-bar", AppBar);
