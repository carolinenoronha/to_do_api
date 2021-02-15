module.exports = class usuariosDao {

constructor(bd){
    this.bd = bd
}

//Create

criaUsuarios(nome, email, senha){
    
    return new Promise ((resolve, reject) =>
    {
            this.bd.run("INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?,?,?)", [nome, email, senha], (error) => {
                if (error) reject (`Erro ${error} ao inserir valores.`) 
                else resolve ("Usuário inserido com sucesso")})
    })}

//Read

listaUsuarios(){
    return new Promise ((resolve,reject) =>{
        this.bd.all("SELECT * FROM USUARIOS", (error, rows) =>{
        if (error) reject ("deu xabu")
        else resolve (rows)
        })
})
}


usuarioUnico(email){
    
        return new Promise ( (resolve,reject) =>{
            this.bd.all('SELECT * FROM USUARIOS WHERE EMAIL = ?', [email], (error,row) =>{
            if (error) reject ("Deu xabu")
            else resolve (row)
            })
          
         
    })}

//Update

atualizaUsuarios(infos, email){
    return new Promise ( (resolve, reject) =>{
        this.bd.all(`UPDATE USUARIOS SET ID = ?, NOME = ?, EMAIL = ?, SENHA = ? WHERE EMAIL = ? `, [infos], (error)=>{
            if (error) reject ("Deu xabu")
            else resolve (`Usuário ${email} atualizado`)
        })
    })}

//Delete

deletaUsuarios(email){
    return new Promise ( (resolve,reject) =>{
        this.bd.run('DELETE FROM USUARIOS WHERE EMAIL = ?', [email], (error) =>{
        if (error) reject ("Deu xabu")
        else resolve ("Usuário deletado")})
})}

}