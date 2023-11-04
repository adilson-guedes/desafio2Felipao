let vitorias = 1000;
let derrotas = 100;
console.log(calcularRank(vitorias, derrotas));

function calcularRank(a, b) {

    let nivel = "";
  
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    let saldo = a - b;

    

    console.log("O Herói tem um saldo de " + saldo + " e está no nível de: " +nivel); 
}

