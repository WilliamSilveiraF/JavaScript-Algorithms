function reverseString(str) {
    const myArr = (str.split(''));
    return myArr.reverse().join('');
}

console.log(reverseString("hello"));
function palindrome(str) {
    let myStr = str.split('');
    myStr = myStr.map(item => item.replace(/\W|_/g, "").toLowerCase())
    myStr = myStr.join('')
    
    return myStr === reverseString(myStr);
}
  
console.log(palindrome("0_0 (: /-\ :) 0-0"));

