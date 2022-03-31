/******************************************
 *  Importando archivos de nuestro proyecto
 *****************************************/

//Importando la función del archivo multiplicar
const { crearArchivo } = require('./helpers/multiplicar');

const base = 2;

crearArchivo(base)
	.then((nombreArchivo) => console.log(nombreArchivo))
	.catch((err) => console.log(err));
