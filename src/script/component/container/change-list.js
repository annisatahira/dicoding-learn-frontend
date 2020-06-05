class ChangeList {
  constructor(listItem, listId, selector) {
    this.listItem = listItem;
    this.listId = listId;
    this.selector = selector;
    this.ChangeList();
  }

  changeList = () => {
    $(`${this.listItem}`).click(function() {
      const index = $(`${this.listItem}`).index(this);
      let element = document.querySelectorAll(`${this.listId}`);
      let value = element[index].innerHTML;
      let listData = `${this.selector}=${value}`;
      localStorage.setItem("data", listData);
      $(location).attr("href", "list-page.html");
    });
  };
}

export default ChangeList;
