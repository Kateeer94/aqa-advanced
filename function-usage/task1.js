
function isEvenNumber () {
    console.log("number is even");
}

function isNumberOdd() {
    console.log("number is odd");
}

function handleNum(number, evenCallback, oddCallback) {
    if (number % 2 === 0) {
        evenCallback();
    } else {
        oddCallback();
    }
}

handleNum(5, isEvenNumber , isNumberOdd);
handleNum(10, isEvenNumber , isNumberOdd);


