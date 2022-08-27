/**
 * El controlador de nuestro código del socket
 */

const TicketControl = require('../models/ticket-control');

const ticketControl = new TicketControl();

const socketController = (socket) => {
	socket.on('siguiente-ticket', (payload, callback) => {
		const siguiente = ticketControl.siguiente();
		//función definida en el modelo
		callback(siguiente);

		//Todo: notificar que hay un nuevo ticket pendiente por asignar
	});
};

module.exports = { socketController };
