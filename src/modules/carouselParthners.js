const carouselParthners = () => {
	const partners = document.querySelector('#partners'),
		partnersSlider = partners.querySelector('.partners-slider');
	partners.querySelector('#partners-arrow_left').style.display = 'none';
	let current = 0,
		hideElemet;

	if (screen.width > 1025) {
		hideElemet = 2;
	} else if (screen.width >= 576 && screen.width <= 1025) {
		hideElemet = 3;
	} else if (screen.width < 576) {
		hideElemet = 4;
	}

	partners.addEventListener('click', e => {
		const target = e.target;

		if (target.closest('#partners-arrow_right')) {
			current++;
		} else if (target.closest('#partners-arrow_left')) {
			current--;
		}

		if (current === hideElemet) {
			partners.querySelector('#partners-arrow_right').style.display = 'none';
		} else {
			partners.querySelector('#partners-arrow_right').style.display = 'flex';
		}

		if (current === 0) {
			partners.querySelector('#partners-arrow_left').style.display = 'none';
		} else {
			partners.querySelector('#partners-arrow_left').style.display = 'flex';
		}

		partnersSlider.style.transform = `translateX(-${current * 392}px)`;
	});
};

export default carouselParthners;
