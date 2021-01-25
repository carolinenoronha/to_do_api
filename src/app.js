const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000 || 8080;
const bd = require('./infra/bd')
app.use(bodyParser.json());
const tarefaController = require('./controllers/tarefa-controller')
tarefaController(app, bd);

const usuarioController = require('./controllers/usuario-controller')
usuarioController(app, bd);

app.listen(port, ()=> console.log('Server ON'));
