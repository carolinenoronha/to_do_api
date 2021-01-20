const express = require('express');
const app = express();
const port = 3000 || 8080;

const tarefaController = require('./controllers/tarefa-controller')
const usuarioController = require('./controllers/usuario-controller')



app.get('/tarefas', tarefaController.getTarefa())
app.post('/tarefas', tarefaController.postTarefa())
app.get('/usuarios', usuarioController.getUsuario())
app.post('/usuarios', usuarioController.postUsuario())




app.listen(port, ()=> console.log('Server ON'))