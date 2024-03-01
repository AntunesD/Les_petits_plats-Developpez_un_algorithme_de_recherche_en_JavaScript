let recipes;
let saveRecipes;

async function fetchRecipes() {
  try {
    const response = await fetch("../Data/recipes.json");
    if (!response.ok) {
      throw new Error(
        "Erreur lors de la récupération des données des recettes"
      );
    }
    const data = await response.json();
    recipes = data.recipes;
    saveRecipes = data.recipes;
    processRecipes(recipes);
    generateRecipeCards(recipes);
  } catch (error) {
    console.error(error);
  }
}

fetchRecipes();

// Sélection de l'input principale
const inputPrincipal = document.querySelector(".principal-search-input");

// Écouteur d'événement pour détecter les changements dans l'input
inputPrincipal.addEventListener("input", function (event) {
  const motCle = event.target.value.trim(); // Obtenez la valeur de l'input en supprimant les espaces inutiles
  if (motCle.length >= 3) {
    // Vérifiez si la longueur du mot clé est supérieure ou égale à 3
    const resultat = filtrerRecettes(motCle); // Appelez la fonction de filtrage

    if (resultat.length === 0) {
      const message = `Aucune recette ne contient ‘${motCle}’. Vous pouvez chercher ‘tarte aux pommes’, ‘poisson’, etc.`;
      const listRecetteCard = document.getElementById("list-recette-card");
      listRecetteCard.innerHTML = `<h2>${message}</h2>`;
    } else {
      recipes = resultat;
      processRecipes(recipes);
      generateRecipeCards(recipes);
    }
  } else {
    recipes = saveRecipes;
    processRecipes(recipes);
    generateRecipeCards(recipes);
  }
});
