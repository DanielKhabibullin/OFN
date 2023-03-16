export const createCard = data => {
	const card = document.createElement('div');
	card.className = 'card';

	const img = document.createElement('img');
	img.className = 'card__image';
	img.src = data.urlToImage || 'img/no-photo.jpg';

	const link = document.createElement('a');
	link.className = 'card__link';
	link.href = data.url;
	link.target = '_blank';

	const title = document.createElement('h3');
	title.className = 'card__title';
	title.textContent = data.title;

	link.append(title);

	const text = document.createElement('p');
	text.className = 'card__text';
	text.textContent = data.description;

	const infoWrapper = document.createElement('div');
	infoWrapper.className = 'card__info';

	const dateTime = new Date(data.publishedAt);

	const date = document.createElement('p');
	date.className = 'card__date';

	const day = dateTime.getDate() > 9 ? dateTime.getDate() :
		'0' + dateTime.getDate();
	const month = dateTime.getMonth() + 1 > 9 ? dateTime.getMonth() + 1 :
		'0' + (dateTime.getMonth() + 1);

	date.textContent = `${day}/${month}/${dateTime.getFullYear()}`;

	const time = document.createElement('p');
	time.className = 'card__time';

	const hours = dateTime.getHours() > 9 ? dateTime.getHours() :
		'0' + dateTime.getHours();
	const minutes = dateTime.getMinutes() > 9 ? dateTime.getMinutes() :
		'0' + dateTime.getMinutes();

	time.textContent = `${hours}:${minutes}`;

	const author = document.createElement('p');
	author.className = 'card__author';
	author.textContent = data.author;

	infoWrapper.append(date, time, author);

	card.append(img, link, text, infoWrapper);
	return card;
};
