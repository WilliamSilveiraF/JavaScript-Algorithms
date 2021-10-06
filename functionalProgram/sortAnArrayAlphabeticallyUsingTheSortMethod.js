//Ascendência de números 
function ascendingOrder(arr) {
    return arr.sort( (a, b) => a - b );
}
console.log(ascendingOrder([1, 5, 2, 9, 4]));

function reverseAlpha(arr) {
    return arr.sort(function(a, b) {
        return a === b ? 0 : a < b ? 1 : -1;
    });
}
console.log(reverseAlpha(['z', 's', 'l', 'h', 'b']));

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
     var newArr = globalArray
     return newArr.sort( (a, b) => a - b )
}
console.log(nonMutatingSort(globalArray));