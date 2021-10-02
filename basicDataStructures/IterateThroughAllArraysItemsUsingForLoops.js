// Loops oferecem mais controles do que funções prontas

function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(greaterThanTen([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));


//Qualquer Array que tiver um certo número será removido

function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) { //Se não encontrar o elemento que eu quero excluir, push esse array
            newArr.push(arr[i]); 
        }
    }
    return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 2, 3], [3, 13, 26], [19, 3, 9]], 3));



