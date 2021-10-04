function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}

let blueBird = new Bird();

console.log(blueBird.name);
console.log(blueBird.color);
console.log(blueBird.numLegs);

//Você consegue modifica esse novo objeto
blueBird.name = 'Elvira';
console.log(blueBird.name)