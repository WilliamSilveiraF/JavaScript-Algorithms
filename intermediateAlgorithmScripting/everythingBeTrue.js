function truthCheck(collection, pre) {
    var newArr = collection.filter(item => item[pre]); //Faz um Array só com os itens que tem os atributos que eu quero
    return newArr.length == collection.length
}
  
var result =  truthCheck([{"single": ""}, {"single": "double"}], "single");

console.log(result)