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
const
  monthDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function isHoliday(day) {
  let output = false;
  const holidays = [24, 25, 31];
  holidays.forEach((holiday) => {
    if (holiday === day) {
      output = true;
    }
  });
  return output;
}
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
function isFriday(day) {
  let fridayCheck = false;
  const fridays = whereIsFridays();
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
function createDays() {
  monthDaysList.forEach((day) => {
    const itemDay = createElementDay(day);
    document.getElementById('days').appendChild(itemDay);
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
createDays();
createButton('Feriados', 'btn-holiday');
capturedEvent('btn-holiday', 'click', () => console.log('Hello world!'));
