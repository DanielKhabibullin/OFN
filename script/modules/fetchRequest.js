// const URL = './headlines.json';
const URL = 'https://newsapi.org/v2/';
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

export const fetchRequest = async (postfix, {
	method = 'get',
	callback,
	body,
	headers,
}) => {
	try {
		const options = {
			method,
		};

		if (body) options.body = JSON.stringify(body);
		if (headers) options.headers = headers;

		const response = await fetch(`${URL}${postfix}`, options);

		if (response.ok) {
			const data = await response.json();
			if (callback) return callback(null, data);
			return;
		}

		throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
	} catch (err) {
		return callback(err);
	}
};
