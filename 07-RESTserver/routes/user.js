/*******************************************
 * Definiendo las rutas de nuestro backend
 *****************************************/

// this Router comming from express
const { Router } = require('express');
const { check } = require('express-validator');
const Role = require('../models/role');

const { validarCampos } = require('../middleware/validar-campos');

const {
	usuariosGet,
	usuariosPut,
	usuariosPost,
	usuariosDelete,
	usuariosPatch,
} = require('../controllers/usuarios');

const router = Router();

//Ruta que viene definida de archivos independientes y controladores
router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post(
	'/',
	[
		check('nombre', 'El nombre es obligatorio').not().isEmpty(),
		check('password', 'El password es obligatorio y mayor a 6 letras').isLength({ min: 6 }),
		check('correo', 'El correo no es valido').isEmail(),
		// check('rol', 'No es un rol permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
		check('rol').custom(async (rol = '') => {
			const existeRol = await Role.findOne({ rol });

			if (!existeRol) {
				throw Error(`El rol ${rol} no está registrado en la Base de Datos`);
			}
		}),
		validarCampos,
	],
	usuariosPost
);

router.patch('/', usuariosPatch);

router.delete('/', usuariosDelete);

module.exports = router;
