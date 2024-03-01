# Les petits plats

Ce projet est réalisé par un étudiant chez OpenClassrooms.

## Aperçu

Ce projet consiste à implémenter deux versions d'une fonctionnalité de filtrage de recettes dans une interface utilisateur. L'objectif est de comparer une version utilisant des boucles natives (while, for...) avec une version en programmation fonctionnelle utilisant les méthodes de l'objet Array (forEach, filter, map, reduce).

## Étapes à suivre

### 1ère étape

- Planifier deux versions de la fonctionnalité en remplissant le document d'investigation de fonctionnalité.
- Décrire les deux implémentations à comparer en se concentrant uniquement sur le champ de recherche principal.
- Fournir un schéma ou un "algorigramme" pour chaque proposition.

### 2ème étape

- Implémenter les deux versions sur deux branches distinctes du projet.

### 3ème étape

- Utiliser un outil de comparaison comme Jsben.ch pour déterminer laquelle des deux versions est la plus rapide.

## Différents éléments fournis

### Exemple du fichier JSON

Un exemple de structure de fichier JSON est fourni pour illustrer le format des données traitées par l'algorithme. [Lien vers le fichier JSON](https://github.com/OpenClassrooms-Student-Center/PetitsPlats2.0)

### Dossier images

Un dossier contenant 50 images pour les recettes est fourni pour l'implémentation. [Lien vers le dossier d'images](https://course.oc-static.com/projects/516_JS/P7/Photos+P7+JS+Les+petits+plats.zip)

### Maquette Figma

Une maquette Figma a été fournie pour le design du projet. [Lien vers la maquette Figma](https://www.figma.com/file/LY5VQTAqnrAf0bWObOBrt8/Les-petits-plats---Maquette-2.0?type=design&node-id=0%3A1&t=23dNyQrjg9DVtnrM-1)


### Exemple de fiche d’investigation

Un exemple de fiche d’investigation est fourni pour mieux comprendre le processus d'analyse. [Lien vers la fiche d'investigation](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P6+Algorithms/Fiche+d%E2%80%99investigation+fonctionnalite%CC%81.pdf)


### Cas d’utilisation

Le cas d'utilisation décrit le scénario nominal ainsi que les scénarios alternatifs pour le filtrage des recettes dans l'interface utilisateur.
[Lien vers le cas d'utilisation](https://course.oc-static.com/projects/516_JS/P7/Cas+d%E2%80%99utilisation+%2303+_+Filtrer+les+recettes+dans+l%E2%80%99interface+utilisateur+-+Front-end+P6+(Algorithms)+.pdf)


## Règles de gestion

- La recherche doit être possible via le champ principal ou via les tags (ingrédients, ustensiles ou appareil).
- La recherche principale se lance à partir de 3 caractères entrés par l'utilisateur dans la barre de recherche.
- La recherche s’actualise pour chaque nouveau caractère entré.
- Les champs ingrédients, ustensiles et appareil de la recherche avancée proposent seulement les éléments restant dans les recettes présentes sur la page.
- Les retours de recherche doivent être une intersection des résultats.
- Le code HTML et CSS pour l’interface doit passer avec succès le validateur W3C.
- Aucune librairie ne sera utilisée pour le JavaScript du moteur de recherche.

## Contributeurs

- Antunes David
