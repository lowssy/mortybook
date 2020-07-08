const API_URL = 'https://rickandmortyapi.com/api/character';

export const getHash = () => location.hash.slice(1).toLocaleLowerCase() || '/';

export const resolveRoute = (route) => {
	if (route.length <= 3) {
		let validRoute = route === '/' ? route : '/:id';
		return validRoute;
	}

	return route;
};

export const getData = async (id) => {
	const url = id ? `${API_URL}/${id}` : API_URL;
	console.log(url);

	try {
		const response = await fetch(url);
		const data = await response.json();

		return data;
	} catch (err) {
		console.error('Fetch Error', err);
	}
};
