//Retorne um array com o maior número de cada

function largestOfFour(arr) {
    
    let newArr = [];
    for (let i = 0; i < arr.length; i++) { 

        var maiorNumSubArray = -9999999999999999999999999 // Maior número de um SubArray. Botei um número muito grande, porém negativo para funcionar
        for (let z = 0; z < arr[i].length; z++) {

            if (arr[i][z] > maiorNumSubArray) {
             var maiorNumSubArray = arr[i][z];
            }

        }
        newArr.push(maiorNumSubArray); //Coloca no meu newArr. o maior número de um certo SubArray ex. o maior número do SubArray [4, 12, 30, 40]. Vai dar o push no 40 para um novo array
    }
    return newArr;
}
  
var teste =  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);

console.log(teste)