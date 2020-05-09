//change nav background color when scrolling
window.addEventListener("scroll", function () {
  if (scrollY > 50) {
    document.querySelector("nav").style.backgroundColor = "black";
  } else {
    document.querySelector("nav").style.backgroundColor = "transparent";
  }
});

//automatic slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var sliders = document.getElementsByClassName("slide");
  for (i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > sliders.length) {
    slideIndex = 1;
  }
  sliders[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 7000); // Change image every 7 seconds
}
