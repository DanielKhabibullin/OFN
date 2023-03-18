import {preload} from './preload.js';
import {renderHeadlines, renderNews} from './render.js';

export const controlSearch = (form, newsWrapper, headlinesWrapper) => {
	form.addEventListener('submit', event => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const keywords = Object.fromEntries(formData).phrase;
		const country = Object.fromEntries(formData).country;

		if (!keywords.trim()) {
			alert('Введите поисковый запрос');
			return;
		}

		preload.show();
		Promise.all([renderNews(keywords, 8), renderHeadlines(country, 4)])
			.then(articles => {
				preload.remove();
				newsWrapper.style.display = 'flex';
				newsWrapper.innerHTML = '';
				headlinesWrapper.innerHTML = '';
				newsWrapper.append(articles[0]);
				headlinesWrapper.append(articles[1]);
			});
	});
};

export const controlSelect = (select, newsWrapper, headlinesWrapper) => {
	select.addEventListener('change', ({target}) => {
		const country = target.value;

		preload.show();
		renderHeadlines(country, 8)
			.then(articles => {
				preload.remove();
				newsWrapper.style.display = 'none';
				newsWrapper.innerHTML = '';
				headlinesWrapper.innerHTML = '';
				headlinesWrapper.append(articles);
			});
	});
};
