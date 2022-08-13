const { response, json } = require('express');
const { subirArchivo } = require('../helpers');

const cargarArchivo = async (req, res = response) => {
	// esperando req del archivo que viene
	if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
		return res.status(400).json({ Msg: 'No hay archivos que subir' });
	}

	const pathArchivo = await subirArchivo(req.files);

	res.json({
		// path: pathArchivo,
		nombre: pathArchivo,
	});
	// The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
	// sampleFile = req.files.archivo;
	//Desestructurando lo anterior ( archivo)
};

module.exports = {
	cargarArchivo,
};
