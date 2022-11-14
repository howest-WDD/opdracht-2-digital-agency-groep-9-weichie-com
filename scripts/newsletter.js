let modal

const togglearrow = function () {
    const arrow = document.querySelector(".js-newsletter-arrow");
    body.classList.toggle("o-darkmode");
  };
  
  const listenClose = function () {
    const close = document.querySelector(".js-newsletter-close");
    
    close.addEventListener("click", function(){
        modal.classList.add("c-newsletterhidden")
    })
  };
  
  const init = function () {
    modal = document.querySelector(".js-newsletter")
    listenClose();
    togglearrow();
  };
  document.addEventListener("DOMContentLoaded", init);