document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    const addTask = () => {
        const taskText = taskInput.value.trim(); // Get task text and remove leading/trailing whitespace

        // Only add task if input is not empty
        if (taskText !== '') {
            // Create a new list item (li) for the task
            const listItem = document.createElement('li');

            // Create a span to hold the task text
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            taskSpan.addEventListener('click', toggleComplete); // Add click listener to mark as complete

            // Create a div for action buttons
            const taskActions = document.createElement('div');
            taskActions.classList.add('task-actions');

            // Create a "Complete" button
            const completeBtn = document.createElement('button');
            completeBtn.classList.add('complete-btn');
            completeBtn.innerHTML = '&#10003;'; // Checkmark symbol
            completeBtn.title = 'Mark as Complete';
            completeBtn.addEventListener('click', toggleComplete); // Add click listener

            // Create a "Delete" button
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.innerHTML = '&times;'; // Multiplication sign (looks like an 'x')
            deleteBtn.title = 'Delete Task';
            deleteBtn.addEventListener('click', deleteTask); // Add click listener

            // Append elements to the list item
            listItem.appendChild(taskSpan);
            taskActions.appendChild(completeBtn);
            taskActions.appendChild(deleteBtn);
            listItem.appendChild(taskActions);

            // Append the new list item to the task list
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = '';
        }
    };

    // Function to toggle task completion status
    const toggleComplete = (event) => {
        // Find the parent <li> element, whether clicked on span or button
        const listItem = event.target.closest('li');
        if (listItem) {
            listItem.classList.toggle('completed'); // Add or remove 'completed' class
        }
    };

    // Function to delete a task
    const deleteTask = (event) => {
        // Find the parent <li> element
        const listItem = event.target.closest('li');
        if (listItem) {
            listItem.remove(); // Remove the list item from the DOM
        }
    };

    // Event listeners
    addTaskBtn.addEventListener('click', addTask); // Add task when button is clicked

    // Add task when Enter key is pressed in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});