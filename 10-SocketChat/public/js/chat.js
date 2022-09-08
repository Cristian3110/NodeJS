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
	const socketServer = io({
		extraHeaders: {
			'x-token': localStorage.getItem('token'),
		},
	});

	socketServer.on('connect', () => {
		console.log('Sockets Online');
	});

	socketServer.on('disconnect', () => {
		console.log('Sockets Offline');
	});

	socketServer.on('recibir-msj', () => {
		//TODO:
	});

	socketServer.on('usuarios-activos', (payload) => {
		console.log(payload);
	});
	socketServer.on('msj-privado', () => {
		//TODO:
	});
};

const main = async () => {
	await validarJWT();
};

main();
//configurando nuestro socket client

// const socket = io();
