const express = require('express')
const app = express()
const port = 8080

app.get('/usuario', (req, res) => {
  res.send('Rota ativada com GET e recurso usuário: valores de usuário devem ser retornados')
})

app.get('/tarefa', (req, res) => {
    res.send('Rota ativada com GET e recurso tarefa: valores de tarefa devem ser retornados')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

