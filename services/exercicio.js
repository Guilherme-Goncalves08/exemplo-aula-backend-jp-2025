export const exercicio1 = (req, res) => {
    const num1 = (req.query.num1)
    const num2 = (req.query.num2)
    const result = num1+num2
    console.log(req.params)
    res.status(200).send("Resultado da soma:" + result)
}

export const exercicio2 = (req, res) => {
    const {valorHora, qtdeHoras} = req.params
    res.status(200).send({
        result: Number(valorHora) * Number(qtdeHoras)
    })
}