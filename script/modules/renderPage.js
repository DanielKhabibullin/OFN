import {fetchRequest} from './fetchRequest.js';
import {renderNews} from './renderNews.js';
import {renderSelect} from './renderSelect.js';
import {preload} from './preload.js';
import {newsList, choicesElem} from './const.js';

export const initNews = async () => {
	const news = await fetchRequest('', {
		callback: renderNews,
	});
	newsList.append(news);
};
export const initSelect = async () => {
	const countries = await fetchRequest('', {
		callback: renderSelect,
	});
	choicesElem.append(countries);
};

export const init = async () => {
	preload.show();
	return Promise.all([
		fetchRequest('', {
			callback: renderNews,
		}),
		fetchRequest('country', {
			callback: renderSelect,
		}),
	]);
};

init().then(data => {
	preload.remove();
	newsList.append(data[0]);
	choicesElem.append(data[1]);
});
