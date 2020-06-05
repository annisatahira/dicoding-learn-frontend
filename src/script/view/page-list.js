import "../component/area-item.js";
import PageList from "../component/container/page-list.js";

const main = () => {
  const setValue = async () => {
    try {
      let value = await localStorage.getItem("data");
      const pageList = await new PageList(value);
      return pageList;
    } catch (error) {}
  };

  $("#detailList").on("click", ".item", function() {
    const index = $(this).index(".item");
    let element = document.querySelectorAll(".idMeal");
    let value = element[index].innerHTML;
    localStorage.setItem("id", value);
    document.getElementById("overlayItem").style.display = "block";
  });

  $(".closebtn").on("click", function() {
    document.getElementById("overlayItem").style.display = "none";
  });

  setValue();
};

export default main;
