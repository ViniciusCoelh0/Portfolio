const slideContainer = document.querySelector('.container-slides');
const slides = document.querySelectorAll('.card-item');
const prevButton = document.querySelector('.bi-arrow-left');
const nextButton = document.querySelector('.bi-arrow-right');

let slideIndex = 0;

// Função para definir quantos slides exibir com base no tamanho da tela
function getSlidesToShow() {
  const width = window.innerWidth;
  if (width <= 480) return 1;
  if (width <= 768) return 2;
  return 3;
}

let slidesToShow = getSlidesToShow();

function showSlides() {
  slides.forEach((slide, index) => {
    const startIndex = slideIndex * slidesToShow;
    const endIndex = startIndex + slidesToShow;
    slide.style.display = index >= startIndex && index < endIndex ? 'flex' : 'none';
  });
}

function nextSlide() {
  slideIndex++;
  if (slideIndex * slidesToShow >= slides.length) {
    slideIndex = 0;
  }
  showSlides();
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = Math.floor((slides.length - 1) / slidesToShow);
  }
  showSlides();
}

// Redefine os slides visíveis ao redimensionar a tela
window.addEventListener('resize', () => {
  slidesToShow = getSlidesToShow();
  slideIndex = 0;
  showSlides();
});

showSlides();

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
