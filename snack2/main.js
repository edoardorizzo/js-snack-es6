/*
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
*/

const stringArray = ['casa', 'cibo' , 'frigo', 'cucina'];
//console.log(stringArray);

stringArray.forEach((word => {
    const toUppercase = word.charAt(0).toUpperCase() + word.slice(1);
    console.log(toUppercase);
    return toUppercase
}))
console.log(stringArray);