function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for (let i = 0; size < arr.length; i++) {
        newArr.push(arr.splice(0,size))

    }
    newArr.push(arr); 
    return newArr;
}
  
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
