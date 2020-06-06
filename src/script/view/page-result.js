import "../component/app-bar.js";
import "../component/footer.js";

import SearchData from "../action/page-result.js";
import PageDetail from "../component/page-detail.js";

const main = () => {
  const setValue = async () => {
    try {
      let value = await localStorage.getItem("searchValue");
      const pageResult = await new SearchData(value);
      return pageResult;
    } catch (error) {}
  };
  const setIdDetail = () => {
    $("#result").on("click", ".item", function() {
      const index = $(this).index(".item");
      let element = document.querySelectorAll(".idMeal");
      let value = element[index].innerHTML;
      localStorage.setItem("id", value);
    });
  };

  const getIdDetail = () => {
    $("#result").on("click", function() {
      let a = localStorage.getItem("id");
      console.log(a);
      let pageDetail = new PageDetail(a);
      pageDetail;
    });
  };
  setIdDetail();
  getIdDetail();
  setValue();
};

document.addEventListener("DOMContentLoaded", main());
