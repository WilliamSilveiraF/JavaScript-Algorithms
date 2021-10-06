function truncateString(str, num) {
    
    var newStr = str.split(''); // teste => ['t','e','s','t','e']
    var newStr = newStr.splice(0, num); //Atrui a newStr somente a parte que você quer da frase
    var newStr = newStr.join(''); //Junta todo novamente. ['s','t','e'] => ste
    

    if (str.length <= num) { //Se a quantidade de letras inicias que eu quero pegar for (maior ou igual) a quantidade de letras do meu texto então não adicione nada
        newStr = newStr.concat("");
    } else {
        newStr = newStr.concat("..."); //De outra maneira adicione os "..."
    }
    return newStr;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));