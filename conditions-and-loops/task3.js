//Завдання 3: Генерація таблиці множення

let number = 5;

for (i = 1; i<=10; i++) {
    let result = number * i
    console.log(number + " * " + i + " = " + result);
}

//while
let number = 5;
let i = 1;
while (i <= 10) {
    console.log(`${number} * ${i} = ${number * i}`);
    i++;
}