import "regenerator-runtime";
import "./style/style.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import $ from "jquery";
import "./script/component/app-bar.js";
import "./script/component/footer.js";

import SearchData from "./script/action/page-result.js";
import PageDetail from "./script/component/page-detail.js";

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
