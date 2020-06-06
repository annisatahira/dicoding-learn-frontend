class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // this.render();
    this.getSearch();
  }

  getSearch = async () => {
    try {
      await this.render();
      this.openSearch();
    } catch (error) {
      //   this.showResponseMessage(error);
    }
  };

  openSearch = () => {
    this.shadowDOM
      .querySelector(".openInputSearch")
      .addEventListener("click", () => {
        this.shadowDOM.querySelector(".overlay").style.display = "block";
      });
    this.shadowDOM.querySelector(".closebtn").addEventListener("click", () => {
      this.shadowDOM.querySelector(".overlay").style.display = "none";
    });
  };

  render() {
    const styles = document.querySelector('link[href*="fontawesome"]');
    this.shadowDOM.innerHTML = `
    <style>
      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }
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
        top: 0px;
      }
      
      .search-wrapper {
        position: absolute;
        top: 35px;
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

      .overlay {
        height: 20%;
        width: 100%;
        display: none;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: white;
      }
      
      .overlay-content {
        position: relative;
        top: 40%;
        width: 80%;
        text-align: center;
        margin: auto;
      }
      
      .overlay .closebtn {
        position: absolute;
        top: 5px;
        right: 25px;
        font-size: 40px;
        cursor: pointer;
        color: black;
      }
      
      .overlay .closebtn:hover {
        color: #ef5350;
      }
      
      .overlay input[type="text"] {
        padding: 15px;
        font-size: 17px;
        float: left;
        width: 90%;
        background: white;
        outline: 0;
        border-width: 0 0 1px;
        border-color: #ddd;
      }
      
      .overlay input[type="text"]:focus {
        border-color: #ef5350;
      }
      
      .overlay button {
        float: left;
        width: 10%;
        padding: 10px;
        background: transparent;
        font-size: 17px;
        border: none;
        cursor: pointer;
        outline: 0;
      }
      
      .overlay .fa {
        color: #ef5350 !important;
      }
    </style>
      <div id="searchOverlay" class="overlay">
        <span class="closebtn">×</span>
          <div class="overlay-content">
            <form action="/action_page.php">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit"><i class="fa fa-search"></i></button>
          </form>
        </div>
      </div>
      <a href="index.html" class="logo">COOKA</a>
      <div class="search-wrapper">
        <input
          type="text"
          placeholder="Search All Recipe You Want"
          class="openInputSearch"
        />
        <button type="submit"><i class="fa fa-search"></i></button>
      </div>`;
    if (styles) {
      this.shadowRoot.appendChild(styles.cloneNode());
    }
  }
}

//for export

customElements.define("app-bar", AppBar);
