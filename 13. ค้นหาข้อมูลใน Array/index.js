// indexOf(), find(), findIndex()

const colors = ['red', 'green', 'blue', 'yellow', 'white'];

// indexOf()
console.log(colors);

const index = colors.indexOf('red');
console.log(index);

const index2 = colors.indexOf('yellow')
console.log(index2);

const index3 = colors.indexOf('black')
console.log(index3);


// find()
const search = colors.find(element => element === 'green');
console.log(search)

const search2 = colors.find(element => element === 'pink');
console.log(search2);

// findIndex
const findIndex = colors.findIndex(element => element === 'yellow')
console.log(findIndex);

const findIndex2 = colors.findIndex(element => element === 'black');
console.log(findIndex2);

