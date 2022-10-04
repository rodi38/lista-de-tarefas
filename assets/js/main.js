function app() {
  const btn = document.querySelector(".btn-task");
  const input = document.querySelector(".input-task");
  const tasks = document.querySelector(".tasks");

  input.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
      if (input.value === "") return;
      addTask(input.value);
      clearInput();
      saveTasks();
    }
  });

  function clearInput() {
    input.value = "";
    input.focus();
  }

  function createLi() {
    const li = document.createElement("li");
    return li;
  }

  function addTask(task) {
    let li = createLi();
    let button = createButton();
    button.innerHTML = "Deletar";
    button.classList.add("deletar");
    li.innerText = task;
    li.appendChild(button);
    tasks.appendChild(li);
  }
  
  function createButton() {
    const createBtn = document.createElement("button");
    return createBtn;
  }

  btn.addEventListener("click", (e) => {
    if (input.value === "") return;
    addTask(input.value);
    clearInput();
    saveTasks();
  });

  document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.classList.contains("deletar")) {
      el.parentElement.remove();
      saveTasks();
    }
  });

  function saveTasks() {
    const saveTasks = tasks.querySelectorAll("li");
    let storedTasks = [];
    for (let task of saveTasks) {
      let upTask = task.innerText;
      upTask = upTask.replace("Deletar", "");
      storedTasks.push(upTask);
    }

    const taskJSON = JSON.stringify(storedTasks);
    localStorage.setItem("tarefas", taskJSON);
  }

  function getTasks() {
    const tarefasSalvas = localStorage.getItem("tarefas");
    console.log(tarefasSalvas);
    let convTask = JSON.parse(tarefasSalvas);

    for (let tarefa of convTask) {
      console.log(tarefa);
      addTask(tarefa);
    }
  }
  // for (let tarefas in convTask) {
  //   tarefasArr.push(convTask[tarefas]);
  //   tasks.innerHTML += tarefasArr[tarefas];
  // }

  getTasks();
}

app();
