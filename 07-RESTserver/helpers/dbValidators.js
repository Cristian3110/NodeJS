/**
 *
 */

const Role = require('../models/role');
const Usuario = require('../models/usuario');
const Categoria = require('../models/categorias');

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

const existeUsuarioPorId = async (id) => {
	const existeUsuario = await Usuario.findById(id);

	if (!existeUsuario) {
		throw new Error(`El id: ${id} no existe`);
	}
};

const existeCategoria = async (id) => {
	const existeCat = await Categoria.findById(id);

	if (!existeCat) {
		throw Error(`La categoría ${id} no existe en la BD`);
	}
};

module.exports = {
	esRolValido,
	emailExiste,
	existeUsuarioPorId,
	existeCategoria,
};
