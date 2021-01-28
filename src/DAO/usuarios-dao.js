module.exports = class usuariosDao {

constructor(bd){
    this.bd = bd
}

listaUsuarios(){
    return new Promise ( (resolve,reject) =>{
        this.bd.all("SELECT * FROM USUARIOS", (error, rows) =>{
        if (error) reject ("deu xabu")
        else resolve (rows)
        })
      
     
})
}

criaUsuarios(body){
    
    return new Promise ((resolve, reject) =>
    {
        let array =  [body.NOME, body.EMAIL, body.SENHA]
            this.bd.run("INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?,?,?)", array, (error) => {
                if (error)  reject (`Erro ${error} ao inserir valores.`) 
                else resolve ("Usuário inserido com sucesso")} 

    )

    })
}
}