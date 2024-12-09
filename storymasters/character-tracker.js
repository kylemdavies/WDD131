import characters from 'storymasterscharacters.mjs';

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

const characterList = document.getElementById('character-list');

function displayCharacters(data) {
  characterList.innerHTML = ''; // Clear previous entries
  data.forEach(character => {
    const listItem = document.createElement('li');
    listItem.classList.add('character');
    listItem.innerHTML = `
      <h3>${character.name}</h3>
      <p>Species: ${character.species}</p>
      <p>Job: ${character.job}</p>
      <div class="tags">
        ${character.tags.map(tag => `<button class="tag-button" data-tag="${tag}">${tag}</button>`).join('')}
      </div>
    `;
    characterList.appendChild(listItem);
  });
};

window.addEventListener('DOMContentLoaded', () => {
displayCharacters(characters);
});