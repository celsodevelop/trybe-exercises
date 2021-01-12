/* eslint-disable arrow-parens */
// eslint-disable-next-line no-new
new window.JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      maxLength: 40,
      minLength: 3,
    },
    date: {
      required: true,
      maxLength: 10,
      minLength: 10,
      strength: {
        custom: '([0][1-9]|[1-2][0-9]|[3][0-1])[/]([0][1-9]|[1][0-2])[/]((19|20)dd)',
      },
    },
    email: {
      required: true,
      email: true,
      maxLength: 40,
    },
    cpf: {
      required: true,
      maxLength: 11,
      minLength: 11,
      strength: {
        custom: '^[0-9]{11}',
      },
    },
    select: {
      required: true,
    },
    text: {
      required: true,
    },
  },
  focusWrongField: true,
  message: {
    name: {
      required: 'Nome é um campo obrigatório!',
      minLength: 'Seu nome é bem curto?!',
      maxLength: 'Poderia abreviar o seu nome?',
    },
    state: {
      required: 'Selecione um campo obrigatório',
    },
    date: {
      required: 'Data é um campo obrigatório!',
      strength: 'O padrão não confere com dd/mm/yyyy',
    },
    text: {
      required: 'Este é um campo obrigatório!',
    },
    cpf: {
      required: 'CPF é um campo obrigatório!',
      minLength: 'Insira seu CPF com 11 dígitos',
    },
    email: {
      required: 'Email é um campo obrigatório',
      email: 'O email não está em uma padrão correto',
    },
  },
  // invalidFormCallback: (errors) => {
  //   console.log(errors);
  // },
  // submitHandler: (form, values, ajax) => {
  //   console.log(form);
  //   console.log(values);
  //   console.log(ajax);
  // },
});

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
  const selectElement = document.getElementById('state-input');
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
const resetarDiv = () => {
  const oldDiv = document.getElementById('div-data');
  if (oldDiv) oldDiv.parentNode.removeChild(oldDiv);
};

/* Ao utilizarmos a biblioteca JustValidate não precisaremos fazer a verificação manual mais

const criaDiv = (input, value, divData) => {
  const radioOk = divData.children[`${input.srvName}-data`] || '';
  if (radioOk.id !== 'house-type-data') {
    const nomeInput = document.querySelector(input.label);
    const newData = document.createElement('p');
    newData.className = `${input.srvName}-data`;
    newData.id = `${input.srvName}-data`;
    newData.innerText = `${nomeInput.innerText}: ${value}`;
    return newData;
  }
  return undefined;
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
  errorMsg.className = 'alert alert-danger small mb-5';
  errorMsg.setAttribute('role', 'alert');
  errorMsg.id = `${input.id}-error`;
  errorMsg.style.color = 'red';
  errorMsg.innerText = `${nomeInput.innerText} ${toTest[nameTest]}`;
  input.parentNode.insertAdjacentElement('afterend', errorMsg);
};
const processaRadio = (input) => {
  let newInput;
  const idSelect = `${document.forms[0].elements[input.name].value || false}`;
  if (idSelect) {
    const selectedElement = document.querySelector(`input[value="${idSelect}"]`).id;
    newInput = {
      label: `#${input.name}`,
      srvName: input.name,
      value: document.querySelector(`label[for="${selectedElement}"]`).innerText,
    };
  }
  return newInput;
};
const processaInput = (input) => {
  let newInput = {
    label: `label[for="${input.id}"]`,
    srvName: input.name,
    value: `${document.forms[0].elements[input.name].value || false}`,
  };
  if (input.type === 'radio') {
    newInput = processaRadio(input);
  }
  return newInput;
};
const processaElemento = (input, divData) => {
  let newData;
  if (input.name && input.id) {
    const newInput = processaInput(input);
    const { value } = newInput;
    if (value) {
      newData = criaDiv(newInput, value, divData);
    }
  }
  return newData;
};
const processaFormulario = () => {
  const formData = Object.values(document.forms[0].elements);
  const divData = document.createElement('div');
  divData.className = 'div-data';
  divData.id = 'div-data';
  divData.innerHTML = '<p class="data-title">Dados cadastrados com sucesso!</p><br>';
  formData.forEach((input) => {
    if (input.id) {
      const newData = processaElemento(input, divData);
      if (newData) {
        divData.appendChild(newData);
      }
    }
  });
  resetarDiv();
  document.body.insertAdjacentElement('afterend', divData);
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
  clearErrorMsg(input.parentNode);
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

capturaEvento('button-send', 'click', validaFormulario); //Utilizando a biblioteca just-validate
*/

populateStates();

capturaEvento('button-reset', 'click', resetarDiv);

capturaEvento('job-date-input', 'mouseover', () => {
  const jobDate = document.querySelector('input[name="job-date"]');
  const isDate = document.querySelector('.date-picker-x-input');
  if (!isDate) {
    jobDate.DatePickerX.init({
      format: 'dd/mm/yyyy',
      clearButton: true,
      clearButtonLabel: 'Limpar',
      minDate: new Date(1910, 12, 31),
      maxDate: new Date(2020, 12, 31),
      weekDayLabels: ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB', 'DOM'],
      shortMonthLabels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      singleMonthLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      todayButton: true,
      todayButtonLabel: 'Hoje',
    });
  }
});
