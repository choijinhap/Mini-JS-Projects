const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

smallCups.forEach((cup, idx) => {
	cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(cupIdx) {
	if (
		cupIdx === smallCups.length - 1 &&
		smallCups[cupIdx].classList.contains('full')
	) {
		cupIdx--;
	} else if (
		smallCups[cupIdx].classList.contains('full') &&
		!smallCups[cupIdx].nextElementSibling.classList.contains('full')
	) {
		cupIdx--;
	}
	smallCups.forEach((cup, idx) => {
		if (idx <= cupIdx) {
			cup.classList.add('full');
		} else {
			cup.classList.remove('full');
		}
	});
	updateBigcup();
}

function updateBigcup() {
	const fullCups = document.querySelectorAll('.cup-small.full').length;
	const totalCups = smallCups.length;

	if (!fullCups) {
		percentage.style.visibility = 'hidden';
		percentage.style.height = 0;
	} else {
		percentage.style.visibility = 'visible';
		percentage.style.height = `${(fullCups / totalCups) * 100}%`;
		percentage.innerText = `${(fullCups / totalCups) * 100}%`;
	}
	if (fullCups === totalCups) {
		remained.style.visibility = 'hidden';
		remained.style.height = 0;
	} else {
		remained.style.visibility = 'visible';
		liters.innerText = `${2 - 0.25 * fullCups}L`;
	}
}
