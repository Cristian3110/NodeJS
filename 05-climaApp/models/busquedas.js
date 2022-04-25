/**************
 * Modelos
 *************/

// Nota: Las clases se escriben UpperCalmeCase
class Busquedas {
	historial = ['Caracas', 'Madrid', 'Paris', 'Londres'];

	constructor() {
		// leer BD si existe
	}

	// Metodos

	async ciudad(lugar = '') {
		//petición http
		console.log(lugar);

		return []; // retorna el lugar de busqueda
	}
}

module.exports = Busquedas;
