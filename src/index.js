import express from "express"
import router from "./routes/exercicios"

const app = express()
app.use(express.json())

app.use('/api/v1', router)



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