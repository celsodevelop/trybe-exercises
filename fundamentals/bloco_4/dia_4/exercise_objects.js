/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
const info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Imprima no console uma mensagem de boas-vindas para a personagem acima incluindo seu nome

const boasVindas = (nome) => `Seja muito bem vinda ${nome} \n`;

// console.log(boasVindas(info.personagem)); // Exercício 1

/*  Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e,
em seguida, imprima o objeto no console. */

const recurrenceSet = (character, boolData) => {
  const infotrg = character;
  infotrg.recorrente = boolData;
};

// recurrenceSet(info, 'Sim'); // Exercício 2

((obj) => {
  for (const properties in obj) {
    console.log(properties);
  }
})(info);

console.log('Chaves: \n');

// viewKeys(info); // Exercício 3

// Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.

const viewValues = (obj) => {
  for (const key in obj) {
    console.log(obj[key]);
  }
};

console.log('\nValores: \n');

// viewValues(info) // Exercício 4

const newobj = (template) => {
  const output = {};
  let i = 0;
  for (const key in template) {
    const values = ['Tio Patinhas', 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178', 'O último MacPatinhas', 'Sim'];
    output[key] = values[i];
    i += 1;
  }
  return output;
};

const info2 = newobj(info);

const compareTwoObj = ({ recorrente: data1 }, { recorrente: data2 }) => (data1 === data2);

function compareTwo() {
  const output = {};
  if (compareTwoObj(info, info2)) {
    for (const key in info) {
      output[key] = `${info[key]} e ${info2[key]}`;
      (key == 'recorrente') ? (output[key] = 'Ambos recorrentes') :(null);
    }
  }
  return output;
}
// console.log(compareTwo()); // Exercício 5
