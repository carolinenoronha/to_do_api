
class usuarioController{

  static getUsuario(){
    return((req, res) => {res.send('<h1>Usuários</h1>')})
  }
  
  static postUsuario(){
    return((req, res) => {res.send('Rota POST de usuários ativada: usuário adicionado ao banco de dados')})
  }
  
  }
  
  module.exports = usuarioController