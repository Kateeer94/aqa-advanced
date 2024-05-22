//Завдання 2


let isAdult = (age) => age >= 18
console.log(isAdult(25))
console.log(isAdult(15))


//OR

function isAdultPerson(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log("Is this person adult? " + isAdultPerson(25));
console.log("Is this person adult? " + isAdultPerson(15));