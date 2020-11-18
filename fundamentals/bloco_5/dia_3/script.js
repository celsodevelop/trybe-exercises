function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const offsetDayOne = 1;
const
  monthDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const holidays = [24, 25, 31];

function whereIsFridays(thisFriday = monthDaysList[5], output = []) {
  monthDaysList.forEach((day, index) => {
    if (day === thisFriday) {
      output.push(day);
      const nextFriday = monthDaysList[index + 7];
      if (nextFriday !== undefined) {
        whereIsFridays(nextFriday, output);
      }
    }
  });
  return output;
}

const fridays = whereIsFridays();

function isHoliday(day) {
  let output = false;
  holidays.forEach((holiday) => {
    if (holiday === day) {
      output = true;
    }
  });
  return output;
}
function isFriday(day) {
  let fridayCheck = false;
  fridays.forEach((friday) => {
    if (friday === day) {
      fridayCheck = true;
    }
  });
  return fridayCheck;
}
function createElementDay(numberDay) {
  const day = document.createElement('li');
  day.classList.add('day');
  if (isHoliday(numberDay)) {
    day.classList.add('holiday');
  }
  if (isFriday(numberDay)) {
    day.classList.add('friday');
  }
  day.innerText = numberDay;
  return day;
}
function createDays(days = monthDaysList) {
  const listDays = document.getElementById('days');
  days.forEach((day) => {
    const itemDay = createElementDay(day);
    listDays.appendChild(itemDay);
  });
}
function createButton(textoBotao, id = '') {
  const listaBotoes = document.querySelector('.buttons-container');
  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  btn.id = id;
  btn.innerText = textoBotao;
  listaBotoes.appendChild(btn);
}
function capturedEvent(elementID, eventType, callback, onlyChildren = false) {
  const currentListen = document.getElementById(elementID);
  currentListen.addEventListener(eventType, (firedEvent) => {
    if (onlyChildren) {
      if (currentListen !== firedEvent.target) {
        callback(firedEvent.target);
      }
    } else {
      callback(firedEvent.target);
    }
  });
}
function toggleClass({ specialDayTag, daysListTag }) {
  const specialDaysItems = document.querySelectorAll(`.${specialDayTag}`);
  if (specialDaysItems.length !== 0) {
    specialDaysItems.forEach((specialItem) => specialItem.classList.toggle(specialDayTag));
  } else {
    daysListTag.forEach((specialItem) => {
      const listDays = document.getElementById('days');
      const specialDayItem = listDays.children[offsetDayOne + specialItem];
      specialDayItem.classList.toggle(specialDayTag);
    });
  }
}
function toggleFriday({ specialDayTag, daysListTag }) {
  const listDays = document.getElementById('days');
  const specialDaysItems = document.querySelectorAll(`.${specialDayTag}`);
  if (specialDaysItems.length !== 0) {
    specialDaysItems.forEach((friday, key) => {
      specialDaysItems[key].innerText = 'Sextou!';
    });
  } else {
    daysListTag.forEach((friday) => {
      const specialDayItem = listDays.children[offsetDayOne + friday];
      specialDayItem.innerText = `${friday}`;
    });
  }
}
function daySelector() {
  const selectDay = this.specialDay;
  if (selectDay === 'friday') {
    toggleFriday({ specialDayTag: 'friday', daysListTag: fridays });
    toggleClass({ specialDayTag: 'friday', daysListTag: fridays });
  } else {
    toggleClass({ specialDayTag: 'holiday', daysListTag: holidays });
  }
}
function zoomDay(dayItem) {
  const day = dayItem;
  day.classList.toggle('zoomed');
}

createDays();
createButton('Feriados', 'btn-holiday');
createButton('Sexta-feira', 'btn-friday');
capturedEvent('btn-holiday', 'click', daySelector.bind({ specialDay: 'holiday' }));
capturedEvent('btn-friday', 'click', daySelector.bind({ specialDay: 'friday' }));
capturedEvent('days', 'mouseover', zoomDay, true);
capturedEvent('days', 'mouseout', zoomDay, true);
