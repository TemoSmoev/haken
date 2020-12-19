document.addEventListener("DOMContentLoaded", () => {
  const applicationLink = document.querySelector(".application_link");

  applicationLink.addEventListener("click", function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  });
});
