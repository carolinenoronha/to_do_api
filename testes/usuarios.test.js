const request = require('supertest')

test("Rota GET de usuários OK", async ()=>{
    await request("http://localhost:3000")
    .get("/usuarios")
    .expect(200)
    .then((response)=>{"GET Funcionando"})
})

test("Rota GET de usuário específico OK", async ()=>{
    await request("http://localhost:3000")
    .get("/usuarios/:email")
    .expect(200)
    .then((response)=>{"GET específico Funcionando"})
})

test("Rota POST de usuários OK", async ()=>{
    await request("http://localhost:3000")
    .post("/usuarios")
    .expect(200)
    .then((response)=>{"POST Funcionando"})
})

test("Rota PUT de usuários OK", async ()=>{
    await request("http://localhost:3000")
    .put("/usuarios/:email")
    .expect(200)
    .then((response)=>{"PUT Funcionando"})
})

test("Rota DELETE de usuários OK", async ()=>{
    await request("http://localhost:3000")
    .delete("/usuarios/:email")
    .expect(200)
    .then((response)=>{"DELETE Funcionando"})
})