document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".smooth");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function clickHandler(e) {
      e.preventDefault();
      var href = this.getAttribute("href");
      var offsetTop = document.querySelector(href).offsetTop;
      scroll({
        top: offsetTop,
        behavior: "smooth",
      });
    });
  }
});
