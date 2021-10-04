function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Forma de adicionar prototypes em código limpo

let duck = Object.create(Animal.prototype); 
let beagle = Object.create(Animal.prototype);

console.log(duck.eat())