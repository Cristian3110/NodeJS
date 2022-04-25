/*************************
 * Aplicación del clima
 ************************/

require('colors');

const { leerInput, inquirerMenu, pausa } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async () => {
	const busqueda = new Busquedas();
	let opt = '';

	do {
		opt = await inquirerMenu();

		// console.log({ opt });

		switch (opt) {
			case 1:
				//Mostrar Mensaje
				const lugar = await leerInput('Ciudad: ');
				console.log(lugar);
				// Buscar los lugares

				// Seleccionar el lugar

				// clima

				//Mostrar los resultados

				console.log('\n Información de la ciudad \n'.yellow);
				console.log('Ciudad:');
				console.log('Latitud:');
				console.log('Longitud:');
				console.log('Temperatura');
				console.log('Minima');
				console.log('Máxima:');
				break;

			default:
				break;
		}

		if (opt !== 0) await pausa();
	} while (opt !== 0);
};

main();
