/*******************************************
 * Crear archivo de una tabla de multiplicar
 * Requerir paquetes - Require
 * Exportando archivos de nuestro proyecto
 ******************************************/

const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false) => {
	try {
		let salida = '';
		/**********************************
				* Mi código para la tarea
				* for (let n = 0; n <= 10; n++) {
					 r = n * 5;
					 console.log(`5 x ${n} = ${r}`);
				 }
				 *******************************/

		for (let i = 1; i <= 10; i++) {
			salida +=
				colors.red(base) + ` ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
		}
		if (listar) {
			console.log('======================='.green);
			console.log('      Tabla del:'.green, colors.bgBlack.red(base));
			console.log('======================='.green);
			console.log(salida);
		}

		/**********************
		 * Con el writeFileSync
		 ***********************/

		fs.writeFileSync(`tabla-${base}.txt`, salida);

		// console.log(console.log(`tabla-${base}.txt creado`));
		return `tabla-${base}.txt`;
	} catch (err) {
		throw err;
	}
};

module.exports = {
	crearArchivo: crearArchivo,
};
