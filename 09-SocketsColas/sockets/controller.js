/**
 * El controlador de nuestro código del socket
 */

const TicketControl = require('../models/ticket-control');

const ticketControl = new TicketControl();

const socketController = (socket) => {
	//?mi solución
	// socket.on('ultimo-ticket', (payload, callback) => {
	// 	const ultimo = ticketControl.ultimo;
	// 	callback(ultimo);
	// });

	socket.emit('ultimo-ticket', ticketControl.ultimo);

	socket.on('siguiente-ticket', (payload, callback) => {
		const siguiente = ticketControl.siguiente();
		//función definida en el modelo
		callback(siguiente);

		//Todo: notificar que hay un nuevo ticket pendiente por asignar
	});

	socket.on('atender-ticket', ({ escritorio }, callback) => {
		// console.log(payload);

		if (!escritorio) {
			return callback({
				ok: false,
				msg: 'El escritorio es obligatorio',
			});
		}

		const ticket = ticketControl.atenderTicket(escritorio);

		//todo: Notificar cambios en los últimos 4 tickets
		socket.broadcast.emit('estado-actual', ticketControl.ultimos4);

		if (!ticket) {
			return callback({
				ok: false,
				msg: 'No hay ticket pendiente',
			});
		} else {
			callback({
				ok: true,
				ticket,
			});
		}
	});
};

module.exports = { socketController };
