const buscaEstados = async () => {
  let output = [];
  await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(response => response.json())
    .then(states => states.forEach(uf => {
      output.push(uf.sigla);
    }));
  output = output.sort();
  return output;
};
const criarOption = (item) => {
  const novaOption = document.createElement('option');
  novaOption.innerText = item;
  novaOption.value = item;
  novaOption.className = 'state-input-option';
  novaOption.id = `option-${item}`;
  return novaOption;
};
const populateStates = () => {
  const selectElement = document.getElementById('states-input');
  buscaEstados()
    .then(states => {
      states.forEach((uf) => {
        const novaOption = criarOption(uf);
        selectElement.appendChild(novaOption);
      });
    });
};
const capturaEvento = (idElemento, tipoEvento, callback) => {
  const elementoDOM = document.getElementById(idElemento);
  elementoDOM.addEventListener(tipoEvento, (elementoEvento) => {
    callback(elementoEvento);
  });
};
const validaFormulario = (elementoEvento) => {
  let output = true;
  output = validaCamposObrigatorios();
  output = validaLimiteTexto();
  if (output) {
    console.log('output = true');
  }
  elementoEvento.preventDefault();
};
const validaCamposObrigatorios = () => {
  let output = true;
  const requiredInputs = document.querySelectorAll('[required]');
  requiredInputs.forEach(input => {
    if (input.validity.valueMissing) {
      const nomeInput = document.querySelector(`label[for=${input.id}]`);
      console.log(`${nomeInput.innerText} é um campo obrigatório e não pode ser vazio!`);
    }
  });
  return output;
};
const validaLimiteTexto = () => {
  let output = true;
  const requiredInputs = document.querySelectorAll('[required]');
  requiredInputs.forEach(input => {
    console.log(input.validity.tooLong);
    console.log(input.validity.tooShort);
    const nomeInput = document.querySelector(`label[for=${input.id}]`);
    if (input.validity.tooLong) {
      console.log(`${nomeInput.innerText} tem um número de ${input.getAttribute('maxlength')} caracteres máximo`);
    }
    if (input.validity.tooShort) {
      console.log(`${nomeInput.innerText} tem um numéro de ${input.getAttribute('minlength')} caracteres mínimo`);
    }
  });
  return output;
};

populateStates();
capturaEvento('button-send', 'click', validaFormulario);
