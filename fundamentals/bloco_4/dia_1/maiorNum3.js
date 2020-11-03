let a = 10;
let b = 5;
let c = 20;
let maiorNum = 0;

if (a>b){
    maiorNum = a;
    if (a>c){
    maiorNum = a;
    } else {
        maiorNum = c;
    }
} else if (b>c){
    maiorNum = b;
} else {
    maiorNum = c;
}

console.log (maiorNum);
