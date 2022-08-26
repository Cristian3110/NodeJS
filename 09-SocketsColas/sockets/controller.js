/**
 * El controlador de nuestro código del socket
 */

const TicketControl = require('../models/ticket-control');

const ticketcontrol = new TicketControl();

const socketController = (socket) => {
	socket.on('disconnect', () => {
		console.log('Cliente Desconectado', socket.id);
	});
	socket.on('enviar-msj', (payload, callback) => {
		const id = 123456789;
		callback(id);

		socket.broadcast.emit('enviar-msj', payload);
	});
};

module.exports = { socketController };
