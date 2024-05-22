import { getTasksFromStorage, saveTasksToStorage } from "../../utils/storage.js";

let tareas = getTasksFromStorage();

function cargarTareas() {
    const cajaTareas = document.querySelector(".container");
    cajaTareas.innerHTML = '';
    const ul = document.createElement('ul');
    ul.className = "shopping-list";
    cajaTareas.appendChild(ul);

    tareas.forEach((tarea) => {
        ul.appendChild(crearItemHTML(tarea));
    });
}

function crearItemHTML(tarea) {
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
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener('click', () => eliminarTarea(tarea.id));

    li.appendChild(spanMensaje);
    li.appendChild(spanPrecio);
    li.appendChild(botonEliminar);

    return li;
}

function agregarTarea(texto, precio) {
    const nuevaTarea = {
        estado: true,
        id: tareas.length ? tareas[tareas.length - 1].id + 1 : 1,
        texto,
        precio
    };
    tareas.push(nuevaTarea);
    saveTasksToStorage(tareas);
    cargarTareas();
}

function eliminarTarea(id) {
    tareas = tareas.filter(tarea => tarea.id !== id);
    saveTasksToStorage(tareas);
    cargarTareas();
}

export { cargarTareas, agregarTarea };
