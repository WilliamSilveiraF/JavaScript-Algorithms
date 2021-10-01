/* Declarações const sozinhas não protegem um objeto de mutações,
para garantir que seus dados não serão alterados existe a função Object.freeze*/
let myobj = {
    name:"William",
    team:"Flamengo"
};
Object.freeze(myobj);
Object.name = "Carlos" //O nome não vai mudar por causa do Object.freeze
Object.team   = "Vasco"  //O time não vai mudar por causa do Object.freeze
console.log(myobj);

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
  Object.freeze(MATH_CONSTANTS) // Isso asegura que o valor de PI não será alterado 
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();