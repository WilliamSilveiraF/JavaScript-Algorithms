function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

let cardinal = new Bird("Bruce", "red");

console.log(cardinal.name);
console.log(cardinal.color);