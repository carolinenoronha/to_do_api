/* const Usuario = require('../models/usuario-model') */
const usuariosDao = require('../DAO/usuarios-dao')

module.exports = (app, bd) => {

const usuDAO = new usuariosDao(bd)

    app.post('/usuarios', async (req, resp) => 
    {
        try{
            const retorna = await usuDAO.criaUsuarios(req.body.NOME, req.body.EMAIL, req.body.SENHA);
            resp.status(200).send(retorna);
        }
        catch(error){
            resp.send(error);
        }
    })

    app.get('/usuarios', async (req, resp) => 
        {
                try{
                    const retorna = await usuDAO.listaUsuarios();
                    resp.status(200).send(retorna);
                }
                catch(error){
                    resp.send(error);
                }
        })

    
    app.get('/usuarios/:email', async (req, resp)=>
        {
            try{
                const retorna = await usuDAO.usuarioUnico(req.params.email);
                resp.status(200).send(retorna);
            }
            catch(error){
                resp.send(error);
            }
        }
    )

    app.put('/usuarios/:email', async (req,resp)=>
        {
            try{
                const infos = [req.body.id, req.body.nome, req.body.email, req.body.senha]
                const retorna = await usuDAO.atualizaUsuarios(infos,req.params.email);
                resp.status(200).send(retorna);
            }
            catch(error){
                resp.send(error);
            }
        }
    
    )

    app.delete('/usuarios/:email', async (req,resp)=>
    {
        try{
            const retorna = await usuDAO.deletaUsuarios(req.params.email);
            resp.status(200).send(retorna);
        }
        catch(error){
            resp.send(error);
        }
    }
)

}


