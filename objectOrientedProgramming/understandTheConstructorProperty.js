function Dog(name) {
    this.name = name;
  }
function Bird(name) {
    this.name = name;
}

let duck = new Bird();
let beagle = new Dog();
  
function joinDogFraternity(candidate) {
        if (candidate.constructor == Dog) {
          return true;
        } else {
          return false;
        }
}
console.log(duck.constructor === Bird);
console.log(beagle.constructor === Dog);