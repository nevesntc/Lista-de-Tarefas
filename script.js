function handleKeyDown(event) {
    if (event.key === "Enter") {
        addTask();
    }
}

function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();
    const taskList = document.getElementById("taskList");

    if (taskList.childElementCount >= 6) {
        alert("Você atingiu o limite de 6 itens na lista.");
        return;
    }

    if (taskText !== "") {
        if (taskText.length > 10) {
            alert("O texto da tarefa não pode ter mais de 10 caracteres.");
            return;
        }

        const li = document.createElement("li");

        const taskLabel = document.createElement("label");
        taskLabel.innerHTML = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Excluir";
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(taskLabel);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = "";
    }
}
