import "./club-item.js";

class ClubList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  //untuk menerapkan property this._club
  set clubs(clubs) {
    this._clubs = clubs;
    this.render();
  }

  renderError(messange) {
    this.shadowDOM.innerHTML = `
    <style>
    .placeholder {
      font-weight: lighter;
      color: rgba(0, 0, 0, 0.5);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    </style>
    `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${messange}</h2>`;
  }

  render() {
    this.shadowDOM.innerHTML = "";
    this._clubs.forEach(club => {
      const clubItemELement = document.createElement("club-item");
      clubItemELement.club = club;
      this.shadowDOM.appendChild(clubItemELement);
    });
  }
}

customElements.define("club-list", ClubList);
