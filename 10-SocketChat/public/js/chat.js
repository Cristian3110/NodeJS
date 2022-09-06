// ternary operator
const url = window.location.hostname.includes('localhost')
	? 'http://localhost:8080/api/auth/'
	: 'https://restserver-production.up.railway.app/api/auth/';

let usuario = null;
let socket = null;

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
	console.log(userDB, tokenDB);
};

const main = async () => {
	await validarJWT();
};

main();
//configurando nuestro socket client

// const socket = io();
