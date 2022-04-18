/**
 * Ejemplo de cómo queremos el listado
 * _listado:
 *      { 'uuid-35151-16516-3: {id:12, desc: kvbakvkjvb, completadoEn: 65165}}
 *
 */

const Tarea = require('./tarea');

class Tareas {
	_listado = {};

	cargarTareasFromArray(tareas = []) {
		tareas.forEach((tarea) => {
			this._listado[tarea.id] = tarea;
		});
	}

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

	// borrando tarea

	borrarTarea(id = '') {
		if (this._listado[id]) {
			delete this._listado[id];
		}
	}

	// inicializando crearTarea en blanco
	crearTarea(desc = '') {
		const tarea = new Tarea(desc);

		this._listado[tarea.id] = tarea;
	}

	listadoCompleto() {
		this.listadoArr.forEach((tarea, i) => {
			const idx = `${i + 1}`.yellow;
			// desestructurando
			const { desc, completadoEn } = tarea; // el completado viene de la Data
			const estado = completadoEn ? 'Completada'.yellow : 'Pendiente'.red;

			console.log(`${idx + '.-'.yellow} ${desc} :: ${estado}`);
		});
	}

	listarPendientesCompletadas(completadas = true) {
		console.log();

		let contador = 0;

		this.listadoArr.forEach((tarea) => {
			const { desc, completadoEn } = tarea;
			const estado = completadoEn ? 'Completada'.yellow : 'Pendiente'.red;

			if (completadas) {
				//mostrar completados
				if (completadoEn) {
					contador += 1;
					// contador.toString().yellow
					console.log(
						`${(contador + '.- ').yellow} ${desc} :: ${estado} :: ${completadoEn.blue}`
					);
				}
			} else {
				//mostrar pendientes
				if (!completadoEn) {
					contador += 1;
					console.log(`${(contador + '.- ').yellow} ${desc} :: ${estado}`);
				}
			}
		});
	}

	toggleCompletadas(ids = []) {
		ids.forEach((id) => {
			const tarea = this._listado[id];
			if (!tarea.completadoEn) {
				tarea.completadoEn = new Date().toISOString();
			}
		});

		this.listadoArr.forEach((tarea) => {
			if (!ids.includes(tarea.id)) {
				this._listado[tarea.id].completadoEn = null;
				// const tarea = this._listado[tarea.id];
				// tarea.completadoEn = null;
			}
		});
	}
}

module.exports = Tareas;
