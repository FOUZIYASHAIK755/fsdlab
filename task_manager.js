class TaskManager {
    constructor() {
        this.tasks = [];
    }

    // Add a new task
    addTask(taskName, priority, dueDate) {
        this.tasks.push({ taskName, priority, dueDate: new Date(dueDate) });
    }

    // Delete a task by taskName
    deleteTask(taskName) {
        this.tasks = this.tasks.filter(task => task.taskName !== taskName);
    }

    // Update a task by taskName
    updateTask(taskName, newPriority, newDueDate) {
        const task = this.tasks.find(task => task.taskName === taskName);
        if (task) {
            task.priority = newPriority;
            task.dueDate = new Date(newDueDate);
        }
    }

    // Sort tasks by priority (higher priority first)
    sortByPriority() {
        this.tasks.sort((a, b) => b.priority - a.priority);
    }

    // Sort tasks by due date (earliest first)
    sortByDueDate() {
        this.tasks.sort((a, b) => a.dueDate - b.dueDate);
    }

    // Display all tasks
    listTasks() {
        console.log(this.tasks);
    }
}

// Example usage:
const taskManager = new TaskManager();

// Add tasks
taskManager.addTask("Finish homework", 2, "2025-01-10");
taskManager.addTask("Buy groceries", 1, "2025-01-05");
taskManager.addTask("Clean the house", 3, "2025-01-07");

// List tasks
taskManager.listTasks();

// Sort tasks by priority
taskManager.sortByPriority();
console.log("Sorted by priority:");
taskManager.listTasks();

// Sort tasks by due date
taskManager.sortByDueDate();
console.log("Sorted by due date:");
taskManager.listTasks();

// Update a task
taskManager.updateTask("Buy groceries", 5, "2025-01-06");

// Delete a task
taskManager.deleteTask("Clean the house");

// Final list
console.log("Final tasks:");
taskManager.listTasks();
