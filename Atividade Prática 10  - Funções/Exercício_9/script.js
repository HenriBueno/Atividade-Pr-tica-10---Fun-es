let nome = prompt("Digite seu nome")

let notaA = Number(prompt("Digite sua primeira nota: "))
let nota1 = parseInt(notaA)

let notaB = Number(prompt("Digite sua segunda nota: "))
let nota2 = parseInt(notaB)

let notaC = Number(prompt("Digite sua terceira nota: "))
let nota3 = parseInt(notaC)

    function calcularMedia(nota1, nota2, nota3, nome){

        media = (nota1 + nota2 + nota3) / 3

        alert(nome + " , sua média é: " + media)
        console.log("Nota 1 : ", nota1, "Nota 2 : ", nota2, "Nota 3 : ", nota3)
        
    }


calcularMedia (nota1, nota2, nota3, nome)