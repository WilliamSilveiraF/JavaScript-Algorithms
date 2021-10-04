//Verifica se um objeto foi criado com certo construtor
let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

console.log(crow instanceof Bird);

let canary = {
    name: "Mildred",
    color: "Yeloow",
    numLegs: 2
};

console.log(canary instanceof Bird);