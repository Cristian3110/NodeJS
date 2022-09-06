/***********************************
 * Función que genera nuestro JWT
 ********************************/

const jwt = require('jsonwebtoken');

const { Usuario } = require('../models/');

const generarJWT = (uid = '') => {
	// Necesitamos convertirlo en una promesa porque el JWT trabaja con Callback
	return new Promise((resolve, reject) => {
		const payload = { uid };

		jwt.sign(
			payload,
			process.env.SECRETORPRIVATEKEY,
			{
				expiresIn: '4h',
			},
			(err, token) => {
				if (err) {
					console.log(err);
					reject('No se pudo generar el token');
				} else {
					resolve(token);
				}
			}
		);
	});
};

// comprobando JWT desde server con Socket

const comprobarJWT = async (token = '') => {
	try {
		if (token.length < 10) {
			return null;
		}

		const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

		const usuario = await Usuario.findById(uid);

		if (usuario) {
			if (usuario.estado) {
				return usuario;
			} else {
				return null;
			}
		} else {
			return null;
		}
	} catch (error) {
		return null;
	}
};

module.exports = {
	generarJWT,
	comprobarJWT,
};
