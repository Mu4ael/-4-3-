const form = document.getElementById("form"),
taskCount = document.getElementById("taskCount"),
listTask = document.getElementById("listTask"),
doneTaskCount = document.getElementById("doneTaskCount"),
listDoneTask = document.getElementById("listDoneTask");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const input = e.target.children[0]
    // console.log(input.value);

    if (input.value !== "") {
    
    const li = document.createElement("li");
    li.classList.add("task");
    li.innerHTML = `
        <p>${input.value}</p>
            <div>
                <button class="chek">
                    <img src="/icons/Check.svg" alt="Check">
                </button>

                <button class="remove">
                    <img src="/icons/TrashSimple.svg" alt="TrashSimple">
                </button>
            </div>`
    listTask.insertAdjacentElement("afterbegin", li)
    taskCount.textContent = `Tasks to do - ${listTask.children.length}`;
    input.value = ""


    const removeBtn = li.querySelector(".remove");
    removeBtn.addEventListener("click", () => {
        moveDone(li);  
    });


    const deletes = document.querySelectorAll(".remove")
    // console.log(deletes);
    deletes.forEach((el) => {
        el.addEventListener("click", () => {
            el.parentElement.parentElement.remove()
            taskCount.textContent = `Tasks to do - ${listTask.children.length}`;
            // li.remove()
        })
        // console.log(el);
    })

    } else {
        alert("error")
    } 

});


function moveDone(taskElement) {
    const move = taskElement.querySelector("div");
    if (move) move.remove();

    taskElement.classList.remove("task");
    taskElement.classList.add("doneTask");

    listDoneTask.appendChild(taskElement);

    taskCounter();
    doneCounter();
}

function taskCounter() {
    taskCount.textContent = `Tasks to do - ${listTask.children.length}`;
}

function doneCounter() {
    doneTaskCount.textContent = `Done - ${listDoneTask.children.length}`;
}


