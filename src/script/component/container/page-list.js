class PageList {
  constructor(value) {
    this.value = value;
  }

  getDetailList = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${this.value}`
      );
      const responseJson = await response.json();
      console.log(responseJson.meals);
    } catch (error) {
      this.showResponseMessage(error);
    }
  };

  showResponeMessage = (message = "Check Your Connection") => {
    alert(message);
  };
}

export default PageList;
