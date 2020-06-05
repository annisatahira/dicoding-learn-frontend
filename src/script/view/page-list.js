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

  setValue();
};

export default main;
