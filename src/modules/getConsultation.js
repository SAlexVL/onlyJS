const getConsultation = () => {
	const inputsGetCons = document.querySelectorAll('.get-consultation'),
		popupConsultation = document.querySelector('.popup-consultation'),
		closeConsultation = popupConsultation.querySelectorAll('.close-consultation');

	inputsGetCons.forEach(input => {
		input.addEventListener('click', () => {
			popupConsultation.style.visibility = 'visible';
		});
	});

	closeConsultation.forEach(elem => {
		elem.addEventListener('click', () => {
			popupConsultation.style.visibility = 'hidden';
		});
	});

};

export default getConsultation;
