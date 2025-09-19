const menu = document.querySelector('#menu');
const menuButton = document.querySelector('#menu-button');
const ul = document.querySelector('.wrapper ul');

menu.addEventListener('click', () => {
  menuButton.classList.toggle('active');
  ul.classList.toggle('active');
});