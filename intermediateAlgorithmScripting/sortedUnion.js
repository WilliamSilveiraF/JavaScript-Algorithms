function uniteUnique(...arr) {
    arr = [...arr].flat();
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.indexOf(arr[i]) === -1 ? newArr.push(arr[i]) : null ; //Se o número ainda não tiver 
    }
    return newArr
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));