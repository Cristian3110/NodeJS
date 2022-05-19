/*******************************************
 * Definiendo las rutas de nuestro backend
 *****************************************/

// this Router comming from express
const { Router } = require('express');
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

router.post('/', usuariosPost);

router.patch('/', usuariosPatch);

router.delete('/', usuariosDelete);

module.exports = router;
