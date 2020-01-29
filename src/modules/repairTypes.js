const repairTypes = () => {
	const repairTypesBlock = document.querySelector('#repair-types'),
		navListRepair = repairTypesBlock.querySelector('.nav-list-repair'),
		navListRepairItems = navListRepair.querySelectorAll('.button_o'),
		typesRepairItems = repairTypesBlock.querySelectorAll('div[class*="types-repair"]'),
		contentCurrent = repairTypesBlock.querySelector('.slider-counter-content__current'),
		contentTotal = repairTypesBlock.querySelector('.slider-counter-content__total'),
		repairTypesSliderWrap = document.querySelector('.repair-types-slider-wrap');

	let currentSlide = 0,
		currentType = 0;

	contentTotal.textContent = typesRepairItems[currentType].children.length;

	const toggleTabContent = index => {
		for (let i = 0; i < navListRepairItems.length; i++) {
			if (index === i) {
				navListRepairItems[i].classList.add('active');
				typesRepairItems[i].style.display = 'block';
				currentType = i;
				currentSlide = 0;
				contentCurrent.textContent = currentSlide + 1;
				contentTotal.textContent = typesRepairItems[currentType].children.length;
			} else {
				navListRepairItems[i].classList.remove('active');
				typesRepairItems[i].style.display = 'none';
			}
		}
	};

	navListRepair.addEventListener('click', e => {
		let target = e.target;
		target = target.closest('.button_o');
		if (target) {
			navListRepairItems.forEach((item, i) => {
				if (item === target) {
					toggleTabContent(i);
				}
			});
		}
	});

	const prevSlide = (item, index, strClass) => {
		item[index].classList.remove(strClass);
	};

	const nextSlide = (item, index, strClass) => {
		item[index].classList.add(strClass);
		contentCurrent.textContent = index + 1;
	};

	repairTypesSliderWrap.addEventListener('click', e => {
		const slides = typesRepairItems[currentType].querySelectorAll('.repair-types-slider__slide');
		prevSlide(slides, currentSlide, 'active');

		if (e.target.closest('#repair-types-arrow_right')) {
			currentSlide++;
		} else if (e.target.closest('#repair-types-arrow_left')) {
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

	// adaptive

	const adaptiTransform = current => {
		navListRepair.style.transform = `translateX(-${current * 240}px)`;
	};

	let current = 0;

	repairTypesBlock.addEventListener('click', e => {
		const target = e.target;

		adaptiTransform(current);

		if (target.closest('#nav-arrow-repair-right_base')) {
			current++;
		} else if (target.closest('#nav-arrow-repair-left_base')) {
			current--;
		}

		if (current > 0) {
			document.querySelector('#nav-arrow-repair-left_base')
				.style.display = 'block';
		} else {
			document.querySelector('#nav-arrow-repair-left_base')
				.style.display = 'none';
		}

		if (current >= navListRepairItems.length - 3) {
			document.querySelector('#nav-arrow-repair-right_base')
				.style.display = 'none';
		} else {
			document.querySelector('#nav-arrow-repair-right_base')
				.style.display = 'block';
		}

		adaptiTransform(current);
	});
};

export default repairTypes;
