const toggleHeaderPhoneList = () => {
	const headerContactsArrow = document.querySelector('.header-contacts__arrow'),
		phoneNumberAccord = document.querySelector('.header-contacts__phone-number-accord'),
		hiddenPhone = phoneNumberAccord.querySelector('a');

	headerContactsArrow.addEventListener('click', () => {
		const position = getComputedStyle(phoneNumberAccord).position;
		if (position === 'absolute') {
			phoneNumberAccord.style.position = 'relative';
			hiddenPhone.style.opacity = '1';
		} else if (position === 'relative') {
			phoneNumberAccord.style.position = 'absolute';
			hiddenPhone.style.opacity = '0';
		}
	});
};

export default toggleHeaderPhoneList;
