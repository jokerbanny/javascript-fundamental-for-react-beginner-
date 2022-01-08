//Push, pop, shift, unshift
const data = [10, 20, 30];
const data2 = [40, 50, 60]
data.push(...data2);
data.pop();
data.unshift(0, 0.5)
data.shift();
console.log(data);

