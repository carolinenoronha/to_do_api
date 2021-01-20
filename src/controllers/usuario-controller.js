class usuarioController {

    static getUsuario(){
        return( (req,resp)=>
        resp.send("<h1>Rota ativada com GET e recurso usuários</h1>"))
    }

    static postUsuario(){
        return( (req,resp)=>
        resp.send("<h1>Rota POST de usuário ativada: usuário adicionado ao banco de dados.>"))
    }

}

module.exports = usuarioController;