import {controlSearch, controlSelect} from './modules/control.js';
import {preload} from './modules/preload.js';
import {renderHeadlines} from './modules/render.js';
export const headlinesWrapper = document.querySelector('.main__headlines');
const init = () => {
	const newsWrapper = document.querySelector('.main__news');
	const searchForm = document.querySelector('.header__form');
	const select = document.querySelector('.header__select');
	preload.show();
	renderHeadlines('ru', 8).then(headlines => {
		headlinesWrapper.append(headlines);
		preload.remove();
	});
	controlSearch(searchForm, newsWrapper, headlinesWrapper);
	controlSelect(select, newsWrapper, headlinesWrapper);
};

init();
