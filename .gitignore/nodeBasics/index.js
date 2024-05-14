import chalk from 'chalk';

const name = 'My name is Kate';
const eyesColour = 'My ' + chalk.magentaBright('eyes ') + 'are ' +
    chalk.blue.underline.bold('blue.');
const age =   25

console.log(chalk.bgMagenta.cyanBright('Hello, %s'), name);
console.log(eyesColour,'My ' + chalk.bgYellow.bold('age ' + 'is ' + age));