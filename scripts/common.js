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
  window.location.href = "index.html#index-home";
});
document.getElementById("index-whitepaper-btn").addEventListener("click", function () {
  window.location.href = "index.html#index-whitepaper";
});
document.getElementById("index-news-btn").addEventListener("click", function () {
  window.location.href = "index.html#index-news";
});
document.getElementById("index-faq-btn").addEventListener("click", function () {
  window.location.href = "index.html#index-faq";
});
document.getElementById("index-contact-btn").addEventListener("click", function () {
  window.location.href = "index.html#index-contact";
});
