const request = require('supertest')

test("Rota GET de tarefas OK", async ()=>{
    await request("http://localhost:3000")
    .get("/tarefas")
    .expect(200)
    .then((response)=>{"GET Funcionando"})
})

test("Rota GET de tarefa específica OK", async ()=>{
    await request("http://localhost:3000")
    .get("/tarefas/:titulo")
    .expect(200)
    .then((response)=>{"GET específico Funcionando"})
})

test("Rota POST de tarefas OK", async ()=>{
    await request("http://localhost:3000")
    .post("/tarefas")
    .expect(200)
    .then((response)=>{"POST Funcionando"})
})

test("Rota PUT de tarefas OK", async ()=>{
    await request("http://localhost:3000")
    .put("/tarefas/:titulo")
    .expect(200)
    .then((response)=>{"PUT Funcionando"})
})

test("Rota DELETE de tarefas OK", async ()=>{
    await request("http://localhost:3000")
    .delete("/tarefas/:titulo")
    .expect(200)
    .then((response)=>{"DELETE Funcionando"})
})