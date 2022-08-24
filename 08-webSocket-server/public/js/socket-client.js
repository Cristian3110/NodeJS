/**
 * Archivo en comunicación con el server de websocket
 */

console.log('Hello world with websockets');

// configuración de conección del frontEnd
const socket = io();

// para escuchar eventos
socket.on('connect', () => {
	console.log('connect');
});

socket.on('disconnect', () => {
	console.log('Server Disconnect  ');
});
