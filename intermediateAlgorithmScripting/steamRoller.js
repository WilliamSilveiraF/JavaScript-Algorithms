function steamrollArray(arr) {
    for (let i = 0; arr.length !== 1; i) {
        arr = arr[0]
    }
    return arr;
}
  
steamrollArray([1, [2], [3, [[4]]]]);