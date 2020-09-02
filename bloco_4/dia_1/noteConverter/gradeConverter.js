let a =80;
let conceito = "";

if (a < 50) {
    conceito = "F";
} 
else if (a >= 50 && a < 60) {
    conceito = "E";
}
else if (a >= 60 && a < 70){
    conceito = "D";
}
else if (a >= 70 && a < 80){
    conceito : "C";
}
else if (a >= 80 && a < 90 ){
    conceito = "B";
}
else if (a >= 90){
    conceito = "A";
}
else {
    conceito = "Insira uma nota valida";
}

console.log (conceito);