function checkCase(wordRef, wordNew) {
  wordNew = wordNew.split(''); //Splita a palavra
  let testFirstLetterCase = (/^[A-Z]/).test(wordRef) === true; //Testa se a primeira é maiúscula
  testFirstLetterCase ? wordNew.splice(0, 1, wordNew[0].toUpperCase()) : wordNew.splice(0, 1, wordNew[0].toLowerCase()) //Se a primeira letra foi maiúscula, altera para maiúscula a primeira letra de newWord, senão ela é minúscula e então jogando para minúscula a primeira letra de newWord
  
  return wordNew.join('')
}

function myReplace(str, before, after) {
    var newPhrase = str.split(' ')
    newPhrase.splice(newPhrase.indexOf(before), 1, checkCase(before, after))
    return newPhrase.join(' ');
}
console.log(checkCase("Word", "Ambrozzi"))
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));