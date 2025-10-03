const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("active");
});

document.querySelector(".dropbtn").addEventListener("click", function (e) {
    e.preventDefault(); // Impede comportamento padrão
    const dropdown = this.parentElement;
    dropdown.classList.toggle("show");
});

window.addEventListener("click", function (e) {
    if (!e.target.matches(".dropbtn")) {
        document.querySelectorAll(".dropdown").forEach(function (dropdown) {
            dropdown.classList.remove("show");
        });
    }
});

window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    header.classList.toggle("scrolled", window.scrollY > 0);
});

function redirectToPsicoterapiaPage() {
    window.location.href = "../Psicoterapia/index.html";
}

function redirectToNeuropsicologiaPage() {
    window.location.href = "../Neuropsicologia/index.html";
}

function redirectToDuvidasPage() {
    window.location.href = "../Duvidas/index.html";
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}