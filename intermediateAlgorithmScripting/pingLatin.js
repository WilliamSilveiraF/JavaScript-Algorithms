function translatePigLatin(str) {
    
    var regex  = /^[^aeiou]+/;

    let myConsonants = str.match(regex);

    return myConsonants !== null//Código mais limpo
       ? str
            .replace(regex, "")
            .concat(myConsonants)
            .concat("ay")
       : str.concat("way")
  }

console.log(translatePigLatin("glove"));