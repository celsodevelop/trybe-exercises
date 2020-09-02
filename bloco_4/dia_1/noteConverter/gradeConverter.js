let a =30;
let conceito = "";

if (a < 50) {
    conceito = "F";
    break;
} 
else if (a >= 50 && a < 60) {
    conceito = "E";
    break;
}
else if (a >= 60 && a < 70){
    conceito = "D";
    break;
}
else if (a >= 70 && a < 80){
    conceito : "C";
    break;
}
else if (a >= 80 && a < 90 ){
    conceito = "B";
    break;
}
else if (a >= 90){
    conceito = "A";
    break;
}
else {
    conceito = "Insira uma nota valida";
    break;
}

console.log (conceito);