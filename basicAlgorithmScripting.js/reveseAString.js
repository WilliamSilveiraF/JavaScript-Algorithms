function reverseString(str) {
    const myArr = (str.split(''));
    const reverseName = myArr.reverse();
    const result = reverseName.join('');
    return result;
}

console.log(reverseString("hello"));