import {displayTextCalcultateArea, calcultateArea, calcultateAreaSquare, isAdmin} from './calculHelper';

// - Créer une suite de tests.
// - Premier test =  Tester un message avec des valeurs correcte pour calcultateArea.
// - Second test = Tester le message avec des valeurs incorrecte pour calcultateArea.

describe ('Testons la fonction displayTextCalcultateArea()', ()=> {
    test('Tester le message avec des valeurs correcte pour calcultateArea()', ()=> {
        expect(displayTextCalcultateArea(10, 10)).toContain("100");
    });

    test('Tester le message avec des valeurs incorrecte pour calcultateArea()', ()=> {
        expect(displayTextCalcultateArea(10, "prout")).toContain("L'aire ne peut pas être calculée.");
    });

    test('Tester le message avec des valeurs vide pour calcultateArea()', ()=> {
        expect(displayTextCalcultateArea()).toContain("L'aire ne peut pas être calculée.");
    });

    test('Tester le message avec des valeurs arrays pour calcultateArea()', ()=> {
        expect(displayTextCalcultateArea([], [])).toContain("L'aire ne peut pas être calculée.");
    });

    test('Tester le message avec des valeurs object pour calcultateArea()', ()=> {
        expect(displayTextCalcultateArea({}, {})).toContain("L'aire ne peut pas être calculée.");
    });

    test('Tester le message avec des valeurs date pour calcultateArea()', ()=> {
        expect(displayTextCalcultateArea(new Date(), new Date())).toContain("L'aire ne peut pas être calculée.");
    });

    test('Tester le message avec des valeurs nombres en chaînes de caractères pour calcultateArea()', ()=> {
        expect(displayTextCalcultateArea("10", "10")).toContain("L'aire ne peut pas être calculée.");
    });

});



describe ('Testons la fonction calcultateArea()', ()=> {
    test('Affiche des valeurs correcte', ()=> {
        expect(calcultateArea(10, 10)).toBe(100);
    });

    test('Le résultat est supérieur à 0', ()=> {
        expect(calcultateArea(10, 10)).toBeGreaterThan(0);
    });

    test('Le résultat est supérieur ou égal à 0', ()=> {
        expect(calcultateArea(10, 10)).toBeGreaterThanOrEqual(0);
    });

    test('Le résultat pas un nombre', ()=> {
        expect(calcultateArea("je suis une string", 10)).toBeNaN();
    });

    test('Le résultat est un nombre', ()=> {
        expect(calcultateArea(10, 10)).not.toBeNaN();
    });
});



describe ('Testons la fonction calcultateAreaSquare()', ()=> {

    test('Affiche un résultat correct', ()=> {
        expect(calcultateAreaSquare(10)).toBe(100);
    });

    test('Affiche un résultat positif', ()=> {
        expect(calcultateAreaSquare(10)).toBeGreaterThan(0);
    });
});



// ERRORS
describe ('Testons la fonction isAdmin()', ()=> {
    let guestUser = {role: 'guest'};
    let adminUser = {role: 'admin'};

    test(`Si l'utilisateur n'est pas un admin, afficher une erreur`, ()=> {
        function callIsAdmin() {
            isAdmin(guestUser);
        }
        expect(callIsAdmin).toThrowError('Interdit'); 
    });

    test(`Si l'utilisateur est un admin, alors tout est OK`, ()=> {
        function callIsAdmin() {
            isAdmin(adminUser);
        }
        expect(callIsAdmin).toBeTruthy(); 
    });
});