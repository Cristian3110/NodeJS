const path = require('path');
const { v4: uuidv4 } = require('uuid');

const { response, json } = require('express');

const cargarArchivo = (req, res = response) => {
	// esperando req del archivo que viene
	if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
		return res.status(400).json({ Msg: 'No hay archivos que subir' });
	}

	// The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
	// sampleFile = req.files.archivo;
	//Desestructurando lo anterior ( archivo)

	const { archivo } = req.files;
	const nombreCortado = archivo.name.split('.');
	// console.log(nombreCortado);
	//sacando la extension del archivo por la ultima posicion del []
	const extension = nombreCortado[nombreCortado.length - 1];

	// validar la extensión permitidas
	const extensionesValidas = ['png', 'jpg', 'jpeg', 'gif'];

	if (!extensionesValidas.includes(extension)) {
		return res.status(400).json({
			msg: `La extensión ${extension} del archivo, no es permitida! Sugerencia ${extensionesValidas}`,
		});
	}
	// res.json({ extension });

	const nombreTemporal = uuidv4() + '.' + extension;
	const uploadPath = path.join(__dirname, '../uploads/', nombreTemporal);
	// Use the mv() method to place the file somewhere on your server
	archivo.mv(uploadPath, (err) => {
		if (err) {
			return res.status(500).json({ err });
		}
		res.status(200).json({ msg: 'File uploaded to' + uploadPath });
	});
	// console.log(req.files);
	// res.json({
	// 	msg: 'Archivo cargado',
	// });
};

module.exports = {
	cargarArchivo,
};
