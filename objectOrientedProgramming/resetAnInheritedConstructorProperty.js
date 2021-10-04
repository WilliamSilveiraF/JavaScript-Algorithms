function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();

console.log(beagle.constructor); //Objetos herdam contrutores também de prototypes

Dog.prototype.constructor = Dog;
console.log(beagle.constructor);