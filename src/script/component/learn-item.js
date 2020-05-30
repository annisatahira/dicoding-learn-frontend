class LearnItem extends HTMLElement {
  set learn(learn) {
    this._learn = learn;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="col s12 m6">
          <div class="card teal darken-1">
            <img
              src=${this._learn.bgImg}
            />
            <div class="card-content white-text">
              <span class="card-title">${this._learn.title}</span>
            </div>
          </div>
    </div>`;
  }
}

customElements.define("learn-item", LearnItem);
