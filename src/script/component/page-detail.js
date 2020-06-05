class PageDetail {
  constructor(id) {
    this.id = id;
    this.getDetailItem();
  }

  getDetailItem = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.id}`
      );
      const responseJson = await response.json();
      await this.renderDetailItem(responseJson.meals);
      this.showDetail();
    } catch (error) {
      //   this.showResponseMessage(error);
    }
  };

  renderDetailItem = meals => {
    const detailItemElement = document.querySelector("#detailItem");

    meals.forEach(meal => {
      detailItemElement.innerHTML += `
      <div id="overlayItem">
          <span class="closebtn" title="Close Overlay">×</span>
          <div id="itemContent" class="card">
            <div class="row">
              <div class="col l12">
                <img src=${meal.strMealThumb} />
                <h1>${meal.strMeal}</h1>
                <p>
                  We illustrate sufficiently by taking three particularly
                  heterogeneous items from the total ... in (1) only need
                  division by the number of items, without change in the ratio.
                  The separate price sums are clearly not invariant to changes
                  in units. ... With our three heterogeneous items as an
                  example, we construct the table on page 14.
                </p>
              </div>
              <ul id="tabs-swipe-demo" class="tabs">
              <li class="tab col s3"><a href="#swipe-1">Test 1</a></li>
              <li class="tab col s3"><a class="active" href="#swipe-2">Test 2</a></li>
              <li class="tab col s3"><a href="#swipe-3">Test 3</a></li>
            </ul>
            <div id="swipe-1" class="col s12 blue">First tab content</div>
            <div id="swipe-2" class="col s12 red">Second tab content</div>
            <div id="swipe-3" class="col s12 green">Third tab content</div>
            </div>
          </div>
        </div>
      `;
    });
  };

  tabFunction = () => {
    $(".tabs").tabs({
      swipeable: true
    });
  };

  showDetail = () => {
    document.querySelector("#overlayItem").style.display = "block";
    this.tabFunction();
    $(".closebtn").on("click", function(e) {
      e.preventDefault();
      document.getElementById("overlayItem").style.display = "none";
      $("#overlayItem").remove();
    });
  };
}

export default PageDetail;
