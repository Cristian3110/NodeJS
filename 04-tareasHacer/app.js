/****************************
 * Aplicación de consola interactiva
 ***********************/

// importando paque instalado
require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivos');
// importando las funciones desde sus origenes u otros archivos
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

// Esto lo utilizamos para hacerlo manualmente
// const { mostrarMenu, pausa } = require('./helpers/mensajes');

// console.clear();
const main = async () => {
	let opt = '';
	const tareas = new Tareas();

	const tareasDB = leerDB();

	// Para leer las tareas
	if (tareasDB) {
		//cargar las tareas
		tareas.cargarTareasFromArray(tareasDB);
	}
	// para lograr ver las tareas
	// await pausa();

	do {
		// imprime el menú retornando una opción
		opt = await inquirerMenu();
		// console.log({ opt });

		switch (opt) {
			case '1':
				//crear opciones
				const desc = await leerInput('Descripción:');
				tareas.crearTarea(desc);
				break;
			case '2':
				tareas.listadoCompleto();
				// console.log(tareas.listadoArr);
				break;
			case '3': //Listar completadas
				tareas.listarPendientesCompletadas(true);
				// console.log(tareas.listadoArr);
				break;
			case '4': //listar las pendientes
				tareas.listarPendientesCompletadas(false);
				// console.log(tareas.listadoArr);
				break;
			case '6': // borrar tareas
				const id = await listadoTareasBorrar(tareas.listadoArr);
				console.log({ id });
				// console.log(tareas.listadoArr);
				break;
		}

		guardarDB(tareas.listadoArr);

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
