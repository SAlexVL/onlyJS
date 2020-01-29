const closePopups = () => {

	const closeBtn = document.querySelectorAll('.close');

	closeBtn.forEach(elem => {
		elem.addEventListener('click', e => {
			e.target.closest('.popup').style.visibility = 'hidden';
		});
	});

	const popups = document.querySelectorAll('.popup');

	popups.forEach(popup => {
		popup.addEventListener('click', e => {
			if (e.target.matches('.popup')) {
				e.target.style.visibility = 'hidden';
			}
		});
	});

};

export default closePopups;
