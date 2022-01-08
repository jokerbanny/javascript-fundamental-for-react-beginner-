//Golbal Scope
let x = 10;
const y = 20;
if(x ===10){
    //Local Scope
    let x = 500
    const y = 40
    console.log(x, y);
};
console.log(y)
console.log(x)