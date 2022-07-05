/**
 * controlando nuestra categoria
 */

const { response } = require('express');
const { Categoria } = require('../models');

const crearCategoria = async (req, resp = response) => {
	const nombre = req.body.nombre.toUpperCase();

	//verificando si hay una categoria en BD igual
	const categoriaDB = await Categoria.findOne({ nombre });

	if (categoriaDB) {
		return resp.status(400).json({
			msg: `La categoria ${categoriaDB.nombre}, ya existe`,
		});
	}

	// Generando la data a guardar
	const data = {
		nombre,
		usuario: req.usuario._id,
	};

	// console.log(data);

	const categoria = new Categoria(data);

	// Guardar DB

	await categoria.save();

	resp.status(201).json({
		categoria,
	});
};

module.exports = {
	crearCategoria,
};
