/*******************************************
 * Crear archivo de una tabla de multiplicar
 * Requerir paquetes - Require
 * Exportando archivos de nuestro proyecto
 ******************************************/

const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
	try {
		let salida = '';
		let consola = '';
		/**********************************
				* Mi código para la tarea
				* for (let n = 0; n <= 10; n++) {
					 r = n * 5;
					 console.log(`5 x ${n} = ${r}`);
				 }
				 *******************************/
		// cambiamos el valor de límite 10 por el argumento (hasta) que sería el nuevo límite
		for (let i = 1; i <= hasta; i++) {
			// salida para el archivo de texto
			salida += `${base} x ${i} = ${base * i}\n`;
			// colors.red(base) + ` ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
			// salida en colores para la consola
			consola +=
				colors.red(base) + ` ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
		}
		if (listar) {
			console.log('======================='.green);
			console.log('      Tabla del:'.green, colors.bgBlack.red(base));
			console.log('======================='.green);
			console.log(consola);
		}

		/**********************
		 * Con el writeFileSync
		 ***********************/

		fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

		// console.log(console.log(`tabla-${base}.txt creado`));
		return `tabla-${base}.txt`;
	} catch (err) {
		throw err;
	}
};

module.exports = {
	crearArchivo: crearArchivo,
};
