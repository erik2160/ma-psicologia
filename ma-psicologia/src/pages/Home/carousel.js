const carouselImages = document.querySelector(".carousel-images");
const images = document.querySelectorAll(".carousel-images img");
const imageWidth = 600;
let index = 0;
let intervalId;

function moveToNextImage() {
    index++;
    carouselImages.style.transition = "transform 1s ease-in-out";
    carouselImages.style.transform = `translateX(${-imageWidth * index}px)`;

    if (index === images.length - 1) {
        setTimeout(() => {
            carouselImages.style.transition = "none";
            index = 0;
            carouselImages.style.transform = `translateX(0px)`;
        }, 1000);
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
