// Pages
import Home from './pages/Home';
import Character from './pages/Character';
import About from './pages/About';
import Error404 from './pages/Error404';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Others
import router from './routes';

addEventListener('load', render);
addEventListener('hashchange', render);

async function render() {
	const root = document.getElementById('root');

	root.innerHTML = await Header();

	let page = await router({
		'404': Error404,
		'/': Home,
		'/about': About,
		'/:id': Character,
	});

	root.innerHTML += await page();

	root.innerHTML += await Footer();
}
