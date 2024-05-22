//Завдання 1


// Function Declaration
function rectangleArea (width,height) {
    return width * height;
}
console.log(rectangleArea(5,10))

// Function Expression
let rectangleArea1 = function (width,height) {
    return width * height;
}
console.log(rectangleArea1(5,10))

//arrow functions
let rectangleArea2 = (width,height) => width * height

console.log(rectangleArea2(5,10))
