// ALGO 

/*
    Etape 01 : 
    Exemple 01 : durée 15 min.

    1 - Fin du RDV ?
    15h40 + 15min = 15h55

    2 - Comparer 15h55 à 16h30
    Si se termine avant = RDV OK
    si se termine après = RDV impossible

    3 - Afficher dans tous les cas
    "Le RDV se terminera à 15h55"

*/

/*
    Etape 02 : 
    Exemple 01 : durée 15 min.

    1 - Comment gérer un horaire ?
        => Décomposer les heures et les minutes en deux variables distinctes.
        let endRdvHour = 15;
        let endRdvMinute = 55;

        ---
        Début de journée : 
        let startRdvHour = 15;
        let startRdvMinute = 55;

        Fin de journée : 
        let endDayHour = 16;
        let endDayMinute = 30;


      - Quel type de données utiliser ?

    2 - Comparer 15h55 à 16h30
    Si se termine avant = RDV OK
    si se termine après = RDV impossible

    3 - Afficher dans tous les cas
    "Le RDV se terminera à 15h55"

*/

// 01 - Calcul fin du RDV ?
// 15h40 + 15 min
endRdvHour = startRdvHour
endRdvHour = startRdvMinutes + duree

// 02 - Comparer 15h55 à 16h30
// 15h55 avant ou après 16h30 ?
// 15h < 16h VRAI, avant, "RDV OK"
// =>
if(endRdvHour < endDayHour) {
    afficher ("RDV OK");
} else {
    afficher ("RDV Impossible");
};

// 03 - "Le RDV se terminera à 15h55"
Afficher ("Le RDV se terminera à " + endRdvHour + "h" + endRdvMinutes);