let numero = Number(prompt("Digite um número: "))

function VerificadorDeNumeroPerfeito (numero){
    numerosPerfeito = []
    
    for (let i = 0; i < numero; i++){
        if (numero % i == 0){
            numerosPerfeito.push(i)
        }

    }

    let soma = numerosPerfeito.reduce(function(numerosAdicionados, numero){
        return numerosAdicionados + numero
    }, 0)
    
    if (soma == numero){
        return true
    }else {
        return false
    }
}
console.log (VerificadorDeNumeroPerfeito(numero))