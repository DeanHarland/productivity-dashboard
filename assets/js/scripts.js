document.addEventListener('DOMContentLoaded', () => {
    // To do List Functionality
    const userTaskInput = document.getElementById('new-task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');


    // event listener for button click
    addTaskButton.addEventListener('click', addTask);

    // Function to add a new task
    function addTask() {
        const taskText = userTaskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            taskList.appendChild(listItem);
            userTaskInput.value = '';
        }
    }
});