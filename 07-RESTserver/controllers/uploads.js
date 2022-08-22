const { response, json } = require('express');
const { subirArchivo } = require('../helpers');

const { Usuario, Producto } = require('../models');

const cargarArchivo = async (req, res = response) => {
	// esperando req del archivo que viene
	// if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
	// 	return res.status(400).json({ Msg: 'No hay archivos que subir' });
	// }

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

//Actualizar imagen
const actualizarImg = async (req, res = response) => {
	const { id, coleccion } = req.params;

	let modelo;

	// Validando las colecciones

	switch (coleccion) {
		case 'usuarios':
			modelo = await Usuario.findById(id);
			if (!modelo) {
				return res.status(400).json({
					msg: `No existe un usuario con el id: ${id}`,
				});
			}
			break;

		case 'productos':
			modelo = await Producto.findById(id);
			if (!modelo) {
				return res.status(400).json({
					msg: `No existe un producto con el id: ${id}`,
				});
			}
			break;
		default:
			return res.status(500).json({ msg: 'Se me olvidó validar esto' });
	}

	// if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
	// 	return res.status(400).json({ Msg: 'No hay archivos que subir' });
	// }

	const pathArchivo = await subirArchivo(req.files, undefined, coleccion);
	modelo.img = pathArchivo;

	await modelo.save();

	res.json(modelo);
};

module.exports = {
	cargarArchivo,
	actualizarImg,
};
