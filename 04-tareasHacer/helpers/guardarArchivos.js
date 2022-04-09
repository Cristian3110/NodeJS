/**********************************
 * Configuración para guardar nuestras tareas
 *************************************/

const fs = require('fs');

const guardarDB = (data) => {
	// En la extensión cambiamos json para que manejemos mejor nuestra data como un json
	const archivo = './db/data.json';

	// convirtiendo la "data" en un objeto
	//
	fs.writeFileSync(archivo, JSON.stringify(data));
};

module.exports = {
	guardarDB,
};
