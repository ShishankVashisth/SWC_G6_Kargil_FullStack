const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask(){

    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Enter a task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <div>
            <input type="checkbox" class="checkbox">

            <span class="task-text">
                ${taskText}
            </span>
        </div>

        <div class="actions">
            <button class="edit-btn">
                Edit
            </button>

            <button class="delete-btn">
                Delete
            </button>
        </div>
    `;

    const checkbox = li.querySelector(".checkbox");
    const editBtn = li.querySelector(".edit-btn");
    const deleteBtn = li.querySelector(".delete-btn");
    const taskTextElement =
        li.querySelector(".task-text");

    checkbox.addEventListener("change", () => {

        taskTextElement.classList.toggle(
            "completed",
            checkbox.checked
        );

    });

    deleteBtn.addEventListener("click", () => {

        li.remove();

    });

    editBtn.addEventListener("click", () => {

        if(editBtn.textContent === "Edit"){

            const currentText =
                taskTextElement.textContent;

            const input =
                document.createElement("input");

            input.value = currentText;

            taskTextElement.replaceWith(input);

            editBtn.textContent = "Save";

        }
        else{

            const inputField =
                li.querySelector("input[type='text']");

            const span =
                document.createElement("span");

            span.className = "task-text";
            span.textContent =
                inputField.value;

            inputField.replaceWith(span);

            editBtn.textContent = "Edit";
        }

    });

    taskList.appendChild(li);

    taskInput.value = "";
}