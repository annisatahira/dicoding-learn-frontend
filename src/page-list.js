import "regenerator-runtime";
import "./style/style.css";
import $ from "jquery";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import "./script/component/app-bar.js";
import "./script/component/footer.js";

import PageList from "./script/component/container/page-list.js";
import PageDetail from "./script/component/page-detail.js";

const main = () => {
  const setValue = async () => {
    try {
      let value = await localStorage.getItem("data");
      const pageList = await new PageList(value);
      return pageList;
    } catch (error) {}
  };

  const setIdDetail = () => {
    $("#detailList").on("click", ".item", function() {
      const index = $(this).index(".item");
      let element = document.querySelectorAll(".idMeal");
      let value = element[index].innerHTML;
      localStorage.setItem("id", value);
    });
  };

  const getIdDetail = () => {
    $("#detailList").on("click", function() {
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
