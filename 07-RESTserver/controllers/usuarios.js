/**
 * Controladores
 */

const { response } = require('express');

const usuariosGet = (req, res = response) => {
	res.json({
		msg: 'Get API - Controlador',
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
const usuariosPut = (req, res) => {
	res.status(404).json({
		msg: 'Put API - From Controlador',
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
