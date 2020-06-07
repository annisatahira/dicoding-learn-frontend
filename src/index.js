import "regenerator-runtime";
import "./style/style.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import "./script/component/app-bar.js";
import "./script/component/footer.js";
import main from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", main);
