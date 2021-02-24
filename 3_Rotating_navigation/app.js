const closeBtn = document.getElementById('close');
const openBtn = document.getElementById('open');

const container = document.querySelector('.container');
const circleContainer = document.querySelector('.circle-container');

closeBtn.addEventListener('click', () => {
  container.classList.remove('show-nav');
  circleContainer.classList.remove('show-nav');
});

openBtn.addEventListener('click', () => {
  container.classList.add('show-nav');
  circleContainer.classList.add('show-nav');
});
