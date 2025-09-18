import express from "express"
import { exercicio1, exercicio2 } from "./services/exercicio.js"
const app = express()

http://localhost:3000/exercicio1?num1=90&num2=210
app.get('/exercicio1/' , exercicio1)

app.get('/exercicio2/:valorH/:qtdeH' , exercicio2)


app.get('/api/pessoa/:id', (req, res  ) => {
    console.log(req.params);
    // Query params inicializa na URL depois do ?
    // /nome=joao&idade=10&cidade=joinville&status=dead
    const nome = req.query.nome
    res.status(200).send("Hello", req.params.id)
})

app.listen(3000, () => {

    console.log("Servidor rodando na porta 3000")
})