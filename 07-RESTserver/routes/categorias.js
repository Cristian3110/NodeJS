// this Router comming from express
const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middleware/validar-campos');

const router = Router();

router.get('/', (req, res) => {
	res.json({
		msg: 'Todo OK',
	});
});

module.exports = router;
