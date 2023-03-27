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

// nav.responsive
const mediaQuery = window.matchMedia('(max-width: 768px)');

function handleTabletChange(e) {
  const navToggle = document.querySelector('.js-nav-toggle');
  if (e.matches) {
    navToggle.classList.add('js-nav-toggle');
  } else {
    navToggle.classList.remove('js-nav-toggle');
  }
}

mediaQuery.addEventListener('change', handleTabletChange);
handleTabletChange(mediaQuery);

// part2
const navToggle = document.querySelector('.js-nav-toggle');
const dropdownMenuItems = document.querySelectorAll('.dropdown-item');

navToggle.addEventListener('click', function () {
  const navbarNav = document.querySelector('#navbarNav');
  navbarNav.classList.toggle('show');
});

dropdownMenuItems.forEach(function (item) {
  item.addEventListener('click', function () {
    const dropdownMenu = item.closest('.dropdown-menu');
    dropdownMenu.classList.remove('show');
  });
});
