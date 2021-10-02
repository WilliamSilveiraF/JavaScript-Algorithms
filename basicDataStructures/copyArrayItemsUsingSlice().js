//Copiando um Array com "slice()". Note que "slice" é diferente de "splice"

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
console.log(todaysWeather); // Retorna o Array copiado [ 'snow', 'sleet' ]
console.log(weatherConditions); //Retorna o Array normal, pois você não removeu nada ['rain', 'snow', 'sleet', 'hail', 'clear']

