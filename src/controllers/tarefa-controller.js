const tarefasDAO = require('../DAO/tarefas-dao')  

module.exports = (app, bd) => {

    const tarDAO = new tarefasDAO(bd)

    app.post('/tarefas', async (req, resp) => 
        {
            try{
                const retorna = await tarDAO.criaTarefas([req.body.TITULO, req.body.DESCRICAO, req.body.STATUS, req.body.DATACRIACAO, req.body.ID_USUARIO]);
                resp.status(200).send(retorna);
            }
            catch(error){
                resp.send(error);
            }
        })


    app.get('/tarefas', async (req, resp) => 
        {
                try{
                    const retorna = await tarDAO.listaTarefas();
                    resp.status(200).send(retorna);
                }
                catch(error){
                    resp.send(error);
                }
        })
        


    app.get('/tarefas/:titulo', async (req, resp)=>
        {
            try{
                const retorna = await tarDAO.tarefaUnica(req.params.titulo);
                resp.status(200).send(retorna);
            }
            catch(error){
                resp.send(error);
            }
        }
    )

    app.put('/tarefas/:titulo', async (req, resp)=>
        {
            try{
                const infos = [req.body.id, req.body.titulo, req.body.descricao, req.body.status, req.body.datacriacao, req.body.id_usuario]
                const retorna = await tarDAO.atualizaTarefas(infos, req.params.tituo);
                resp.status(200).send(retorna);
            }
            catch(error){
                resp.send(error);
            }
        }
    )

    app.delete('/tarefas/:titulo', async (req, resp)=>
        {
  
            try{
                const retorna = await tarDAO.deletaTarefas(req.params.titulo);
                resp.status(200).send(retorna);
            }
            catch(error){
                resp.send(error);
            }
        }
    )


}