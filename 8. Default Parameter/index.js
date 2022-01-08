//Default Parameter
getDateCustomer = (customerName, customerAddress='khongsedon') => {
    const address = `name: ${customerName}
    address: ${customerAddress}`;
    return address
};

console.log(getDateCustomer('Tinew', 'laongam'))
console.log(getDateCustomer('Taiy'))