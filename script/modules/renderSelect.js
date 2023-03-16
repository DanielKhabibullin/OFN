import {choicesElem} from './const.js';

export const renderSelect = (err, data) => {
	if (err) {
		console.warn(err, data);
		return;
	}

	choicesElem.name = 'country';
	const option = document.createElement('option');
	option.value = '';
	option.textContent = 'Select страну';
	choicesElem.append(option);

	const options = data.map(item => {
		const option = document.createElement('option');
		option.value = item.title;
		option.textContent = item.rus;
		return option;
	});

	choicesElem.append(...options);

	return choicesElem;
};
