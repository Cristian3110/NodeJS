/**
 * Configuración de pantalla de escritorio
 */

//Referencias HTML

const lblEscritorio = document.querySelector('h1');
const btnAtender = document.querySelector('button');
const lblTicket = document.querySelector('small');
const divAlerta = document.querySelector('.alert');
const lblPendientes = document.querySelector('#lblPendientes');

const searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
	window.location = 'index.html';
	throw new Error('El escritorio es obligatorio');
}

const escritorio = searchParams.get('escritorio');
lblEscritorio.innerText = escritorio;

divAlerta.style.display = 'none';

// console.log({ escritorio });

const socket = io();

socket.on('connect', () => {
	btnAtender.disabled = false;
});

socket.on('ultimo-ticket', (ultimo) => {
	// lblNuevoTicket.innerText = `Ticket:${ultimo}`;
});

socket.on('disconnect', () => {
	btnAtender.disabled = true;
});

socket.on('tickets-pendientes', (pendientes) => {
	console.log(pendientes);

	if (pendientes === 0) {
		lblPendientes.style.display = 'none';
	} else {
		lblPendientes.style.display = '';
		lblPendientes.innerText = pendientes;
	}
});

btnAtender.addEventListener('click', () => {
	socket.emit('atender-ticket', { escritorio }, ({ ok, ticket, msg }) => {
		// console.log(payload);
		if (!ok) {
			lblTicket.innerText = 'Nadie';
			return (divAlerta.style.display = '');
		}

		lblTicket.innerText = `Ticket: ${ticket.numero}`;
	});
});
// socket.emit('siguiente-ticket', null, (ticket) => {
// 	console.log('Desde el server', ticket);
// 	lblNuevoTicket.innerText = ticket;
// });
