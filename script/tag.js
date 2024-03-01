//Mettre a jour les recetttes en fonction des tags
function updateRecette() {
  // Récupérer tous les filtres sélectionnés
  var selectedFilters = document.querySelectorAll("#contenuFiltres li");
  var filtersArray = Array.from(selectedFilters).map(function (filter) {
    return filter.getAttribute("data-filtres");
  });

  // Récupérer les recettes filtrées
  var filteredRecipes = filterRecipesByValue(filtersArray);

  // Mettre à jour les recettes affichées
  processRecipes(filteredRecipes);
  generateRecipeCards(filteredRecipes);
}

//CLick sur les tags
document.addEventListener("DOMContentLoaded", function () {
  var contenuFiltres = document.getElementById("contenuFiltres");

  contenuFiltres.addEventListener("click", function (event) {
    var target = event.target;

    // Vérifie si l'élément cliqué est un <li>
    if (target.tagName === "LI") {
      var dataFiltres = target.getAttribute("data-filtres");

      // Récupère tous les éléments avec la classe 'selected' qui ont le même attribut 'data-filtres'
      var selectedElements = document.querySelectorAll(
        '.selected[data-filtres="' + dataFiltres.replace(/"/g, '\\"') + '"]'
      );

      // Parcourt tous les éléments sélectionnés et retire la classe 'selected'
      selectedElements.forEach(function (element) {
        element.classList.remove("selected");
      });
      // Supprime l'élément cliqué
      target.parentNode.removeChild(target);
      updateRecette();
    }
  });
});
