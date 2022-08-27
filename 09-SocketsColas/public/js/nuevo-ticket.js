//Referencias HTML

const lblNuevoTicket = document.querySelector('#lblNuevoTicket');
const btnCrear = document.querySelector('button');

const socket = io();

socket.on('connect', () => {
	btnCrear.disabled = false;
});

//? emitiendo para mantener el ultimo ticket de la cola (mi solucion)
// socket.emit('ultimo-ticket', null, (ultimo) => {
// 	console.log('Desde el server ultimo', ultimo);
// 	lblNuevoTicket.innerText = `Ticket:${ultimo}`;
// });

socket.on('ultimo-ticket', (ultimo) => {
	lblNuevoTicket.innerText = `Ticket:${ultimo}`;
});

socket.on('disconnect', () => {
	btnCrear.disabled = true;
});

btnCrear.addEventListener('click', () => {
	socket.emit('siguiente-ticket', null, (ticket) => {
		console.log('Desde el server', ticket);
		lblNuevoTicket.innerText = ticket;
	});
});
