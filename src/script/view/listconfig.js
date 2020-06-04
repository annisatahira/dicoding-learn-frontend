import "../component/area-item.js";

import { areas } from "../data/data-app.js";
import TitleList from "../component/container/list-w-title.js";
import PageList from "../component/container/page-list.js";

const main = () => {
  const areaList = new TitleList(
    "#areaList",
    "area-item",
    areas,
    "Area Categories"
  );
  areaList.renderItems();

  $(function() {
    //
    //  get num of item and compute num of pages
    //
    var nItem = $("area-item").length;
    var nPages = Math.ceil(nItem / $(".pagination").data("page-size"));
    //
    // save num pages as a data attribute of pagination element
    //
    $(".pagination").data("num-pages", nPages);
    //
    // Create the buttons on the fly
    //
    for (var i = 1; i < nPages; i++) {
      $("<li/>")
        .append($("<a/>", { href: "#", text: i + 1 }))
        .insertBefore(".pagination li:has([rel]):last");
    }
    //
    // handle pagination
    //
    $(".pagination li").on("click", function(e) {
      //
      // prevent default action
      //
      e.preventDefault();

      //
      // The clicked element is the next one......
      //
      var clickedElement = $(this);
      var nextElement = clickedElement;

      //
      // ....if the clicked element is Next or Prev buttons
      //
      var nextPrevAnchorElement = clickedElement.find("a[rel]");
      if (nextPrevAnchorElement.length == 1) {
        //
        // compute the next element
        //
        if (nextPrevAnchorElement.text().trim() == "Next") {
          nextElement = $(".pagination li.active").next("li:not(:has([rel]))");
          if (nextElement.length == 0) {
            nextElement = $(".pagination li:not(:has([rel])):first");
          }
        } else {
          nextElement = $(".pagination li.active").prev("li:not(:has([rel]))");
          if (nextElement.length == 0) {
            nextElement = $(".pagination li:not(:has([rel])):last");
          }
        }
      }
      //
      // toggle active page
      //
      $(".pagination li.active").removeClass("active");
      nextElement.addClass("active");

      //
      // get the number of active page
      //
      var currentPageNumber =
        +nextElement
          .find("a")
          .text()
          .trim() - 1;

      //
      // get the page size
      //
      var pageSize = +$(".pagination").data("page-size");
      //
      // toggle visibility
      //
      $("area-item:visible").toggle(false);
      $("area-item")
        .slice(currentPageNumber * pageSize, (currentPageNumber + 1) * pageSize)
        .toggle(true);
    });
    //
    // show the active page
    //
    $(".pagination li.active a").trigger("click");
  });

  const setValue = () => {
    let value = (document.querySelector(
      ".resultText"
    ).innerHTML = localStorage.getItem("data"));
    // const pageList = new PageList(value);
    return value;
  };

  setValue();
};

export default main;
