/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function verificaPalindrome(palavra) {
  let output = true;
  if (typeof palavra === 'string') {
    for (let char = 0; char <= palavra.length / 2; char += 1) {
      palavra[char] === palavra[palavra.length - 1 - char] && output !== false
        ? (output = true)
        : (output = false);
    }
  } else {
    return 'Tipo inválido';
  }
  return output;
}

// console.log (verificaPalindrome('arara')); // Exercício 1

//   Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function indexGt(values, testNumber = 0) {
  let gtNum = values[testNumber];
  for (const indexNum in values) {
    if (gtNum < values[indexNum]) {
      gtNum = indexGt(values, indexNum);
      return gtNum;
    }
  }
  return values.indexOf(gtNum);
}

// console.log(indexGt([2, 3, 6, 7, 10, 1, 20, 3, 50, 2])); // Exercício 2

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indexLs(values, testNumber = 0) {
  let lsNum = values[testNumber];
  for (const indexNum in values) {
    if (lsNum > values[indexNum]) {
      lsNum = indexLs(values, indexNum);
      return lsNum;
    }
  }
  return values.indexOf(lsNum);
}

// console.log(indexLs([2, 4, 6, 7, 10, 0,-3])) // Exercício 3

/* Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de
caracteres. */
function countChar(names, index = 0) {
  let name = names[index];
  for (const testIndexName in names) {
    if (names[testIndexName].length > name.length) {
      name = countChar(names, testIndexName);
      return name;
    }
  }
  return name;
}

// console.log(countChar(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'Louro José']))
// Exercício 5

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function moreRepetition(values, indexNum = 0, outarray = []) {
  let repetitions = 0;
  const firstOcurrence = values.indexOf(values[indexNum]);
  for (
    let number = 0;
    number < values.length && indexNum <= firstOcurrence;
    number += 1
  ) {
    if (values[indexNum] === values[number]) {
      repetitions += 1;
    }
  }
  if (indexNum < values.length - 1) {
    moreRepetition(values, indexNum + 1, outarray);
  }
  outarray.unshift(repetitions);
  return values[indexGt(outarray)];
}

// console.log(moreRepetition([2, 3, 2, 5, 8, 2, 3, 8, 8, 8, 19])); // Exercício 6

function somatorio(n) {
  return (n * (n + 1)) / 2;
}
// console.log(somatorio(100)); // Exercício 6

/* Crie uma função que receba uma string word e outra string ending.
Verifique se a string ending é o final da string word. Considere que a string
ending sempre será menor que a string word. */

function verificaChar(palavra, test, index) {
  if (palavra[(palavra.length - index) - 1] === test[(test.length - index) - 1]) {
    return true;
  }
  return false;
}

function verificaFimPalavra(palavra, test) {
  let output = false;
  for (let index = 0; index < test.length; index += 1) {
    output = verificaChar(palavra, test, index);
  }
  return output;
}

/*
console.log(verificaFimPalavra('joaofernando', 'fernan')); // Exercício 7

console.log(verificaFimPalavra("trybe", "be")); // Exercício 7
*/
