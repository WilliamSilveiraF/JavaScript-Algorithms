//Const é uma constante, ela é imutável e não pode ser reatribuída
//Por convenção global, variáveis const devem ser escrita em CAPS
const FAV_PET = "Cats";
//FAV_PET = "Dogs";
function printManyTimes(str) {

    // Only change code below this line
  
    const SENTENCE = str + " is cool!"; //variáveis const é sempre em MAIUSCULO
    for (let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
  
    // Only change code above this line
  
  }
  printManyTimes("freeCodeCamp");