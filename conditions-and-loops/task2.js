//Завдання 2: Виконайте попереднє завдання але використовуючи конструкцію switch/case

let averageScore = 85;

switch (1<9) {
    case (averageScore < 60):
        console.log('Unsatisfactorily');
        break;
    case (averageScore <= 70):
        console.log('Satisfactorily');
        break;
    case (averageScore <= 80):
        console.log('Good');
        break;
    case (averageScore <= 90):
        console.log('Very Good');
        break;
    case (averageScore <= 100):
        console.log('Great');
        break;
    default:
        console.log('Invalid score');
}

