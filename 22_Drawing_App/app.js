const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const decreaseBtn = document.querySelector('#decrease');
const increaseBtn = document.querySelector('#increase');
const colorEl = document.querySelector('#color');
const clearBtn = document.querySelector('#clear');
const sizeEl = document.querySelector('#size');
let size = 10;
let color = 'black';
let x;
let y;
let isPressed = false;
canvas.addEventListener('mousedown', (e) => {
	isPressed = true;
	x = e.offsetX;
	y = e.offsetY;
});
canvas.addEventListener('mouseup', (e) => {
	isPressed = false;
	x = undefined;
	y = undefined;
});
canvas.addEventListener('mousemove', (e) => {
	if (isPressed) {
		const x2 = e.offsetX;
		const y2 = e.offsetY;
		drawCircle(x2, y2);
		drawLine(x, y, x2, y2);
		x = x2;
		y = y2;
	}
});
function drawCircle(x, y) {
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.arc(x, y, size, 0, Math.PI * 2);
	ctx.fill();
}
function drawLine(x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle = color;
	ctx.lineWidth = size * 2;
	ctx.stroke();
}

decreaseBtn.addEventListener('click', () => {
	if (size > 1) {
		size--;
		updateSize();
	}
});
increaseBtn.addEventListener('click', () => {
	if (size < 50) {
		size++;
		updateSize();
	}
});

function updateSize() {
	sizeEl.value = size;
}
sizeEl.addEventListener('change', (e) => {
	size = e.target.value;
	if (e.target.value > 50) {
		size = 50;
	}
	updateSize();
});
colorEl.addEventListener('change', (e) => {
	color = e.target.value;
});
clearBtn.addEventListener('click', () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
});
