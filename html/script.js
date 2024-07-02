//CALENDARIO
document.addEventListener('DOMContentLoaded', () => {
  const monthYear = document.getElementById('monthYear');
  const daysContainer = document.getElementById('days');
  const prevMonth = document.getElementById('prevMonth');
  const nextMonth = document.getElementById('nextMonth');
  const currentDateBtn = document.getElementById('currentDateBtn');
  const noteModal = document.getElementById('noteModal');
  const noteDate = document.getElementById('noteDate');
  const noteText = document.getElementById('noteText');
  const saveNote = document.getElementById('saveNote');
  const close = document.querySelector('.close');

  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  let notes = JSON.parse(localStorage.getItem('notes')) || {};

  function loadCalendar() {
      monthYear.textContent = `${new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} ${currentYear}`;
      daysContainer.innerHTML = '';
      const firstDay = new Date(currentYear, currentMonth, 1).getDay();
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

      const today = new Date();
      const isCurrentMonth = currentMonth === today.getMonth() && currentYear === today.getFullYear();
      const currentDay = today.getDate();

      for (let i = 0; i < firstDay; i++) {
          daysContainer.innerHTML += `<div></div>`;
      }

      for (let i = 1; i <= daysInMonth; i++) {
          const dayClass = isCurrentMonth && i === currentDay ? 'current-day' : '';
          daysContainer.innerHTML += `<div class="${dayClass}" data-date="${i}">${i}</div>`;
      }

      document.querySelectorAll('.days div[data-date]').forEach(day => {
          day.addEventListener('click', (e) => {
              const selectedDate = `${currentYear}-${currentMonth + 1}-${e.target.dataset.date}`;
              noteDate.textContent = selectedDate;
              noteText.value = notes[selectedDate] || '';
              noteModal.style.display = 'flex';
          });
      });
  }

  prevMonth.addEventListener('click', () => {
      if (currentMonth === 0) {
          currentMonth = 11;
          currentYear--;
      } else {
          currentMonth--;
      }
      loadCalendar();
  });

  nextMonth.addEventListener('click', () => {
      if (currentMonth === 11) {
          currentMonth = 0;
          currentYear++;
      } else {
          currentMonth++;
      }
      loadCalendar();
  });

  currentDateBtn.addEventListener('click', () => {
      currentMonth = new Date().getMonth();
      currentYear = new Date().getFullYear();
      loadCalendar();
  });

  saveNote.addEventListener('click', () => {
      const selectedDate = noteDate.textContent;
      notes[selectedDate] = noteText.value;
      localStorage.setItem('notes', JSON.stringify(notes));
      noteModal.style.display = 'none';
  });

  close.addEventListener('click', () => {
      noteModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
      if (e.target === noteModal) {
          noteModal.style.display = 'none';
      }
  });

  loadCalendar();
});
//CALENDARIO FIM



//Funçao de adicionar voluntatio ?
    async function fetchVolunteers() {
      const response = await fetch('http://localhost:3000/volunteers');
      const volunteers = await response.json();
      const tbody = document.getElementById('volunteers-list');
      volunteers.forEach(volunteer => {
        const row = `<tr>
          <td>${volunteer.id}</td>
          <td>${volunteer.name}</td>
          <td>${volunteer.email}</td>
          <td>${volunteer.phone}</td>
          <td>${volunteer.city}</td>
          <td>${volunteer.birthdate}</td>
        </tr>`;
        tbody.innerHTML += row;
      });
    }

    document.addEventListener('DOMContentLoaded', fetchVolunteers);