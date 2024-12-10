import characters from "./storymasterscharacters.mjs";
let n = 0;

function hamburgerMenu() {
  document.getElementById("hamburgerMenu").classList.toggle("show");

}

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
}

function divPopUp() {
  document.getElementById("character-popup").style.display = "block";
}

// Function to close the pop-up using the close button
function closePopUp() {
  document.getElementById("character-popup").style.display = "none";
}


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
      button.addEventListener('click', () => {switch (listType) {
        case "traits":
            filterByTraits(item)
          break;
        case "allies":
            filterByAllies(item)
          break;
        case "languages":
            filterByLanguages(item)
          break;
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
            <h3 class="character-job">Class: ${character.job}</h3>
            <h3 class="character-subjob">Subclass: ${character.subjob}</h3>
            <h3 class="character-background">Background: ${character.background}</h3>
            <h3 class="character-level">Level: ${character.level}</h3>
        </div>
        <div class="character-backgrounds">
            <h3 class="character-backstory">Backstory: ${character.backstory}</h3>
            <div id="character-allies-${n}" class="allies-buttons-box">
                <h3 class="character-allies">Allies/Organizations: </h3>
            </div>
            <div id="character-languages-${n}" class="languages-buttons-box">
                <h3 class="character-languages">Languages: </h3>
            </div>
        </div>
        
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
      const alliesBox = document.getElementById(`character-allies-${n}`);
      const languagesBox = document.getElementById(`character-languages-${n}`);
      addList(character.traits,traitsBox,"traits")
      addList(character.allies,alliesBox,"allies")
      addList(character.languages,languagesBox,"languages")
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
  
  function filterByAllies(ally) {
    const lowerCaseAlly = ally.toLowerCase(); // Convert the ally to lowercase
    const filteredCharacters = characters.filter(character => {
      return character.allies.some(characterally => characterally.toLowerCase() === lowerCaseAlly);
    });
    displayCharacters(filteredCharacters);
  }

  function filterByLanguages(language) {
    const lowerCaseLanguage = language.toLowerCase(); // Convert the language to lowercase
    const filteredCharacters = characters.filter(character => {
      return character.languages.some(characterLanguage => characterLanguage.toLowerCase() === lowerCaseLanguage);
    });
    displayCharacters(filteredCharacters);
  }

window.addEventListener('DOMContentLoaded', () => {
displayCharacters(characters);
});

function addNewCharacter()
  {
    let name = document.getElementById('character-name-input').content;
    let personality = document.getElementById('character-personality-input').content;
    let ideals = document.getElementById('character-ideals-input').content;
    let bonds = document.getElementById('character-bonds-input').content;
    let flaws = document.getElementById('character-flaws-input').content;
    let traits = document.getElementById('character-traits-input').content;
    let species = document.getElementById('character-species-input').content;
    let subspecies = document.getElementById('character-subspecies-input').content;
    let job = document.getElementById('character-job-input').content;
    let subjob = document.getElementById('character-subjob-input').content;
    let background = document.getElementById('character-background-input').content;
    let level = document.getElementById('character-level-input').content;
    let backstory = document.getElementById('character-backstory-input').content;
    let allies = document.getElementById('character-allies-input').content;
    let languages = document.getElementById('character-languages-input').content;
    let tags = document.getElementById('character-tags-input').content;
    let newChar = {}
    newChar["name"] = name;
    newChar["personality"] = personality;
    newChar["ideals"] = ideals;
    newChar["bonds"] = bonds;
    newChar["flaws"] = flaws;
    newChar["species"] = species;
    newChar["subspecies"] = subspecies;
    newChar["job"] = job;
    newChar["subjob"] = subjob;
    newChar["background"] = background;
    newChar["level"] = level;
    newChar["backstory"] = backstory;
    newChar["traits"] = traits.split(", ");
    newChar["allies"] = allies.split(", ");
    newChar["languages"] = languages.split(", ");
    newChar["tags"] = traits.split(", ");
    characters.push(newChar);
    displayCharacters(characters);
    closePopUp();
  }

const hamburgerBtn = document.getElementById("hamburgerBtn")
hamburgerBtn.addEventListener("click", hamburgerMenu)
const ccharbtn = document.getElementById("create-char-btn")
ccharbtn.addEventListener("click", divPopUp)
const addChar = document.getElementById("add-char-btn")
addChar.addEventListener("click", addNewCharacter)
const close = document.getElementById("close-button")
close.addEventListener("click", closePopUp)