//========================================================
//           Language options dropdown list
//      modified based on w3schools sample code 
// https://www.w3schools.com/howto/howto_js_dropdown.asp
//========================================================
// When the language icon is clicked, toggle between hiding and showing the language options
function openLanguageOptions() {
  document.getElementById("languages").classList.toggle("show");
}

//Hide the language options when clicked elsewhere
window.onclick = function (e) {
  if (!e.target.matches(".fa-language")) {
    let languages = document.getElementById("languages");
    if (languages.classList.contains("show")) {
      languages.classList.remove("show");
    }
  }
};

