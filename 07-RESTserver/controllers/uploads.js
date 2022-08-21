const { response, json } = require('express');
const { subirArchivo } = require('../helpers');

const cargarArchivo = async (req, res = response) => {
	// esperando req del archivo que viene
	if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
		return res.status(400).json({ Msg: 'No hay archivos que subir' });
	}

	try {
		// const pathArchivo = await subirArchivo(req.files, ['txt', 'md'], 'textos');
		const pathArchivo = await subirArchivo(req.files, undefined, 'imgs');
		res.json({
			// path: pathArchivo,
			nombre: pathArchivo,
		});
	} catch (msg) {
		res.status(400).json({ msg });
	}
	// The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
	// sampleFile = req.files.archivo;
	//Desestructurando lo anterior ( archivo)
};

const actualizarImg = async (req, res = response) => {
	const { id, coleccion } = req.params;
	res.json({
		id,
		coleccion,
	});
};

module.exports = {
	cargarArchivo,
	actualizarImg,
};
