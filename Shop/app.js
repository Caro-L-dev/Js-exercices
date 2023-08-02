let arrayProducts = [];

function displayDefaultProductMenu() {
    arrayProducts.push("Iphone");
    arrayProducts.push("Iphone 2");
    arrayProducts.push("Iphone 3");
    arrayProducts.push("Iphone 4");
    arrayProducts.push("Iphone 5");
};

displayDefaultProductMenu();


function clearMenu() {
    const list = document.querySelector('ul');
    const itemList = document.querySelectorAll('li');
    
    for ( let index = 0; index < itemList.length; index++ ) {
        let currentItemList = itemList[index];
        list.removeChild(currentItemList);
    };
};


function createItemMenu(productName) {
    const newItemList = document.createElement('li');
    const newLink = document.createElement('a');

    newLink.textContent = productName;
    newLink.setAttribute("href", "#");
    newLink.setAttribute(
        "onmouseover",
        "displayLinkTextInsideInputOnMouseHover( '" + productName + "' )");
    newLink.setAttribute(
        "onclick",
        "addItemToShoppingCart( '" + productName + "' )");
    newItemList.appendChild(newLink);

    return newItemList;
};


function displayItemMenu(productName) {
    const list = document.querySelector('ul');    
    const newItemList = createItemMenu(productName);
    list.appendChild(newItemList);
};


function updateMenuWithNewProducts(newProducts) {
    clearMenu();

    newProducts.forEach(function (newProduct) {
        displayItemMenu(newProduct)
    });
};

updateMenuWithNewProducts(arrayProducts);


function isDuplicateProductName(existingProduct) {
    let isDuplicated = false;

    for (let index = 0; index < arrayProducts.length; index++) {
        const currentProduct = arrayProducts[index];

        if (currentProduct === existingProduct) {
            isDuplicated = true;
        };
    };
    return isDuplicated;
};


function addProduct() {
    let productName = document.getElementById("productInput").value;

    if (isDuplicateProductName(productName)) {
        alert("Ce produit existe déjà !");
    } else {
        arrayProducts.push(productName);
    };
    
    updateMenuWithNewProducts(arrayProducts);
};


function deleteProduct() {
   let productName = document.getElementById("productInput").value;

   for (let index = 0; index < arrayProducts.length; index++) {
    const currentProduct = arrayProducts[index];

    if( currentProduct === productName ) {
        arrayProducts.splice(index, 1);
    };
   };

   updateMenuWithNewProducts(arrayProducts);
};


function displayLinkTextInsideInputOnMouseHover(linkName) {
    document.getElementById("productInput").value = linkName;
};


let shoppingCart = [];


function displayTextShoppingCart() {

    if(shoppingCart.length > 1 ) {
        let plural = "s";
        document.getElementById('shoppingCart').textContent =
        `Votre panier contient ${shoppingCart.length} produit${plural}`;
    } else {
        document.getElementById('shoppingCart').textContent =
        `Votre panier contient ${shoppingCart.length} produit`;
    };
};

function displayDetailShoppingCart() {
    let detailText = "";

    for (let index = 0; index < shoppingCart.length; index++) {
        detailText = detailText +  shoppingCart[index] + " | " ;
    }

    document.getElementById('detailShoppingCart').textContent = detailText;
};


function addItemToShoppingCart(name) {
    shoppingCart.push(name);
    
    displayTextShoppingCart();
    displayDetailShoppingCart();
};


function clearShoppingCart() {
    shoppingCart = [];

    displayTextShoppingCart();
    displayDetailShoppingCart();
};

