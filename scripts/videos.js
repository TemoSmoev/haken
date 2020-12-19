document.addEventListener("DOMContentLoaded", function () {
  let getAllSpeakers = () =>
    new Promise((resolve) => {
      setTimeout(() => {
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
  let playFrame = document.querySelector(".play");

  let openVideo = (link) => {
    playFrame.innerHTML = `<iframe src=${link}></iframe>`;
    playFrame.classList.add("active");
  };
  //clicking on blank space should close the window
  playFrame.addEventListener("click", () => {
    playFrame.innerHTML = null;
    playFrame.classList.remove("active");
  });

  let videosContainer = document.querySelector(".videos_list");
  // makes api call and inserts elements to html
  getAllSpeakers().then((speakers) => {
    speakers.forEach((speaker) => {
      let image = document.createElement("IMG");
      let imageWrapper = document.createElement("div");
      imageWrapper.className = "video";
      image.src = speaker.image;
      imageWrapper.append(image);
      videosContainer.append(imageWrapper);
      imageWrapper.addEventListener("click", function () {
        openVideo(speaker.link);
      });
    });
  });

  let sliderItems = document.querySelectorAll(".slider_item");
  // open video on slider item click
  sliderItems.forEach((item) => {
    item.addEventListener("click", () => {
      openVideo(item.getAttribute("data-url"));
    });
  });
});
