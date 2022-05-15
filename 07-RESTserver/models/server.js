/**************************************************
 * Declarando nuestro servidor a traves de Clases
 ***********************************************/

const express = require('express');

const port = process.env.PORT;

class Server {
	constructor() {
		this.app = express();
		this.port = port;

		this.routes();
	}

	routes() {
		this.app.get('/', (req, res) => {
			res.send('Hello World');
		});
	}

	listen() {
		this.app.listen(port, () => {
			console.log('Servidor corriendo en el puerto:', port);
		});
	}
}

module.exports = Server;
