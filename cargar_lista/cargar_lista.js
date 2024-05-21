// Lista de tareas
import { tareas } from "../data_todo.js";

function cargar_tareas() {

    let caja_tareas = document.querySelector(".container");
    const ul = document.createElement('ul');
    ul.className = "shopping-list"
    caja_tareas.appendChild(ul);

    tareas.forEach((cada_tarea) => {
        ul.appendChild(item_html(cada_tarea.texto,cada_tarea.precio));
    });
}

function item_html(mensaje, precio){
    const li = document.createElement('li');
    li.className = "item";

    const span_mensaje = document.createElement('span');
    span_mensaje.className = "name";
    span_mensaje.textContent = mensaje;
    const span_precio = document.createElement('span');
    span_precio.className = "price";
    span_precio.textContent = `Q ${precio}.00`;

    li.appendChild(span_mensaje);
    li.appendChild(span_precio);

    return li;
}

export { cargar_tareas };