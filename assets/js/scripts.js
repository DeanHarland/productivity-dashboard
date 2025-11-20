document.addEventListener('DOMContentLoaded', () => {
    // To do List Functionality
    const userTaskInput = document.getElementById('new-task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');


    // event listener for button click
    addTaskButton.addEventListener('click', addTask);

    // Task id counter
    let taskIdCounter = 0;

    /**
     * Adds a new task to the task list
     */
    function addTask() {
        const taskText = userTaskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
            listItem.id = taskIdCounter++; // Assign unique id and increment counter

            // Create checkbox input
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('form-check-input', 'me-1', 'checkbox-toggle');

            // Add checkbox as a child of the list item
            listItem.appendChild(checkbox);
            // Add the task text after the checkbox
            listItem.append(taskText)
            // Append the list item to the list
            taskList.appendChild(listItem);
            // Clear the input field
            userTaskInput.value = '';


        }
    }
    /**
     * 
     * Toggle completion color on checkbox
     */
    function toggleTaskCompletion(event) {
        if (event.target.classList.contains('checkbox-toggle')) {
            const listItem = event.target.parentElement;
            listItem.classList.toggle('list-group-item-success');
        }
    }
    // Event delegation for dynamically added checkboxes
    taskList.addEventListener('change', toggleTaskCompletion);

    /** 
     * Clear Completed Tasks
     */
    const clearCompletedButton = document.getElementById('clear-completed-button');
    clearCompletedButton.addEventListener('click', () => {
        const completedTasks = taskList.querySelectorAll('.list-group-item-success');
        completedTasks.forEach(task => task.remove());
    });
    /**
     * Timer Functionality
     */



});