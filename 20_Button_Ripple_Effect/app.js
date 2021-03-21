const buttons = document.querySelectorAll('.ripple');

buttons.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const x = e.clientX;
		const y = e.clientY;
		// console.log(x, y);
		const buttonTop = e.target.offsetTop;
		const buttonLeft = e.target.offsetLeft;
		// console.log(buttonTop, buttonLeft);

		const xInside = x - buttonLeft;
		const yInside = y - buttonTop;
		// console.log(xInside, yInside);

		const circle = document.createElement('span');
		circle.classList.add('circle');
		circle.style.left = `${xInside}px`;
		circle.style.top = `${yInside}px`;

		btn.appendChild(circle);
		setTimeout(() => {
			circle.remove();
		}, 500);
	});
});

{
	/* <span class='circle' style='top: 0px; left: 0px'></span>; */
}
