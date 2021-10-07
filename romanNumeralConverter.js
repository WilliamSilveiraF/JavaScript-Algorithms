function convertToRoman(num) {
    let newArr = [];
    for (let m = 1000; num >= 1000; num -= 1000) {
        newArr.push('M')
    }
    for (let cm = 900; num >= 900; num -= 900) {
        newArr.push('CM')
    }
    for (let d = 500; num >= 500; num -= 500) {
        newArr.push('D')
    }
    for (let cd = 400; num >= 400; num -= 400) {
        newArr.push('CD')
    }
    for (let c = 100; num >= 100; num -= 100) {
        newArr.push('C')
    }
    for (let xc = 90; num >= 90; num -= 90) {
        newArr.push('XC')
    }
    for (let l = 50; num >= 50; num -= 50) {
        newArr.push('L')
    }
    for (let xl = 40; num >= 40; num -= 40) {
        newArr.push('XL')
    }
    for (let x = 10; num >= 10; num -= 10) {
        newArr.push('X')
    }
    for (let ix = 9; num >= 9; num -=9) {
        newArr.push('IX')
    }
    for (let v = 5; num >= 5; num -= 5) {
        newArr.push('V')
    }
    for (let iv = 4; num >= 4; num -= 4) {
        newArr.push('IV')
    }
    for (let i = 1; num >= 1; num -= 1) {
        newArr.push('I')
    }
    return newArr.join('')
}
   
   
console.log(convertToRoman(2));

//Outro jeito de fazer de modo mais clean

function romanize(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
        roman = '',
        i;
    for ( i in lookup ) {
      while ( num >= lookup[i] ) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
}

console.log(romanize(4033))