function submitFormAPI(data) {
  return fetch("/umbraco/api/content/sendApplication", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
}

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".aplicant_form")
  var successPopup = document.querySelector(".popup.success")
  var errorPopup = document.querySelector(".popup.error")
  var submitButton = document.querySelector(".submit")
  var submitLoader = document.querySelector(".submitLoader")

  function hide(element) {
    element.classList.remove("active")
  }
  function show(element) {
    element.classList.add("active")
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault()
    var valid = true
    var data = {}

    var _loop = function _loop(i) {
      if (form.elements[i].value === "") {
        form.elements[i].classList.add("error")
        valid = false
      }

      form.elements[i].addEventListener("focus", function () {
        form.elements[i].classList.remove("error")
      })
      data[form.elements[i].name] = form.elements[i].value
    }

    for (var i = 0; i < form.elements.length - 1; i++) {
      _loop(i)
    }

    if (valid) {
      hide(submitButton)
      show(submitLoader)
      submitFormAPI(data)
        .then(function (response) {
          return response.json()
        })
        .then(
          function (res) {
            form.reset()
            res ? show(successPopup) : show(errorPopup)
          },
          function () {
            form.reset()
            show(errorPopup)
          }
        )
        .then(() => {
          show(submitButton)
          hide(submitLoader)
        })
    }
  })
  var closePopupButtons = document.querySelectorAll(".popup_button")
  for (var i = 0; i < closePopupButtons.length; i++) {
    closePopupButtons[i].addEventListener("click", function () {
      hide(successPopup)
      hide(errorPopup)
    })
  }
})
