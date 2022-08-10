const { response } = require('express');

const cargarArchivo = (req, res = response) => {
	res.json({
		msg: 'Archivo cargado',
	});
};

module.exports = {
	cargarArchivo,
};
