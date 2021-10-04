let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
console.log(duck.sayName())
//Usando this
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has "+  this.numLegs + " legs."}
  };
  
console.log(dog.sayLegs());