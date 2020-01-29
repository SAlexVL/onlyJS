const designs = () => {
	const designs = document.querySelector('#designs'),
		popupDesign = document.querySelector('.popup.popup-design'),
		navListDesigns = document.querySelectorAll('.nav-list-designs'),
		designsList = document.querySelector('#designs-list'),
		designsListItems = designsList.querySelectorAll('.designs-nav__item'),
		designsSliderWrap = document.querySelector('.designs-slider-wrap'),
		designsSliderWrapSlides = designsSliderWrap.querySelectorAll(`.custom`),
		previewBlocks = designs.querySelectorAll('.preview-block');

	let currentSlide = 0,
		currentTab = 0;

	const toggleSlide = (currentTab, currentSlide) => {
		const slider = designsSliderWrap.querySelectorAll('.custom')[currentTab],
			slides = slider.querySelectorAll('.designs-slider__style-slide');

		for (let i = 0; i < slides.length; i++) {
			if (i === currentSlide) {
				slider.style.cssText = `transform: translateY(-${i * 508}px);
				transition: transform 0.5s;`;
			}
		}
	};

	const togglePreview = (inners, index, currentTab) => {
		for (let i = 0; i < inners.length; i++) {
			if (i === index) {
				currentSlide = i;
				toggleSlide(currentTab, currentSlide);
				inners[i].classList.add('preview_active');
			} else {
				currentSlide = 0;
				inners[i].classList.remove('preview_active');
			}
		}
	};

	designs.addEventListener('click', e => {
		let target = e.target;

		if (target.closest('.link-list-designs')) {
			popupDesign.style.visibility = 'visible';
		}

		if (target.closest('.preview-block__item')) {
			target = target.closest('.preview-block__item-inner');

			const mainParent = target.closest('.preview-block'),
				inners = mainParent.querySelectorAll('.preview-block__item-inner');

			if (target) {
				inners.forEach((item, i) => {
					if (item === target) {
						togglePreview(inners, i, currentTab);
					}
				});
			}

		}
	});

	const toggleTabContent = index => {
		for (let i = 0; i < designsListItems.length; i++) {
			if (index === i) {
				designsListItems[i].classList.add('active');
				designsSliderWrapSlides[i].classList.add('active-item');
				previewBlocks[i].classList.add('visible');
				currentTab = i;
				currentSlide = 0;
				toggleSlide(currentTab, currentSlide);
			} else {
				designsListItems[i].classList.remove('active');
				designsSliderWrapSlides[i].classList.remove('active-item');
				previewBlocks[i].classList.remove('visible');
			}
		}
	};

	navListDesigns.forEach(nav => {
		nav.addEventListener('click', e => {
			let target = e.target;

			target = target.closest('.designs-nav__item');

			if (target) {
				designsListItems.forEach((item, i) => {
					if (item === target) {
						toggleTabContent(i);
					}
				});
			}
		});
	});

	// adaptive
	const navDesigns = designs.querySelector('.nav-designs'),
		designsNavItems = navDesigns.querySelectorAll('.designs-nav__item'),
		minWidthCurrent = +getComputedStyle(designsList).minWidth.split('px')[0];

	document.querySelector('#nav-arrow-designs_left').style.display = 'none';
	designs.addEventListener('click', e => {
		const target = e.target;
		if (target.closest('#nav-arrow-designs_right')) {
			currentTab++;
		} else if (target.closest('#nav-arrow-designs_left')) {
			currentTab--;
		}

		if (+getComputedStyle(designsList).transform.split(', ')[4] <= -420) {
			document.querySelector('#nav-arrow-designs_right').style.display = 'none';
		} else {
			document.querySelector('#nav-arrow-designs_right').style.display = 'flex';
		}

		if (+getComputedStyle(designsList).transform.split(', ')[4] === -210) {
			document.querySelector('#nav-arrow-designs_left').style.display = 'none';
		} else {
			document.querySelector('#nav-arrow-designs_left').style.display = 'flex';
		}
		designsList.style.transform = `translateX(-${currentTab * 210}px)`;
	});

	designs.addEventListener('click', e => {
		const target = e.target;

		if (target.closest('#design_right')) {
			currentSlide++;
			toggleSlide(currentTab, currentSlide);
		} else if (target.closest('#design_left')) {
			currentSlide--;
			toggleSlide(currentTab, currentSlide);
		}

		if (currentSlide >= 2) {
			currentSlide = 0;
		}

		if (currentSlide < 0) {
			currentSlide = 2;
		}
	});
};

export default designs;
