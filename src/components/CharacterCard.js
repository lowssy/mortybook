const CharacterCard = (character) => {
	return `
  <article class="CharacterCard">
    <a href="#/${character.id}">
      <img src="${character.image}" alt="${character.name} Image" />
      <h2>${character.name}</h2>
    </a>
  </article>
  `;
};

export default CharacterCard;
