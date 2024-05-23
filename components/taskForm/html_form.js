import { setupTaskForm } from "./taskForm.js";

function loadHtmlFormIn(html_box_id){
    document.querySelector(html_box_id).appendChild(htmlForm());
    setupTaskForm();
}


const htmlForm = ()=>{

    const div = document.createElement('div');

    const input_texto = document.createElement('input');
    input_texto.type = "text";
    input_texto.id = "nuevo-item-texto";
    input_texto.placeholder = "Producto";

    const input_numero = document.createElement('input');
    input_numero.type = "number";
    input_numero.id = "nuevo-item-precio";
    input_numero.placeholder = "Q 00.00";

    const button_agregar = document.createElement('button');
    button_agregar.id = "agregar-item";
    button_agregar.textContent = "Agregar";

    div.appendChild(input_texto);
    div.appendChild(input_numero);
    div.appendChild(button_agregar);

    return div;
}

export { loadHtmlFormIn }