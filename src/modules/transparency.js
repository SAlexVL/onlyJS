const transparency = () => {
	const transparency = document.getElementById('transparency'),
		popupTransparency = document.querySelector('.popup-transparency'),
		transparencyItemImg = transparency.querySelectorAll('.transparency-item__img'),
		popupSlides = popupTransparency.querySelectorAll('.popup-transparency-slider__slide'),
		transparencyPopupCounter = document.getElementById('transparency-popup-counter'),
		contentCurrent = transparencyPopupCounter.querySelector('.slider-counter-content__current'),
		contentTotal = transparencyPopupCounter.querySelector('.slider-counter-content__total'),
		transparencySlider = document.querySelector('.transparency-slider.row'),
		transparencyItems = transparencySlider.querySelectorAll('.transparency-item');

	let currentSlide = 0;

	contentTotal.textContent = popupSlides.length;

	const prevSlide = (item, index, strClass) => {
		item[index].classList.remove(strClass);
	};

	const nextSlide = (item, index, strClass) => {
		item[index].classList.add(strClass);
		contentCurrent.textContent = currentSlide + 1;
	};

	const slider = () => {
		popupTransparency.addEventListener('click', e => {
			const target = e.target;

			prevSlide(popupSlides, currentSlide, 'active');

			if (target.closest('#transparency_left')) {
				currentSlide--;
			} else if (target.closest('#transparency_right')) {
				currentSlide++;
			}

			if (currentSlide >= popupSlides.length) {
				currentSlide = 0;
			} else if (currentSlide < 0) {
				currentSlide = popupSlides.length - 1;
			}

			nextSlide(popupSlides, currentSlide, 'active');
		});

		transparency.addEventListener('click', e => {
			const target = e.target;

			prevSlide(transparencyItems, currentSlide, 'active');

			if (target.closest('#transparency-arrow_left')) {
				currentSlide--;
			} else if (target.closest('#transparency-arrow_right')) {
				currentSlide++;
			}

			if (currentSlide >= transparencyItems.length) {
				currentSlide = 0;
			} else if (currentSlide < 0) {
				currentSlide = transparencyItems.length - 1;
			}

			nextSlide(transparencyItems, currentSlide, 'active');
		});
	};

	slider();

	transparency.addEventListener('click', e => {
		let target = e.target;

		target = target.closest('.transparency-item__img');

		if (target) {
			transparencyItemImg.forEach((item, i) => {
				if (item === target) {
					currentSlide = i;
					popupTransparency.style.visibility = 'visible';
					contentCurrent.textContent = currentSlide + 1;
					for (let i = 0; i < popupSlides.length; i++) {
						if (i === currentSlide) {
							popupSlides[i].classList.add('active');
						} else {
							popupSlides[i].classList.remove('active');
						}
					}
				}
			});
		}
	});
};

export default transparency;
