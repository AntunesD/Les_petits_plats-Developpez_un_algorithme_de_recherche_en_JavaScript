/*************Deuxième option du projet */

// Fonction de filtrage des recettes avec programmation fonctionnelle
function filtrerRecettes(motCle) {
  const motCleLower = motCle.toLowerCase();
  return recipes.filter((recette) => {
    // Vérifier si le mot clé est présent dans le nom ou les ingrédients de la recette
    return (
      recette.name.toLowerCase().includes(motCleLower) ||
      recette.ingredients.some((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(motCleLower)
      )
    );
  });
}
