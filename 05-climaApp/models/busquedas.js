/**************
 * Modelos
 *************/

const fs = require('fs');
const axios = require('axios');

// Nota: Las clases se escriben UpperCalmeCase
class Busquedas {
	historial = [];
	dbPath = './db/database.json';

	constructor() {
		// leer BD si existe
		this.leerDB();
	}

	get historialCapitalizado() {
		//capitalizar cada palabra

		return this.historial.map((lugar) => {
			let palabras = lugar.split(' ');
			palabras = palabras.map((p) => p[0].toUpperCase() + p.substring(1));

			return palabras.join(' ');
		});
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

		if (this.historial.includes(lugar.toLocaleLowerCase())) {
			return;
		}

		this.historial.unshift(lugar.toLocaleLowerCase());

		//Grabar en BD

		this.guardarDB();
	}

	guardarDB() {
		const payload = {
			historial: this.historial,
		};

		fs.writeFileSync(this.dbPath, JSON.stringify(payload));
	}

	leerDB() {
		if (!fs.existsSync(this.dbPath)) return;

		const info = fs.readFileSync(this.dbPath, { encoding: 'utf-8' });
		const data = JSON.parse(info);

		this.historial = data.historial;
	}
}

module.exports = Busquedas;
