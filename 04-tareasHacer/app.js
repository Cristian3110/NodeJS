/****************************
 * Aplicación de consola interactiva
 ***********************/
require('colors');

const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

// Esto lo utilizamos para hacerlo manualmente
// const { mostrarMenu, pausa } = require('./helpers/mensajes');

// console.clear();
const main = async () => {
	console.log('Hola Mundo');

	let opt = '';
	const tareas = new Tareas();

	do {
		opt = await inquirerMenu();
		// console.log({ opt });

		switch (opt) {
			case '1':
				//crear opciones
				const desc = await leerInput('Descripción:');
				tareas.crearTarea(desc);
				break;
			case '2':
				console.log(tareas._listado);
				break;
		}

		// const tareas = new Tareas();

		// tareas._listado[tarea.id] = tarea;
		// console.log(tareas);
		await pausa();
		if (opt !== '0') {
			// await pausa();
		}
	} while (opt !== '0');

	// mostrarMenu();
	// pausa();
};

main();
