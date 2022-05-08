/***********************************************************
 * Creando un webserver desde Node nativo sin framework
 *********************************************************/

const http = require('http');

http
	.createServer((req, res) => {
		res.write('Hola mundo');
		res.end();
	})
	.listen(8080);

console.log('Escuhando el puerto ', 8080);
