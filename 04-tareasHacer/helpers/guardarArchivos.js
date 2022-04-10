/**********************************
 * Configuración para guardar nuestras tareas
 *************************************/

const fs = require('fs');
const archivo = './db/data.json';

const guardarDB = (data) => {
	// En la extensión cambiamos json para que manejemos mejor nuestra data como un json

	// convirtiendo la "data" en un objeto
	//
	fs.writeFileSync(archivo, JSON.stringify(data));
};

const leerDB = () => {
	if (!fs.existsSync(archivo)) {
		return null;
	}
	const info = fs.readFileSync(archivo, { encoding: 'utf-8' });

	const data = JSON.parse(info);
	console.log(data);

	return null;
};

module.exports = {
	guardarDB,
	leerDB,
};
