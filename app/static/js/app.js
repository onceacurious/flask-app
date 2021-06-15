//SELECTORS
const btnHamburger = document.querySelector("#hamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const toggler = document.getElementById("toggleMenu");
const hero = document.querySelector(".hero");
const footer = document.querySelector(".footer");
const media = document.querySelector("#media");

var overlayStatus = false;

// Observers
const heroOptions = {
  rootMargin: "-96px 0px 0px 0px",
};
const footerOptions = {
  rootMargin: "0px 0px -180px 0px",
};

const heroObserver = new IntersectionObserver(function (entries, heroObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
}, heroOptions);

heroObserver.observe(hero);

const mediaObserver = new IntersectionObserver(function (
  entries,
  mediaObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      media.style.position = "fixed";
    } else {
      media.style.position = "relative";
    }
  });
},
footerOptions);

mediaObserver.observe(footer);

// SlideShow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

//EVENT LISTENERS
btnHamburger.addEventListener("click", hamburger_btnClicked);

window.onresize = window_onResized;

//FUNCTIONS
function hamburger_btnClicked() {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    fadeOut();
    overlayStatus = false;
  } else {
    header.classList.add("open");
    fadeIn();
    overlayStatus = true;
  }

  console.log(overlayStatus);
}

function fadeIn() {
  overlay.classList.add("fade-in");
  overlay.classList.remove("fade-out");
  toggler.style.display = "flex";
}

function fadeOut() {
  overlay.classList.add("fade-out");
  overlay.classList.remove("fade-in");
  toggler.style.display = "none";
}

function window_onResized() {
  const windowWidth = window.innerWidth;
  if (windowWidth > 832 && overlay) {
    // console.log(windowWidth);
    fadeOut();
    header.classList.remove("open");
  }
}
