function smallestCommons(arr) {
    arr = arr[0] > arr[1]  ? [arr[1], arr[0]] : [arr[0], arr[1]]
    return arr
}

console.log(smallestCommons([5,1]));