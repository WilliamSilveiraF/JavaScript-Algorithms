function sumAll(arr) {
    let x0 = arr[0];
    let x1 = arr[1];

    let min = (x0 < x1) ? x0 : x1
    let max = (min == x0) ? x1 : x0
    
    var sum = 0;
    for (min; min <= max; min++) {
         sum += min;
    }
    return sum
}
  
console.log(sumAll([1, 4]));