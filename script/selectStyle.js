/*******************Apparence du selecte************/

// Fonction pour gérer le changement d'état de la case à cocher
function handleCheckboxChange(event) {
  // Récupérez le parent de la case à cocher
  const parent = event.target.closest(".select-nav");

  // Sélectionnez l'élément .select-title qui est un descendant direct du parent
  const selectTitle = parent.querySelector(".select-title");

  // Sélectionnez l'icône de la flèche
  const chevronIconDown = selectTitle.querySelector(".fa-chevron-down");
  const chevronIconUp = selectTitle.querySelector(".fa-chevron-up");
  // Vérifiez si la case à cocher est cochée ou décochée
  if (event.target.checked) {
    // Si c'est coché, appliquez le style approprié au titre correspondant
    selectTitle.style.borderBottomLeftRadius = "0";
    selectTitle.style.borderBottomRightRadius = "0";
    // Changez l'icône en chevron vers le haut
    chevronIconDown.className = "fa-solid fa-chevron-up";
  } else {
    // Si c'est décoché, attendez 0.4s avant de rétablir le style par défaut du titre correspondant
    setTimeout(() => {
      selectTitle.style.borderBottomLeftRadius = "";
      selectTitle.style.borderBottomRightRadius = "";
      chevronIconUp.className = "fa-solid fa-chevron-down";
    }, 400); // Délai en millisecondes (0.4s = 400ms)
  }
}

// Sélectionnez toutes les cases à cocher avec la classe 'touch'
const checkboxes = document.querySelectorAll(".touch");

// Ajoutez un écouteur d'événements à chaque case à cocher
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", handleCheckboxChange);
});
