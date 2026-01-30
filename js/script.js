const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('navMenu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  toggle.innerHTML = menu.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Auto close menu when click link
document.querySelectorAll('#navMenu a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    toggle.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Auto 3 detik sliders
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let index = 0;

function getVisibleCount() {
  return window.innerWidth <= 768 ? 1 : 2;
}

function getSlideWidth() {
  return images[0].offsetWidth;
}

function slideGallery() {
  const visible = getVisibleCount();
  const maxIndex = images.length - visible;

  index++;

  if (index > maxIndex) {
    index = 0;
  }

  slides.style.transform = `translateX(-${index * getSlideWidth()}px)`;
}

window.addEventListener('resize', () => {
  index = 0;
  slides.style.transform = 'translateX(0px)';
});

setInterval(slideGallery, 3000);
