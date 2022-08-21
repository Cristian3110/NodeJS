// this Router comming from express
const { Router } = require('express');
const { check } = require('express-validator');
const { cargarArchivo, actualizarImg } = require('../controllers/uploads');
const { coleccionesPermitidas } = require('../helpers');

const { validarCampos } = require('../middleware/validar-campos');

const router = Router();

router.post('/', cargarArchivo);

router.put(
	'/:coleccion/:id',
	[
		check('id', 'El id debe ser un id de mongo').isMongoId(),
		check('coleccion').custom((c) => coleccionesPermitidas(c, ['usuarios', 'productos'])),
		validarCampos,
	],
	actualizarImg
);

module.exports = router;
