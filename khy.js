const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

var swiper = new Swiper(".productSwiper", {
  slidesPerView: 4,     
  spaceBetween: 20,     
  loop: false,         
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

document.querySelectorAll('.swiper-slide').forEach(slide => {
  const video = slide.querySelector('video');
  if (video) {
    slide.addEventListener('mouseenter', () => video.play());
    slide.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  }
});
