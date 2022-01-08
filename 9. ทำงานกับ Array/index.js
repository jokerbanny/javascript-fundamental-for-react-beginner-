// Join, Concat

// Join
const data = [100, 200, 300,];

const result = data.join();
console.log(data);
console.log(data.join());
console.log(data.join(' * '));
console.log(result);

// Concat
const data2 = [100, 200, 300,];
const data3 = [400, 500];

const allData = data2.concat(data3)
console.log(allData);