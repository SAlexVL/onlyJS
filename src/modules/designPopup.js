const designPopup = () => {
	const popupDialogDesign = document.querySelector('.popup-dialog-design'),
		navListPopupDesigns = popupDialogDesign.querySelector('#nav-list-popup-designs'),
		designsNavItemsPopup = navListPopupDesigns.querySelectorAll('.designs-nav__item_popup'),
		popupDesignTab = document.querySelector('.popup-design-tab'),
		popupDesignSlider = popupDesignTab.querySelector('.popup-design-slider'),
		popupDesignSliders = popupDesignSlider.querySelectorAll('div[class*="popup-designs-slider__style"]'),
		popupDesignText = popupDesignTab.querySelectorAll('.popup-design-text'),
		popupDesignsCounter = document.getElementById('popup-designs-counter'),
		counterContentCurrent = popupDesignsCounter.querySelector('.slider-counter-content__current'),
		counterContentTotal = popupDesignsCounter.querySelector('.slider-counter-content__total');

	let activeTab = 0;

	const toggleSlide = (currentSlider, currentSlide) => {
		popupDesignSliders[currentSlider].style.cssText =
			`transform: translate(-${currentSlider * 816}px, -${currentSlide * 540}px)`;
		counterContentCurrent.textContent = currentSlide + 1;
	};

	const slider = () => {
		let slides = popupDesignSliders[activeTab].querySelectorAll('.popup-design-slider__style-slide'),
			currentSlide = 0;
		counterContentCurrent.textContent = currentSlide + 1;
		counterContentTotal.textContent = slides.length;

		if (currentSlide === 0) {
			popupDesignTab.querySelector('#popup_design_left').style.display = 'none';
		} else {
			popupDesignTab.querySelector('#popup_design_left').style.display = 'flex';
		}

		popupDesignTab.addEventListener('click', e => {
			slides = popupDesignSliders[activeTab].querySelectorAll('.popup-design-slider__style-slide');
			const target = e.target;

			if (target.closest('#popup_design_right')) {
				currentSlide++;
			} else if (target.closest('#popup_design_left')) {
				currentSlide--;
			}

			if (currentSlide >= slides.length) {
				currentSlide = 0;
			}

			if (currentSlide < 0) {
				currentSlide = slides.length - 1;
			}
			toggleSlide(activeTab, currentSlide);
		});

	};

	slider();

	const toggleSliders = i => {
		popupDesignSliders.forEach(element => {
			element.style.transform = `translateX(-${i * 816}px)`;
		});
	};

	const toggleTabContent = index => {
		for (let i = 0; i < designsNavItemsPopup.length; i++) {
			if (index === i) {
				designsNavItemsPopup[i].classList.add('active');
				popupDesignText[i].classList.add('visible-content-block');
				toggleSliders(i);
				activeTab = i;
				slider();
			} else {
				designsNavItemsPopup[i].classList.remove('active');
				popupDesignText[i].classList.remove('visible-content-block');
			}
		}
	};

	navListPopupDesigns.addEventListener('click', e => {
		let target = e.target;

		target = target.closest('.designs-nav__item_popup');

		if (target) {
			designsNavItemsPopup.forEach((item, i) => {
				if (item === target) {
					toggleTabContent(i);
				}
			});
		}
	});
};

export default designPopup;
