/**
 *
 */

const Role = require('../models/role');

const esRolValido = async (rol = '') => {
	const existeRol = await Role.findOne({ rol });

	if (!existeRol) {
		throw Error(`El rol ${rol} no está registrado en la Base de Datos`);
	}
};

module.exports = {
	esRolValido,
};
