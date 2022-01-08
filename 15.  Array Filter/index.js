// Array Filter Unmodify
const data = [10, 20, 30, 40];

const result = data.filter(e => e > 20);

console.log(result);



const data2 = [
    {name: 'yothin',salary: 100000,department: 'Programer'},
    {name: 'vilay',salary: 12000,department: 'famer'},
    {name: 'kikeo',salary: 20000,department: 'employee'},
    {name: 'souphaphone',salary: 10000,department: 'police'},
    {name: 'sunthana',salary: 10000,department: 'police'},
];

const result2 = data2.filter(e => e.salary > 10000).filter(e => e.department === 'Programer')
console.log(result2)