// this Router comming from express
const { Router } = require('express');
const { check } = require('express-validator');
const { crearCategoria } = require('../controllers/categorias');
const { existeCategoria } = require('../helpers/dbValidators');

const { validarJWT, validarCampos } = require('../middleware');

const router = Router();

// Obtener todas las categorias - publico
router.get('/', (req, res) => {
	res.json({
		msg: 'Get',
	});
});

// Obtener una categoria por Id - público
router.get('/:id', [check('id').custom(existeCategoria)], (req, res) => {
	res.json({
		msg: 'Get por Id',
	});
});

// Crear una nueva categoria - privado con un token válido
router.post(
	'/',
	[validarJWT, check('nombre', 'El nombre es obligatorio').not().isEmpty(), validarCampos],
	crearCategoria
);

// Actualizar privado - cualquiera con token válido
router.put('/:id', (req, res) => {
	res.json({
		msg: 'Put categorias Actualizada',
	});
});

router.delete('/:id', (req, res) => {
	res.json({
		msg: 'Delete - Eliminar',
	});
});

module.exports = router;
