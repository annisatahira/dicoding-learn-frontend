class PageList {
  constructor(value) {
    this.value = value;
  }

  getDetailList = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?${this.value}`
      );
      const responseJson = await response.json();
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderDetailList(responseJson.books);
      }
    } catch (error) {
      showResponseMessage(error);
    }
  };

  renderDetailList = meals => {
    const detailListElement = document.querySelector("#detailList");
    detailListElement.innerHTML = "<h1>Details Category</h1>";

    meals.forEach(meal => {
      detailListElement.innerHTML += `
      <div id="detailItem" class="col s12 m4 l3">
        <p>${meal.strdetail}</p>
      </div>
      `;
    });
  };
}
