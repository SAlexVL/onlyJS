const smoothScroll = () => {
	const anchors = document.querySelectorAll('a[href*="#"]'),
		popupDialogMenu = document.querySelector('.popup-dialog-menu');

	for (const anchor of anchors) {
		anchor.addEventListener('click', event => {
			event.preventDefault();

			if (screen.width < 576) {
				popupDialogMenu.style = "transform: translate3d(0,-100vh,0);";
			} else {
				popupDialogMenu.style.right = '0';
			}

			const blockID = anchor.getAttribute('href');

			document.querySelector(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	}
};

export default smoothScroll;
