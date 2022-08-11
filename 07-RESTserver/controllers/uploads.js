const path = require('path');

const { response } = require('express');

const cargarArchivo = (req, res = response) => {
	// esperando req del archivo que viene
	if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
		return res.status(400).json({ Msg: 'No hay archivos que subir' });
	}

	// The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
	// sampleFile = req.files.archivo;
	//Desestructurando lo anterior ( archivo)
	const { archivo } = req.files;
	const uploadPath = path.join(__dirname, '../uploads/', archivo.name);

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
