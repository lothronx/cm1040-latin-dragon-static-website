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

//========================================================
//               Homepage page effect
//========================================================
// throttle function
function throttle(fn, delay) {
  let baseTime = 0;
  return function () {
    const currentTime = Date.now();
    if (baseTime + delay < currentTime) {
      fn.apply(this, arguments);
      baseTime = currentTime;
    }
  };
}

let homepageSections = document.getElementsByClassName("homepage-section");
let homepageSectionsContainer = document.getElementById("homepage-sections-container");
let i = 0;

// https://developer.mozilla.org/en-US/docs/Web/API/Element/mousewheel_event#The_detail_property
if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
  document.addEventListener("mousewheel", throttle(scrollMove, 1000));
} else {
  document.addEventListener("DOMMouseScroll", throttle(scrollMove, 1000));
}

function scrollMove(e) {
  if (e.deltaY > 0) {
    if (i == homepageSections.length - 1) return;
    i++;
  } else {
    if (i == 0) return;
    i--;
  }

  homepageSectionsContainer.style.marginTop = -100 * i + "vh";
  console.log(homepageSectionsContainer.style.scrollTop);
}
