//change nav background color when scrolling
function myFunction(media) {
  if (media.matches) {
    // If media query matches
    window.addEventListener("scroll", function () {
      if (scrollY > 50) {
        document.querySelector("nav").style.backgroundColor = "black";
      } else {
        document.querySelector("nav").style.backgroundColor = "transparent";
      }
    });
  } else {
    document.querySelector("nav").style.backgroundColor = "black";
  }
}

var media = window.matchMedia("(min-width: 501px)");
myFunction(media); // Call listener function at run time
media.addListener(myFunction); // Attach listener function on state changes

//automatic slideshow
let slideIndex = 0;
slidesShow();

function slidesShow() {
  let i;
  let sliders = document.getElementsByClassName("slide");
  for (i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > sliders.length) {
    slideIndex = 1;
  }
  sliders[slideIndex - 1].style.display = "block";
  setTimeout(slidesShow, 7000); // Change image every 7 seconds
}

// Toggle menu
function toggleMenu() {
  var mobileNav = document.getElementById("mobile-nav");
  if (mobileNav.style.display == "block") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "block";
  }
}
