import "../component/area-item.js";
import PageList from "../component/container/page-list.js";
import PageDetail from "../component/page-detail.js";

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

export default main;
