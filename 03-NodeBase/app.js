/******************************************
 *  Importando archivos de nuestro proyecto
 *****************************************/

//Importando la función del archivo multiplicar

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// console.log(process.argv);
console.log(argv);
console.log('base: yargs', argv.b);
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

//

crearArchivo(argv.b, argv.l)
	.then((nombreArchivo) => console.log(nombreArchivo, 'creada'))
	.catch((err) => console.log(err));
