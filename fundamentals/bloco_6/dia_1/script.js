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
const testesFormularioCurriculo = (input) => ({
  valueMissing: 'é um campo obrigatório e não pode ser vazio!',
  tooLong: `tem um número de ${input.getAttribute('maxlength')} caracteres máximo!`,
  tooShort: `tem um número de ${input.getAttribute('minlength')} caracteres mínimo!`,
  patternMismatch: `deve ter um padrão válido ${input.getAttribute('placeholder')}!`,
});
const criaAviso = (input, nameTest) => {
  const nomeInput = document.querySelector(`label[for=${input.id}]`);
  const toTest = testesFormularioCurriculo(input);
  const errorMsg = document.createElement('p');
  errorMsg.className = 'error-msg';
  errorMsg.id = `${input.id}-error`;
  errorMsg.style.color = 'red';
  errorMsg.innerText = `${nomeInput.innerText} ${toTest[nameTest]}`;
  input.insertAdjacentElement('afterend', errorMsg);
};
const processaElemento = (input) => {
  const nomeInput = document.querySelector(`label[for=${input.id}]`);
  const newData = document.createElement('p');
  if (input.value) {
    newData.className = `${input.name}-data`;
    newData.id = `${input.name}-data`;
    newData.innerText = `${nomeInput.innerText}: ${input.value}`;
  }
  return newData;
};
const processaFormulario = (aposBotao) => {
  const formData = document.querySelectorAll('form.job-form input');
  const divData = document.createElement('div');
  divData.className = 'div-data';
  divData.id = 'div-data';
  divData.innerHTML = '<p class="data-title">Dados cadastrados com sucesso!</p><br>';
  formData.forEach((input) => {
    const newData = processaElemento(input);
    divData.appendChild(newData);
  });
  aposBotao.target.nextElementSibling.insertAdjacentElement('afterend', divData);
};
const clearErrorMsg = (element) => {
  const errorMsg = `${element.id}-error`;
  if (document.getElementById(errorMsg)) {
    element.parentNode.removeChild(document.getElementById(errorMsg));
  }
};
const validaElemento = (input, toTest) => {
  let isValid = true;
  const keysTest = Object.keys(toTest);
  clearErrorMsg(input);
  keysTest.forEach((nameTest) => {
    if (input.validity[nameTest]) {
      criaAviso(input, nameTest);
      isValid = false;
    }
  });
  return isValid;
};
const validaFormulario = (eventoBotao) => {
  eventoBotao.preventDefault();
  let isValid = true;
  const requiredInputs = document.querySelectorAll('[required]');
  requiredInputs.forEach((input) => {
    const toTest = testesFormularioCurriculo(input);
    isValid = validaElemento(input, toTest);
  });
  if (isValid) processaFormulario(eventoBotao);
};

populateStates();
capturaEvento('button-send', 'click', validaFormulario);
