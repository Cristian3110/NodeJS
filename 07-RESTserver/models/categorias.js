/**
 * Modelo de categorias
 */

const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
	nombre: {
		type: String,
		required: [true, 'El nombre es obligatorio'],
	},
	estado: {
		type: Boolean,
		default: true,
		required: true,
	},
	usuario: {
		type: Schema.Types.ObjectId,
		ref: 'Usuario',
		required: [true, 'Debe existir una referecia a un usuario'],
	},
});

module.exports = model('Categoria', CategoriaSchema);
