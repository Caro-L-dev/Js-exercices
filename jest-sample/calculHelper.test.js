import {displayTextCalcultateArea} from './calculHelper';

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