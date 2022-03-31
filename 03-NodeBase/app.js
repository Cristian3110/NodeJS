/******************************************
 *  Importando archivos de nuestro proyecto
 *****************************************/

//Importando la función del archivo multiplicar
const { crearArchivo } = require('./helpers/multiplicar');

const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');

//

crearArchivo(base)
	.then((nombreArchivo) => console.log(nombreArchivo))
	.catch((err) => console.log(err));
