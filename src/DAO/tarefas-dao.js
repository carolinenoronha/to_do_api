module.exports = class tarefasDAO{

    constructor(bd){
        this.bd = bd
    }
    
//Create

  criaTarefas(titulo, descricao, status, data, id_usu){
    return new Promise ((resolve, reject) =>
    {
            this.bd.run("INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?,?,?,?,?)", [titulo, descricao, status, data, id_usu], (error) => {
                if (error) reject (`Erro ${error} ao inserir valores.`) 
                else resolve ("Tarefa inserida com sucesso")})
    })}

  listaTaefas(){
    return new Promise ((resolve,reject) =>{
        this.bd.all("SELECT * FROM TAREFAS", (error, rows) =>{
        if (error) reject ("Deu xabu")
        else resolve (rows)
        })
})
}

tarefaUnica(titulo){
    
    return new Promise ( (resolve,reject) =>{
        this.bd.all('SELECT * FROM TAREFAS WHERE TITULO = ?', [titulo], (error,row) =>{
        if (error) reject ("Deu xabu")
        else resolve (row)
        })
      
     
})}

atualizaTarefas(infos, titulo){
    return new Promise ( (resolve, reject) =>{
        this.bd.all(`UPDATE TAREFAS SET ID = ?, TITULO = ?, DESCRICAO = ?, STATUS = ?, DATACRIACAO = ?, ID_USUARIO = ? WHERE TITULO = ? `, [infos], (error)=>{
            if (error) reject ("Deu xabu")
            else resolve (`Tarefa ${titulo} atualizada`)
        })
    })}

deletaTarefas(titulo){
    return new Promise ( (resolve,reject) =>{
        this.bd.run('DELETE FROM TAREFAS WHERE EMAIL = ?', [titulo], (error) =>{
        if (error) reject ("Deu xabu")
        else resolve ("Tarefa deletada")})
})}


}