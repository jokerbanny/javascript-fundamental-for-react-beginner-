//Destructuring ການສະຫຼາຍໂຄງສ້າງ

// Array
const colors = ['green', 'red', 'yellow'];

// ແບບເດີມ
// const green = colors[0];
// const red = colors[1];
// const yellow = colors[2];

// ແບບເດີມ
// console.log(green)
// console.log(red)
// console.log(yellow)

// ແບບໃໝ່ Destructuring
const [green,,yellow] = colors
// const [,red,] = colors
// const [,,yellow] = colors

console.log(green, yellow)
// console.log(red)
// console.log(yellow)


const Product = {
    productName: 'computer',
    price: 3000000,
    stock: 10
};

//ແບບເດີມ
// console.log(Product.productName)
// console.log(Product.price)
// console.log(Product.stock)


//ແບບໃໝ່
// const {productName, price, stock} = Product;
const {productName, stock} = Product;
// console.log(productName, price, stock)
console.log(productName, stock)
