import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.send("bem vindo ao curso de nodejs")
})

app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000")
})