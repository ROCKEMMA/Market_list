import { getTasksFromStorage } from "./utils/storage.js";
import { uploadTasks } from "./components/task/task.js";
import { loadHtmlFormIn } from "./components/taskForm/html_form.js";
import { loadHtmlHeaderIn } from "./components/header/header.js";

const body = document.querySelector("#root");

body.innerHTML = `
    <header id="header"></header>
    <div class="container"></div>
    <div id="formulario"></div>
    `;

let cart = getTasksFromStorage();

// COMPONENTES DE LA WEB
loadHtmlHeaderIn(cart);
loadHtmlFormIn();
uploadTasks();