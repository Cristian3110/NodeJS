/********************************************
 * Working with RestServer, also with Express
 *********************************************/

require('dotenv').config();
const Server = require('./models/server');

//variables de entorno

const server = new Server();

server.listen();
