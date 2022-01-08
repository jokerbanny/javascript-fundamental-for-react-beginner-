// Array Map Unmodify
const numbers = [10, 20, 30, 40];

// const result = numbers.map(e => {
//    const a = e * 2;
//    return a;
// });

//ແບບສັ້ນລົດຮູບ
const result = numbers.map(e => e * 2)

console.log(result);
console.log(numbers);


const data = ['fontok', 'daedron', 'fonkhanong', 'daedhon', 'akarddee', 'mok', 'lom'];

const result2 = data.map((e, i )=> {
    return `vun t ${i+1}, saphap r kard = ${e}`
});

console.log(result2);

const data2 = [
    {day: '01/06/2554', weather: 'daedhon', temp: 27},
    {day: '01/06/2554', weather: 'fontok', temp: 236},
    {day: '01/06/2554', weather: 'lom', temp: 28}
];

const result3 = data2.map(e => e.weather);

console.log(result3);


