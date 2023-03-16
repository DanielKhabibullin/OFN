import {fetchRequest} from './fetchRequest.js';
import {renderNews} from './renderNews.js';
import {renderSelect} from './renderSelect.js';
import {preload} from './preload.js';
import {newsList, choicesElem, formSearch, btnSubmit, title} from './const.js';

// let url = 'https://newsapi.org/v2/top-headlines?' +
// 					'country=us&' +
// 					'apiKey=555232f442bf4f898b247d9698e3d2d2';
// let req = new Request(url);
// fetch(req)
// 	.then((response) => {
// 		console.log(response.json());
// 	});

// let urlSearch = 'https://newsapi.org/v2/everything?' +
// 				'q=Apple&' +
// 				'from=2023-03-15&' +
// 				'sortBy=popularity&' +
// 				'apiKey=555232f442bf4f898b247d9698e3d2d2';

export const initNews = async () => {
	const news = await fetchRequest('', {
		callback: renderNews,
		headers: {
			'X-Api-Key': '555232f442bf4f898b247d9698e3d2d2',
		},
	});
	newsList[0].append(news);
};
export const initSelect = async () => {
	const countries = await fetchRequest('', {
		callback: renderSelect,
	});
	choicesElem.append(countries);
};

export const initFreshNews = async () => {
	const news = await fetchRequest('', {
		callback: renderNews,
		headers: {
			'X-Api-Key': '555232f442bf4f898b247d9698e3d2d2',
		},
	});
	newsList[1].append(news);
};

export const init = async () => {
	preload.show();
	return Promise.all([
		fetchRequest('', { // `top-headlines?country=${formSearch.country.value || 'ru'}&pageSize=8`
			callback: renderNews,
			headers: {
				'X-Api-Key': '555232f442bf4f898b247d9698e3d2d2',
			},
		}),
		fetchRequest('', { //`everything?q=${formSearch.search.value ||'Россия'}&pageSize=4`, {
			callback: renderSelect,
			headers: {
				'X-Api-Key': '555232f442bf4f898b247d9698e3d2d2',
			},
		}),
	]);
};

btnSubmit.addEventListener('click', (e) => {
	e.preventDefault();
	init().then(data => {
		preload.remove();
		title[0].textContent = `По вашему запросу "${formSearch.country
			.textContent || 'Россия'}" найдено 8 результатов`;
		title[1].textContent = 'Свежие новости';
		newsList[0].append(data[0]);
		newsList[1].append(data[1]);
		formSearch.reset();
	});
});
