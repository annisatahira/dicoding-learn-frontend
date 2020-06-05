class PageList {
  constructor(value) {
    this.value = value;
    console.log(this.value);
    this.getDetailList();
    this.renderDetailList();
  }

  getDetailList = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?${this.value}`
      );
      const responseJson = await response.json();
      console.log(responseJson);
      this.renderDetailList(responseJson.meals);
    } catch (error) {
      this.showResponseMessage(error);
    }
  };

  renderDetailList = meals => {
    const detailListElement = document.querySelector("#detailList");
    detailListElement.innerHTML = `<h1>Meals</h1>`;

    meals.forEach(meal => {
      detailListElement.innerHTML += `
      <style>
      .card-content {
        position: relative;
        text-align: center;
        height: 100px;
        padding: 0;
      }
      
      .card-title {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
      </style>
      <div class="col s12 m6 l4 listItem">
        <div class="card item">
          <div class="card-image">
            <img src=${meal.strMealThumb}>
            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">cooka</i></a>
          </div>
          <div class="card-content">
            <h6 class="idMeal">${meal.idMeal}</h6>
            <span class="card-title">${meal.strMeal}</span>
          </div>
        </div>
      </div>
      `;
    });
  };

  showResponseMessage = (message = "Check Your Connection") => {
    alert(message);
  };
}

export default PageList;
