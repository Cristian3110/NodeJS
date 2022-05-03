/*************************
 * Aplicación del clima
 ************************/

require('dotenv').config();

require('colors');

const { leerInput, inquirerMenu, pausa, listarLugares } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

// console.log(process.env);

const main = async () => {
	const busqueda = new Busquedas();
	let opt = '';

	do {
		opt = await inquirerMenu();

		// console.log({ opt });

		switch (opt) {
			case 1:
				//Mostrar Mensaje
				const terminoBusqueda = await leerInput('Ciudad: ');

				// Buscar los lugares

				const lugares = await busqueda.ciudad(terminoBusqueda);

				// Seleccionar el lugar
				const id = await listarLugares(lugares);
				const lugarSelec = lugares.find((sitio) => sitio.id === id);
				console.log(lugarSelec);

				// clima

				//Mostrar los resultados

				console.log('\n Información de la ciudad \n'.yellow);
				console.log('Ciudad:', lugarSelec.nombre);
				console.log('Latitud:', lugarSelec.lng);
				console.log('Longitud:', lugarSelec.lat);
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
