const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');
const header = document.querySelector('header');
const dropBtn = document.querySelector('.dropbtn');

menuIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('active');
});

dropBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const dropdown = e.currentTarget.parentElement;
    dropdown.classList.toggle('show');
});

window.addEventListener('click', (e) => {
    if (!header.contains(e.target)) {
        closeMenuAndDropdown();
    }
});

window.addEventListener('scroll', () => {
    closeMenuAndDropdown();
});

function closeMenuAndDropdown() {
    menu.classList.remove('active');
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('show');
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}
