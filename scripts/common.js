//============================================
//       Language options dropdown list
//============================================
// When the language icon is clicked, toggle between hiding and showing the language options
function openLanguageOptions() {
  document.getElementById("languages").classList.toggle("show");
}

//Hide the language options when clicked elsewhere
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    let languages = document.getElementById("languages");
    if (languages.classList.contains("show")) {
      languages.classList.remove("show");
    }
  }
};
