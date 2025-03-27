let currentDate = new Date();
let displayedMonth = currentDate.getMonth();
let displayedYear = currentDate.getFullYear();

function updateCalendar() {
  generateCalendar(displayedMonth, displayedYear);
  document.getElementById('month-year').textContent =
      `${new Date(displayedYear, displayedMonth).toLocaleString('default', { month: 'long' })} ${displayedYear}`;
}

function generateCalendar(month, year) {
  let firstDay = new Date(year, month, 1).getDay();
  let daysInMonth = new Date(year, month + 1, 0).getDate();

  let tbody = document.getElementById('calendar-body');
  tbody.innerHTML = '';

  let date = 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      let cell = document.createElement('td');
      if (i === 0 && j < firstDay) {
        cell.textContent = '';
      } else if (date > daysInMonth) {
        cell.textContent = '';
      } else {
        cell.textContent = date;
        cell.onclick = function() { selectDate(this); };
        if (year === currentDate.getFullYear() && month === currentDate.getMonth() && date === currentDate.getDate()) {
          cell.classList.add('today');
        }
        date++;
      }
      row.appendChild(cell);
    }
    tbody.appendChild(row);
    if (date > daysInMonth) break;
  }
}

function selectDate(cell) {
  document.querySelectorAll('#calendar-body td').forEach(c => c.classList.remove('selected'));
  cell.classList.add('selected');
  document.getElementById('selected-date').textContent =
      `Selected Date: ${displayedMonth + 1}/${cell.textContent}/${displayedYear}`;
}

function previousMonth() {
  displayedMonth--;
  if (displayedMonth < 0) {
    displayedMonth = 11;
    displayedYear--;
  }
  updateCalendar();
}

function nextMonth() {
  displayedMonth++;
  if (displayedMonth > 11) {
    displayedMonth = 0;
    displayedYear++;
  }
  updateCalendar();
}

