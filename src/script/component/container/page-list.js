class PageList {
  constructor(value) {
    this.value = value;
    console.log(this.value);
    this.getDetailList();
    this.renderDetailList();
    this.showResponeMessage();
  }

  getDetailList = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${this.value}`
      );
      const responseJson = await response.json();
      this.renderDetailList(responseJson.meals);
    } catch (error) {
      this.showResponseMessage(error);
    }
  };

  renderDetailList = meals => {
    const detailListElement = document.querySelector("#detailList");
    detailListElement.innerHTML = `<h1>${this.value} Meals</h1>`;

    meals.forEach(meal => {
      detailListElement.innerHTML += `
      <div class="col s12 m6 l4">
      <div class="card">
      <div class="card-image">
        <img src=${meal.strMealThumb}>
        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">cooka</i></a>
      </div>
      <div class="card-content">
       <span class="card-title">${meal.strMeal}</span>
      </div>
    </div>
    </div>
      `;
    });
  };

  showResponeMessage = (message = "Check Your Connection") => {
    alert(message);
  };
}

export default PageList;
