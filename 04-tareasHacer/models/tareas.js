/**
 * Ejemplo de cómo queremos el listado
 * _listado:
 *      { 'uuid-35151-16516-3: {id:12, desc: kvbakvkjvb, completadoEn: 65165}}
 *
 */

const Tarea = require('./tarea');

class Tareas {
	_listado = {};

	get listadoArr() {
		// transformamos el objeto en arreglo recorriendo el mismo
		const listado = [];
		Object.keys(this._listado).forEach((key) => {
			const tarea = this._listado[key];
			listado.push(tarea);
		});
		// retornamos el recorrido con su tarea agregada con el (push)
		return listado;
	}

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
