# Launch exercise

`node index.js`

## Instructions

Chaque nombre représente un Poisson-lanterne.

La valeur du nombre représente le nombre de jours qu'il reste avant qu'il ait un enfant (et donc crée un nouveau poisson-lanterne).

Ce nouveau poisson commencera sa vie avec la valeur de 8 jours avant d'avoir un bébé.

Prenons par exemple un poisson-lanterne qui a la valeur 3 :

Au début, il a un timer avant de faire un enfant de 3
Au bout du premier jour, le timer passe à 2
Au bout du deuxième jour, le timer passe à 1
Au bout du troisième jour, le timer passe à 0
Au bout du quatrième jour, le timer passe à 6 et il fait un enfant qui a un timer de 8
Le cinquième jour, le timer du parent passera à 5 et le timer de l'enfant à 7
Ainsi de suite...
Donc, quand un poisson fait un enfant, il est réinitialisé à 6 et son enfant commence à 8.

Combien il y aura de poissons **après 80 jours** ?

Voici un exemple avec les données de test :

Initial state: 3,4,3,1,2  
After 1 day: 2,3,2,0,1  
After 2 days: 1,2,1,6,0,8  
After 3 days: 0,1,0,5,6,7,8  
After 4 days: 6,0,6,4,5,6,7,8,8  
After 5 days: 5,6,5,3,4,5,6,7,7,8  
After 6 days: 4,5,4,2,3,4,5,6,6,7  
After 7 days: 3,4,3,1,2,3,4,5,5,6  
After 8 days: 2,3,2,0,1,2,3,4,4,5  
After 9 days: 1,2,1,6,0,1,2,3,3,4,8  
After 10 days: 0,1,0,5,6,0,1,2,2,3,7,8  
After 11 days: 6,0,6,4,5,6,0,1,1,2,6,7,8,8,8  
After 12 days: 5,6,5,3,4,5,6,0,0,1,5,6,7,7,7,8,8  
After 13 days: 4,5,4,2,3,4,5,6,6,0,4,5,6,6,6,7,7,8,8  
After 14 days: 3,4,3,1,2,3,4,5,5,6,3,4,5,5,5,6,6,7,7,8  
After 15 days: 2,3,2,0,1,2,3,4,4,5,2,3,4,4,4,5,5,6,6,7  
After 16 days: 1,2,1,6,0,1,2,3,3,4,1,2,3,3,3,4,4,5,5,6,8  
After 17 days: 0,1,0,5,6,0,1,2,2,3,0,1,2,2,2,3,3,4,4,5,7,8  
After 18 days: 6,0,6,4,5,6,0,1,1,2,6,0,1,1,1,2,2,3,3,4,6,7,8,8,8,8

Après 18 jours, il y aura 26 poissons-lanternes.
Après 80 jours, il y en aura 5934.

⚠️ **Information importante** :

Un nouveau poisson n'est pas décrémenté le même jour où il est créé.
Un poisson-lanterne ne peut pas avoir un timer de 0, il est réinitialisé à 6.
Un poisson-lanterne qui a été réinitialisé à 6 ne sera pas décrémenté le même jour.

Trouver le résultat de l'algorithme avec les données finales.
