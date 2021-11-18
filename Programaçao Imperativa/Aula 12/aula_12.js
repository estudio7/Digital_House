
const novoParticipante = [];

const alice = [23, 82, 46]; 
const bob = [45, 82, 32];


const participanteDeOutroConcurso = [28, "Miguel Oduber", "miguel.oduber@gmail.com"];

function encontrarGanhador(a, b) { 
    
    let pontosParticipanteA = 0; 
    let pontosParticipanteB = 0; 

    for (let contador = 0; contador < a.length; contador++) { 
        
        if (a[contador] > b[contador]) {
            pontosParticipanteA = pontosParticipanteA +1; 
        } else if (a[contador] < b[contador]) {
            pontosParticipanteB = pontosParticipanteB +1;
        }

    }

    if (pontosParticipanteA > pontosParticipanteB) {
        return "Alice";
    } else if (pontosParticipanteA < pontosParticipanteB) {
        return "Bob";
    } else {
        return "OS DOIS!";
    }
} 


console.log("O ganhador é: " + encontrarGanhador (alice, bob));