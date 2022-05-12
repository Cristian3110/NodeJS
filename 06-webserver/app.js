/*******************************************
 * Right now we're starting work with Express
 ********************************************/

const { config } = require('dotenv');
const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
// const port = 8080;
//* Se hace llamado a la variable de entorno
const port = process.env.PORT;

//TODO: require('hbs);
// *HANDLEBARS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estático
// middleware
// Ahora el siguiente path será la ruta por defecto
app.use(express.static('public'));

// Rutas de nuestro servicio

//* Se comenta la siguiente línea ya que con el middleware apuntamos a la ruta de la carpeta public
// app.get('/', (req, res) => {
// 	res.send('Home Page');
// });

//?New route with template engines
//* Mandando argumentos renderizados a la page principal
app.get('/', (req, res) => {
	res.render('home', {
		nombre: 'Cristian Carrillo',
		titulo: 'Node Course',
	});
});

// app.get('/generic', (req, res) => {
// 	res.sendFile(__dirname + '/public/generic.html');
// });

//* Realizando handlebars con las otras páginas

app.get('/elements', (req, res) => {
	res.render('elements', {
		nombre: 'Cristian Carrillo',
		titulo: 'Node Course',
	});
});

app.get('/generic', (req, res) => {
	res.render('generic', {
		nombre: 'Cristian Carrillo',
		titulo: 'Node Course',
	});
});

// app.get('/elements', (req, res) => {
// 	res.sendFile(__dirname + '/public/elements.html');
// });

app.get('/hola-mundo', (req, res) => {
	res.send('Hola mundo en su ruta respectiva');
});

// Cualquier otra ruta que no sea especificada indicar lo siguiente
//* Si queremos mandar una ruta de algún archivo
app.get('*', (req, res) => {
	res.sendFile(__dirname + '/public/before-page/404.html');
});

app.listen(port, () => {
	console.log(`App Escuchando el puerto: ${port}`);
});
