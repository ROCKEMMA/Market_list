import { cargarTareas, agregarTarea } from "./components/tasks/tasks.js";

const body = document.querySelector("#root");
body.innerHTML = `
    <h1 class="titulo">Lista de Compras</h1>
    <div class="container"></div>
    <div id="formulario">
        <input type="text" id="nuevo-item-texto" placeholder="Nuevo item" />
        <input type="number" id="nuevo-item-precio" placeholder="Precio" />
        <button id="agregar-item">Agregar Item</button>
    </div>
`;

cargarTareas();

document.getElementById('agregar-item').addEventListener('click', () => {
    const texto = document.getElementById('nuevo-item-texto').value;
    const precio = parseFloat(document.getElementById('nuevo-item-precio').value);
    if (texto && !isNaN(precio)) {
        agregarTarea(texto, precio);
        document.getElementById('nuevo-item-texto').value = '';
        document.getElementById('nuevo-item-precio').value = '';
    }
});
