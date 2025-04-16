document.addEventListener('DOMContentLoaded', function() {
// Эффект появления на прокрутке
const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', function() {
elements.forEach(element => {
const position = element.getBoundingClientRect().top;
if (position < window.innerHeight - 100) {
element.classList.add('fade-in');
}
});
});

// Плавное появление кнопки на прокрутке
const button = document.querySelector('.cta-button');
window.addEventListener('scroll', function() {
const position = button.getBoundingClientRect().top;
if (position < window.innerHeight - 100) {
button.classList.add('fade-in');
}
});
});
