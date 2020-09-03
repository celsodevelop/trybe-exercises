const aliquotaINSS = [0.08, 0.09, 0.11];
const aliquotaIR = [0, 0.075, 0.15, 0.225, 0.275];


let salarioBruto = "a";
let valorINSS = 0;
let valorIR = 0;
let salarioBase = 0;
let salarioLiquido = 0;

if (salarioBruto >= 0 && salarioBruto <= 1556.94){
    valorINSS = salarioBruto * aliquotaINSS[0];
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    valorINSS = salarioBruto * aliquotaINSS[1];
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    valorINSS = salarioBruto * aliquotaINSS[2];
} else if (salarioBruto >= 5189.83) {
    valorINSS = 570.88;
} else {
    console.log ("INVALID salario ! Digite salario valido")
    valorINSS = "INVALID"
}

salarioBase = salarioBruto - valorINSS;

if (valorINSS != "INVALID"){
    if (salarioBase < 1903.99){
        valorIR = aliquotaIR[0];
    } else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
        valorIR = (salarioBase * aliquotaIR[1]) - 142.80;
    } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
        valorIR = (salarioBase * aliquotaIR[2]) - 354.80;
    } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
        valorIR = (salarioBase * aliquotaIR[3]) - 636.13;
    } else {
        valorIR = (salarioBase * aliquotaIR[4]) - 896.36;
    }
    salarioLiquido = salarioBase - valorIR;
    console.log("Para o salario bruto: " + `${salarioBruto}` );
    console.log("A alíquota de INSS é: " + `${valorINSS}` );
    console.log("Portanto, o salário base será: " + `${salarioBase}` + " E terá um desconto de IR de: " +  `${valorIR}` );
    console.log("O salário líquido será: " + `${salarioLiquido}`);
}


