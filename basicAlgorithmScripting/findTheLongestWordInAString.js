function findLongestWordLength(str) {
    var arrStr = str.split(' ') //Separe a String por ' ' e em formato de array. Ex: ["Google", "do", "a" "barrel" "roll"]
    var maiorPalavra = 0; // Se for uma String que não existe nada 
    for (let x = 0; x < arrStr.length; x++) {
        if (arrStr[x].length > maiorPalavra) {//Se o tamanho do item da minha string "arrStr[x].length" em formato de array for maior que a minha variavel "maiorPalavra". Então, ela é a nova minha maiorPalavra
            var maiorPalavra = arrStr[x].length;
        }
    }
    return maiorPalavra;
  }
  
console.log(findLongestWordLength("Google do a barrel roll"));