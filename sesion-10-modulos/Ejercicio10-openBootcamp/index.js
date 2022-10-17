import * as funciones from './controller.js'
import chalk from 'chalk';

const sum = funciones.suma(1, 2);
const sum2 = funciones.suma(4,5);
console.log(sum);
console.log(sum2);

const multiplicacion = funciones.multiplica(sum, sum2);
console.log(chalk.green(multiplicacion));

