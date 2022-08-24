/**************************************************
 * Declarando nuestro servidor a traves de Clases
 ***********************************************/

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT;

class Server {
	constructor() {
		this.app = express();
		this.port = port;
		// from socket.io
		this.server = require('http').createServer(this.app);
		this.io = require('socket.io')(this.server);

		this.path = {};
		// this.usuariosPath = '/api/usuarios';

		// Middlewares
		this.middlewares();

		//Rutas de mi aplicacion
		this.routes();

		// Sockets
		this.sockets();
	}

	middlewares() {
		// CORS configuration
		this.app.use(cors());

		//Directorio público (Recordar que es el primero que toma por defecto ya q tiene el index.html)
		this.app.use(express.static('public'));
	}

	routes() {
		// this.app.use(this.path.auth, require('../routes/auth'));
	}

	// configuración de socket.io
	sockets() {
		this.io.on('connection', (socket) => {
			console.log('Cliente Conectado', socket.id);

			socket.on('disconnect', () => {
				// console.log('Cliente Desconectado', socket.id);
			});

			//recibiendo evento desde el front para acá
			//Recuerden que el payload es lo q está en el request del front
			socket.on('enviar-msj', (payload, callback) => {
				// console.log('Enviando msj desde el server');
				// console.log(payload);
				// this.io.emit('enviar-msj', payload);
				const id = 123456789;
				callback({ id, fecha: new Date().getTime() });
				// this.io.emit('enviar-msj', payload);
			});
		});
	}

	listen() {
		// se inicializa con el server ya q estamos utilizando sockets ver referencia up
		this.server.listen(port, () => {
			console.log('Servidor corriendo en el puerto:', port);
		});
	}
}

module.exports = Server;
