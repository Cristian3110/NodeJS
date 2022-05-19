/**
 * Controladores
 */

const { response } = require('express');

const usuariosGet = (req, res = response) => {
	//obteniendo todos los params query desde la ruta
	const query = req.query;
	//obteniendo de manera desestructurada
	const { q, nombre, apikey, page = 1, limit } = req.query;
	//* Nota: En caso de no envíar el parametro de la página, colocamos uno por defecto q es la 1
	res.json({
		msg: 'Get API - Controlador',
		// query, <-- Así vendrían todos
		q,
		nombre,
		apikey,
		page,
		limit,
	});
};

const usuariosPost = (req, res) => {
	// const body = req.body;
	//* Podemos desestructurar de la siguiente manera para especificar o validar lo q se manda
	const { nombres, apellidos } = req.body;

	//?Para mandar un status de código desde back
	res.status(202).json({
		msg: 'Post API - From controlador',
		// body: body,
		nombres,
		apellidos,
	});
};
const usuariosPut = (req, res = response) => {
	// params id
	// const id = req.params.id;
	//También si tuvieramos más elementos, se pueden desestructurar
	const { id } = req.params;
	const { nombres, edad } = req.body;

	res.json({
		msg: 'Put API - From Controlador',
		id,
		nombres,
		edad,
	});
};

const usuariosPatch = (req, res) => {
	res.status(500).json({
		msg: 'Patch API - From controlador',
	});
};

const usuariosDelete = (req, res) => {
	res.json({
		msg: 'Delete API - From controlador',
	});
};

module.exports = {
	usuariosGet,
	usuariosPost,
	usuariosPut,
	usuariosPatch,
	usuariosDelete,
};
