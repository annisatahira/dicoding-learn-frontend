class PassValue {
  constructor(category) {
    this.category = category;
    this.changeList();
    this.passValue();
  }

  changeList = () => {
    $(".changeList").click(function() {
      const index = $(".changeList").index(this);
      passValue(index);
      $(location).attr("href", "list-page.html");
    });
  };

  passValue = index => {
    let element = document.querySelectorAll(".textValue");
    let value = element[index].innerHTML;
    let dataValueList = `${this.category}=${value}`;
    localStorage.setItem("data", dataValueList);
    return false;
  };
}

export default PassValue;
