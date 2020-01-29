const showHintFormula = () => {
	const formulaBlock = document.getElementById('formula'),
		formulaSlider = formulaBlock.querySelector('.formula-slider'),
		items = formulaBlock.querySelectorAll('.formula-item__icon');
	let formulaItem = formulaSlider.querySelectorAll('.formula-item.formula-slider__slide');

	items.forEach(item => {

		item.addEventListener('mouseover', () => {
			item.closest('.formula-item').classList.add('active-item');
			const popup = item.querySelector('.formula-item-popup');
			popup.classList.remove('formula-item-popup-Rotated');
			item.closest('.row').style.cssText = "z-index: 1";
			if (popup.getBoundingClientRect().top < 0) {
				popup.classList.add('formula-item-popup-Rotated');
			}
		});

		item.addEventListener('mouseleave', () => {
			item.closest('.formula-item').classList.remove('active-item');
			item.closest('.row').style.cssText = "z-index: 0";
		});
	});


	if (screen.width >= 850 && screen.width <= 1024) {
		formulaSlider.insertBefore(formulaItem[formulaItem.length - 1], formulaItem[0]);
		formulaItem = formulaSlider.querySelectorAll('.formula-item.formula-slider__slide');

		formulaItem[0].classList.add('prev-slide');
		formulaItem[1].classList.add('active-item');
		formulaItem[2].classList.add('next-slide');

		const prevSlide = () => {
			formulaItem = formulaSlider.querySelectorAll('.formula-item.formula-slider__slide');
			formulaSlider.insertBefore(formulaItem[formulaItem.length - 1], formulaItem[0]);
			formulaItem = formulaSlider.querySelectorAll('.formula-item.formula-slider__slide');
			formulaItem[0].classList.add('prev-slide');
			formulaItem[1].classList.remove('prev-slide');
			formulaItem[1].classList.add('active', 'active-item');
			formulaItem[2].classList.remove('active', 'active-item');
			formulaItem[2].classList.add('next-slide');
			formulaItem[3].classList.remove('next-slide');
		};

		const nextSlide = () => {
			formulaItem = formulaSlider.querySelectorAll('.formula-item.formula-slider__slide');
			const carryOver = formulaSlider.removeChild(formulaItem[0]);
			formulaSlider.appendChild(carryOver).classList.remove('prev-slide', 'active');
			formulaItem = formulaSlider.querySelectorAll('.formula-item.formula-slider__slide');
			formulaItem[0].classList.remove('active-item');
			formulaItem[0].classList.add('prev-slide');
			formulaItem[1].classList.remove('next-slide');
			formulaItem[1].classList.add('active', 'active-item');
			formulaItem[2].classList.add('next-slide');
		};

		formulaBlock.addEventListener('click', e => {
			const target = e.target;

			if (target.closest('#formula-arrow_left')) {
				prevSlide();
			} else if (target.closest('#formula-arrow_right')) {
				nextSlide();
			}
		});

	} else if (screen.width < 850) {

		let currentSlide = 0;
		formulaItem[currentSlide].classList.add('active-item');

		const prevSlide = (item, index, strClass) => {
			item[index].classList.remove(strClass, 'active-item');
		};

		const nextSlide = (item, index, strClass) => {
			item[index].classList.add(strClass, 'active-item');
		};

		formulaBlock.addEventListener('click', e => {
			const target = e.target;

			prevSlide(formulaItem, currentSlide, 'active');

			if (target.closest('#formula-arrow_left')) {
				currentSlide--;
			} else if (target.closest('#formula-arrow_right')) {
				currentSlide++;
			}

			if (currentSlide >= formulaItem.length) {
				currentSlide = 0;
			}

			if (currentSlide < 0) {
				currentSlide = formulaItem.length - 1;
			}

			nextSlide(formulaItem, currentSlide, 'active');
		});

	}

};

export default showHintFormula;
