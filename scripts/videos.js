function getVideosAPI(skip, take, categoryId, keyword) {
  return fetch(`/umbraco/api/content/getVideos?skip=${skip}&take=${take}&categoryId=${categoryId}&keyword=${keyword}`)
}

document.addEventListener("DOMContentLoaded", function () {
  var TAKE = 6
  var videosContainer = document.querySelector(".videos_list")
  var playFrame = document.querySelector(".play")
  var findButton = document.querySelector(".filter_search")

  function openVideo(link) {
    playFrame.innerHTML = "<iframe src=".concat(link, "></iframe>")
    playFrame.classList.add("active")
  } //clicking on blank space should close the window

  function hide(element) {
    element.classList.remove("active")
  }
  function show(element) {
    element.classList.add("active")
  }

  function getVideos(skip = 0, take = TAKE, clearOldVideos = false) {
    if (clearOldVideos) {
      videosContainer.innerHTML = ""
    }
    var notFoundDiv = document.querySelector(".videos_not_found")
    var moreButton = document.querySelector(".more")
    var loadingSpinner = document.querySelector("#loading")
    hide(notFoundDiv)
    hide(moreButton)
    show(loadingSpinner)
    var categoryId = document.querySelector(".filter_category").value
    var keyword = document.querySelector(".filter_input").value
    getVideosAPI(skip, take, categoryId, keyword)
      .then(function (response) {
        return response.json()
      })
      .then(
        function (videos) {
          hide(loadingSpinner)
          if (videos.length) {
            renderVideos(videos)
            show(moreButton)
          } else {
            show(notFoundDiv)
          }
        },
        function () {
          hide(loadingSpinner)
          show(notFoundDiv)
        }
      )
  }

  function renderVideos(videos) {
    videos.forEach(function (speaker) {
      var image = document.createElement("IMG")
      var imageWrapper = document.createElement("div")
      imageWrapper.className = "video"
      image.src = speaker.imagePreviwLink
      imageWrapper.append(image)
      videosContainer.append(imageWrapper)
      imageWrapper.addEventListener("click", function () {
        openVideo(speaker.link)
      })
    })
  }

  playFrame.addEventListener("click", function () {
    playFrame.innerHTML = null
    playFrame.classList.remove("active")
  })

  var sliderItems = document.querySelectorAll(".slider_item") // open video on slider item click
  sliderItems.forEach(function (item) {
    item.addEventListener("click", function () {
      openVideo(item.getAttribute("data-url"))
    })
  })

  //getting videos
  findButton.addEventListener("click", function () {
    getVideos(0, TAKE, true)
  })
  getVideos()
  //more videos
  ;(function (params) {
    var i = 1
    document.querySelector(".more").addEventListener("click", function () {
      getVideos(i * TAKE, TAKE)
      i++
    })
  })()
})
