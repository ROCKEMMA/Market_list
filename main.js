import { uploadTasks } from "./components/task/task.js";
import { loadHtmlFormIn } from "./components/taskForm/html_form.js";

const body = document.querySelector("#root");

body.innerHTML = `
    <h1 class="title">Lista de Compras</h1>
    <div class="container"></div>
    <div id="formulario"></div>
    `;

loadHtmlFormIn("#formulario");
uploadTasks();
