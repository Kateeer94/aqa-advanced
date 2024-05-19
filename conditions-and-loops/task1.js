//Завдання 1: Визначення рівня успішності студента

let averageScore = 85;
if (averageScore < 60) {
    console.log('Unsatisfactorily');
} else if (averageScore <= 70) {
    console.log('Satisfactorily');
} else if (averageScore <= 80) {
    console.log('Good');
} else if (averageScore <= 90) {
    console.log('Very Good');
} else {
    console.log('Great');
}