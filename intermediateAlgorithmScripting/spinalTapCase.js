function spinalCase(str) {
    var newArr = str.split(/\s|_|(?=[A-Z])/);
    newArr = newArr.map(item => item.toLowerCase())
    newArr = newArr.join('-')
    return newArr;
}

console.log(spinalCase('thisIsSpinalTap'));