class tarefaController {

    static getTarefa(){
        return( (req,resp)=>
        resp.send("<h1>Rota ativada com GET e recurso tarefas</h1>"))
    }

    static postTarefa(){
        return( (req,resp)=>
        resp.send("<h1>Rota POST de tarefa ativada: tarefa adicionada ao banco de dados.</h1>"))
    }

}

module.exports = tarefaController;