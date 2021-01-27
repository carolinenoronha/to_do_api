/* const Usuario = require('../models/usuario-model') */
const usuariosDao = require('../DAO/usuarios-dao')

module.exports = (app, bd) => {
    app.get('/usuarios', (req, resp) => 
        {
            const classe = new usuariosDao(bd)
            classe.listaUsuarios()
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
            /* const usr = new Usuario(req.body.nome, req.body.email, req.body.senha)
            bd.usuariosBD.push(usr)
            resp.send('<h1>Usuário adicionado ao banco de dados</h1>') */

            let array =  [req.body.NOME, req.body.EMAIL, req.body.SENHA]

            bd.run("INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?,?,?)", array, (error) => {
                if (error) throw new Error(`Erro ${error} ao inserir valores.`) 
                else resp.send("Usuário inserido com sucesso")

            })

        }
    )

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

