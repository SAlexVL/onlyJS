const faqAccortion = () => {
	const accordion = document.querySelector('.accordion'),
		items = accordion.querySelectorAll('.title_block');

	const toggleAccordionContent = index => {
		for (let i = 0; i < items.length; i++) {
			if (index === i) {
				items[i].classList.toggle('msg-active');
			} else {
				items[i].classList.remove('msg-active');
			}
		}
	};

	accordion.addEventListener('click', e => {
		let target = e.target;

		target = target.closest('.title_block');

		if (target) {
			items.forEach((item, i) => {
				if (item === target) {
					toggleAccordionContent(i);
				}
			});
		}
	});
};

export default faqAccortion;
