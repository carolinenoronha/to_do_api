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

}