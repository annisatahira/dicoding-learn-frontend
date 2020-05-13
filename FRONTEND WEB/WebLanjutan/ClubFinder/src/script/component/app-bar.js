//buat class yang mewarisi sifat HTMLELement
class AppBar extends HTMLElement {
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
    this.innerHTML = `<h2>Club Finder</h2>`;
  }
}

//definisikan custom element agar bisa
//digunakan pada DOM
customElements.define("app-bar", AppBar);
