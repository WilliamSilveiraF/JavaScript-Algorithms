let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', ['deep']],
    ['mutate', 1327.98, 'splice', 'slice', [['deeper']]],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', [[['deepest']]]]
  ];

  console.log(myNestedArray[3][4][0])