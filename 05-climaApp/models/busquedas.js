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

	// los params del endoint
	get paramsMapbox() {
		return {
			limit: 5,
			language: 'es',
			access_token:
				'pk.eyJ1IjoibWFrb3RvMzExMCIsImEiOiJjbDJmbmxzcHAwN2M1M2NvMWdlNXRscW11In0.bVLfVwXCRW4NQGF2NnO0iA',
		};
	}

	async ciudad(lugar = '') {
		//petición http
		// console.log('ciudad:', lugar);

		try {
			const intance = axios.create({
				baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
				params: this.paramsMapbox,
			});

			const resp = await intance.get();

			console.log(resp.data);

			return []; // retorna el lugar de busqueda
		} catch (error) {
			return [];
		}
	}
}

module.exports = Busquedas;
