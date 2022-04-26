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
			const resp = await axios.get(
				'https://api.mapbox.com/geocoding/v5/mapbox.places/Caracas%2C%20Distri%2C%20Venezuela.json?limit=5&language=es&access_token=pk.eyJ1IjoibWFrb3RvMzExMCIsImEiOiJjbDJmbzJrem0wMHcxM2lzMmlnMHltNDMyIn0.amKCl6IarW_E72BXk2Y3EA'
			);
			console.log(resp.data);

			return []; // retorna el lugar de busqueda
		} catch (error) {
			return [];
		}
	}
}

module.exports = Busquedas;
