// ternary operator
const url = window.location.hostname.includes('localhost')
	? 'http://localhost:8080/api/auth/'
	: 'https://restserver-production.up.railway.app/api/auth/';

let usuario = null;
let socket = null;

// Referencias del HTML
const txtUid = document.querySelector('#txtUid');
const txtMensaje = document.querySelector('#txtMensaje');
const ulUsuarios = document.querySelector('#ulUsuarios');
const ulMensajes = document.querySelector('#ulMensajes');
const btnSalir = document.querySelector('#btnSalir');

const validarJWT = async () => {
	const token = localStorage.getItem('token') || '';

	if (token.length <= 10) {
		window.location = 'index.html';
		throw new Error('No hay token en nuestro servidor');
	}

	const resp = await fetch(url, {
		headers: { 'x-token': token },
	});

	const { usuario: userDB, token: tokenDB } = await resp.json();

	localStorage.setItem('token', tokenDB);
	usuario = userDB;
	document.title = usuario.nombre;

	await conectarSocket();
	console.log(userDB, tokenDB);
};

const conectarSocket = async () => {
	socket = io({
		extraHeaders: {
			'x-token': localStorage.getItem('token'),
		},
	});

	socket.on('connect', () => {
		console.log('Sockets Online');
	});

	socket.on('disconnect', () => {
		console.log('Sockets Offline');
	});

	// socket.on('recibir-msj', (payload) => {
	// 	// console.log(payload);
	// 	dibujarMensajes(payload);
	// });

	socket.on('recibir-msj', dibujarMensajes);

	socket.on('usuarios-activos', dibujarUsuarios);

	socket.on('msj-privado', (payload) => {
		console.log('Mensaje privado: ', payload);
	});
};

//Mostrando los usuarios en el UI
const dibujarUsuarios = (usuarios = []) => {
	let usersHtml = '';
	usuarios.forEach(({ nombre, uid }) => {
		usersHtml += `
		<li>
			<p>
				<h5 class="text-success">${nombre}</h5>
				<span class="fs-6 text-muted">${uid}</span>
			</p>
		</li>`;
	});

	ulUsuarios.innerHTML = usersHtml;
};

//Mostrando los mensajes en el UI
const dibujarMensajes = (mensajes = []) => {
	let mensajesHtml = '';
	mensajes.forEach(({ nombre, mensaje }) => {
		mensajesHtml += `
		<li>
			<p>
				<span class="text-primary">${nombre}</span>
				<span class="fs-6 text-muted">${mensaje}</span>
			</p>
		</li>`;
	});

	ulMensajes.innerHTML = mensajesHtml;
};

// extrayendo el keyup del evento, en este caso el Keyup
//txtMensaje.addEventListener('keyup', (ev) => {
txtMensaje.addEventListener('keyup', ({ keyCode }) => {
	// console.log(ev);

	const mensaje = txtMensaje.value;
	const uid = txtUid.value;

	if (keyCode !== 13) {
		return;
	}
	if (mensaje.length === 0) {
		return;
	}

	socket.emit('enviar-mensaje', { mensaje, uid });

	txtMensaje.value = '';
});

const main = async () => {
	//validando el JWT
	await validarJWT();
};

main();
//configurando nuestro socket client

// const socket = io();
