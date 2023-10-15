const calendarData = {
    days: [`Monday`, `Tuesday`, `Friday`],
    hours: {
        start: 10,
        end: 17,
    },
    todos: [
        {
            day: `Monday`,
            hour: 10,
            title: `First todo`,
        },
        {
            day: `Monday`,
            hour: 13,
            title: `Second todo`,
        },
        {
            day: `Tuesday`,
            hour: 12,
            title: `Third todo`,
        },
        {
            day: `Tuesday`,
            hour: 17,
            title: `Fourth todo`,
        },
        {
            day: `Friday`,
            hour: 14,
            title: `Fifth todo`,
        },
    ],
};

function createCalendarTable(data) {

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const daysRow = document.createElement('tr');
    daysRow.innerHTML = `<th></th>${data.days.map(day => `<th>${day}</th>`).join('')}`;
    thead.append(daysRow);
    table.append(thead);

    for (let hour = data.hours.start; hour <= data.hours.end; hour++) {

        const row = document.createElement('tr');
        const hourCell = document.createElement('td');
        hourCell.textContent = `${hour}:00`;
        row.append(hourCell);

        data.days.forEach(day => {

            const todo = data.todos.find(item => item.day === day && item.hour === hour);
            const cell = document.createElement('td');

            if (todo) {
                const todoDiv = document.createElement('div');
                todoDiv.innerHTML = `<h3>${todo.title}</h3><button class="deleteBtn">Delete</button>`;
                todoDiv.classList.add('todo');
                cell.append(todoDiv);

                const deleteBtn = todoDiv.querySelector('.deleteBtn');
                deleteBtn.addEventListener('click', () => {
                    todoDiv.remove();
                });
            }

            row.append(cell);

        });
        tbody.append(row);
    }

    table.append(tbody);
    return table;
}

const parentElement = document.body;
const calendarTable = createCalendarTable(calendarData);
parentElement.append(calendarTable);

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('todo')) {
        event.target.classList.toggle('active');
    }
});