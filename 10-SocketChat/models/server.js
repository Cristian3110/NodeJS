/**************************************************
 * Declarando nuestro servidor a traves de Clases
 ***********************************************/

const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
// const { createServer } = require('http');

const { dbConnection } = require('../database/config');
const { socketController } = require('../socket/controller');

const port = process.env.PORT;

class Server {
	constructor() {
		this.app = express();
		this.port = port;
		// this.server = createServer(this.app);
		this.server = require('http').createServer(this.app);
		this.io = require('socket.io')(this.server);

		this.path = {
			auth: '/api/auth',
			buscar: '/api/buscar',
			categorias: '/api/categorias',
			productos: '/api/productos',
			uploads: '/api/uploads',
			usuario: '/api/usuarios',
		};
		// this.usuariosPath = '/api/usuarios';
		// this.authPath = '/api/auth';
		// this.categoriasPath = '/api/categorias';

		//Conectar a Base de Datos
		this.conectarDB();

		// Middlewares
		this.middlewares();

		//Rutas de mi aplicacion
		this.routes();

		// Socket
		this.sockets();
	}

	async conectarDB() {
		await dbConnection();
	}

	middlewares() {
		// CORS configuration
		this.app.use(cors());

		//Lectura y parseo del body
		this.app.use(express.json());

		//Directorio público (Recordar que es el primero que toma por defecto ya q tiene el index.html)
		this.app.use(express.static('public'));

		//Fileupload - Carga de ARchivos
		this.app.use(
			fileUpload({
				useTempFiles: true,
				tempFileDir: '/tmp/',
				createParentPath: true,
			})
		);
	}

	routes() {
		this.app.use(this.path.auth, require('../routes/auth'));
		this.app.use(this.path.buscar, require('../routes/buscar'));
		this.app.use(this.path.categorias, require('../routes/categorias'));
		this.app.use(this.path.productos, require('../routes/productos'));
		this.app.use(this.path.uploads, require('../routes/uploads'));
		this.app.use(this.path.usuario, require('../routes/user'));
	}

	//?como estaba
	// sockets() {
	// 	this.io.on('connection', socketController);
	// }

	//Para mandar referencia de los conectados a todos, incluyendo el mismo conectado
	sockets() {
		this.io.on('connection', (socket) => socketController(socket, this.io));
	}

	listen() {
		// se inicializa con el server ya q estamos utilizando sockets ver referencia up
		// Configuración anterior this.app.listen
		this.server.listen(port, () => {
			console.log('Servidor corriendo en el puerto:', port);
		});
	}
}

module.exports = Server;
