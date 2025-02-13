const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


let currentSlide = 0;

function updateSlider() {
  const slider = document.querySelector('.testimonial-slider');
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  const totalSlides = document.querySelectorAll('.testimonial').length;
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateSlider();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
}
