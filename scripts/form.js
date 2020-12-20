submitForm = function submitForm(data) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(true);
    }, 1000);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".aplicant_form");
  var popup = document.querySelector(".popup");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var valid = true;
    var data = {};

    var _loop = function _loop(i) {
      if (form.elements[i].value === "") {
        form.elements[i].classList.add("error");
        valid = false;
      }

      form.elements[i].addEventListener("focus", function () {
        form.elements[i].classList.remove("error");
      });
      data[form.elements[i].name] = form.elements[i].value;
    };

    for (var i = 0; i < form.elements.length - 1; i++) {
      _loop(i);
    }

    if (valid) {
      submitForm(data).then(function (res) {
        form.reset();
        popup.classList.add("active");
      });
    }
  });
  var closePopupButton = document.querySelector(".popup_button");
  closePopupButton.addEventListener("click", function () {
    popup.classList.remove("active");
  });
});
