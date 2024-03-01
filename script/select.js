//fonction pour gérer l'input du select
function filterItems(ulId, value) {
  const items = document.getElementById(ulId).getElementsByTagName("li");
  for (let i = 1; i < items.length; i++) {
    const item = items[i];
    if (item.innerText.toLowerCase().includes(value.toLowerCase())) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}

// Fonction pour traiter les données des recettes avant de les mettres dans les selects
function processRecipes(recipes) {
  // Initialisation des ensembles pour les ingrédients, les appareils et les ustensiles
  const ingredients = new Set();
  const appliances = new Set();
  const ustensils = new Set();

  // Extraction des valeurs uniques pour chaque type
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      ingredients.add(ingredient.ingredient);
    });
    appliances.add(recipe.appliance);
    recipe.ustensils.forEach((ustensil) => {
      ustensils.add(ustensil);
    });
  });

  // Convertir les ensembles en tableaux, les trier, puis les reconvertir en ensembles
  const sortedIngredients = Array.from(ingredients).sort();
  const sortedAppliances = Array.from(appliances).sort();
  const sortedUstensils = Array.from(ustensils).sort();

  // Remplissage des options dans les sélecteurs
  fillUlOptions("ingredients-select", sortedIngredients);
  fillUlOptions("appareils-select", sortedAppliances);
  fillUlOptions("ustensiles-select", sortedUstensils);
}

// Fonction pour remplir les selects
function fillUlOptions(ulId, values) {
  const ul = document.getElementById(ulId);
  // Supprimer tous les éléments <li> sauf le premier
  while (ul.children.length > 1) {
    ul.removeChild(ul.lastChild);
  }

  const existingValues = new Set();

  values.forEach((value) => {
    // Convertir la première lettre en majuscule
    const formattedValue = value.charAt(0).toUpperCase() + value.slice(1);

    // Vérifier si un élément avec le même data-filtres existe déjà, en ignorant la casse et les pluriels
    const existingLi = Array.from(ul.querySelectorAll("li.filter-item")).find(
      (li) => li.dataset.filtres.toLowerCase() === formattedValue.toLowerCase()
    );
    // Si l'élément existe déjà, ne rien faire
    if (existingLi) {
      return;
    }

    existingValues.add(formattedValue);

    const li = document.createElement("li");
    li.textContent = formattedValue;
    li.setAttribute("data-filtres", formattedValue);
    li.classList.add("filter-item");

    // Vérifier si un élément avec le même data-filtres existe déjà dans contenue
    const existingLiContenu = document.querySelector(
      `#contenuFiltres li[data-filtres="${formattedValue}"]`
    );
    if (existingLiContenu) {
      // Si existe, ajouter la classe selected
      li.classList.add("selected");
    }

    ul.appendChild(li);
  });

    // Vérifier s'il existe des éléments similaires sans "s"
    existingValues.forEach((value) => {
      const singularValue = value.replace(/s$/, "");
      if (existingValues.has(singularValue) && singularValue !== value) {
        const existingLi = ul.querySelector(`li[data-filtres="${value}"]`);
        if (existingLi) {
          ul.removeChild(existingLi);
        }
      }
    });
}

//Gestion du click sur les éléments du select
function handleFilterSelection(selectId) {
  const select = document.getElementById(selectId);
  const contenuFiltres = document.getElementById("contenuFiltres");

  select.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("filter-item")) {
      target.classList.toggle("selected");

      const filtreValue = target.getAttribute("data-filtres");

      if (target.classList.contains("selected")) {
        const contenuFiltre = document.createElement("li");
        const iSpan = document.createElement("i");
        iSpan.classList.add("fa-solid", "fa-xmark");
        contenuFiltre.setAttribute("data-filtres", filtreValue);
        contenuFiltre.textContent = `${filtreValue}`;
        contenuFiltre.appendChild(iSpan);
        contenuFiltres.appendChild(contenuFiltre);
      } else {
        const contenuFiltre = document.querySelector(
          `#contenuFiltres li[data-filtres="${filtreValue}"]`
        );
        contenuFiltres.removeChild(contenuFiltre);
      }

      updateRecette();
    }
  });
}

// Utilisation de la fonction pour les ingrédients, ustensiles et appareils
handleFilterSelection("ingredients-select");
handleFilterSelection("ustensiles-select");
handleFilterSelection("appareils-select");

//filtre les recettes par rapport au tag
function filterRecipesByValue(value) {
  return recipes.filter((recipe) => {
    return value.every((searchValue) => {
      searchValue = searchValue.toLowerCase();
      return (
        recipe.appliance.toLowerCase().includes(searchValue) ||
        recipe.ustensils.some((utensil) =>
          utensil.toLowerCase().includes(searchValue)
        ) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(searchValue)
        )
      );
    });
  });
}
