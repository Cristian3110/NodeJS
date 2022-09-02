/**
 * controlador de nuestro socket server
 */

const socketController = (socket) => {
	console.log('Cliente Conectado', socket.id);

	socket.on('disconnect', () => {
		console.log('Cliente Desconectado', socket.id);
	});
};

module.exports = { socketController };
