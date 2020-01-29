const workProcessTabs = () => {
	const scheme = document.getElementById('scheme'),
		schemeList = scheme.querySelector('#scheme-list'),
		schemeListItems = schemeList.querySelectorAll('.scheme-nav__item'),
		shemeSlides = scheme.querySelectorAll('.scheme-slider__slide'),
		shemeDescriptionBlock = scheme.querySelectorAll('.scheme-description-block');

	const toggleTabContent = index => {
		for (let i = 0; i < schemeListItems.length; i++) {
			if (index === i) {
				schemeListItems[i].classList.add('active');
				shemeSlides[i].style.display = 'block';
				shemeDescriptionBlock[i].classList.add('visible-content-block');
			} else {
				schemeListItems[i].classList.remove('active');
				shemeSlides[i].style.display = 'none';
				shemeDescriptionBlock[i].classList.remove('visible-content-block');
			}
		}
	};

	schemeList.addEventListener('click', e => {
		let target = e.target;

		target = target.closest('.button_o');

		if (target) {
			schemeListItems.forEach((item, i) => {
				if (item === target) {
					toggleTabContent(i);
				}
			});
		}
	});


	let current = 0;

	const adaptiTransform = current => {
		schemeList.style.transform = `translateX(-${current * 240}px)`;
	};

	scheme.addEventListener('click', e => {
		const target = e.target;

		adaptiTransform(current);

		if (target.closest('#nav-arrow-scheme_right')) {
			current++;
		} else if (target.closest('#nav-arrow-scheme_left')) {
			current--;
		}

		if (current > 0) {
			document.querySelector('#nav-arrow-scheme_left')
				.style.display = 'block';
		} else {
			document.querySelector('#nav-arrow-scheme_left')
				.style.display = 'none';
		}

		if (current >= schemeListItems.length - 4) {
			document.querySelector('#nav-arrow-scheme_right')
				.style.display = 'none';
		} else {
			document.querySelector('#nav-arrow-scheme_right')
				.style.display = 'block';
		}

		adaptiTransform(current);
	});
};

export default workProcessTabs;
