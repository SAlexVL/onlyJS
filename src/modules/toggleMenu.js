const toggleMenu = () => {
	const menu = document.querySelector('.menu'),
		popupDialogMenu = document.querySelector('.popup-dialog-menu');

	menu.addEventListener('click', e => {
		const target = e.target;
		if (target.matches('.menu__icon')) {
			if (screen.width < 576) {
				popupDialogMenu.style = "transform: translate3d(0,0,0);";
			} else {
				popupDialogMenu.style.right = getComputedStyle(popupDialogMenu).width;
			}
		}
	});

	popupDialogMenu.addEventListener('click', e => {
		const target = e.target;

		if (target.matches('.close-menu') || target.matches('.open-list-repair')) {
			if (screen.width < 576) {
				popupDialogMenu.style = "transform: translate3d(0,-100vh,0);";
			} else {
				popupDialogMenu.style.right = '0';
			}
		}

	});
};

export default toggleMenu;
