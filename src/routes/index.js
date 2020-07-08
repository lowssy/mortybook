// Utils
import { getHash, resolveRoute } from '../utils';

async function router(routes) {
	let hash = getHash();
	let route = await resolveRoute(hash);

	return routes[route] ? routes[route] : routes['404'];
}

export default router;
