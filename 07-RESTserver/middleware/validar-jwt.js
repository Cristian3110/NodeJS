/******************
 * Validar JWT
 *****************/

const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req = request, res = response, next) => {
	const token = req.header('x-token');

	if (!token) {
		return res.status(401).json({
			msg: 'No hay token en la petición',
		});
	}

	try {
		const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

		req.uid = uid;

		// console.log(payload);

		next();
	} catch (error) {
		console.log(error);
		res.status(401).json({
			msg: 'Token no Valido',
		});
	}
};

module.exports = {
	validarJWT,
};
