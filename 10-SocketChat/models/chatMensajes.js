/**
 * Modelo de nuestros mensajes a traves de clases
 */

class ChatMensajes {
	constructor() {
		this.mensajes = [];
		this.usuarios = {};
	}

	//Metodos

	get ultimos10() {
		this.mensajes = this.mensajes.splice(0, 10);
		return this.mensajes;
	}

	get usuariosArr() {
		return Object.values(this.usuarios); // [ {}, {}, {}]
	}

	enviarMensaje(uid, nombre, mensaje) {
		this.mensajes.unshift(new Mensaje(uid, nombre, mensaje));
	}

	conectarUsuario(usuario) {
		this.usuarios[usuario.id] = usuario;
	}

	desconectarUsuario(id) {
		delete this.usuarios[id];
	}
}

module.exports = { ChatMensajes };
