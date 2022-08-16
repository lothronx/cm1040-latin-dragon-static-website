//========================================================
//        Responsive hamburger menu icon
//  Toggle between the hamburger icon and the X icon
//========================================================
const menuIcon = document.getElementById("menu-icon");
menuIcon.addEventListener("click", function () {
  if (menuIcon.className == "fa-solid fa-bars fa-3x") {
    menuIcon.className = "fa-solid fa-xmark fa-3x";
  } else {
    menuIcon.className = "fa-solid fa-bars fa-3x";
  }
});

//========================================================
//             Responsive hamburger menu
//       Toggle between show and hide the menu
//========================================================
const headerNav = document.getElementById("header-nav");
const accessibilityBar = document.getElementById("accessibility-bar");

menuIcon.addEventListener("click", function () {
  headerNav.classList.toggle("show");
  accessibilityBar.classList.toggle("show");
});

//Hide the menu when clicked elsewhere
window.addEventListener("click", function (e) {
  if (
    !e.target.matches(".header-nav") &&
    !e.target.matches(".accessibility-bar") &&
    !e.target.matches(".fa-solid") &&
    headerNav.classList.contains("show")
  ) {
    console.log(1);
    headerNav.classList.remove("show");
    accessibilityBar.classList.remove("show");
    menuIcon.className = "fa-solid fa-bars fa-3x";
  }
});

//========================================================
//           Language options dropdown list
//========================================================
const languagesBtn = document.getElementById("language-btn");
const languages = document.getElementById("languages");

// When the language icon is clicked, toggle between hiding and showing the language options
languagesBtn.addEventListener("click", openLanguageOptions);
function openLanguageOptions() {
  languages.classList.toggle("show");
}

//Hide the language options when clicked elsewhere
window.addEventListener("click", closeLanguageOptions);
function closeLanguageOptions(e) {
  if (!e.target.matches(".fa-language") && languages.classList.contains("show")) {
    languages.classList.remove("show");
  }
}

//========================================================
//            Show/hide menu on mobile devices
//      Hide the menu when scroll up AND the mobile menu not open
//  Show the menu when scroll down or tap or the mobile menu not open
//   *Only works when the screen is small and is a touchscreen*
//========================================================
let menu = document.getElementsByTagName("header")[0];
let startY = 0;
let endY = 0;

window.addEventListener("touchstart", function (e) {
  startY = e.changedTouches[0].screenY;
});

window.addEventListener("touchend", function (e) {
  endY = e.changedTouches[0].screenY;
  if (endY < startY - 10 && !headerNav.classList.contains("show")) {
    menu.style.top = "-72px";
  } else {
    menu.style.top = "0";
  }
});

//========================================================
//               Homepage sidebar items
//   Click the sidebar item to jump to its section
//========================================================
document.getElementById("index-home-btn").addEventListener("click", function () {
  window.location.href = "#index-home";
});
document.getElementById("index-whitepaper-btn").addEventListener("click", function () {
  window.location.href = "#index-whitepaper";
});
document.getElementById("index-news-btn").addEventListener("click", function () {
  window.location.href = "#index-news";
});
document.getElementById("index-faq-btn").addEventListener("click", function () {
  window.location.href = "#index-faq";
});
document.getElementById("index-contact-btn").addEventListener("click", function () {
  window.location.href = "#index-contact";
});

//========================================================
//               Homepage sidebar animation
// Make the sidebar item larger when the corresponding page section is in viewpoint.
//========================================================
const homepage = document.getElementById("homepage");
const sections = homepage.getElementsByClassName("section");
const sidebarItems = homepage.getElementsByClassName("sidebar-item");

window.addEventListener("scroll", function () {
  for (let i = 0; i < sections.length; i++) {
    if (isSectionInViewport(sections[i])) {
      //Remove the active class from the previous element
      let previous = homepage.getElementsByClassName("active");
      previous[0].className = previous[0].className.replace(" active", "");
      //Add the active class to the current element
      sidebarItems[i].className += " active";
    }
  }
});

// This function to check whether a section is in viewpoint.
// The section is considered to be in viewpoint when 60% of it is in viewpoint.
function isSectionInViewport(e) {
  let rect = e.getBoundingClientRect();
  return (
    (rect.bottom - rect.top) * 0.6 + rect.top >= 0 &&
    (rect.bottom - rect.top) * 0.6 + rect.top <=
      (window.innerHeight || document.documentElement.clientHeight)
  );
}

//========================================================
//               Homepage article animation
//     Animate when section title is in viewpoint.
//========================================================
const sectionTitles = homepage.getElementsByTagName("h1");

window.addEventListener("scroll", function () {
  //Don't animate the first title
  for (let i = 1; i < sectionTitles.length; i++) {
    if (isTitleInViewport(sectionTitles[i])) {
      //Only need to animate once when the page first load, no need to remove these class.
      sectionTitles[i].className += "animate__animated animate__fadeIn";
    }
  }
});

// This function to check whether the section title is in viewpoint.
// The title is considered to be in viewpoint when its top border is in viewpoint.
function isTitleInViewport(e) {
  let rect = e.getBoundingClientRect();
  return rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight);
}

// //========================================================
// //               Homepage button animation
// //                 Animate when hover
// //========================================================
// const contactBtn = homepage.getElementsByClassName("contact-btn")[0];
// contactBtn.addEventListener("mouseover", function () {
//   contactBtn.classList.toggle("animate__pulse");
// });
