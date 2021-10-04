//Proteção de propiedades

function Bird() {
    let hatchedEgg = 10;
    this.getHatchedEggCount = function() {
        return hatchedEgg;
    };
}
let ducky = new Bird();
console.log(ducky.getHatchedEggCount());