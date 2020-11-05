// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function palindrome (palavra) {
  let output = true;
  if (typeof palavra === 'string') {
    for (let char = 0; char <= palavra.length / 2; char += 1) {
      (palavra[char] === palavra[palavra.length-char-1] && output !== false) ? (
        output = true
      ):(
        output = false);
    }
  } else {
    return 'Tipo inválido';
  }
  return output;
}

// console.log (palindrome('romametemamor')); // Exercício 1
