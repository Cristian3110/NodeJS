// this Router comming from express
const { Router } = require('express');
const { check } = require('express-validator');

const { login, googleSignIn, renovarToken } = require('../controllers/auth');
const { validarCampos, validarJWT } = require('../middleware/');

const router = Router();

router.post(
	'/login',
	[
		check('correo', 'El correo es obligatorio').isEmail(),
		check('password', 'La contraseña es obligatoria').not().isEmpty(),
		validarCampos,
	],
	login
);

router.get('/', validarJWT, renovarToken);

// route from googleSigIn API idToken
router.post(
	'/google',
	[check('id_token', 'El id_token es necesario').not().isEmpty(), validarCampos],
	googleSignIn
);

module.exports = router;
