function destroyer(arr, ...valueASerRemovido) {
    var arrRemove = [...valueASerRemovido];
    var myNewArr = [...arr];
    for (let i = 0; i < arrRemove.length; i++) {
        myNewArr = myNewArr.filter(item => (arrRemove[i]) !== item) //Se o item for diferente do que eu quero remover, passe.
    }
    return myNewArr
}

console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));