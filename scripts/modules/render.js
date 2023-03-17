import {headlinesWrapper} from '../index.js';
import {createCard} from './create.js';
import {fetchRequest} from './fetchRequest.js';
import {preload} from './preload.js';

export const renderHeadlines = (country, count) => {
	preload.show();
	return new Promise((resolve, reject) => {
		fetchRequest(`https://newsapi.org/v2/top-headlines?country=${country}`, {
			method: 'GET',
			headers: {
				'X-Api-Key': '555232f442bf4f898b247d9698e3d2d2',
			},
			callback(err, data) {
				if (err) {
					console.error(err);
					reject(err);
					return;
				}

				const template = document.createDocumentFragment();
				const title = document.createElement('h2');
				title.className = 'title';
				title.textContent = 'Свежие новости';
				const articles = data.articles.slice(0, count);
				const allHeadlines = articles.map(createCard);

				template.append(title, ...allHeadlines);
				headlinesWrapper.append(template);
				preload.remove();
				resolve(template);
			},
		});
	});
};


export const renderNews = (phrase, count) =>
	fetchRequest(`https://newsapi.org/v2/everything?q=${phrase}`, {
		method: 'GET',
		headers: {
			'X-Api-Key': '555232f442bf4f898b247d9698e3d2d2',
		},
		callback(err, data) {
			if (err) {
				console.error(err);
				return;
			}

			const template = document.createDocumentFragment();
			const title = document.createElement('h2');
			title.className = 'title';
			const articles = data.articles;
			const numResults = articles.length;
			title.textContent = `По вашему запросу "${phrase}" найдено ${
				numResults} результатов`;
			const visibleArticles = articles.slice(0, count);
			const allArticles = visibleArticles.map(article =>
				createCard(article, count));


			template.append(title, ...allArticles);
			return template;
		},
	});
