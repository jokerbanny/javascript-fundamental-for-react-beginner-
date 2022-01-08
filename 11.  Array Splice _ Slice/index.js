// splice & slice
// plice(ຕຳແໜ່ງ, ຈຳນວນທີ່ຈະລົບ)
// plice(ຕຳແໜ່ງ, ຈຳນວນທີ່ຈະລົບ, ເພີ່ມສະມາຊິກເຂົ້າໄປໃໝ່)
// slice(ຕຳແໜ່ງລເລີ່ມຕົ້ນ, ຕຳແໜ່ງສຸດທ້າຍ)

//splice  //Modify
const data = [10, 20, 30, 40, 50];

// data.splice(1, 3);
data.splice(1, 3, 99);

console.log(data); // ຍັງເຫຼືອໃນ data [10, 50];



// slice  //Unmodify
const data2 = [10, 20, 30, 40, 50];

const total = data2.slice(1, 3);
console.log(total)