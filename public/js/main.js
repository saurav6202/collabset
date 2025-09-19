const menuButton = document.getElementById('menu-button');
const hamburgerList = document.querySelector('.hamburger');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('active');
  hamburgerList.classList.toggle('active');
});