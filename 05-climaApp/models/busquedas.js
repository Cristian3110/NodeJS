/**************
 * Modelos
 *************/

const axios = require('axios');

// Nota: Las clases se escriben UpperCalmeCase
class Busquedas {
	historial = ['Caracas', 'Madrid', 'Paris', 'Londres'];

	constructor() {
		// leer BD si existe
	}

	// Metodos

	async ciudad(lugar = '') {
		//petición http
		// console.log('ciudad:', lugar);

		try {
			const resp = await axios.get('https://reqres.in/api/users?page=2');
			console.log(resp.data);

			return []; // retorna el lugar de busqueda
		} catch (error) {
			return [];
		}
	}
}

module.exports = Busquedas;
