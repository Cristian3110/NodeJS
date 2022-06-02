/**
 *
 */

const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRolValido = async (rol = '') => {
	const existeRol = await Role.findOne({ rol });

	if (!existeRol) {
		throw Error(`El rol ${rol} no está registrado en la Base de Datos`);
	}
};

const emailExiste = async (correo = '') => {
	//verificando si el correo existe
	const existeEmail = await Usuario.findOne({ correo: correo });
	if (existeEmail) {
		throw Error(`El correo: ${correo}, ya está registrado`);
	}
};

module.exports = {
	esRolValido,
	emailExiste,
};
