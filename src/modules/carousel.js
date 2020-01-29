const carousel = () => {

	class MobileCarousel {
		constructor({
			main,
			wrap,
			prev,
			next,
			position = 0,
			slidesToShow = 3
		}) {
			this.main = document.querySelector(main);
			this.wrap = document.querySelector(wrap);
			this.slides = document.querySelector(wrap).children;
			this.prev = document.querySelector(prev);
			this.next = document.querySelector(next);
			this.slidesToShow = slidesToShow;
			this.options = {
				position,
				widthSlide: Math.floor(100 / this.slidesToShow),
			};
		}

		init() {
			this.addClass();
			this.addStyles();
			this.controlSlider();
			this.hideControl();
		}

		addClass() {
			this.main.classList.add('insein-slider');
			this.wrap.classList.add('insein-slider__wrap');
			for (const item of this.slides) {
				item.classList.add('insein-slider__item');
			}
		}

		addStyles() {
			const style = document.createElement('style');
			style.id = 'sliderCaruosel-style';
			if (screen.width < 1025) {
				style.textContent = `
					.mobile-slider-carouserl-wrapper{
						display: block;
					}
					.insein-slider{
						overflow: hidden !important;
						margin-top: 30px !important;
					}
					.insein-slider__wrap{
						display: flex !important;
						transition: transform 0.5s !important;
						will-change: transform !important;
					}
					.insein-slider__item{
						flex: 0 0 ${this.options.widthSlide}% !important;
						margin: auto 20px !important;
					}
					.insein-slider__item > button {
						background: none;
						line-height: 17px;
						padding: 5px;
						width: 100%;
						border-radius: 20px;
						border: 2px solid gray;
					}
			`;

				document.head.appendChild(style);
			} else {
				style.textContent = `
				.mobile-slider-carouserl-wrapper{
					display: none;
				}`;
			}
		}

		controlSlider() {
			this.prev.addEventListener('click', this.prevSlider.bind(this));
			this.next.addEventListener('click', this.nextSlider.bind(this));
		}

		prevSlider() {
			if (this.options.position > 0) {
				--this.options.position;
				this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
			}
			this.hideControl();
		}

		nextSlider() {
			if (this.options.position < this.slides.length - this.slidesToShow) {
				++this.options.position;
				this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
			}
			this.hideControl();
		}

		hideControl() {
			if (this.options.position > 0) {
				this.prev.style.display = 'inline-block';
			} else {
				this.prev.style.display = 'none';
			}

			if (this.options.position >= this.slides.length - this.slidesToShow) {
				this.next.style.display = 'none';
			} else {
				this.next.style.display = 'inline-block';
			}
		}

	}

	// const repairTypesCarousel = new MobileCarousel({
	// 	main: '.mobile-slider-carouserl-wrapper',
	// 	wrap: '.nav-repair-types',
	// 	prev: '#repair-types-slider-arrow-left',
	// 	next: '#repair-types-slider-arrow-right',
	// 	slidesToShow: 3,
	// });
	// repairTypesCarousel.init();

	// const designCarousel = new MobileCarousel({
	// 	main: '.mobile-slider-carouserl-wrapper',
	// 	wrap: '#designs-list',
	// 	prev: '#nav-arrow-designs_left',
	// 	next: '#nav-arrow-designs_right',
	// 	slidesToShow: 2,
	// });
	// designCarousel.init();
};

export default carousel;
