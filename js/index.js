const elPokemonList = document.querySelector(".pokemon__list");

for (let pokemon of pokemons) {
  // ! CREATE ELEMENTS
  const newLI = document.createElement("li");
  const newDivCard = document.createElement("div");
  const newImg = document.createElement("img");
  const newDivCardBody = document.createElement("div");
  const newPokemonName = document.createElement("h5");
  const newPokemonType = document.createElement("p");
  const newCardItem = document.createElement("div");
  const newPokemonHeight = document.createElement("p");
  const newPokemonWeight = document.createElement("p");

  // !SET ATTTIBUTE
  newLI.setAttribute("class", "pokemon__item align-self-stretch");
  newDivCard.setAttribute("class", "card border-dark border-3");
  newDivCard.setAttribute("style", "width: 18rem;");
  newImg.setAttribute("src", pokemon.img);
  newImg.setAttribute("class", "card-img-top");
  newImg.setAttribute("alt", "pokemon-of-pokemons");
  newImg.setAttribute("width", "157");
  newImg.setAttribute("height", "157");
  newDivCardBody.setAttribute(
    "class",
    "card-body border-top border-3 border-dark"
  );
  newPokemonName.setAttribute("class", "card-title");
  newPokemonType.setAttribute("class", "card-text");
  newCardItem.setAttribute("class", "card-item d-flex");
  newPokemonHeight.setAttribute("class", "card-title me-4");
  newPokemonWeight.setAttribute("class", "card-title");

  newPokemonName.textContent = pokemon.name;
  newPokemonType.textContent = pokemon.type;
  newPokemonWeight.textContent = pokemon.weight;
  newPokemonHeight.textContent = pokemon.height;

  // !APPEND

  newCardItem.appendChild(newPokemonHeight);
  newCardItem.appendChild(newPokemonWeight);
  newDivCardBody.appendChild(newPokemonName);
  newDivCardBody.appendChild(newPokemonType);
  newDivCardBody.appendChild(newCardItem);
  newDivCard.appendChild(newImg);
  newDivCard.appendChild(newDivCardBody);
  newLI.appendChild(newDivCard);
  elPokemonList.appendChild(newLI);
}
