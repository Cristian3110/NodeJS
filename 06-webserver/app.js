/*******************************************
 * Right now we're starting work with Express
 ********************************************/

const express = require('express');
const app = express();

const port = 8080;

//Servir contenido estático
// middleware
// Ahora el siguiente path será la ruta por defecto
app.use(express.static('public'));

// Rutas de nuestro servicio

//* Se comenta la siguiente línea ya que con el middleware apuntamos a la ruta de la carpeta public
// app.get('/', (req, res) => {
// 	res.send('Home Page');
// });

app.get('/hola-mundo', (req, res) => {
	res.send('Hola mundo en su ruta respectiva');
});

//* Si queremos mandar una ruta de algún archivo
app.get('*', (req, res) => {
	res.sendFile(__dirname + '/public/404.html');
});

// Cualquier otra ruta que no sea especificada indicar lo siguiente
// s

app.listen(port, () => {
	console.log(`App Escuchando el puerto: ${port}`);
});
