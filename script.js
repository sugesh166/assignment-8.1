
const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add task
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <div class="actions">
          <button class="complete-btn">✔</button>
          <button class="delete-btn">✖</button>
        </div>
      `;

    // Mark as complete
    li.querySelector('.complete-btn').addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Delete task
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = '';
});
