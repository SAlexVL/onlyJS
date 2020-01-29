const popupPortfolio = () => {
	const portfolio = document.getElementById('portfolio'),
		customSlider = document.querySelector('.portfolio-slider.mobile-hide'),
		customSliderSlides = customSlider.querySelectorAll('.portfolio-slider__slide-frame'),
		popupPortfolio = document.querySelector('.popup-portfolio'),
		popupPortfolioSlider = document.querySelector('.popup-portfolio-slider'),
		popupPortfolioSliderSlides = popupPortfolioSlider.querySelectorAll('.popup-portfolio-slider__slide'),
		popupSlidesText = popupPortfolio.querySelectorAll('.popup-portfolio-text'),
		popupDialogPortfolio = document.querySelector('.popup-dialog-portfolio'),
		contentCurrent = popupDialogPortfolio.querySelector('.slider-counter-content__current'),
		contentTotal = popupDialogPortfolio.querySelector('.slider-counter-content__total');


	contentTotal.textContent = popupPortfolioSliderSlides.length;

	let currentSlide = 0;

	const toggleContent = index => {
		for (let i = 0; i < popupPortfolioSliderSlides.length; i++) {
			if (index === i) {
				// popupPortfolioSlider.style.transform = `translateY(-${i * 634}px)`;
				popupPortfolioSliderSlides[i].style.display = 'block';
				popupSlidesText[i].style.display = 'block';
				contentCurrent.textContent = i + 1;
			} else {
				popupPortfolioSliderSlides[i].style.display = 'none';
				popupSlidesText[i].style.display = 'none';
			}
		}
	};

	const slider = index => {
		const prevSlide = (item, i, strClass) => {
			item[i].classList.remove(strClass);
			toggleContent(i);
		};

		const nextSlide = (item, i, strClass) => {
			item[i].classList.add(strClass);
			toggleContent(i);
		};

		popupDialogPortfolio.addEventListener('click', e => {
			const target = e.target;

			prevSlide(popupPortfolioSliderSlides, index, 'active');

			if (target.closest('#popup_portfolio_right')) {
				index++;
			} else if (target.closest('#popup_portfolio_left')) {
				index--;
			}

			if (index >= popupPortfolioSliderSlides.length) {
				index = 0;
			}

			if (index < 0) {
				index = popupPortfolioSliderSlides.length - 1;
			}

			nextSlide(popupPortfolioSliderSlides, index, 'active');
		});
	};

	portfolio.addEventListener('click', e => {
		let target = e.target;

		target = target.closest('.portfolio-slider__slide-frame');

		if (target) {
			popupPortfolio.style.visibility = 'visible';
			customSliderSlides.forEach((item, i) => {
				if (item === target) {
					toggleContent(i);
					slider(i);
				}
			});
		}
	});
};

export default popupPortfolio;
