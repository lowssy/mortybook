import { getData, getHash } from '../utils';

const Character = async () => {
	const character = await getData(getHash());

	return `
    <div class="Character">
      <article class="Character__image">
        <img src="${character.image}" alt="${character.name} Image">
      </article>
      <article class="Character__info">
        <h1>${character.name}</h1>
        <br>
        <h3>Episodes: <span>${character.episode.length}</span></h3>
        <h3>Status: <span>${character.status}</span></h3>
        <h3>Species: <span>${character.species}</span></h3>
        <h3>Gender: <span>${character.gender}</span></h3>
        <h3>Origin: <span>${character.origin.name}</span></h3>
        <h3>Last location: <span>${character.location.name}</span></h3>
      </article>
    </div>
  `;
};

export default Character;
