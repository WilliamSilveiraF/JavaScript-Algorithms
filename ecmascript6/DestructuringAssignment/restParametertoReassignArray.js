const [a, b, ...arr] = [1, 2, 3, 4, 5, 7]
console.log(a, b);
console.log(arr);

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [x, y, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr1 = removeFirstTwo(source);
console.log(arr1)