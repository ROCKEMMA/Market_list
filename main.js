import { uploadTasks, addTask } from "./components/task/task.js";

const body = document.querySelector("#root");
body.innerHTML = `
    <h1 class="title">Lista de Compras</h1>
    
    <div class="container"></div>

    <div id="formulario">
        <input type="text" id="nuevo-item-texto" placeholder="Nuevo item" />
        <input type="number" id="nuevo-item-precio" placeholder="Precio" />
        <button id="agregar-item">Agregar Item</button>
    </div>
`;

uploadTasks();
