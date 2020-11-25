const changeBg = (bgSelected, selectElement) => {
  const selectedItem = selectElement.querySelector(`option[selected="selected"]`);
  if (selectedItem !== null) {
    selectedItem.setAttribute('selected', '');
    bgSelected.target.setAttribute('selected', 'selected');
    document.body.style.backgroundColor = bgSelected.target.value;
  }
};

const fillOption = (itemName, { value, name }, callback) => {
  const selectElement = document.querySelector(`select[name=${itemName}]`);
  const newOption = document.createElement('option');
  newOption.value = value;
  newOption.innerText = name;
  newOption.className = name;
  newOption.addEventListener('click', (evento) => {
    if (evento.target === newOption) {
      callback(evento, selectElement);
    }
  });
  selectElement.appendChild(newOption);
};

const fillBgColor = () => {
  const backgroundColors = [
    { name: 'Vermelho', value: 'red' },
    { name: 'Azul', value: 'blue' },
    { name: 'Branco', value: 'white' },
    { name: 'Verde', value: 'green' },
    { name: 'Preto', value: 'black' }];
  backgroundColors.forEach((bgColor) => {
    fillOption('bg-color', bgColor, changeBg);
  });
};

window.onload = fillBgColor();
