const { response } = require('express');
const { isValidObjectId } = require('mongoose');
const { Usuario } = require('../models');

const coleccionesPermitidas = ['usuarios', 'categorias', 'productos', 'roles'];

const buscarUsuarios = async (termino = '', res = response) => {
	// separando la busqueda de término
	const esMongoId = isValidObjectId(termino); // true or false

	if (esMongoId) {
		const usuario = await Usuario.findById(termino);
		res.json({
			results: usuario ? [usuario] : [],
		});
	}
};

const buscar = (req, res = response) => {
	const { coleccion, termino } = req.params;

	if (!coleccionesPermitidas.includes(coleccion)) {
		return res.status(400).json({
			msg: `Las colecciones permitidas son: ${coleccionesPermitidas}`,
		});
	}

	switch (coleccion) {
		case 'usuarios':
			buscarUsuarios(termino, res);
			break;
		case 'categorias':
			break;
		case 'productos':
			break;
		default:
			res.status(500).json({
				msg: 'Se le olvidó hacer ésta búsqueda',
			});
	}

	// res.json({
	// 	coleccion,
	// 	termino,
	// 	msg: 'Buscar....',
	// });
};

module.exports = {
	buscar,
};
