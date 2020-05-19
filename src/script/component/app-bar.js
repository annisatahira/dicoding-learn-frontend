class AppBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
      .logo {
        color: white;
        font-weight: bolder;
        font-family: "Pacifico", cursive;
        font-size: 25px;
        padding: 20px;
        background: #ef5350;
        text-decoration: none;
        position: absolute;
        margin-left: 30px;
      }
      .search-wrapper {
        position: absolute;
        top: 25px;
        right: 20px;
        box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        width: 40%;
        background: white;
        outline: 0;
      }
      .search-wrapper input[type="text"] {
        padding: 15px;
        font-size: 15px;
        border: none;
        float: left;
        width: 90%;
        background: transparent;
        border-radius: 20px 0px 0px 20px;
        outline: 0;
      }
      
      .search-wrapper input[type="text"]:hover {
        border-radius: 20px 0px 0px 20px;
      }
      
      .search-wrapper button {
        float: left;
        width: 10%;
        padding: 14px;
        background: #ef5350;
        font-size: 17px;
        border: none;
        cursor: pointer;
        border-radius: 20px 20px 20px 20px;
        outline: 0;
      }
      
      .search-wrapper .fa {
        color: white !important;
      }
      </style>
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

customElements.define("app-bar", AppBar);
