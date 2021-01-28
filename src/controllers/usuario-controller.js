/* const Usuario = require('../models/usuario-model') */
const usuariosDao = require('../DAO/usuarios-dao')

module.exports = (app, bd) => {
    app.get('/usuarios', (req, resp) => 
        {
            const classeGET = new usuariosDao(bd)
            classeGET.listaUsuarios()
                .then((usuarios) => {
                    resp.send(usuarios)
                })

                .catch((error) =>{
                    resp.send(error)
                })

 
        }
    )

    app.get('/usuarios/:email', (req, resp)=>
        {
            for (let usr of bd.usuariosBD)
            {
                if(req.params.email == usr.email){resp.send(usr)}
            }

            resp.send("Usuário não encontrado")

        }
    )

    app.post('/usuarios', (req, resp) => 
        {
            const classePOST = new usuariosDao(bd)
            classePOST.criaUsuarios(req.body)
                .then((usuarios) => {
                    resp.send(usuarios)
                })

                .catch((error) =>{
                    resp.send(error)
                })
              
            

        })

        
    

    app.delete('/usuarios/:email', (req,resp)=>
        {
            for(let i =0; i <bd.usuariosBD.length; i++)
            {
                if(req.params.email == bd.usuariosBD[i].email)
                {bd.usuariosBD.splice(i,1)
                resp.send("Usuário deletado")}
            }

            resp.send("Usuário não encontrado")
        }
    )

    app.put('/usuarios/:email', (req,resp)=>
        {
            for (usr of bd.usuariosBD)
            {
                if(req.params.email == usr.email)
                {usr.nome = req.body.nome
                 usr.senha = req.body.senha
                 resp.send("Usuário alterado")}
            }

            resp.send("Usuário não encontrado")
        }
    
    )
}

