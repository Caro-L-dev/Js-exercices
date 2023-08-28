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

// Math object

const advancedPermission = {
    domain: "mondomaine.com",
    level: 4,
    perms: {
        roles: ['guest', 'reader', 'reviewer'],
        delegated: true,
        method: 'oauth2'
    }
};

describe (`Testons l'objet avancé permission`, ()=> {

    const userPermission = {
        domain: "mondomaine.com",
        perms: {
            roles: ['guest', 'reader', 'reviewer'],
            delegated: true,
            method: expect.stringMatching('saml|oauth|oauth2')
        }
    };

    test(`Tester les permissions`, ()=> {
        expect(advancedPermission).toMatchObject(userPermission);
    })
});


// ToBeInstanceOf
class User {
    constructor(name){
        this.name = name;
    }
};

function Auth(name) {
    if (typeof name === 'undefined') {
        throw new Error('Le nom doit être définit.');
    };

    return new User(name);
};

describe (`Testons l'instance de classe`, ()=> {

    test(`Tester l'instance de User`, ()=> {
        expect(new User()).toBeInstanceOf(User);
    });

    test(`Tester l'authentification d'un nouvel utilisateur`, ()=> {
        expect(Auth("Caro")).toBeInstanceOf(User);
    });

    test(`Tester l'authentification d'un nouvel utilisateur vide`, ()=> {
        function callAuth(){
            Auth();
        };
        expect(callAuth).toThrowError('Le nom doit être définit.');
    });
});

// arrayContaining
function getRoleA(){
    return ["admin", "guest"];
};

function getRoleB(){
    return ["admin", "user"];
};

describe (`Testons array de rôles`, ()=> {

    const expected = ["admin", "guest"];

    test(`Tester les valeurs attendues`, ()=> {
        expect(getRoleA()).toEqual(expect.arrayContaining(expected));
    });

    test(`Tester les valeurs non attendues`, ()=> {
        expect(getRoleB()).not.toEqual(expect.arrayContaining(expected));
    });

});