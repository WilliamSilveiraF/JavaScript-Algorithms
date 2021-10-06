function confirmEnding(str, target) {
    let regex = new RegExp(target + "$" , "i"); // cuidado com a sintaxe do RegExp
    return regex.test(str);
  }
  
console.log(confirmEnding("Bastian", "n"));