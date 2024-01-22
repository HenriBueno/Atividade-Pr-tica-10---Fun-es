let tempoEmSegundos = Number(prompt("Digite um valor em segundos"))

function calcularTempo (tempoEmSegundos){

     horas = Math.floor(tempoEmSegundos / 3600);
     resto_horas = tempoEmSegundos % 3600;

     minutos = Math.floor(resto_horas / 60);
     segundos = resto_horas % 60;
     console.log(horas + ":" + minutos + ":" + segundos)
     
}


calcularTempo(tempoEmSegundos)