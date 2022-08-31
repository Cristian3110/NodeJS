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

	//* Cuando un cliente se conecta
	socket.emit('ultimo-ticket', ticketControl.ultimo);
	socket.emit('estado-actual', ticketControl.ultimos4);
	socket.emit('tickets-pendientes', ticketControl.tickets.length);

	socket.on('siguiente-ticket', (payload, callback) => {
		const siguiente = ticketControl.siguiente();
		//función definida en el modelo
		callback(siguiente);

		//Todo: notificar que hay un nuevo ticket pendiente por asignar
		socket.broadcast.emit('tickets-pendientes', ticketControl.tickets.length);
	});

	socket.on('atender-ticket', ({ escritorio }, callback) => {
		if (!escritorio) {
			return callback({
				ok: false,
				msg: 'El escritorio es obligatorio',
			});
		}

		const ticket = ticketControl.atenderTicket(escritorio);

		//TODO: notificar cambio en los ultimos 4
		socket.broadcast.emit('tickets-pendientes', ticketControl.tickets.length);
		socket.emit('tickets-pendientes', ticketControl.tickets.length);
		socket.broadcast.emit('estado-actual', ticketControl.ultimos4);

		if (!ticket) {
			return callback({
				ok: false,
				msg: 'Ya no hay tickets pendientes',
			});
		} else {
			return callback({
				ok: true,
				ticket,
			});
		}
	});
};

module.exports = { socketController };
