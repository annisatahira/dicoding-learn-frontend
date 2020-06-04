import PageList from "./page-list";

class PageListArea extends PageList {
  constructor(name, value) {
    super(name);
    this.value = value;
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

  showResponeMessage = (message = "Check Your Connection") => {
    alert(message);
  };
}

export default PageListArea;
