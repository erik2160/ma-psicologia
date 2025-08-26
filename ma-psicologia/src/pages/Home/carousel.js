const carouselImages = document.querySelector(".carousel-images");
const images = document.querySelectorAll(".carousel-images img");

let index = 0;
let intervalId;

// Clona a primeira imagem e adiciona no final para efeito de loop suave
const firstClone = images[0].cloneNode(true);
carouselImages.appendChild(firstClone);

function moveToNextImage() {
    index++;
    carouselImages.style.transform = `translateX(${-index * 100}%)`;
    carouselImages.style.transition = "transform 0.8s ease-in-out";

    // Quando chega na última (clone), volta para a primeira
    if (index === images.length) {
        setTimeout(() => {
            carouselImages.style.transition = "none";
            index = 0;
            carouselImages.style.transform = `translateX(0)`;
        }, 800);
    }
}

function startCarousel() {
    intervalId = setInterval(moveToNextImage, 3000);
}

function stopCarousel() {
    clearInterval(intervalId);
}

// Inicia o carrossel
startCarousel();
