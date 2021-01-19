class tarefaController{

static getTarefa(){
  return ((req, res) => {res.send('<h1>Tarefas</h1>')})
}

static postTarefa(){
  return ( (req, res) => {res.send('Rota POST de tarefa ativada: tarefa adicionada ao banco de dados')})
}

}

module.exports = tarefaController