/**
 * Control de tickets mediante Clases
 */

const path = require('path');
const fs = require('fs');

class TicketControl {
	constructor() {
		this.ultimo = 0;
		this.hoy = new Date().getDate();
		this.tickets = [];
		this.ultimos4 = [];

		this.init();
	}

	get toJson() {
		return {
			ultimo: this.ultimo,
			hoy: this.hoy,
			tickets: this.tickets,
			ultimos4: this.ultimos4,
		};
	}

	init() {
		//lectura de db
		// const data = require('../db/data.json'); para no hacer esto, desestructuramos
		const { hoy, tickets, ultimo, ultimos4 } = require('../db/data.json');
		// console.log(data);
		if (hoy === this.hoy) {
			this.tickets = tickets;
			this.ultimo = ultimo;
			this.ultimos4 = ultimos4;
		} else {
			//es otro día
			this.guardarDB();
		}
	}

	guardarDB() {
		const dbPath = path.join(__dirname, '../db/data.json');
		fs.writeFileSync(dbPath, JSON.stringify(this.toJson));
	}
}

module.exports = TicketControl;
