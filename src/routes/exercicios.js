import express from 'express'
import ControllerExercicio from '../controller/exercicios.js'

const router = express.Router()

router.get('/exercicio1/' , ControllerExercicio.Exercicio1Get)
router.post('/exercicio1', ControllerExercicio.Exercicio1Get)


export default router 