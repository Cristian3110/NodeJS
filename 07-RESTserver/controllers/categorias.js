/**
 * controlando nuestra categoria
 */

const { response } = require('express');
const { Categoria } = require('../models');

// Obtener categorías - páginado - total - populate

const obtenerCategoria = async (req, res = response) => {
	const { limite = 5, desde = 0 } = req.query;
	// Para traer solo usuarios con estados en true
	const query = { estado: true };

	const [total, categorias] = await Promise.all([
		Categoria.countDocuments(query),
		Categoria.find(query).limit(Number(limite)).skip(Number(desde)),
	]);

	res.json({
		total,
		categorias,
	});
};

// Obtener categoría  - populate{}

// Crear categoria

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

// Actualizar categorías

// Borrar categoria - solo cambiando el estado a Falso

module.exports = {
	crearCategoria,
	obtenerCategoria,
};
