const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
	faq.querySelector('.faq-toggle').addEventListener('click', () => {
		faq.classList.toggle('active');
	});
});

/* using parentNode 

const toggles = document.querySelectorAll('faq-toggle');
toggles.forEach((toggle) => {
	toggle.addEventListener('click', () => {
		toggle.parentNode.classList.toggle('active');
	});
});
*/
