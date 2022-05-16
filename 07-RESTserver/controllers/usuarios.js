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
	//?Para mandar un status de código desde back
	res.status(202).json({
		msg: 'Post API - From controlador',
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
