//Sintaxe para deletar objetos
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };

  delete foods.oranges;
  delete foods.bananas;

  console.log(foods);