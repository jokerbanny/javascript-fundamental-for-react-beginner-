// Rest Parametor ສົ່ງຄ່າອາເຣເຂົ້າໄປໃກະຈາຍນຟັງຊັນແບບອະກິວເມັ້ນ
summation1 = (x, y, z) => {
    return x + y + z
}
 summation2 = (...numberArr)=>{
    let total = 0;
    for(let number of numberArr)
    total += number
    return total
}

let result1 = summation1(50, 50, 80);
let result2 = summation2(500, 1000, 700);
console.log(result1);
console.log(result2);
