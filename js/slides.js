const slideContainer = document.querySelector('.container-slides');
const slides = document.querySelectorAll('.card-item');
const prevButton = document.querySelector('.bi-arrow-left');
const nextButton = document.querySelector('.bi-arrow-right');

let slideIndex = 0;
let slidesToShow = getSlidesToShow();
let autoSlideInterval;
const autoSlideDelay = 4000; // Tempo em milissegundos entre os slides (4 segundos)
let isPaused = false;

// Função para definir quantos slides exibir com base no tamanho da tela
function getSlidesToShow() {
    const width = window.innerWidth;
    if (width <= 580) return 1;
    if (width <= 1300) return 2;
    return 3;
}

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

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        if (!isPaused) {
            nextSlide();
        }
    }, autoSlideDelay);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Event listeners para pausar/continuar ao passar o mouse
if (slideContainer) {
    slideContainer.addEventListener('mouseenter', () => {
        isPaused = true;
    });

    slideContainer.addEventListener('mouseleave', () => {
        isPaused = false;
    });
}

// Event listeners para os botões
if (prevButton) {
    prevButton.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });
}

if (nextButton) {
    nextButton.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });
}

// Redefine os slides visíveis ao redimensionar a tela
window.addEventListener('resize', () => {
    slidesToShow = getSlidesToShow();
    slideIndex = 0;
    showSlides();
    stopAutoSlide(); // Reinicia o auto slide após redimensionar
    startAutoSlide();
});

showSlides();
startAutoSlide(); // Inicia o auto slide ao carregar a página