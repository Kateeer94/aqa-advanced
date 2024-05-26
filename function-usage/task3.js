function divide(numerator,denominator) {

    if (denominator === 0) {
        throw new Error('Denominator is 0!');
    }
    if (typeof numerator !== 'number' ||  typeof denominator !== 'number') {
        throw new Error("It is not a number");
    }
    return (numerator % denominator);
}

try {
    console.log('Attempt to devide: 12 % 2');
    const result = divide(12, 2);
    console.log('Result: ' + result);
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Work has been done!");
}

try {
    console.log('Attempt to devide: 5 % 0');
    const result = divide(5, 0);
    console.log('Result: ' + result);
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Work has been done!");
}

try {
    console.log('Attempt to devide: abc % 2');
    const result = divide('abc', 2);
    console.log('Result: ' + result);
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Work has been done!");
}