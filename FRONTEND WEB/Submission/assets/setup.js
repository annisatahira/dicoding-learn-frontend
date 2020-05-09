//change nav background color when scrolling
window.addEventListener("scroll", function () {
  if (scrollY > 50) {
    document.querySelector("nav").style.backgroundColor = "black";
  } else {
    document.querySelector("nav").style.backgroundColor = "transparent";
  }
});
