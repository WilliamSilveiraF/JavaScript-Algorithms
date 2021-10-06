//Dava para fazer por repeat
function repeatStringNumTimes(str, num) {
let newArr = [];

    for (let i = 0; i < num; i++) {
        newArr.push(str);
    }
    
return newArr.join('');
}
  
console.log(repeatStringNumTimes("abc", 3));