let valorDigitado = Number(prompt("Digite um numero"))
let valorTransformado = parseInt(valorDigitado)

function verificadorDeNumerosPrimos (valorTransformado){
    if (valorTransformado <= 1 ){
        return false
    }

    for (let i = 2; i <= valorTransformado / 2; i++){
        if ( valorTransformado % i === 0 ){
            return false;
        }
    }
    return true
}

console.log(verificadorDeNumerosPrimos(valorTransformado))
