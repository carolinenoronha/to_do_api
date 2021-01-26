const Usuario = require('../models/usuario-model')


module.exports = (app, bd) => {
    app.get('/usuarios', (req, resp) => 
        {

            bd.all("SELECT * FROM USUARIOS;", (error, rows)=>{
                if (error) throw new Error("Erro ao consultar tabela.") 
                else resp.send(rows)
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
            const usr = new Usuario(req.body.nome, req.body.email, req.body.senha)
            bd.usuariosBD.push(usr)
            resp.send('<h1>Usuário adicionado ao banco de dados</h1>')
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

