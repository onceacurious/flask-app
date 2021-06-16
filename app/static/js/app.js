//SELECTORS
const btnHamburger = document.querySelector("#hamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const toggler = document.getElementById("toggleMenu");
const media = document.querySelector("#media");
const serviceItem = document.querySelector(".item-overlay");
const serviceImg = document.querySelector("#serviceImg");
const serviceHeader = document.querySelector("#serviceHeader");

var overlayStatus = false;

// OBSERVERS
var accent_primary = "#01f3e7";
var accent_secondary = "#01f3aa";
var white = "#ffffff";
var dark = "#000000";
var lightGray = "#746f6f";

const hero = document.querySelector(".hero");
const features = document.querySelector(".features");
const footer = document.querySelector(".footer");

const heroOptions = {
  rootMargin: "-64px 0px 0px 0px",
};

const featuresOptions = {
  rootMargin: "-64px 0px 0px 0px",
};

const footerOptions = {
  rootMargin: "0px 0px -300px 0px",
};

const heroObserver = new IntersectionObserver(function (entries, heroObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
      // header.style.background = accent_primary;
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
}, heroOptions);

heroObserver.observe(hero);

// const featureObserver = new IntersectionObserver(function (entries, featureObserver) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       header.style.background = accent_secondary;
//     } else{
//       header.style.background = accent_primary;
//     }
//   });
// }, featuresOptions);

// featureObserver.observe(features)

const mediaObserver = new IntersectionObserver(function (
  entries,
  mediaObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      media.style.position = "fixed";
    } else {
      const navScrolled = document.querySelector(".nav-scrolled");
      media.style.position = "relative";
      navScrolled.style.boxShadow = "none";
    }
  });
},
footerOptions);

mediaObserver.observe(footer);

// SlideShow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
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
window.onresize = window_onResized;
btnHamburger.addEventListener("click", hamburger_btnClicked);

// hover(serviceImg, itemOverlay_fadeIn, itemOverlay_fadeOut);

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

  if (windowWidth > 892 && overlay) {
    fadeOut();
    header.classList.remove("open");
  }
}

function hover(element, enter, leave) {
  element.addEventListener("mouseenter", enter);
  element.addEventListener("mouseleave", leave);
}

function itemOverlay_fadeIn() {
  serviceItem.classList.add("fade-in");
  serviceItem.classList.remove("fade-out");
}
function itemOverlay_fadeOut() {
  serviceItem.classList.remove("fade-in");
  serviceItem.classList.add("fade-out");
}
