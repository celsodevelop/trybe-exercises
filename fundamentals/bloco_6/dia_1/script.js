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
  const msg = document.createElement('span');
  msg.className = 'error-msg';
  msg.id = `${input.id}-error-msg`;
  if (document.getElementById(msg.id)) { input
    .parentNode
    .removeChild(document.getElementById(msg.id));
  }
  msg.style.color = 'red';
  msg.innerText = `${nomeInput.innerText} ${toTest[nameTest]}`;
  input.insertAdjacentElement('afterend', msg);
};
const criaDiv = () => {
  const formData = document.querySelectorAll('form.job-form input');
  const divData = document.createElement('div');
  divData.className = 'div-data';
  divData.id = 'div-data';
  divData.innerHTML = '<p class="data-title">Dados cadastrados com sucesso!</p><br>';
  formData.forEach((input) => {
    if (input.value) {
      const nomeInput = document.querySelector(`label[for=${input.id}]`);
      console.log(input.value);
      const newData = document.createElement('p');
      newData.className = `${input.name}-data`;
      newData.id = `${input.name}-data`;
      newData.innerText = `${nomeInput.innerText}: ${input.value}`;
      divData.appendChild(newData);
    }
  });
  console.log(divData);
  document.body.appendChild(divData);
};
const validacoesFormulario = (eventoBotao) => {
  eventoBotao.preventDefault();
  let isValid = true;
  const requiredInputs = document.querySelectorAll('[required]');
  requiredInputs.forEach((input) => {
    const toTest = testesFormularioCurriculo(input);
    const keysTest = Object.keys(toTest);
    keysTest.forEach((nameTest) => {
      if (input.validity[nameTest]) {
        isValid = false;
        criaAviso(input, nameTest);
      }
    });
  });
  if (isValid) criaDiv();
};
populateStates();
capturaEvento('button-send', 'click', validacoesFormulario);
