const { Router, response } = require('express');

const router = Router();

// Obtener todas las productos - publico
router.get('/', (req, res = response) => {
	res.status(400).json({
		msg: 'Todos los productos',
	});
});

module.exports = router;
