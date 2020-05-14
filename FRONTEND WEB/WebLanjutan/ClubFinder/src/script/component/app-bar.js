//buat class yang mewarisi sifat HTMLELement
class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  //akan terpanggil ketika element
  //diterapkan pada DOM
  connectedCallback() {
    //jika ingin element diterapkan langsung
    this.render();
  }
  //untuk merender
  render() {
    //berfungsi untuk menampilkan element yg dibutuhkan
    //melalui property
    //lihat this.innerHTML
    this.shadowDOM.innerHTML = `
    <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    :host {
      display: block;
      width: 100%;
      background-color: cornflowerblue;
      color: white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
    h2 {
      padding: 16px;
    }
    </style>
    <h2>Club Finder</h2>`;
  }
}

//definisikan custom element agar bisa
//digunakan pada DOM
customElements.define("app-bar", AppBar);
