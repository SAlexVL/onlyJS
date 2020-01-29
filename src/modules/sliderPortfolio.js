const sliderPortfolio = () => {
	const portfolioSliderWrap = document.querySelector('.portfolio-slider-wrap'),
		portfolioSlides = portfolioSliderWrap.querySelectorAll('.portfolio-slider__slide'),
		portfolioSliderMobile = portfolioSliderWrap.querySelector('.portfolio-slider-mobile'),
		portfolioMobileSlides = portfolioSliderMobile.querySelectorAll('.portfolio-slider__slide-frame'),
		contentCurrent = portfolioSliderWrap.querySelector('.slider-counter-content__current'),
		contentTotal = portfolioSliderWrap.querySelector('.slider-counter-content__total');

	portfolioSlides.forEach(item => {
		item.style.maxWidth = '352px';
		item.style.transform = 'translateX(0px)';
	});

	const totalItem = portfolioSlides.length * 2;

	let maxVisible,
		numberOfHidden,
		clickAvilable,
		currentClick = 0;

	const prevSlide = () => {
		currentClick--;
		let currentTransform = +getComputedStyle(portfolioSlides[0]).transform.split(', ')[4];
		portfolioSlides.forEach(item => {
			item.style.transform = 'translateX(' + (currentTransform + 352) + 'px)';
		});
		currentTransform = +getComputedStyle(portfolioSlides[0]).transform.split(', ')[4];
	};

	const nextSlide = () => {
		currentClick++;
		let currentTransform = +getComputedStyle(portfolioSlides[0]).transform.split(', ')[4];
		portfolioSlides.forEach(item => {
			item.style.transform = 'translateX(' + (currentTransform - 352) + 'px)';
		});
		currentTransform = +getComputedStyle(portfolioSlides[0]).transform.split(', ')[4];
	};

	const switchSlide = element => {

		if (screen.width >= 1025) {
			maxVisible = 6;
			numberOfHidden = totalItem - maxVisible;
			clickAvilable = numberOfHidden / 2;
		}

		if (screen.width >= 900 && screen.width < 1025) {
			maxVisible = 4;
			numberOfHidden = totalItem - maxVisible;
			clickAvilable = numberOfHidden / 2;
		}

		if (screen.width >= 576 && screen.width < 900) {
			maxVisible = 2;
			numberOfHidden = totalItem - maxVisible;
			clickAvilable = numberOfHidden / 2;
		}

		if (element.closest('#portfolio-arrow_right')) {
			nextSlide();
		}

		if (element.closest('#portfolio-arrow_left')) {
			prevSlide();
		}

		if (clickAvilable - currentClick <= 0) {
			portfolioSliderWrap.querySelector('#portfolio-arrow_right').style.display = 'none';
		} else {
			portfolioSliderWrap.querySelector('#portfolio-arrow_right').style.display = 'flex';
		}

		if (currentClick > 0) {
			portfolioSliderWrap.querySelector('#portfolio-arrow_left').style.display = 'flex';
		} else {
			portfolioSliderWrap.querySelector('#portfolio-arrow_left').style.display = 'none';
		}
	};

	portfolioSliderWrap.addEventListener('click', e => {
		const target = e.target;

		if (target.closest('#portfolio-arrow_right') || target.closest('#portfolio-arrow_left')) {
			switchSlide(target);
		}
	});

	let currentSlide = 0;
	contentTotal.textContent = portfolioMobileSlides.length;

	const mobilePrevSlide = (item, index, strClass) => {
		item[index].classList.remove(strClass);
	};

	const mobileNextSlide = (item, index, strClass) => {
		item[index].classList.add(strClass);
		contentCurrent.textContent = index + 1;
	};

	portfolioSliderWrap.addEventListener('click', e => {
		const target = e.target;

		mobilePrevSlide(portfolioMobileSlides, currentSlide, 'active');

		if (target.closest('#portfolio-arrow-mobile_right')) {
			currentSlide++;
		} else if (target.closest('#portfolio-arrow-mobile_left')) {
			currentSlide--;
		}

		if (currentSlide >= portfolioMobileSlides.length) {
			currentSlide = 0;
		}

		if (currentSlide < 0) {
			currentSlide = portfolioMobileSlides.length - 1;
		}

		mobileNextSlide(portfolioMobileSlides, currentSlide, 'active');
	});

};

export default sliderPortfolio;
