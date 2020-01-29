const reviewsSlider = () => {
	const reviews = document.getElementById('reviews'),
		slides = reviews.querySelectorAll('.reviews-slider__slide');

	let currentSlide = 0;

	const prevSlide = (item, index, strClass) => {
		item[index].classList.remove(strClass);
	};

	const nextSlide = (item, index, strClass) => {
		item[index].classList.add(strClass);
	};

	reviews.addEventListener('click', e => {
		const target = e.target;

		prevSlide(slides, currentSlide, 'active');

		if (target.closest('#reviews-arrow_right')) {
			currentSlide++;
		} else if (target.closest('#reviews-arrow_left')) {
			currentSlide--;
		}

		if (currentSlide >= slides.length) {
			currentSlide = 0;
		}

		if (currentSlide < 0) {
			currentSlide = slides.length - 1;
		}

		nextSlide(slides, currentSlide, 'active');

	});
};

export default reviewsSlider;
