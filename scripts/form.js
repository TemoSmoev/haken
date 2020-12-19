submitForm = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector(".applicant_form");
  let popup = document.querySelector(".popup");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    let data = {};
    for (let i = 0; i < form.elements.length - 1; i++) {
      if (form.elements[i].value === "") {
        form.elements[i].classList.add("error");
        valid = false;
      }
      form.elements[i].addEventListener("focus", () => {
        form.elements[i].classList.remove("error");
      });
      data[form.elements[i].name] = form.elements[i].value;
    }
    if (valid) {
      submitForm(data).then((res) => {
        form.reset();
        popup.classList.add("active");
      });
    }
  });
  let closePopupButton = document.querySelector(".popup_button");
  closePopupButton.addEventListener("click", () => {
    popup.classList.remove("active");
  });
});
