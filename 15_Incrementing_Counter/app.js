const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
	counter.innerText = '0';

	const updateCounter = () => {
		const target = +counter.getAttribute('data-target');
		const c = +counter.innerText.replaceAll(',', '');

		const increment = target / 500;
		// const increment =  20;

		if (c < target) {
			counter.innerText = `${Math.ceil(c + increment)
				.toString()
				.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}`;
			setTimeout(updateCounter, 1);
		} else {
			counter.innerText = target
				.toString()
				.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
		}
	};
	updateCounter();
});
