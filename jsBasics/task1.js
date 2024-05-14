//Завдання 1: Оголошення змінних для примітивних типів

let name = 'Test';
let age = 25;
let isTall = true;
let childrenQuantity = undefined;
let animalQuantity = null;

if (age>20) {
    isTall = true
} else {
    isTall = false;
}

if (isTall) {
    console.log('I am a tall')
} else {
    console.log('I am not a tall')
}

console.log('My name is',name + ',', 'I am ' + age)
console.log(isTall)
console.log(childrenQuantity)
console.log(animalQuantity)