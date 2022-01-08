const person = {
    name: 'Yothin',
    age: 26,
    height: '160 mm',
    tel: '0209941992',
    animal: {
        dog: 'scoodby',
        cat: 'catty',
        fish: 'engy'
    },
    sayHello: function () {
        let x = 'Hello'
        console.log(x)
    }
};

console.log('My name is '+ person.name, 'I\'m ' +  person.age + ' year old', 'height ' + person.height,
'I\' have animal ' + 'name' + person.animal.dog, ' Cat name ' + person.animal['cat'] + 'and fish name ' + person.animal['fish']);

//Destructuring
let {name, age, height, tel, } = person
console.log(name, age, height, tel)