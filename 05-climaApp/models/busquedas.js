/**************
 * Modelos
 *************/

const axios = require('axios');

// Nota: Las clases se escriben UpperCalmeCase
class Busquedas {
	historial = [];

	constructor() {
		// leer BD si existe
	}

	// Metodos

	// los params del endoint MAPBOX
	get paramsMapbox() {
		return {
			limit: 5,
			language: 'es',
			// El MAPBOX_KEY es la variable de entorno, en el archivo .env (que no se subió el repo) sin embargo lo puedes detallar en el archivo VE.txt
			access_token: process.env.MAPBOX_KEY,
		};
	}

	// Params del endpoint OPENWEATHER

	get paramsOperWeather() {
		return {
			appid: process.env.OPENWEATHER_KEY,
			units: 'metric',
			lang: 'es',
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
			// console.log(resp.data.features);
			return resp.data.features.map((lugar) => ({
				id: lugar.id,
				nombre: lugar.place_name,
				lng: lugar.center[0],
				lat: lugar.center[1],
			}));
		} catch (error) {
			console.log(error.code);
		}
	}

	async climaLugar(lat, lon) {
		try {
			// instance axios.create()
			const intance = await axios.create({
				baseURL: `https://api.openweathermap.org/data/2.5/weather`,
				params: { ...this.paramsOperWeather, lat, lon },
			});

			const resp = await intance.get();
			const { weather, main } = resp.data;

			return {
				desc: weather[0].description,
				min: main.temp_min,
				max: main.temp_max,
				temp: main.temp,
			};
		} catch (error) {
			console.log(error);
		}
	}

	agregarHistorial(lugar = '') {
		// Prevenir duplicados

		this.historial.unshift(lugar);

		//Grabar en BD
	}
}

module.exports = Busquedas;
