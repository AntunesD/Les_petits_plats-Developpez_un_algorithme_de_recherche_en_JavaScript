/*****Premier option du projet *********/

function filtrerRecettes(motCle) {
  const resultat = [];
  const motCleLower = motCle.toLowerCase(); // Convertir le mot-clé en minuscules
  for (let i = 0; i < recipes.length; i++) {
    const recette = recipes[i];
    // Vérifier si le mot clé est présent dans le nom ou la description de la recette
    if (
      recette.name.toLowerCase().includes(motCleLower) ||
      recette.description.toLowerCase().includes(motCleLower)
    ) {
      resultat.push(recette);
    } else {
      // Parcourir les ingrédients de la recette et vérifier si l'un d'eux contient le mot-clé
      for (let j = 0; j < recette.ingredients.length; j++) {
        const ingredient = recette.ingredients[j];
        if (ingredient.ingredient.toLowerCase().includes(motCleLower)) {
          resultat.push(recette);
          break; // Pas besoin de vérifier les autres ingrédients si l'un d'eux contient le mot-clé
        }
      }
    }
  }
  return resultat;
}
