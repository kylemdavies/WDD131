import characters from "./storymasterscharacters.mjs";
let n = 0;

  function hamburgerMenu() {
    document.getElementById("hamburgerMenu").classList.toggle("show");   
  
  };
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");   
  
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };

  function addTags(tags, tagBox) {
    tags.forEach(tag => {
      const button = document.createElement('button');
      button.classList.add('tag-button');
      button.setAttribute('type', 'button');
      button.textContent = tag;
      button.addEventListener('click', () => filterByTag(tag));
      tagBox.appendChild(button);
    });
  }

  function addList(list, itemBox, listType) {
    list.forEach(item => {
      const button = document.createElement('button');
      button.classList.add('item-button');
      button.setAttribute('type', 'button');
      button.textContent = item;
      button.addEventListener('click', () => {if (listType = "traits") {
        filterByTraits(item);
      }});
      itemBox.appendChild(button);
    });
  }

const characterList = document.getElementById('character-list');

function createcharacterListItem(character) {
    const characterDiv = document.createElement('div');
    characterDiv.classList.add('character')

    characterDiv.innerHTML = `
        <div class="character-personalities">
            <h3 class="character-name">Name: ${character.name}</h3>
            <h3 class="character-personality">Personality: ${character.personality}</h3>
            <h3 class="character-ideals">Ideals: ${character.ideals}</h3>
            <h3 class="character-bonds">Bonds: ${character.bonds}</h3>
            <h3 class="character-flaws">Flaws: ${character.flaws}</h3>
            <div id="character-traits-${n}" class="traits-buttons-box">
                <h3 class="character-traits">Traits: </h3>
            </div>
        </div>
        <div class="character-being">
            <h3 class="character-species">Species: ${character.species}</h3>
            <h3 class="character-subspecies">Subspecies: ${character.subspecies}</h3>
        </div>
        <p class="character-description">${character.description}</p>
        <div id="character-tags-${n}" class="tag-buttons-box"></div>
    `;
    return characterDiv;
  }

  function displayCharacters(filteredCharacters) {
    const characterList = document.getElementById('character-list');
    characterList.innerHTML = ''; // Clear existing list items
  
    filteredCharacters.forEach(character => {
      const characterItem = createcharacterListItem(character);
      characterList.appendChild(characterItem);
      const tagBox = document.getElementById(`character-tags-${n}`);
      const traitsBox = document.getElementById(`character-traits-${n}`);
      addList(character.traits,traitsBox,"traits")
      addTags(character.tags,tagBox);
      n++;
    });
    n = 0;
  }

  function filterByTag(tag) {
    const lowerCaseTag = tag.toLowerCase(); // Convert the tag to lowercase
    const filteredCharacters = characters.filter(character => {
      return character.tags.some(characterTag => characterTag.toLowerCase() === lowerCaseTag);
    });
    displayCharacters(filteredCharacters);
  }

  function filterByTraits(trait) {
    const lowerCaseTrait = trait.toLowerCase(); // Convert the trait to lowercase
    const filteredCharacters = characters.filter(character => {
      return character.traits.some(characterTrait => characterTrait.toLowerCase() === lowerCaseTrait);
    });
    displayCharacters(filteredCharacters);
  }

window.addEventListener('DOMContentLoaded', () => {
displayCharacters(characters);
});