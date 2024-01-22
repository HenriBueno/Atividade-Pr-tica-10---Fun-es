let valorDigitado = Number(prompt("Digite um numero inteiro"))
let valorTransformado = parseInt(valorDigitado)

    function verificador(valorTransformado){
        if (valorDigitado % 2 == 0){
            return true
        }else {
            return false
        }
        
    }

    console.log(verificador(valorTransformado))