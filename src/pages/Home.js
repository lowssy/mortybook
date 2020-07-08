// Components
import CharacterCard from '../components/CharacterCard';

// Others
import { getData } from '../utils';

const Home = async () => {
	const characters = await getData();

	return `
    <div class="Characters">
      ${characters.results
				.map((character) => CharacterCard(character))
				.join('')}
      
    </div>
  `;
};

export default Home;
