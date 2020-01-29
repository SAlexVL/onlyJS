const problems = () => {
	const problems = document.querySelector('#problems'),
		problemsItemIcon = problems.querySelectorAll('.problems-item__icon');


	problemsItemIcon.forEach(elem => {

		elem.addEventListener('mouseover', e => {
			console.log(e.target);
			elem.classList.add('active-item');
			const popup = elem.querySelector('.problems-item-popup');
			popup.classList.remove('problems-item-popup-Rotated');
			if (popup.getBoundingClientRect().top < 0) {
				popup.classList.remove('rotate');
				popup.classList.add('problems-item-popup-Rotated');
			}
			elem.closest('.row').style = "z-index: 1;";
		});

		elem.addEventListener('mouseleave', () => {
			elem.classList.remove('active-item');
			document.querySelectorAll('.problems-item-popup-1').forEach(elem => {
				elem.classList.add('rotate');
			});
		});
	});

	if (screen.width < 1025) {
		const problemsSliderWrap = problems.querySelector('.problems-slider-wrap'),
			problemsItem = problemsSliderWrap.querySelectorAll('.problems-item');

		let currentSlide = 0;

		const prevSlide = (item, i, strClass) => {
			item[i].classList.remove(strClass);
		};

		const nextSlide = (item, i, strClass) => {
			item[i].classList.add(strClass);
		};

		problemsSliderWrap.addEventListener('click', e => {
			const target = e.target;

			prevSlide(problemsItem, currentSlide, 'active-item');

			if (target.closest('.slider-arrow_right-problems')) {
				currentSlide++;
			} else if (target.closest('.slider-arrow_left-problems')) {
				currentSlide--;
			}

			if (currentSlide >= problemsItem.length) {
				currentSlide = 0;
			}

			if (currentSlide < 0) {
				currentSlide = problemsItem.length - 1;
			}

			nextSlide(problemsItem, currentSlide, 'active-item');

		});

	}
};

export default problems;