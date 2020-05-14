import "./club-item.js";

class ClubList extends HTMLElement {
  //untuk menerapkan property this._club
  set clubs(clubs) {
    this._clubs = clubs;
    this.render();
  }

  renderError(messange) {
    this.innerHTML = "";
    this.innerHTML += `<h2 class="placeholder">${messange}</h2>`;
  }

  render() {
    this.innerHTML = "";
    this._clubs.forEach((club) => {
      const clubItemELement = document.createElement("club-item");
      clubItemELement.club = club;
      this.appendChild(clubItemELement);
    });
  }
}

customElements.define("club-list", ClubList);
