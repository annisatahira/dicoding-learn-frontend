import "../component/app-bar.js";
import "../component/footer.js";

import SearchData from "../action/page-result.js";

const main = () => {
  const setValue = async () => {
    try {
      let value = await localStorage.getItem("searchValue");
      const pageResult = await new SearchData(value);
      return pageResult;
    } catch (error) {}
  };

  setValue();
};

document.addEventListener("DOMContentLoaded", main());
