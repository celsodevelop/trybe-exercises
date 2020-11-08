# DIA 4

## DESCRIÇÃO DOS PROGRAMAS

### Soluções 1 - Objects e For/in no arquivo JS:

`exercise_objects.js`

Partindo do `objeto`:

 ```javascript
 let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
  ```

#### Exercício 1

Exibir mensagem de boas vindas . Função boasVindas(nome) devolve `console.log` desejando boas vindas à personagem.

#### Exercício 2

Insira no `objeto` uma nova propriedade com o nome de `chave "recorrente"` e o `valor "Sim"` e, em seguida, imprima o `objeto` no console.

#### Exercício 3

Faça um `for/in` que mostre todas as chaves do `objeto`.

#### Exercício 4

Faça um novo `for/in`, mas agora mostre todos os valores das chaves do `objeto`.

#### Exercício 5

Agora, defina um segundo `objeto` com a mesma estrutura, as mesmas chaves do primeiro e os seguintes valores:

      "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".

### Soluções 2 - Funções no arquivo JS:

`exercise_functions.js`

#### Exercício 1

Crie uma função que receba uma `string` e retorne `true` se for um palíndromo, ou `false`, se não for.


    verificaPalindrome("radar");
    Retorno esperado: true

    verificaPalindrome("desenvolvimento");
    Retorno esperado: false


#### Exercício 2

  Crie uma função que receba um `array` de inteiros e retorne o `índice do maior valor`. Foi utilizado a recursividade para diminuir o tempo de execução

    Array de teste: [2, 3, 6, 7, 10, 1];.
    Valor esperado no retorno da função: 4.

#### Exercícios 4

Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

    Array de teste: [2, 4, 6, 7, 10, 0,-3];.

    Valor esperado no retorno da função: 6.

#### Exercício 5

Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

    Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

    Valor esperado no retorno da função: Fernanda.

#### Exercício 6

Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

    Array de teste: [2, 3, 2, 5, 8, 2, 3];.
    Valor esperado no retorno da função: 2.

