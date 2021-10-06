
function frankenSplice(arr1, arr2, n) {
    var retiradoMeuComeço = arr2.splice(0, n); //Retira o começo do meu Array levando em consideração em qual casa quer adicionar o novo array
    var newArr = arr1.concat(arr2);
    newArr = retiradoMeuComeço.concat(newArr);
    return newArr;
  }
  
console.log(frankenSplice([1, 2], ["a", "b"], 1));

