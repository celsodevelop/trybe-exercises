const changeBg = (bgSelected, selectElement) => {
  const selectedItem = selectElement.querySelector('option[selected="selected"]');
  if (selectedItem !== null) {
    selectedItem.setAttribute('selected', '');
    bgSelected.target.setAttribute('selected', 'selected');
    document.body.style.backgroundColor = bgSelected.target.value;
  }
};

const changeTxtColor = (txtSelected, selectElement) => {
  const selectedItem = selectElement.querySelector('option[selected="selected"]');
  if (selectedItem !== null) {
    selectedItem.setAttribute('selected', '');
    txtSelected.target.setAttribute('selected', 'selected');
    document.body.style.color = txtSelected.target.value;
  }
};

const changeFontSize = (fontSelected, selectElement) => {
  const selectedItem = selectElement.querySelector('option[selected="selected"]');
  if (selectedItem !== null) {
    selectedItem.setAttribute('selected', '');
    fontSelected.target.setAttribute('selected', 'selected');
    document.body.style.fontSize = fontSelected.target.value;
  }
};

const changeLineHeight = (lineHeightSelected, selectElement) => {
  const selectedItem = selectElement.querySelector('option[selected="selected"]');
  if (selectedItem !== null) {
    selectedItem.setAttribute('selected', '');
    lineHeightSelected.target.setAttribute('selected', 'selected');
    document.body.style.lineHeight = lineHeightSelected.target.value;
  }
};

const changeFontFamily = (fontFamilySelected, selectElement) => {
  const selectedItem = selectElement.querySelector('option[selected="selected"]');
  if (selectedItem !== null) {
    selectedItem.setAttribute('selected', '');
    fontFamilySelected.target.setAttribute('selected', 'selected');
    document.body.style.fontFamily = fontFamilySelected.target.value;
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

const fillTxtColor = () => {
  const txtColors = [
    { name: 'Vermelho', value: 'red' },
    { name: 'Azul', value: 'blue' },
    { name: 'Branco', value: 'white' },
    { name: 'Verde', value: 'green' },
    { name: 'Preto', value: 'black' }];
  txtColors.forEach((txtColor) => {
    fillOption('text-color', txtColor, changeTxtColor);
  });
};

const fillFontSize = () => {
  const fontSizes = [
    { name: 'Small', value: '14px' },
    { name: 'Medium', value: '18px' },
    { name: 'Large', value: '24px' },
    { name: 'Extra-Large', value: '36px' },
    { name: 'Giant', value: '60px' }];
  fontSizes.forEach((fontSize) => {
    fillOption('font-size', fontSize, changeFontSize);
  });
};

const fillLineHeight = () => {
  const lineHeights = [
    { name: 'Small', value: '1.0' },
    { name: 'Medium', value: '1.25' },
    { name: 'Large', value: '1.6' },
    { name: 'Extra-Large', value: '2' },
    { name: 'Giant', value: '3' }];
  lineHeights.forEach((lineHeight) => {
    fillOption('line-height', lineHeight, changeLineHeight);
  });
};

const fillFontFamily = () => {
  const fontFamilies = [
    { name: 'Georgia', value: 'Georgia' },
    { name: 'Times New Roman', value: 'Times New Roman' },
    { name: 'Lucida Console', value: 'Lucida Console' },
    { name: 'Courier New', value: 'Courier New' },
    { name: 'Arial', value: 'Arial' }];
  fontFamilies.forEach((fontFamily) => {
    fillOption('font-style', fontFamily, changeFontFamily);
  });
};

fillBgColor();
fillTxtColor();
fillFontSize();
fillLineHeight();
fillFontFamily();
