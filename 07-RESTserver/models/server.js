/**************************************************
 * Declarando nuestro servidor a traves de Clases
 ***********************************************/

const express = require('express');
const cors = require('cors');

const port = process.env.PORT;

class Server {
	constructor() {
		this.app = express();
		this.port = port;

		// Middlewares

		this.middlewares();

		//Rutas de mi aplicacion
		this.routes();
	}

	middlewares() {
		// ?CORS configuration
		this.app.use(cors());

		//Directorio público (Recordar que es el primero que toma por defecto ya q tiene el index.html)
		this.app.use(express.static('public'));
	}

	routes() {
		this.app.get('/api', (req, res) => {
			res.json({
				ok: true,
				msg: 'get API',
			});
		});

		this.app.put('/api', (req, res) => {
			res.status(404).json({
				ok: true,
				msg: 'put API',
			});
		});

		this.app.post('/api', (req, res) => {
			//?Para mandar un status de código desde back
			res.status(202).json({
				ok: true,
				msg: 'post API',
			});
		});

		this.app.delete('/api', (req, res) => {
			res.json({
				ok: true,
				msg: 'delete API',
			});
		});

		this.app.patch('/api', (req, res) => {
			res.status(500).json({
				ok: true,
				msg: 'delete API',
			});
		});
	}

	listen() {
		this.app.listen(port, () => {
			console.log('Servidor corriendo en el puerto:', port);
		});
	}
}

module.exports = Server;
