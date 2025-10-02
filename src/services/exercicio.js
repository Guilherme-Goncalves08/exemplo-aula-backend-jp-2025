 class ServicesExercicio{

     Somar (num1, num2){
         if(isNaN(num1)||    isNaN(num2)){
             throw new Error("não é um numero")
            }
            const num1Inteiro = num1*100
            const num2Inteiro = num2*100
            const result = num1Inteiro+num2Inteiro
            return result/100;
        }
        
        
        Salario(valorH,qtdeH){
            
        }
        
    }
export default new ServicesExercicio()