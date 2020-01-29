const feedback = () => {
	const feedbackForms = document.querySelectorAll('form[id*="feedback"]'),
		popupThank = document.querySelector('.popup-thank');

	const ifNotEmpty = form => {
		const arrEmptyInputs = [],
			inputs = form.querySelectorAll('input[type="text"]');

		inputs.forEach(input => {
			if (input.value.trim() === '') {
				arrEmptyInputs.push(input.name);
			}
		});

		return arrEmptyInputs;
	};

	const postData = formData => fetch('./server.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formData),
	});

	feedbackForms.forEach(form => {
		form.addEventListener('submit', e => {
			e.preventDefault();
			const target = e.target,
				textInputs = target.querySelectorAll('input[type="text"]'),
				checkbox = target.querySelector('input[type="checkbox"]'),
				formData = new FormData(target),
				body = {};

			textInputs.forEach(item => {
				item.removeAttribute('style');
			});

			const emptyInpust = ifNotEmpty(target);

			if (emptyInpust.length !== 0) {
				emptyInpust.forEach(input => {
					target.querySelector(`input[name="${input}"]`).style.boxShadow = '0 0 20px #f74949';
				});
			} else if (!checkbox.checked) {
				alert('Необходимо подтвердить согласие с политикой конфиденциальности');
			} else {
				formData.forEach((val, key) => {
					body[key] = val;
				});

				postData(body)
					.then(resonse => {
						if (resonse.status !== 200) {
							throw new Error('status network not 200');
						}
						popupThank.style.visibility = 'visible';
						target.reset();
					})
					.catch(error => {
						console.error(error);
					});
			}
		});
	});

};

export default feedback;
