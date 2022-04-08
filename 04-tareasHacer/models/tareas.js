/**
 * Ejemplo de cómo queremos el listado
 * _listado:
 *      { 'uuid-35151-16516-3: {id:12, desc: kvbakvkjvb, completadoEn: 65165}}
 *
 */

const Tarea = require('./tarea');

class Tareas {
	_listado = {};

	constructor() {
		this._listado = {};
	}
	// inicializando crearTarea en blanco
	crearTarea(desc = '') {
		const tarea = new Tarea(desc);

		this._listado[tarea.id] = tarea;
	}
}

module.exports = Tareas;
