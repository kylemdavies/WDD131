// main.js
import recipes from "./recipes.mjs";
let n = 0;

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

function createRecipeListItem(recipe) {
    const article = document.createElement('article');
    article.classList.add('recipe')

    let fullStarCount = Math.floor(recipe.rating);
    let partialStar = recipe.rating % 1 !== 0;

  let starHTML = '';
    for (let i = 0; i < 5; i++) {
        if (i < fullStarCount) {
        starHTML += '<span aria-hidden="true" class="icon-star">⭐</span>';
        } else if (partialStar && i === fullStarCount) {
        starHTML += '<span aria-hidden="true" class="icon-star-half">★</span>'; // Add a half star icon if rating has decimals
        partialStar = false; // Only apply half star once
        } else {
        starHTML += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
        }
    }

    article.innerHTML = `
    <div class="recipe-img-box">
        <img class="recipe-img" src="${recipe.image}">
    </div>
    <div class="recipe-info box">
        <div id="recipe-${n}" class="tag-buttons-box"></div>
        <h2 class="recipe-name">${recipe.name}</h2>
        <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
        ${starHTML}
        </span>
        <p class="recipe-description">${recipe.description}</p>
    </div>
    `;
    return article;
  }

  function displayRecipes(filteredrecipes) {
    const recipeBookBox = document.getElementById('recipe-book-box');
    recipeBookBox.innerHTML = ''; // Clear existing list items
  
    filteredrecipes.forEach(recipe => {
      const recipeItem = createRecipeListItem(recipe);
      recipeBookBox.appendChild(recipeItem);
      const tagBox = document.getElementById(`recipe-${n}`);
      addTags(recipe.tags,tagBox);
      n++;
    });
    n = 0;
  }

  const searchBar = document.getElementById('recipe-search-input');
  const searchButton = document.getElementById('recipe-search-submit');

  function searchList(recipes, query) {
    const lowerCaseQuery = query.toLowerCase();
    return recipes.filter(recipe => {
      const lowerCaseName = recipe.name.toLowerCase();
      const lowerCaseDescription = recipe.description.toLowerCase();
      return lowerCaseName.includes(lowerCaseQuery) || lowerCaseDescription.includes(lowerCaseQuery);
    });
  }

  searchButton.addEventListener('click', () => {
    const searchQuery = searchBar.value.trim();   
  
    if (!searchQuery) {
      displayRecipes(recipes); // Display all recipes if search bar is empty
      return;
    }
  
    const filteredrecipes = searchList(recipes, searchQuery);
    displayRecipes(filteredrecipes);
  });

  function filterByTag(tag) {
    const lowerCaseTag = tag.toLowerCase(); // Convert the tag to lowercase
    const filteredRecipes = recipes.filter(recipe => {
      return recipe.tags.some(recipeTag => recipeTag.toLowerCase() === lowerCaseTag);
    });
    displayRecipes(filteredRecipes);
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    const randomIndex = Math.floor(Math.random() * recipes.length);

    // Get the random recipe
    const randomRecipe = recipes[randomIndex];

    // Display the random recipe
    displayRecipes([randomRecipe]);
  });