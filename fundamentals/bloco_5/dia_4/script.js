const backgroundColors = [
  { name: 'Vermelho', value: 'red' },
  { name: 'Azul', value: 'blue' },
  { name: 'Branco', value: 'white' },
  { name: 'Verde', value: 'green' },
  { name: 'Preto', value: 'black' }];
const txtColors = [
  { name: 'Vermelho', value: 'red' },
  { name: 'Azul', value: 'blue' },
  { name: 'Branco', value: 'white' },
  { name: 'Verde', value: 'green' },
  { name: 'Preto', value: 'black' }];
const fontSizes = [
  { name: 'Small', value: '14px' },
  { name: 'Medium', value: '18px' },
  { name: 'Large', value: '24px' },
  { name: 'Extra-Large', value: '36px' },
  { name: 'Giant', value: '60px' }];
const lineHeights = [
  { name: 'Small', value: '1.0' },
  { name: 'Medium', value: '1.25' },
  { name: 'Large', value: '1.6' },
  { name: 'Extra-Large', value: '2' },
  { name: 'Giant', value: '3' }];
const fontFamilies = [
  { name: 'Georgia', value: 'Georgia' },
  { name: 'Times New Roman', value: 'Times New Roman' },
  { name: 'Lucida Console', value: 'Lucida Console' },
  { name: 'Courier New', value: 'Courier New' },
  { name: 'Arial', value: 'Arial' }];

const storeCustomPrefs = (key, value) => {
  localStorage.setItem(key, value);
};
const changeStyleNow = (styleAtt, value) => {
  document.body.style[styleAtt] = value;
};
const loadCustomPrefs = (newOption, idHTML) => {
  let output = false;
  if (localStorage.getItem(idHTML)) {
    const template = document.createElement('div');
    template.innerHTML = JSON.parse(localStorage.getItem(idHTML));
    const selectedAttributeValue = template.querySelector('option[selected="selected"]').value;
    output = (newOption.value === selectedAttributeValue);
  }
  return output;
};
const selectCustomPrefs = (name, value) => {
  const selectElement = document.querySelector(`select[name=${name}]`);
  const preSelectedItem = selectElement.querySelector('option[selected="selected"]');
  const selectedItem = selectElement.querySelector(`option[value="${value}"]`);
  preSelectedItem.setAttribute('selected', '');
  selectedItem.setAttribute('selected', 'selected');
};
const changeBg = (bgSelected, selectElement) => {
  const selectedItem = selectElement.querySelector('option[selected="selected"]');
  if (selectedItem !== null) {
    selectedItem.setAttribute('selected', '');
    bgSelected.setAttribute('selected', 'selected');
    changeStyleNow('backgroundColor', bgSelected.value);
  }
  storeCustomPrefs(selectElement.name, JSON.stringify(selectElement.innerHTML));
};
const changeTxtColor = (txtSelected, selectElement) => {
  const selectedItem = selectElement.querySelector('option[selected="selected"]');
  if (selectedItem !== null) {
    selectedItem.setAttribute('selected', '');
    txtSelected.setAttribute('selected', 'selected');
    changeStyleNow('color', txtSelected.value);
  }
  storeCustomPrefs(selectElement.name, selectElement.innerHTML);
};
const changeFontSize = (fontSelected, selectElement) => {
  const selectedItem = selectElement.querySelector('option[selected="selected"]');
  if (selectedItem !== null) {
    selectedItem.setAttribute('selected', '');
    fontSelected.setAttribute('selected', 'selected');
    changeStyleNow('fontSize', fontSelected.value);
  }
  storeCustomPrefs(selectElement.name, selectElement.innerHTML);
};
const changeLineHeight = (lineHeightSelected, selectElement) => {
  const selectedItem = selectElement.querySelector('option[selected="selected"]');
  if (selectedItem !== null) {
    selectedItem.setAttribute('selected', '');
    lineHeightSelected.setAttribute('selected', 'selected');
    changeStyleNow('lineHeight', lineHeightSelected.value);
  }
  storeCustomPrefs(selectElement.name, selectElement.innerHTML);
};
const changeFontFamily = (fontFamilySelected, selectElement) => {
  const selectedItem = selectElement.querySelector('option[selected="selected"]');
  if (selectedItem !== null) {
    selectedItem.setAttribute('selected', '');
    fontFamilySelected.setAttribute('selected', 'selected');
    changeStyleNow('fontFamily', fontFamilySelected.value);
  }
  storeCustomPrefs(selectElement.name, selectElement.innerHTML);
};
const fillOption = (itemName, { value, name }, callback) => {
  const selectElement = document.querySelector(`select[name=${itemName}]`);
  const newOption = document.createElement('option');
  newOption.value = value;
  newOption.innerText = name;
  newOption.id = name.toLowerCase();
  newOption.className = 'option';
  newOption.addEventListener('click', (evento) => {
    if (evento.target === newOption) {
      callback(evento.target, selectElement);
    }
  });
  selectElement.appendChild(newOption);
};
const fillBgColor = () => {
  const idHTML = 'bg-color';
  backgroundColors.forEach((bgColor) => {
    fillOption(idHTML, bgColor, changeBg);
    if (loadCustomPrefs(bgColor, idHTML)) {
      selectCustomPrefs(idHTML, bgColor.value);
      changeStyleNow('backgroundColor', bgColor.value);
    }
  });
};
const fillTxtColor = () => {
  const idHTML = 'text-color';
  txtColors.forEach((txtColor) => {
    fillOption(idHTML, txtColor, changeTxtColor);
    if (loadCustomPrefs(txtColor, idHTML)) {
      selectCustomPrefs(idHTML, txtColor.value);
      changeStyleNow('color', txtColor.value);
    }
  });
};
const fillFontSize = () => {
  const idHTML = 'font-size';
  fontSizes.forEach((fontSize) => {
    fillOption(idHTML, fontSize, changeFontSize);
    if (loadCustomPrefs(fontSize, idHTML)) {
      selectCustomPrefs(idHTML, fontSize.value);
      changeStyleNow('fontSize', fontSize.value);
    }
  });
};
const fillLineHeight = () => {
  const idHTML = 'line-height';
  lineHeights.forEach((lineHeight) => {
    fillOption(idHTML, lineHeight, changeLineHeight);
    if (loadCustomPrefs(lineHeight, idHTML)) {
      selectCustomPrefs(idHTML, lineHeight.value);
      changeStyleNow('lineHeight', lineHeight.value);
    }
  });
};
const fillFontFamily = () => {
  const idHTML = 'font-style';
  fontFamilies.forEach((fontFamily) => {
    fillOption(idHTML, fontFamily, changeFontFamily);
    if (loadCustomPrefs(fontFamily, idHTML)) {
      selectCustomPrefs(idHTML, fontFamily.value);
      changeStyleNow('fontFamily', fontFamily.value);
    }
  });
};

window.onload = () => {
  fillBgColor();
  fillTxtColor();
  fillFontSize();
  fillLineHeight();
  fillFontFamily();
};
