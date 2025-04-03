document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    taskForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const taskText = taskInput.value.trim();
        if (taskText === "") return; 

        const li = document.createElement("li");
        li.innerHTML = `${taskText} <button class="delete-btn">X</button>`;

        li.querySelector(".delete-btn").addEventListener("click", function() {
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = "";
    });
});
