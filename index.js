const player = document.querySelector("#play-video")
const videoOverlay = document.querySelector("#video-overlay")

player.addEventListener("click", function (e) {
  e.preventDefault();
  videoOverlay.classList.add("open")
  videoOverlay.innerHTML += '<iframe src="https://gatoledo.com/proj-codepen/earth.mp4" width="853" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>';
})

videoOverlay.addEventListener("click", function (e) {
  e.preventDefault();
  close_video();
});

document.addEventListener("keyup", function (e) {
  if (e.keyCode === 27) {
    close_video();
  }
});

function close_video() {
  videoOverlay.classList.remove("open")
  videoOverlay.querySelector("iframe").remove();
}

// testimonials

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
  loop: true,
  grabCursor: true,
  spacebetween: 48,

  pagination: {
      el: '.swiper-pagination',
      cickable: true,
      dynamicBullets: true,
  },
  breakpoint: {
      568: {
          slidePerView: 2,
      }
  }
});
