import ServicesExercicio from "../services/exercicio.js"
class ControllerExercicio {

     Exercicio1Get(req, res) {
        const num1 = (req.query.num1)
        const num2 = (req.query.num2)
        const result = ServicesExercicio.Somar(num1, num2)
        console.log(req.params)
        res.status(200).send("Resultado da soma:" + result)
    }
     Exercicio1Post(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2
            const result = ServicesExercicio.Somar(num1, num2)
            console.log(req.params)
            res.status(200).send({
                msg: "Resultado da soma:" + result,
                data: result,
                error: null
            })

        } catch (error) {
            res.status(400).send({
                msg: error.message,
                data: null,
                error: null
            })
        }
    }

     Exercicio2(req, res) {
        const { valorHora, qtdeHoras } = req.params

        const result =
            res.status(200).send({
                result: Number(valorHora) * Number(qtdeHoras)
            })
    }
}
export default new ControllerExercicio()