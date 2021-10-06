function rangeOfNumbers(startNum, endNum) {
    let newArr = [];
    if (startNum === endNum) {
        return [startNum];
    } else {
        newArr = rangeOfNumbers(startNum, endNum - 1);
        newArr.push(endNum)
        return newArr;
    }
    
  };


console.log(rangeOfNumbers(1, 5))