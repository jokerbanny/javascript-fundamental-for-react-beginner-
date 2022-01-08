// Loop Array
// For Loop, ForEach, ForOf

const data = [10, 20, 30, 40, 50];

for(let i = 0; i < data.length; i++){
    console.log(`ລຳດັບທີ: ${data[i]}`);
};

let sum = 0;

data.forEach(e => {
    sum += e;
    console.log(`ຜົນລວມ ${sum}`);
});




