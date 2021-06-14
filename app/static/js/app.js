//SELECTORS
const btnHamburger = document.querySelector("#hamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const toggler = document.getElementById("toggleMenu");
const hero = document.querySelector(".hero");

var overlayStatus = false;

const heroOptions = {
  rootMargin: "-96px 0px 0px 0px",
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
    console.log(windowWidth);
    fadeOut();
    header.classList.remove("open");
  }
}
