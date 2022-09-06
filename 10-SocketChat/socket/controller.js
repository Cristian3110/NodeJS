/**
 * controlador de nuestro socket server
 */

const { comprobarJWT } = require('../helpers');

const socketController = async (socket) => {
	// console.log('Cliente Conectado', socket.id);
	// socket.on('disconnect', () => {
	// 	console.log('Cliente Desconectado', socket.id);
	// });
	console.log(socket);
	console.log(socket.handshake.headers['x-token']);

	const token = socket.handshake.headers['x-token'];
	const usuario = await comprobarJWT(token);

	if (!usuario) {
		return socket.disconnect();
	}

	console.log('Se conectó:', usuario.nombre);
};

module.exports = { socketController };
