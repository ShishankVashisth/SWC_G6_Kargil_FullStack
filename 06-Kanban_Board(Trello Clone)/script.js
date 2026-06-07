const tasks =
    document.querySelectorAll(".task");

const columns =
    document.querySelectorAll(".task-list");

let draggedTask = null;

tasks.forEach(task => {

    task.addEventListener(
        "dragstart",
        () => {

            draggedTask = task;

            setTimeout(() => {
                task.style.display = "none";
            }, 0);
        }
    );

    task.addEventListener(
        "dragend",
        () => {

            task.style.display = "block";

            draggedTask = null;
        }
    );

});

columns.forEach(column => {

    column.addEventListener(
        "dragover",
        (event) => {

            event.preventDefault();
        }
    );

    column.addEventListener(
        "drop",
        () => {

            if(draggedTask){

                column.appendChild(
                    draggedTask
                );

            }
        }
    );

});