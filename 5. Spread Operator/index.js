//Spread Perator ການກະຈາຍອາເຣ
const newArr = [100, 200, 300,];
const data = [10, 20,...newArr];

console.log(data)

const colors = ['red', 'green', 'blue'];
const allColor = ['pink', 'yellow', ...colors];

const newColor = ['white', 'black'];
allColor.push(...newColor);
allColor.forEach(o => console.log(o))
console.log(allColor)
