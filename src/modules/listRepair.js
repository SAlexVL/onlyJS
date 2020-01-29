const listRepair = () => {
	const links = document.querySelectorAll('.open-list-repair'),
		popupRepairTypes = document.querySelector('.popup-repair-types');

	popupRepairTypes.addEventListener('click', e => {
		if (e.target.matches('.popup-repair-types')) {
			popupRepairTypes.style.visibility = 'hidden';
		}
	});


	const outputData = data => {
		const navListPopupRepair = document.querySelector('.nav-list-popup-repair');

		const getNavItems = () => {
			for (let i = 0; i < data.length; i++) {
				if (i === 0) {
					navListPopupRepair.innerHTML =
						`<button class="button_o popup-repair-types-nav__item active">${data[i].title}</button>`;
				} else {
					navListPopupRepair.innerHTML +=
						`<button class="button_o popup-repair-types-nav__item">${data[i].title}</button>`;
				}
			}
		};

		getNavItems();

		const toggleContent = (index = 0) => {
			const contentBlock = popupRepairTypes.querySelector('.popup-repair-types-content-table'),
				contentTable = contentBlock.querySelector('table'),
				contentHeadTitle = popupRepairTypes.querySelector('.popup-repair-types-content__head-title');

			contentHeadTitle.innerHTML = data[index].title;

			contentTable.innerHTML = '';
			for (let i = 0; i < data[index].priceList.length; i++) {
				contentTable.innerHTML += `<tr class="mobile-row showHide">
						<td class="repair-types-name">${data[index].priceList[i].typeService}</td>
						<td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
						<td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
						<td class="repair-types-value units">${data[index].priceList[i].units}</td>
						<td class="repair-types-value">${data[index].priceList[i].cost}</td>
					</tr>`;
			}

			const unit = contentTable.querySelectorAll('.units');
			unit.forEach(elem => {
				elem.innerHTML = elem.innerHTML.replace(/(\d)/g, '<sup>$1</sup>');
			});
		};

		toggleContent();

		let activeItem = 0;

		const tabs = () => {
			const items = navListPopupRepair.querySelectorAll('.button_o');

			const toggleTab = index => {
				for (let i = 0; i < items.length; i++) {
					if (index === i) {
						items[i].classList.add('active');
					} else {
						items[i].classList.remove('active');
					}
				}
			};

			navListPopupRepair.addEventListener('click', e => {
				let target = e.target;
				target = target.closest('.button_o');

				if (target) {
					items.forEach((item, i) => {
						if (item === target) {
							toggleTab(i);
							toggleContent(i);
							activeItem = i;
						}
					});
				}
			});
		};

		tabs();

		const slider = () => {
			const slides = popupRepairTypes.querySelectorAll('.popup-repair-types-nav__item');

			const prevSlide = (item, i, strClass) => {
				item[i].classList.remove(strClass);
			};

			const nextSlide = (item, i, strClass) => {
				item[i].classList.add(strClass);
				toggleContent(i);
			};

			popupRepairTypes.addEventListener('click', e => {
				const target = e.target;

				prevSlide(slides, activeItem, 'active');

				if (target.closest('#nav-arrow-popup-repair_right')) {
					activeItem++;
				} else if (target.closest('#nav-arrow-popup-repair_left')) {
					activeItem--;
				}

				if (activeItem >= slides.length) {
					activeItem = 0;
				}

				if (activeItem < 0) {
					activeItem = slides.length - 1;
				}

				nextSlide(slides, activeItem, 'active');
			});
		};

		slider();

	};

	const getData = () => {
		let data;

		const parse = obj => {
			data = JSON.parse(obj);
			outputData(data);
		};

		const getFile = file => {
			const request = new XMLHttpRequest();

			request.addEventListener('readystatechange', () => {
				if (request.readyState !== 4) {
					return;
				}

				if (request.status === 200) {
					parse(request.responseText);
				}
			});

			request.open('POST', file);
			request.setRequestHeader('Content-Type', 'application/json');
			request.send();
		};

		getFile('./db/db.json');
	};

	links.forEach(link => {
		link.addEventListener('click', () => {
			popupRepairTypes.style.visibility = 'visible';
			getData();
		});
	});
};

export default listRepair;
