/***********************************************************
 * Creando un webserver desde Node nativo sin framework
 *********************************************************/

const http = require('http');

http
	.createServer((req, res) => {
		/**
		 * Nota: En el servidor podemos trabajar con distintos tipos de archivo, ya sean csv, de texto, entre
		 * otros.
		 * Se puede trabajar de distintas maneras el request y el response, que son el requerimiento que hace
		 * el cliente, y la respi¿uesta que nosotros configuramos desde el servicio.
		 */

		// trabajando con archivos CSV
		// res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
		// res.writeHead(200, { 'Content-Type': 'application/csv' });
		// res.write('Hola mundo');

		// res.write('id, nombre\n');
		// res.write('id, Cristian\n');
		res.write('Hola Mundo');
		res.end();
	})
	.listen(8080);

console.log('Escuhando el puerto ', 8080);
