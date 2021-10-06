//se todos os valores retornam booleano
var numbers = [1, 5, 8, 0, 10, 11];

var result = numbers.every(function(currentValue) {
    return currentValue < 10;
});

console.log(result)


function checkPositive(arr) {
    return arr.every(currentValue => {
      return currentValue > 0;
    });
  }
console.log(checkPositive([1, 2, 3, -4, 5]));