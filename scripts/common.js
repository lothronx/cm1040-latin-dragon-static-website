//========================================================
//           Language options dropdown list
//========================================================
let languagesBtn = document.getElementById("language-btn");
let languages = document.getElementById("languages");

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
//               Homepage sidebar interactivity
// Make the sidebar item "active" when the corresponding page section is in viewpoint.
//========================================================
let homepage = document.getElementById("homepage");
let sections = homepage.getElementsByClassName("section");
let sidebarItems = homepage.getElementsByClassName("sidebar-item");

window.addEventListener("scroll", function () {
  for (let i = 0; i < sections.length; i++) {
    if (isSectionInViewport(sections[i])) {
      //Remove the old active class
      let current = homepage.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      //Add the active class to the current element
      sidebarItems[i].className += " active";
    }
  }
});

// The function to check whether a section is in viewpoint.
// The section is considered to be in viewpoint when its middle line is in viewpoint.
function isSectionInViewport(e) {
  let rect = e.getBoundingClientRect();
  return (
    (rect.top + rect.bottom) / 2 >= 0 &&
    (rect.top + rect.bottom) / 2 <= (window.innerHeight || document.documentElement.clientHeight)
  );
}
