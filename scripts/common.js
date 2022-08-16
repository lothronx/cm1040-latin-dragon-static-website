//========================================================
//               Responsive menu icon
//  toggle between the hamburger icon and the X icon
//========================================================
let menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener("click", function () {
  if (menuIcon.className == "fa-solid fa-bars fa-2x") {
    menuIcon.className = "fa-solid fa-xmark fa-2x";
  } else {
    menuIcon.className = "fa-solid fa-bars fa-2x";
  }
});

//========================================================
//          Show/hide menu on mobile devices
//           Hide the menu when scroll down
//        Show the menu when scroll up or tap
// *Only works when the screen is small and is a touchscreen*
//========================================================
let menu = document.getElementsByTagName("header")[0];
let startY = 0;
let endY = 0;

window.addEventListener("touchstart", function (e) {
  startY = e.changedTouches[0].screenY;
});

window.addEventListener("touchend", function (e) {
  endY = e.changedTouches[0].screenY;
  if (endY < startY) {
    menu.style.top = "-72px";
  } else {
    menu.style.top = "0";
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
  if (!e.target.matches(".fa-language") & languages.classList.contains("show")) {
    languages.classList.remove("show");
  }
}

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
