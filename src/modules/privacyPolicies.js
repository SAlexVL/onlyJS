const privacyPolicies = () => {
	const linkPrivacy = document.querySelectorAll('.link-privacy'),
		popupPrivacy = document.querySelector('.popup-privacy');

	linkPrivacy.forEach(link => {
		link.addEventListener('click', () => {
			popupPrivacy.style.visibility = 'visible';
		});
	});
};

export default privacyPolicies;
