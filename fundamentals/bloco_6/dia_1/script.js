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

populateStates();
