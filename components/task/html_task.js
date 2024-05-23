import { deleteTask } from "./task.js";

function htmlItem(tarea) {
    const li = document.createElement('li');
    li.className = "item";

    const spanMensaje = document.createElement('span');
    spanMensaje.className = "name";
    spanMensaje.textContent = tarea.texto;

    const spanPrecio = document.createElement('span');
    spanPrecio.className = "price";
    spanPrecio.textContent = `Q ${tarea.precio}.00`;

    const botonEliminar = document.createElement('button');
    botonEliminar.className = "delete-button";
    botonEliminar.textContent = "X";
    botonEliminar.addEventListener('click', () => deleteTask(tarea.id));

    li.appendChild(spanMensaje);
    li.appendChild(spanPrecio);
    li.appendChild(botonEliminar);

    return li;
}

export { htmlItem };