var getAllSpeakers = function getAllSpeakers() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve([
        {
          image: "assets/images/speaker.jpg",
          link: "https://www.youtube.com/embed/RoAWK9wHDms",
        },
        {
          image: "assets/images/speaker.jpg",
          link: "https://www.youtube.com/embed/RoAWK9wHDms",
        },
        {
          image: "assets/images/speaker.jpg",
          link: "https://www.youtube.com/embed/RoAWK9wHDms",
        },
        {
          image: "assets/images/speaker.jpg",
          link: "https://www.youtube.com/embed/RoAWK9wHDms",
        },
        {
          image: "assets/images/speaker.jpg",
          link: "https://www.youtube.com/embed/RoAWK9wHDms",
        },
        {
          image: "assets/images/speaker.jpg",
          link: "https://www.youtube.com/embed/RoAWK9wHDms",
        },
        {
          image: "assets/images/speaker.jpg",
          link: "https://www.youtube.com/embed/RoAWK9wHDms",
        },
        {
          image: "assets/images/speaker.jpg",
          link: "https://www.youtube.com/embed/RoAWK9wHDms",
        },
        {
          image: "assets/images/speaker.jpg",
          link: "https://www.youtube.com/embed/RoAWK9wHDms",
        },
      ]);
    }, 1500);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  var playFrame = document.querySelector(".play");

  var openVideo = function openVideo(link) {
    playFrame.innerHTML = "<iframe src=".concat(link, "></iframe>");
    playFrame.classList.add("active");
  }; //clicking on blank space should close the window

  playFrame.addEventListener("click", function () {
    playFrame.innerHTML = null;
    playFrame.classList.remove("active");
  });
  var videosContainer = document.querySelector(".videos_list"); // makes api call and inserts elements to html

  getAllSpeakers().then(function (speakers) {
    speakers.forEach(function (speaker) {
      var image = document.createElement("IMG");
      var imageWrapper = document.createElement("div");
      imageWrapper.className = "video";
      image.src = speaker.image;
      imageWrapper.append(image);
      videosContainer.append(imageWrapper);
      imageWrapper.addEventListener("click", function () {
        openVideo(speaker.link);
      });
    });
  });
  var sliderItems = document.querySelectorAll(".slider_item"); // open video on slider item click

  sliderItems.forEach(function (item) {
    item.addEventListener("click", function () {
      openVideo(item.getAttribute("data-url"));
    });
  });
});
