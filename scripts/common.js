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
  if (
    !e.target.matches(".fa-language") & languages.classList.contains("show")
  ) {
    languages.classList.remove("show");
  }
}
