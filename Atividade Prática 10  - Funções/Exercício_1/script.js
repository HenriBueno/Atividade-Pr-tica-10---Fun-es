let nota1 = Number(prompt("Digite sua primeira nota: "))
let nota2 = Number(prompt("Digite sua segunda nota: "))
let nota3 = Number(prompt("Digite sua terceira nota: "))
let tipoDeMedia = prompt("Digite A para calcular média aritmética ou B para calcular meédia ponderada")
let tipoDeMediaMaiuscula = tipoDeMedia.toUpperCase()

    function calcularMedia(nota1, nota2, nota3, tipoDeMediaMaiuscula){
        if (tipoDeMediaMaiuscula === "B"){
            peso1 = Number(prompt("Digite o peso da primeira nota"))
            peso2 = Number(prompt("Digite o peso da segunda nota"))
            peso3 = Number(prompt("Digite o peso da terceira nota"))

            mediaPonderada = ((nota1 * (peso1/10)) + (nota2 * (peso2/10)) + (nota3 * (peso3/10))) 

            console.log("Sua média ponderada é:" ,mediaPonderada)

        } else if (tipoDeMediaMaiuscula === "A"){
            mediaAritmética = (nota1 + nota2 + nota3) / 3
            console.log("Sua média aritimética é:" ,mediaAritmética)
        } else {
            console.log("Letra inválida!")
        }

    }

    calcularMedia (nota1, nota2, nota3, tipoDeMediaMaiuscula)