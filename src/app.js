const express = require('express')
const app = express()
const port = 8080;

const routes = require('./todo_api/src/routes')
routes(app);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})

