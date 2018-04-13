const express = require("express")
const app = express();

app.get('/', (req, res, next) => {
    res.send({ message: 'jojojojojo'}).status(200)
})

app.listen(8080,() => {
    console.log("se ejecuta")
})
