// // Wait until the DOM is fully loaded before running the script
// document.addEventListener('DOMContentLoaded', () => {
//     const todoInput = document.querySelector('.todoinput'); // Input field for new tasks
//     const addButton = document.querySelector('.add-button'); // Button to add new tasks
//     const todosContainer = document.querySelector('.todos'); // Container for the list of tasks
//     const taskCompleteButton = document.querySelectorAll('.check-btn')[0]; // Button to mark tasks as complete
//     const taskIncompleteButton = document.querySelectorAll('.check-btn')[1]; // Button to mark tasks as incomplete
//     const deleteAllButton = document.querySelectorAll('.check-btn')[2]; // Button to delete all tasks

//     // Add event listeners to the buttons
//     addButton.addEventListener('click', addTask);
//     taskCompleteButton.addEventListener('click', markAllTasksComplete);
//     taskIncompleteButton.addEventListener('click', markAllTasksIncomplete);
//     deleteAllButton.addEventListener('click', deleteAllTasks);

//     // Function to add a new task
//     function addTask() {
//         const task = todoInput.value.trim(); // Get the input value and trim any whitespace
//         if (task) { // Check if the input is not empty
//             const li = document.createElement('li'); // Create a new list item
//             li.textContent = task; // Set the text content of the list item to the input value
//             li.addEventListener('click', toggleTaskCompletion); // Add click event to toggle completion
//             todosContainer.appendChild(li); // Append the new task to the tasks container
//             todoInput.value = ''; // Clear the input field
//         }
//     }

//     // Function to toggle the completion status of a task
//     function toggleTaskCompletion(e) {
//         const task = e.target; // Get the clicked task
//         if (task.style.textDecoration === 'line-through') {
//             task.style.textDecoration = 'none'; // Mark the task as incomplete
//         } else {
//             task.style.textDecoration = 'line-through'; // Mark the task as complete
//         }
//     }

//     // Function to mark all tasks as complete
//     function markAllTasksComplete() {
//         const tasks = todosContainer.querySelectorAll('li'); // Get all task list items
//         tasks.forEach(task => {
//             task.style.textDecoration = 'line-through'; // Mark each task as complete
//         });
//     }

//     // Function to mark all tasks as incomplete
//     function markAllTasksIncomplete() {
//         const tasks = todosContainer.querySelectorAll('li'); // Get all task list items
//         tasks.forEach(task => {
//             task.style.textDecoration = 'none'; // Mark each task as incomplete
//         });
//     }

//     // Function to delete all tasks
//     function deleteAllTasks() {
//         todosContainer.innerHTML = ''; // Clear the tasks container
//     }
// });

/// version 2
// Wait until the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.querySelector('.todoinput'); // Input field for new tasks
    const addButton = document.querySelector('.add-button'); // Button to add new tasks
    const todosContainer = document.querySelector('.todos'); // Container for the list of tasks
    const taskCompleteButton = document.querySelectorAll('.check-btn')[0]; // Button to mark tasks as complete
    const taskIncompleteButton = document.querySelectorAll('.check-btn')[1]; // Button to mark tasks as incomplete
    const deleteAllButton = document.querySelectorAll('.check-btn')[2]; // Button to delete all tasks

    // Add event listeners to the buttons
    addButton.addEventListener('click', addTask);
    taskCompleteButton.addEventListener('click', markSelectedTasksComplete);
    taskIncompleteButton.addEventListener('click', markSelectedTasksIncomplete);
    deleteAllButton.addEventListener('click', deleteAllTasks);

    // Function to add a new task
    function addTask() {
        const task = todoInput.value.trim(); // Get the input value and trim any whitespace
        if (task) { // Check if the input is not empty
            const li = document.createElement('li'); // Create a new list item

            const checkbox = document.createElement('input'); // Create a checkbox
            checkbox.type = 'checkbox'; // Set the checkbox type
            checkbox.className = 'task-checkbox'; // Add a class for easier selection later

            const taskText = document.createElement('span'); // Create a span for the task text
            taskText.textContent = task; // Set the text content of the span to the input value

            li.appendChild(checkbox); // Append the checkbox to the list item
            li.appendChild(taskText); // Append the task text to the list item

            todosContainer.appendChild(li); // Append the new task to the tasks container
            todoInput.value = ''; // Clear the input field
        }
    }

    // Function to mark selected tasks as complete
    function markSelectedTasksComplete() {
        const checkboxes = document.querySelectorAll('.task-checkbox:checked'); // Select all checked checkboxes
        checkboxes.forEach(checkbox => {
            const task = checkbox.nextElementSibling; // Get the task text span next to the checkbox
            task.style.textDecoration = 'line-through'; // Mark the task as complete
        });
    }

    // Function to mark selected tasks as incomplete
    function markSelectedTasksIncomplete() {
        const checkboxes = document.querySelectorAll('.task-checkbox:checked'); // Select all checked checkboxes
        checkboxes.forEach(checkbox => {
            const task = checkbox.nextElementSibling; // Get the task text span next to the checkbox
            task.style.textDecoration = 'none'; // Mark the task as incomplete
        });
    }

    // Function to delete all tasks
    function deleteAllTasks() {
        todosContainer.innerHTML = ''; // Clear the tasks container
    }
});
