import {controlSearch, controlSelect} from './modules/control.js';
import {renderHeadlines} from './modules/render.js';
export const headlinesWrapper = document.querySelector('.main__headlines');
const init = () => {
	const newsWrapper = document.querySelector('.main__news');
	const searchForm = document.querySelector('.header__form');
	const select = document.querySelector('.header__select');

	renderHeadlines('ru', 8).then(headlines =>
		headlinesWrapper.append(headlines));
	controlSearch(searchForm, newsWrapper, headlinesWrapper);
	controlSelect(select, newsWrapper, headlinesWrapper);
};

init();
