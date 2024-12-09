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

const characterList = document.getElementById('character-list');

function createcharacterListItem(character) {
    const characterDiv = document.createElement('div');
    characterDiv.classList.add('character')

    characterDiv.innerHTML = `
        <div id="character-${n}" class="tag-buttons-box"></div>
        <h3 class="character-name">Name: ${character.name}</h3>
        <h3 class="character-name">Name: ${character.name}</h3>
        
        <p class="character-description">${character.description}</p>
    `;
    return characterDiv;
  }

  function displayCharacters(filteredCharacters) {
    const characterList = document.getElementById('character-list');
    characterList.innerHTML = ''; // Clear existing list items
  
    filteredCharacters.forEach(character => {
      const characterItem = createcharacterListItem(character);
      characterList.appendChild(characterItem);
      const tagBox = document.getElementById(`character-${n}`);
      addTags(character.tags,tagBox);
      n++;
    });
    n = 0;
  }

  function filterByTag(tag) {
    const lowerCaseTag = tag.toLowerCase(); // Convert the tag to lowercase
    const filteredCharacters = characters.filter(characcter => {
      return characcter.tags.some(characcterTag => characcterTag.toLowerCase() === lowerCaseTag);
    });
    displayCharacters(filteredCharacters);
  }

window.addEventListener('DOMContentLoaded', () => {
displayCharacters(characters);
});