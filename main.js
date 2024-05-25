import { getTasksFromStorage } from "./utils/storage.js";
import { uploadTasks } from "./components/task/task.js";
import { loadHtmlFormIn } from "./components/taskForm/html_form.js";
import { loadHtmlHeaderIn } from "./components/header/header.js";
import { loadHtmlSectionDownload } from "./components/sectionDownload/download.js";

const body = document.querySelector("#root");

body.innerHTML = `
    <section id="download"></section>
    <header id="header"></header>
    <div class="container"></div>
    <div id="formulario"></div>
    `;

let cart = getTasksFromStorage();

// COMPONENTES DE LA WEB
loadHtmlSectionDownload();
loadHtmlHeaderIn(cart);
loadHtmlFormIn();
uploadTasks();