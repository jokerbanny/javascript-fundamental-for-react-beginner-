// Array Reduce ລົດຂໍ້ມູນສະມະຊິກໃນອະເຣ copy and modify
const data = [10, 20, 30, 40];

// Map
const mapData = data.map(e => 100);
console.log(mapData);

// Filter
const filterData = data.filter(e =>e>20);
console.log(filterData)

// Reduce ໃຊ້ຊອກຫາຜົນລວມຂອງອາເຣທີ່ສົ່ງເຂົ້າໄປ array.reduce((ຄ່າທີ່ຖືກປະມວນຜົນ, e)=>{}, ຄ່າເລີ່ມຕົ້ນ);
const reduceData = data.reduce((value, e)=>{
    const total = e+value;  // 0+10+20+30+40 = 100  //value ຄື 0 ຄືຄ່າເລີ່ມຕົ້ນສາມາດປ່ຽນໄດ້
    return total;
}, 0);

console.log(reduceData);


// Reduce Cart
const cart = [
    {name: 'bag', price: 50000},
    {name: 'book', price: 90000},
    {name: 'camera', price: 500000}
];

const result = cart.reduce((value, e)=> e.price+value, 0);

console.log(result)