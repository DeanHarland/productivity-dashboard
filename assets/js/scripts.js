document.addEventListener('DOMContentLoaded', () => {
    // To do List Functionality
    const userTaskInput = document.getElementById('new-task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');


    // event listener for button click
    addTaskButton.addEventListener('click',  () => {
        addTask();
        saveTasks(); // save after adding
    })
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
            saveTasks(); // save after toggling
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
        saveTasks(); // save after clearing
    });
   

    /**
     * Save Tasks to Local Storage
     */
    function saveTasks() {
    const tasks = [];
    taskList.querySelectorAll('li').forEach(li => {
        tasks.push({
            id: li.id,
            text: li.innerText,
            completed: li.classList.contains('list-group-item-success')
        });
    });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    /**
     * Load Tasks from Local Storage
     */
    function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        if (task.completed) listItem.classList.add('list-group-item-success');
        listItem.id = task.id;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('form-check-input', 'me-1', 'checkbox-toggle');
        checkbox.checked = task.completed;

        listItem.appendChild(checkbox);
        listItem.append(task.text);
        taskList.appendChild(listItem);

        // Make sure taskIdCounter is ahead of existing IDs
        taskIdCounter = Math.max(taskIdCounter, parseInt(task.id) + 1);
    });
    }

    // Timer section
    let minutes = 25;
    let seconds = 0;
    let sessionCount = 0;
    let timerInterval;
    isRunning = false;

    const timerDisplay = document.getElementById('timer-display');
    const startButton = document.getElementById('start-timer-button');
    const pauseButton = document.getElementById('pause-timer-button');
    const resetButton = document.getElementById('reset-timer-button');
    const sessionCountDisplay = document.getElementById('session-count');

    /**
     * Start timer countdown
     */
    function startTimer() {

    }




    loadTasks(); // Load tasks on page load

});