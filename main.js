import { uploadTasks } from "./components/task/task.js";
import { loadHtmlFormIn } from "./components/taskForm/html_form.js";
import { loadHtmlHeaderIn } from "./components/header/html_header.js";

const body = document.querySelector("#root");

body.innerHTML = `
    <header id="header"></header>
    <div class="container"></div>
    <div id="formulario"></div>
    `;

loadHtmlFormIn("#formulario");
uploadTasks();
loadHtmlHeaderIn("#header");