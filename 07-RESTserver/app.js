/********************************************
 * Working with RestServer, also with Express
 *********************************************/

//variables de entorno
require('dotenv').config();
const port = process.env.PORT;

const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.listen(port, () => {
	console.log('Servidor corriendo en el puerto:', port);
});
