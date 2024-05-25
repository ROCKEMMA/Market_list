import { getTasksFromStorage, saveTasksToStorage } from "./../../utils/storage.js";
import { htmlItem } from "./html_task.js";
import { setupTaskForm } from "../taskForm/taskForm.js";
import { loadHtmlHeaderIn } from "../header/header.js";

let tareas = getTasksFromStorage();

function uploadTasks() {

    const div_container = document.querySelector(".container");
    div_container.innerHTML = '';

    const ul = document.createElement('ul');
    ul.className = "shopping-list";
    div_container.appendChild(ul);

    tareas.forEach((tarea) => {
        ul.appendChild(htmlItem(tarea));
    });
    //Cartar evento para elimiar tareas.
    setupTaskForm();
}

function addTask(texto, precio) {
    const nuevaTarea = {
        estado: true,
        id: tareas.length ? tareas[tareas.length - 1].id + 1 : 1,
        texto,
        precio
    };
    tareas.push(nuevaTarea);
    saveTasksToStorage(tareas);
    uploadTasks();
    console.log(tareas);
}

function deleteTask(id) {
    tareas = getTasksFromStorage();
    tareas = tareas.filter(tarea => tarea.id !== id);
    saveTasksToStorage(tareas);
    uploadTasks();
}

export { uploadTasks, addTask, deleteTask };
