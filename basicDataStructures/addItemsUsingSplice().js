//Adicionando itens com splice
const numbers = [10, 11, 12, 12, 15];

const startIndex = 3;

const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, "teste", 13, 14, "teste"); //Observe a sintaxe quando usamos splice para adicionar itens.

console.log(numbers); // [ 10, 11, 12, 13, 14, 15 ] [ 10, 11, 12, 'teste', 13, 14, 'teste', 15 ]

/*
We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array 
and add DarkSalmon and BlanchedAlmond in their respective places.
*/
function htmlColorNames(arr) {
    arr.splice( 0, 2, 'DarkSalmon', 'BlanchedAlmond') //Começando da posição [0], remova 2 elemtos, e adiciona a partir da posição os elementos passados como argumento.
    return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']))
/* Retornou:
[
  'DarkSalmon',
  'BlanchedAlmond',
  'LavenderBlush',
  'PaleTurquoise',
  'FireBrick'
]
*/