/**Script qui genere les cartes de recette ********/

async function generateRecipeCards(recipes) {
  const nombreRecette = recipes.length;
  const recetteSpan = document.querySelector(".nombre-recette");
  recetteSpan.innerHTML = `${nombreRecette} recettes`;
  const listRecetteCard = document.getElementById("list-recette-card");
  listRecetteCard.innerHTML = "";
  recipes.forEach((recipe) => {
    const article = document.createElement("article");
    article.classList.add("recette-card");
    article.id = recipe.id;

    const tempsSpan = document.createElement("span");
    tempsSpan.classList.add("temps");
    tempsSpan.textContent = `${recipe.time}min`;
    article.appendChild(tempsSpan);

    const recetteCardImg = document.createElement("div");
    recetteCardImg.classList.add("recette-card_img");
    const img = document.createElement("img");
    img.src = `./Asset/Images/${recipe.image}`;
    img.alt = recipe.name;
    recetteCardImg.appendChild(img);
    article.appendChild(recetteCardImg);

    const recetteCardContent = document.createElement("div");
    recetteCardContent.classList.add("recette-card_content");

    const h2 = document.createElement("h2");
    h2.textContent = recipe.name;
    recetteCardContent.appendChild(h2);

    const h3Recette = document.createElement("h3");
    h3Recette.textContent = "Recette";
    recetteCardContent.appendChild(h3Recette);

    const pRecette = document.createElement("p");
    pRecette.textContent = recipe.description;
    recetteCardContent.appendChild(pRecette);

    const h3Ingredients = document.createElement("h3");
    h3Ingredients.textContent = "Ingrédients";
    recetteCardContent.appendChild(h3Ingredients);

    const ulIngredients = document.createElement("ul");
    ulIngredients.classList.add("ingredients");

    recipe.ingredients.forEach((ingredient) => {
      const liIngredient = document.createElement("li");
      const liQuantity = document.createElement("li");
      const ulIngredient = document.createElement("ul");
      const liUlIngredient = document.createElement("li");
      liUlIngredient.classList.add("ingredient");

      const quantity = ingredient.quantity
        ? `${ingredient.quantity} ${ingredient.unit || ""}`
        : "";
      // Remplissage des éléments li avec les données appropriées
      liIngredient.textContent = ingredient.ingredient;
      liQuantity.textContent = quantity;
      ulIngredient.appendChild(liIngredient);
      ulIngredient.appendChild(liQuantity);
      liUlIngredient.appendChild(ulIngredient);
      ulIngredients.appendChild(liUlIngredient);
    });

    recetteCardContent.appendChild(ulIngredients);
    article.appendChild(recetteCardContent);

    listRecetteCard.appendChild(article);
  });
}
