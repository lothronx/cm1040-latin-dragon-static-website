//========================================================
//             Responsive hamburger menu
//  Toggle between the hamburger icon and the X icon
//         Toggle between show/hide the menu
//========================================================
const menuIcon = document.getElementById("menu-icon");
const headerNav = document.getElementById("header-nav");
const accessibilityBar = document.getElementById("accessibility-bar");

// Show the dropdown menu when click the hamburger icon
menuIcon.addEventListener("click", function () {
  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.replace("fa-bars", "fa-xmark");
  } else {
    menuIcon.classList.replace("fa-xmark", "fa-bars");
  }
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
languagesBtn.addEventListener("click", function () {
  languages.classList.toggle("show");
});

// Show the language list with keyboard too.
languagesBtn.addEventListener("keydown", function (e) {
  if (e.code === "Tab") languages.classList.toggle("show");
});

//Hide the language options when clicked elsewhere
window.addEventListener("click", function (e) {
  if (!e.target.matches(".fa-language") && languages.classList.contains("show")) {
    languages.classList.remove("show");
  }
});

// Hide the language list with keyboard too.
document.getElementById("chinese").addEventListener("keydown", function (e) {
  if (e.code === "Tab") languages.classList.toggle("show");
});

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
const homepage = document.getElementById("homepage");

//If we are on homepage
if (homepage) {
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
}

//========================================================
//               Homepage sidebar animation
// Make the sidebar item larger when the corresponding page section is in viewport.
//========================================================
if (homepage) {
  const sections = homepage.getElementsByClassName("section");
  const sidebarItems = homepage.getElementsByClassName("sidebar-item");

  window.addEventListener("scroll", function () {
    let previous = homepage.getElementsByClassName("active")[0];

    for (let i = 0; i < sections.length; i++) {
      if (isItInViewport(sections[i])) {
        //Remove the active class from the previous element
        previous.classList.remove("active");
        //Add the active class to the current element
        sidebarItems[i].className += " active";
      }
    }
  });
}

// This function to check whether an element is in viewport.
// An element is considered to be in viewport when half of it is in viewport.
function isItInViewport(e) {
  let rect = e.getBoundingClientRect();
  return (
    (rect.bottom + rect.top) / 2 >= 0 &&
    (rect.bottom + rect.top) / 2 <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

//========================================================
//               Homepage article animation
//     Animate when section title is in viewport.
//========================================================
if (homepage) {
  const sectionTitles = homepage.getElementsByClassName("index-title");

  window.addEventListener("scroll", function () {
    let previous = homepage.getElementsByClassName("animate__fadeIn")[0];
    for (let i = 0; i < sectionTitles.length; i++) {
      if (
        //1. the current element is in viewport
        isItInViewport(sectionTitles[i]) &&
        //2. the previous element is no longer in viewport
        !isItInViewport(previous)
      ) {
        //Remove the class from the previous element
        previous.classList.remove("animate__fadeIn");
        //Add the class to the current element
        sectionTitles[i].className += " animate__fadeIn";
      }
    }
  });
}

//========================================================
//             FAQ page show/hide answers
//========================================================
const faq = document.getElementById("faq");

//If we are on the FAQ page
if (faq) {
  const questions = document.getElementsByClassName("question");
  const questionIcons = document.getElementsByClassName("question-icon");
  const answers = document.getElementsByClassName("answer");

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function () {
      //  Toggle between the + icon and the X icon
      if (questionIcons[i].classList.contains("fa-angle-down")) {
        questionIcons[i].classList.replace("fa-angle-down", "fa-angle-up");
      } else {
        questionIcons[i].classList.replace("fa-angle-up", "fa-angle-down");
      }

      //Show answer
      answers[i].classList.toggle("show");
      questions[i].classList.toggle("alt-style");
    });
  }
}
