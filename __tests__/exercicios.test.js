import { describe, it, expect } from '@jest/globals'
import ServicesExercicio from '../src/services/exercicio'
describe('Testando função somar',() => {
    it('Somando dois numeros positivos ',() => {
        const resultado = ServicesExercicio.somar(1, 2)

        expect(resultado).toBe(3)
    })
    it('Somando dois numeros negativos ',() => {
        const resultado = ServicesExercicio.somar(-1, -2)

        expect(resultado).toBe(-3)
    })
    it('Somando dois numeros decimais ',() => {
        const resultado = ServicesExercicio.somar(1.2, 2.2)

        expect(resultado).toBe(3.4)
    })
    it('Somando um numero com zero ',() => {
        const resultado = ServicesExercicio.somar(1, 0)

        expect(resultado).toBe(1)
    })
})