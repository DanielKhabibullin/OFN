export const getNews = async () => {
	const result = await fetchRequest('./headlines.json', {
		metod: 'get',
		callback: renderNews,
	});
	if (result) {
		console.log('success');
	}
};

