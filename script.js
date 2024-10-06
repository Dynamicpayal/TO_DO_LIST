document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create new task list item
        const listItem = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.classList.add('task-text');
        taskSpan.textContent = taskText;

        // Create delete button for the task
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = '×';
        deleteBtn.onclick = () => {
            taskList.removeChild(listItem);
        };

        // Append task text and delete button to the list item
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteBtn);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear input field after adding the task
        taskInput.value = '';
    }

    // Event listeners for adding tasks
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
