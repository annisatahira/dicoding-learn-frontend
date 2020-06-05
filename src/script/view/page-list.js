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
  getIdDetail(); // getDetailPage();

  const showDetail = () => {
    const a = document.querySelectorAll("overlayItem");
    a;
    a[0].style.display = "block";
  };

  // const getDetailPage = async () => {
  //   try {
  //     await setIdDetail();
  //     let item = await localStorage.getItem("id");
  //     console.log(item);
  //     let pageDetail = await new PageDetail(item);
  //     pageDetail;
  //     // showDetail();
  //   } catch (error) {}
  // };

  // const showDetail = () => {
  //   $("#detailList").on("click", function() {
  //     alert("hi");
  //   });
  // };

  // $(".closebtn").on("click", function() {
  //   document.getElementById("overlayItem").style.display = "none";
  // });

  setValue();
  // getDetailPage();
  // getIdDetail();
};

export default main;
