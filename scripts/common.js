/**********************************************************/
/*                      Table on Content
1. Menu: Show/hide menu on mobile devices
2. Menu: Responsive hamburger menu
3. Menu: Selected menu item highlight
4. Accessibility: Low contrast mode
5. Accessibility: Link highlight mode
6. Accessibility: Language options dropdown list
7. Homepage: sidebar items
8. Homepage: sidebar animation
9. Homepage: article animation
10. Whitepaper: determine SVG height on mobile devices
11. News page: general layout
12. FAQ page: show/hide answers
/**********************************************************/

//========================================================
//            Menu: Show/hide menu on mobile devices
//      Hide the menu when scroll up AND the mobile menu not open
//  Show the menu when scroll down or tap or the mobile menu not open
//               *Only works on small touchscreen*
//========================================================
// The method to detect whether the user is scrolling up or down on a touch screen is inspired by Aureliano Far Suau's answer on stack overflow https://stackoverflow.com/questions/13278087/determine-vertical-direction-of-a-touchmove.
const menu = document.querySelector("header");
let startY = 0;
let endY = 0;

window.addEventListener("touchstart", (e) => {
  startY = e.changedTouches[0].screenY;
});

window.addEventListener("touchend", (e) => {
  endY = e.changedTouches[0].screenY;
  endY < startY - 10 && !headerNav.classList.contains("show") ? (menu.style.top = "-72px") : (menu.style.top = "0");
});

//========================================================
//           Menu: Responsive hamburger menu
//  Toggle between the hamburger icon and the X icon
//         Toggle between show/hide the menu
//========================================================
const menuIcon = document.getElementById("menu-icon");
const headerNav = document.getElementById("header-nav");
const accessibilityBar = document.getElementById("accessibility-bar");

// Show the dropdown menu when click the hamburger icon
menuIcon.addEventListener("click", () => {
  menuIcon.classList.contains("fa-bars")
    ? menuIcon.classList.replace("fa-bars", "fa-xmark")
    : menuIcon.classList.replace("fa-xmark", "fa-bars");

  headerNav.classList.toggle("show");
  accessibilityBar.classList.toggle("show");
});

// Show the dropdown menu when the hamburger icon is tabbed and the keyboard user presses Enter
document.getElementById("hamburger-icon").addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    e.preventDefault();
    menuIcon.classList.contains("fa-bars")
      ? menuIcon.classList.replace("fa-bars", "fa-xmark")
      : menuIcon.classList.replace("fa-xmark", "fa-bars");

    headerNav.classList.toggle("show");
    accessibilityBar.classList.toggle("show");
    document.querySelector(".nav-link").focus();
  }
});

// Hide the menu when clicked elsewhere
window.addEventListener("click", (e) => {
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

// close the menu after the keyboard user tabbed the last menu option.
document.getElementById("chinese").addEventListener("keydown", (e) => {
  if (e.code == "Tab" && menuIcon.classList.contains("fa-xmark")) {
    e.preventDefault();
    menuIcon.classList.replace("fa-xmark", "fa-bars");
    headerNav.classList.remove("show");
    accessibilityBar.classList.remove("show");
  }
});

//========================================================
//             Menu: Selected menu item highlight
//                 Highlight the current tab.
//========================================================
const navItems = headerNav.getElementsByClassName("nav-item");
for (let i = 0; i < navItems.length; i++) {
  // Find the menu item which has the same name as the page title.
  if (navItems[i].classList.contains(document.querySelector("body").id)) {
    navItems[i].classList += " active";
  } else {
    navItems[i].classList.remove("active");
  }
}

//========================================================
//             Accessibility: Low contrast mode
//Click the low-contrast icon to toggle between high contrast and low contrast
//========================================================
const contrastBtn = document.getElementById("contrast-btn");

contrastBtn.addEventListener("click", () => {
  // Toggle the low-contrast mode.
  document.querySelector("html").classList.toggle("low-contrast");

  // On low-contrast mode, make the text color lighter and thus more readable.
  // Also change the icon from half a circle to a full circle.
  if (document.querySelector("html").classList.contains("low-contrast")) {
    document.documentElement.style.setProperty("--light", "#f1e7cb");
    contrastBtn.firstChild.classList.replace("fa-circle-half-stroke", "fa-circle");
  } else {
    document.documentElement.style.setProperty("--light", "#efe1ba");
    contrastBtn.firstChild.classList.replace("fa-circle", "fa-circle-half-stroke");
  }
});

//========================================================
//          Accessibility: Link highlight mode
//Click the link underline icon to highlight all links (and buttons)
//========================================================
const linkUnderlineBtn = document.getElementById("link-underline-btn");

linkUnderlineBtn.addEventListener("click", () => {
  // Toggle the link underline mode.
  document.querySelector("html").classList.toggle("link-underline");

  // Change the icon.
  linkUnderlineBtn.firstChild.classList.contains("fa-underline")
    ? linkUnderlineBtn.firstChild.classList.replace("fa-underline", "fa-u")
    : linkUnderlineBtn.firstChild.classList.replace("fa-u", "fa-underline");
});

//========================================================
//     Accessibility: Language options dropdown list
//========================================================
const languagesBtn = document.getElementById("language-btn");
const languages = document.getElementById("languages");

// When the language icon is clicked, toggle between hiding and showing the language options
languagesBtn.addEventListener("click", () => {
  languages.classList.toggle("show");
});

// Make it works with keyboard too
languagesBtn.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    e.preventDefault();
    languages.classList.toggle("show");
  }
});

