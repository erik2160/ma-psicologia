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

// Fecha o dropdown se clicar fora
window.addEventListener("click", function (e) {
  if (!e.target.matches(".dropbtn")) {
    document.querySelectorAll(".dropdown").forEach(function (dropdown) {
      dropdown.classList.remove("show");
    });
  }
});

function redirectToPsicoterapiaPage() {
  window.location.href = "../Psicoterapia/index.html";
}

function redirectToNeuropsicologiaPage() {
  window.location.href = "../Neuropsicologia/index.html";
}