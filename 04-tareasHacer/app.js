/****************************
 * Aplicación de consola interactiva
 ***********************/
require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');

// Esto lo utilizamos para hacerlo manualmente
// const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();
const main = async () => {
	console.log('Hola Mundo');

	let opt = '';

	do {
		opt = await inquirerMenu();
		console.log({ opt });
		if (opt !== '0') {
			await pausa();
			// await pausa();
		}
	} while (opt !== '0');

	// mostrarMenu();
	// pausa();
};

main();
