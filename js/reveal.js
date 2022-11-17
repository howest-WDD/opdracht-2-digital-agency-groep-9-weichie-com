function reveal() {
  var reveals = document.querySelectorAll(".u-reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 30;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

const init = function () {
  window.addEventListener("scroll", reveal);
};
document.addEventListener("DOMContentLoaded", init);
