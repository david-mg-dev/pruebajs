// NO STATUS
function addTaskNoStatus() {
    let inputTask = document.getElementById("taskId").value;
    let textInput = document.createTextNode(inputTask);
    let task = document.createElement("li");

    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'delete task';
    button.onclick = "removeTask()"

    task.appendChild(textInput);
    task.appendChild(button);

    document.getElementById("ulTaskNoStatus").appendChild(task);
}

function removeTask() {
    let inputTask = document.getElementById("taskId").value;

    inputTask.getElementById("ulTaskNoStatus").removeChild(task);
}

// IN PROGRESS
function addTaskInProgress() {
    let inputTask = document.getElementById("taskId").value;
    let textInput = document.createTextNode(inputTask);
    let task = document.createElement("li");

    task.appendChild(textInput);

    document.getElementById("ulTaskInProgress").appendChild(task);
}

// PENDING
function addTaskPending() {
    let inputTask = document.getElementById("taskId").value;
    let textInput = document.createTextNode(inputTask);
    let task = document.createElement("li");

    task.appendChild(textInput);

    document.getElementById("UlTaskPending").appendChild(task);
}

// COMPLETED
function addTaskCompleted() {
    let inputTask = document.getElementById("taskId").value;
    let textInput = document.createTextNode(inputTask);
    let task = document.createElement("li");

    task.appendChild(textInput);

    document.getElementById("UlTaskCompleted").appendChild(task);
}


