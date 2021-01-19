const controllerTarefa = require('./controllers/tarefa-controller')
const controllerUsuario = require('./controllers/usuario-controller')
controllerTarefa(app)
controllerUsuario(app)

module.exports = (app) => {

app.get('/tarefas', tarefaController.getTarefa() )
app.post('/tarefas',tarefaController.postTarefa())

app.get('/usuarios', usuarioController.getUsuario())
app.post('/usuarios', usuarioController.postUsuario())
}