//Hide the language options when clicked elsewhere
window.addEventListener("click", function (e) {
  if (!e.target.matches(".fa-language") && languages.classList.contains("show")) {
    languages.classList.remove("show");
  }
});

// Make sure keyboard users can easily close language options too
document.getElementById("chinese").addEventListener("keydown", (e) => {
  if (e.code == "Tab") {
    e.preventDefault();
    languages.classList.remove("show");
  }
});

//========================================================
//               Homepage: sidebar items
//   Click the sidebar item to jump to its section
//========================================================
const homepage = document.getElementById("homepage");

//If we are on homepage
if (homepage) {
  document.getElementById("index-home-btn").addEventListener("click", () => {
    window.location.href = "#index-home";
  });
  document.getElementById("index-whitepaper-btn").addEventListener("click", () => {
    window.location.href = "#index-whitepaper";
  });
  document.getElementById("index-news-btn").addEventListener("click", () => {
    window.location.href = "#index-news";
  });
  document.getElementById("index-faq-btn").addEventListener("click", () => {
    window.location.href = "#index-faq";
  });
  document.getElementById("index-contact-btn").addEventListener("click", () => {
    window.location.href = "#index-contact";
  });
}

//========================================================
//               Homepage: sidebar animation
// Make the sidebar item larger when the corresponding page section is in viewport.
//========================================================
if (homepage) {
  const sections = homepage.getElementsByClassName("section");
  const sidebarItems = homepage.getElementsByClassName("sidebar-item");

  window.addEventListener("scroll", () => {
    let previous = homepage.querySelector(".active");

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
// Original code from JavaScript Tutorial, https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/.
function isItInViewport(e) {
  const rect = e.getBoundingClientRect();
  return (rect.bottom + rect.top) / 2 >= 0 && (rect.bottom + rect.top) / 2 < window.innerHeight;
}

//========================================================
//               Homepage: article animation
//     Animate when section title is in viewport.
//========================================================
if (homepage) {
  const sectionTitles = homepage.getElementsByClassName("index-title");

  window.addEventListener("scroll", () => {
    let previous = homepage.querySelector(".animate__fadeIn");
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
//   Whitepaper: determine SVG height on mobile devices
//========================================================
const whitepaper = document.getElementById("whitepaper");

if (whitepaper) {
  const tradeStepTexts = document.querySelectorAll(".trade-step-text");
  const svgs = document.querySelectorAll("svg");

  // run when the page loads.
  window.addEventListener("load", setHeight);
  // run when the page is resized.
  window.addEventListener("resize", setHeight);

  function setHeight() {
    if (window.innerWidth <= 806) {
      for (let i = 0; i < tradeStepTexts.length; i++) {
        svgs[i].style.height = tradeStepTexts[i].offsetHeight;
      }
    } else {
      svgs.forEach((svg) => (svg.style.height = "3rem"));
    }
  }
}

//========================================================
//               News page: general layout
//The goal is to arrange news articles in this order and this layout:
//                   "News "  111111
//                   222222   111111
//                   222222   111111
//                   222222   333333
//                   444444   333333
//                   444444   333333
//                   444444
// My method is to change the "margin-top" property of even news articles (article 2, 4, 6, and 8).
//========================================================
const news = document.getElementById("news");

//If we are on the News page
if (news) {
  // newsList is not a very accurate name, as it actually contains 9 elements: 1 page title (index[0]) and 8 news articles (index[1]-[8]).
  const newsList = news.querySelector("main").children;

  // run when the page loads.
  window.addEventListener("load", setMarginTop);
  // run when the page is resized.
  window.addEventListener("resize", setMarginTop);

  // If the screen is big and the news articles are in two columns, change the "margin-top" property of even news articles.
  // If the screen is small and the news articles are in onw column, set everyone's "margin top" property back to its default value: 0.
  function setMarginTop() {
    if (window.innerWidth > 806) {
      // The first element that needs to be changed is element[2]
      for (let i = 2; i < newsList.length; i++) {
        // Only change the even elements.
        if (!(i % 2)) {
          // The top position of element[3] is (the top position of element[1] + the height of element[1] + margin).
          // This should also be the top position of element[2] had we not made any custom changes.
          // Our goal is to change the top position of element[2] to be (the top position of element[0] + the height of element[0] + margin)
          // Their height different is:
          let heightDiff =
            newsList[i - 2].offsetTop +
            newsList[i - 2].offsetHeight -
            newsList[i - 1].offsetTop -
            newsList[i - 1].offsetHeight;
          // So let's move our element[2] up by that amount.
          newsList[i].style["margin-top"] = heightDiff + "px";
        }
      }
    } else {
      for (let i = 0; i < newsList.length; i++) {
        newsList[i].style["margin-top"] = 0;
      }
    }
  }
}

//========================================================
//             FAQ page: show/hide answers
//========================================================
const faq = document.getElementById("faq");

//If we are on the FAQ page
if (faq) {
  const questions = document.getElementsByClassName("question");
  const questionIcons = document.getElementsByClassName("question-icon");
  const answers = document.getElementsByClassName("answer");

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", () => {
      //  Toggle between the + icon and the X icon
      questionIcons[i].classList.contains("fa-angle-down")
        ? questionIcons[i].classList.replace("fa-angle-down", "fa-angle-up")
        : questionIcons[i].classList.replace("fa-angle-up", "fa-angle-down");

      //Show answer
      answers[i].classList.toggle("show");
      questions[i].classList.toggle("alt-style");
    });
  }
}
