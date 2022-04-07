require('colors');

const mostrarMenu = () => {
	console.clear();
	console.log('======================='.red);
	console.log('Seleccione una Opción'.yellow);
	console.log('=======================\n'.red);

	console.log(`${'1.-'.yellow} Crear tarea`);
	console.log(`${'2.-'.yellow} Listar tareas`);
	console.log(`${'3.-'.yellow} Listar tares completadas`);
	console.log(`${'4.-'.yellow} Listar tareas pendientes`);
	console.log(`${'5.-'.yellow} Completar tarea(s)`);
	console.log(`${'6.-'.yellow} Borrar tarea`);
	console.log(`${'0.-'.yellow} Salir\n`);

	// Configurando - Recibir una información del usuario

	const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	readline.question('Seleccione una opción: ', (opt) => {
		// console.log(opt);
		readline.close();
	});
};

const pausa = () => {
	const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	readline.question(`Presione ${'\nENTER'.yellow} para continuar\n`, (opt) => {
		// console.log(opt);
		readline.close();
	});
};

module.exports = {
	mostrarMenu,
	pausa,
};
