const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let activeCircle = 1;

next.addEventListener('click', () => {
  if (activeCircle < circles.length) {
    activeCircle++;
  }
  update();
});

prev.addEventListener('click', () => {
  if (activeCircle > 1) {
    activeCircle--;
  }
  update();
});

const update = () => {
  progress.style.width =
    ((activeCircle - 1) / (circles.length - 1)) * 100 - 1 + '%';
  circles.forEach((circle, idx) => {
    if (activeCircle > idx) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  if (activeCircle >= circles.length) {
    next.disabled = true;
  } else if (activeCircle === 1) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
