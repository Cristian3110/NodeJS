/**
 * Archivo en comunicación con el server de websocket
 */
console.log('Hello world with websockets');

// Referencia del HTML
const msgOnline = document.querySelector('#msgOnline');
const msgOffline = document.querySelector('#msgOffline');

// configuración de conección del frontEnd
const socket = io();

// para escuchar eventos desde front
socket.on('connect', () => {
	console.log('connect');
	msgOffline.style.display = 'none';
	msgOnline.style.display = '';
});

socket.on('disconnect', () => {
	console.log('Server Disconnect');
	msgOnline.style.display = 'none';
	msgOffline.style.display = '';
});
