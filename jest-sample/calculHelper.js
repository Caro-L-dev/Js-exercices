function calcultateArea (length, width) {
    return multiplication(length, width);
};

function calcultateAreaSquare(length){
    return calcultateArea(length, length);
};

function multiplication(a, b){
    return a * b;
};

function displayTextCalcultateArea(a, b){
    
    const area = calcultateArea(a, b);
    let text = `L'aire de la surface est de ${area}`;

     if( isNaN(area) || typeof a !== "number" || typeof b !== "number"){
         text = `L'aire ne peut pas être calculée.`;
     };

    return text;
};

export {
    calcultateArea,
    calcultateAreaSquare,
    multiplication,
    displayTextCalcultateArea
};