function fearNotLetter(str) {
    let arr = str.split('');
    let first = (arr[0]).charCodeAt(); //Pega o char code do primeiro elemento do Array
    
    var result = undefined;
    for (let i = 0; i < arr.length; i++) {
        arr[i].charCodeAt() == first ? first++ : result = String.fromCharCode(first); //Some o coeficiente de letra para o próximo se acha-lo no meu array, senão ache a letra relacionada a esse coefieciente
    }
    return result
}
  
console.log(fearNotLetter("abce"));

console.log(String.fromCharCode(65)); // retorna 65