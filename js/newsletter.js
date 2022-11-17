let modal;
let sect;

const inViewport = new IntersectionObserver(function (el) {
  if (el[0].isIntersecting) {
    modal.classList.add("c-newsletter__animatein");
    console.log("yo");
    modal.classList.remove("c-newsletterhidden");
  }
});

const togglearrow = function () {
  const arrow = document.querySelector(".js-newsletter-arrow");
  arrow.addEventListener("click", function () {
    // modal.classList.remove("c-newswletter__animatein");
    if (modal.classList.contains("c-newsletter__animatearrowout")) {
      modal.classList.remove("c-newsletter__animatearrowout");
      modal.classList.add("c-newsletter__animatearrowin");
      console.log("its small so make big");
    } else {
      modal.classList.remove("c-newsletter__animatearrowin");
      modal.classList.add("c-newsletter__animatearrowout");
      console.log("its big so make small");
    }
    console.log("click arrow");
  });
};

const listenClose = function () {
  const close = document.querySelector(".js-newsletter-close");

  close.addEventListener("click", function () {
    // modal.classList.remove("c-newswletter__animatein");

    modal.classList.add("c-newsletter__animateout");
    modal.classList.remove("c-newsletter__animatein");
    modal.classList.remove("c-newsletter__animatearrowin");
    // modal.classList.add("c-newsletterhidden");
  });
};

const init = function () {
  sect = document.querySelector(".js-homeabout");
  if (document.querySelector(".js-page-home")) {
    inViewport.observe(sect);
  }

  modal = document.querySelector(".js-newsletter");

  listenClose();
  togglearrow();
};
document.addEventListener("DOMContentLoaded", init);
