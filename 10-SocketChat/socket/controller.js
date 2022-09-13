/**
 * controlador de nuestro socket server
 */

const { comprobarJWT } = require('../helpers');

const ChatMensajes = require('../models/chatMensajes');

const chatMensajes = new ChatMensajes();

const socketController = async (socket, io) => {
	// console.log('Cliente Conectado', socket.id);
	// socket.on('disconnect', () => {
	// 	console.log('Cliente Desconectado', socket.id);
	// });
	// console.log(socket);
	// console.log(socket.handshake.headers['x-token']);

	const token = socket.handshake.headers['x-token'];
	const usuario = await comprobarJWT(token);

	if (!usuario) {
		return socket.disconnect();
	}
	// Agregar el usuario conectado
	chatMensajes.conectarUsuario(usuario);
	io.emit('usuarios-activos', chatMensajes.usuariosArr);
	socket.emit('recibir-msj', chatMensajes.ultimos10);
	// socket.emit('recibir-mensajes', chatMensajes.ultimos10);
	// console.log('Se conectó:', usuario.nombre);

	//conectarlo a una sala especial
	socket.join(usuario.id); // son 3 salas, una global, socket.id, usuario.id

	// limpiar cuando alguien se desconecte
	socket.on('disconnect', () => {
		chatMensajes.desconectarUsuario(usuario.id);
		io.emit('usuarios-activos', chatMensajes.usuariosArr);
	});

	socket.on('enviar-mensaje', ({ uid, mensaje }) => {
		// console.log(payload);

		if (uid) {
			//Mensaje privado
			socket.to(uid).emit('msj-privado', { de: usuario.nombre, mensaje });
		} else {
			chatMensajes.enviarMensaje(usuario.id, usuario.nombre, mensaje);
			io.emit('recibir-msj', chatMensajes.ultimos10);
		}
	});
};

module.exports = { socketController };
