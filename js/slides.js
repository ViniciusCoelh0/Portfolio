// Seleciona os elementos necessários
const slideContainer = document.querySelector('.container-slides');
const slides = document.querySelectorAll('.card-item');
const prevButton = document.querySelector('.bi-arrow-left');
const nextButton = document.querySelector('.bi-arrow-right');

// Variáveis para controlar o slide atual e o número de slides visíveis
let slideIndex = 0;
const slidesToShow = 3; 

// Função para mostrar os slides
function showSlides() {
  slides.forEach((slide, index) => {
    const startIndex = slideIndex * slidesToShow;
    const endIndex = startIndex + slidesToShow;
    slide.style.display = index >= startIndex && index < endIndex ? 'flex' : 'none';
  });
}

// Função para mostrar o próximo conjunto de slides
function nextSlide() {
  slideIndex++;
  if (slideIndex * slidesToShow >= slides.length) {
    slideIndex = 0;
  }
  showSlides();
}

// Função para mostrar o conjunto anterior de slides
function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = Math.floor((slides.length - 1) / slidesToShow);
  }
  showSlides();
}



// Mostra os slides iniciais
showSlides();

// Adiciona event listeners aos botões de navegação
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);