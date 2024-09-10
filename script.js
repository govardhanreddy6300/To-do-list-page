// Select elements
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

// Event listener to add a new to-do
addTodoBtn.addEventListener('click', function() {
    const taskText = todoInput.value.trim(); // Get the input value and trim whitespace
    if (taskText) {
        addTask(taskText);
        todoInput.value = ''; // Clear input field after adding the task
    }
});

// Function to add task
function addTask(taskText) {
    const li = document.createElement('li');

    // Create task text
    const taskSpan = document.createElement('span');
    taskSpan.classList.add('todo-text');
    taskSpan.textContent = taskText;

    // Create complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('complete-btn');
    completeBtn.addEventListener('click', function() {
        taskSpan.classList.toggle('complete');
    });

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(li);
    });

    // Append task, complete button, and delete button to the list item
    li.appendChild(taskSpan);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Append the list item to the to-do list
    todoList.appendChild(li);
}
