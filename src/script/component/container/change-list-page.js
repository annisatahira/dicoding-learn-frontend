import List from "./list.js";

class DataList {
  constructor(keyword, listID, listItem) {
    const url = `https://www.themealdb.com/api/json/v1/1/${keyword}`;
    this.value = url;
    this.listID = listID;
    this.listItem = listItem;
  }

  getList = async () => {
    try {
      const response = await fetch(`${this.value}`);
      const responseJson = await response.json();
      const dataList = await responseJson.categories;
      this.renderList(dataList);
    } catch (error) {
      this.showResponseMessage(error);
    }
  };

  renderList(data) {
    const categoryList = new List(this.listID, this.listItem, data);
    categoryList.renderItems();
  }

  showResponeMessage = (message = "Check Your Connection") => {
    alert(message);
  };
}

export default DataList;
