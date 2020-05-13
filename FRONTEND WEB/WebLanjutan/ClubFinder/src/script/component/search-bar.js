class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  // menyediakan setter. Gunanya untuk menetapkan fungsi event agar dapat mudah diterapkan dari luar class SearchBar.
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  //fungsi getter yang mengembalikan nilai value
  //dari nilai input
  get value() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = `<div id="search-container" class="search-container">
      <input
        placeholder="Search football club"
        id="searchElement"
        type="search"
      />
      <button id="searchButtonElement" type="submit">Search</button>
    </div>`;

    this.querySelector("#searchButtonElement").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

customElements.define("search-bar", SearchBar);
