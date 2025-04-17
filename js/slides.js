const slideContainer = document.querySelector('.container-slides');
const slides = document.querySelectorAll('.card-item');
const prevButton = document.querySelector('.bi-arrow-left');
const nextButton = document.querySelector('.bi-arrow-right');

let slideIndex = 0;
let isDragging = false;
let startX;
let scrollLeft;

// Função para definir quantos slides exibir com base no tamanho da tela
function getSlidesToShow() {
    const width = window.innerWidth;
    if (width <= 480) return 1;
    if (width <= 768) return 2;
    return 3;
}

let slidesToShow = getSlidesToShow();

function updateSlidesVisibility() {
    slides.forEach((slide, index) => {
        const startIndex = slideIndex * slidesToShow;
        const endIndex = startIndex + slidesToShow;
        slide.style.display = index >= startIndex && index < endIndex ? 'flex' : 'none';
    });
}

function nextSlide() {
    slideIndex++;
    const totalVisibleSlides = Math.ceil(slides.length / slidesToShow);
    if (slideIndex >= totalVisibleSlides) {
        slideIndex = 0;
    }
    updateSlidesVisibility();
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        const totalVisibleSlides = Math.ceil(slides.length / slidesToShow);
        slideIndex = totalVisibleSlides - 1;
    }
    updateSlidesVisibility();
}

// Redefine os slides visíveis ao redimensionar a tela
window.addEventListener('resize', () => {
    slidesToShow = getSlidesToShow();
    slideIndex = 0;
    updateSlidesVisibility();
});

// Adicionando funcionalidade de arrastar (opcional, mas pode melhorar a experiência em desktop)
if (slideContainer) {
    slideContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - slideContainer.offsetLeft;
        scrollLeft = slideContainer.scrollLeft;
        slideContainer.style.cursor = 'grabbing';
    });

    slideContainer.addEventListener('mouseleave', () => {
        isDragging = false;
        slideContainer.style.cursor = 'grab';
    });

    slideContainer.addEventListener('mouseup', () => {
        isDragging = false;
        slideContainer.style.cursor = 'grab';
    });

    slideContainer.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - slideContainer.offsetLeft;
        const walk = (x - startX) * 1; // Ajuste a sensibilidade do arrasto conforme necessário
        slideContainer.scrollLeft = scrollLeft - walk;
    });
}

// Inicializa os slides
updateSlidesVisibility();

// Adiciona listeners para os botões (verifique se os botões existem no HTML)
if (prevButton) {
    prevButton.addEventListener('click', prevSlide);
}

if (nextButton) {
    nextButton.addEventListener('click', nextSlide);
}