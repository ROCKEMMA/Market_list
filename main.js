import { cargar_tareas } from "./cargar_lista/cargar_lista.js";

const body = document.querySelector("#root");
body.innerHTML = `
    <h1 class="titulo">Lista de Compras</h1>
    <div class="container"></div>
    <div id="formulario"></div>
    <div id="caja-botones"></div>
`;

cargar_tareas();
