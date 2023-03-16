export const renderNews = (err, data) => {
	if (err) {
		console.warn(err, data);
		return;
	}

	const template = document.createDocumentFragment();
	const result = data.articles;
	const news = result.map(item => {
		const publishedAt = item.publishedAt;
		const date = new Date(publishedAt);
		const day = date.getDate().toString().padStart(2, '0');
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const year = date.getFullYear().toString();
		const formattedDate = `${day}/${month}/${year}`;
		const time = new Date(publishedAt);
		const options = {hour: 'numeric', minute: 'numeric', hour12: false};
		const localTime = time.toLocaleTimeString([], options);
		//const shortDescription = item.description.slice(0, 65);

		const newsItem = document.createElement('li');
		newsItem.className = 'news-item';
		newsItem.innerHTML = `
		<img src="${item.urlToImage || 'img/plug.jpg'}" alt="${item.title}"
			class="news-image" height="200">
		<h3 class="news-title">
			<a href="${item.url}" class="news-link" target="_blank">${item.title}</a>
		</h3>
		<p class="news-description">${item.description}</p>
		<div class="news-footer">
			<time class="news-datetime" datetime="${item.publishedAt}">
				<span class="news-date">${formattedDate}</span> ${localTime}
			</time>
			<p class="news-author">${item.author}</p>
		`;
		return newsItem;
	});

	template.append(...news);

	return template;
};
