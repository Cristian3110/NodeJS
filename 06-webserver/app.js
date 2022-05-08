/*******************************************
 * Right now we're starting work with Express
 ********************************************/

const express = require('express');
const app = express();

const port = 8080;

// Rutas de nuestro servicio

app.get('/', (req, res) => {
	res.send('Home Page');
});

app.get('/hola-mundo', (req, res) => {
	res.send('Hola mundo en su ruta respectiva');
});

// Cualquier otra ruta que no sea especificada indicar lo siguiente
app.get('*', (req, res) => {
	res.send('404 | Page not found');
});

app.listen(port, () => {
	console.log(`App Escuchando el puerto: ${port}`);
});
