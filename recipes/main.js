// main.js
import recipes from "./recipes.mjs";

function addTags(tags,name){
    tags.forEach(tag => {
        const tagBox = document.getElementById(name)
        const button = document.createElement('button');
        button.classList.add('tag-button');
        button.setAttribute('type', 'button')
        button.textContent = tag;
        tagBox.appendChild(button);
    });
}

function createRecipeListItem(recipe) {
    const article = document.createElement('article');
    article.classList.add('recipe')
    article.innerHTML = `
                <div class="recipe-img-box">
                    <img class="recipe-img" src="${recipe.image}">
                </div>
                <div class="recipe-info box">
                    <div id="${recipe.name}" class="tag-buttons-box">
                    </div>
                    <h2 class="recipe-name">${recipe.name}</h2>
                    <span
                        class="rating"
                        role="img"
                        aria-label="Rating: ${recipe.rating} out of 5 stars"
                    >
                        <span aria-hidden="true" class="icon-star">⭐</span>
                        <span aria-hidden="true" class="icon-star">⭐</span>
                        <span aria-hidden="true" class="icon-star">⭐</span>
                        <span aria-hidden="true" class="icon-star">⭐</span>
                        <span aria-hidden="true" class="icon-star-empty">☆</span>
                    </span>
                    <p class="recipe-description">${recipe.description}</p>

                </div>
    `;
    addTags(recipe.tags,recipe.name)
    return article;
  }

  function displayRecipes(filteredrecipes) {
    const recipeBookBox = document.getElementById('recipe-book-box');
    recipeBookBox.innerHTML = ''; // Clear existing list items
  
    filteredrecipes.forEach(recipe => {
      const recipeItem = createRecipeListItem(recipe);
      recipeBookBox.appendChild(recipeItem);
    });
  }

  const searchBar = document.getElementById('recipe-search-input');
  const searchButton = document.getElementById('recipe-search-submit');

  searchButton.addEventListener('click', () => {
    const searchQuery = searchBar.value.trim();   
  
    if (!searchQuery) {
      displayRecipes(recipes); // Display all recipes if search bar is empty
      return;
    }
  
    const filteredrecipes = searchList(recipes, searchQuery);
    displayRecipes(filteredrecipes);
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    displayRecipes(recipes); // Initially display all recipes
  });