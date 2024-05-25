import { setupTaskForm } from "./taskForm.js";

function loadHtmlFormIn(){
    let form_DOM = document.querySelector("#formulario");
    form_DOM.innerHTML = ''; 
    form_DOM.appendChild(htmlForm());
    setupTaskForm();
}

const htmlForm = ()=>{

    const div = document.createElement('div');

    const input_texto = document.createElement('input');
    input_texto.type = "text";
    input_texto.id = "nuevo-item-texto";
    input_texto.placeholder = "Producto";
    input_texto.autocomplete="off";
    

    const input_numero = document.createElement('input');
    input_numero.type = "number";
    input_numero.id = "nuevo-item-precio";
    input_numero.placeholder = "Q 00.00";
    input_numero.autocomplete="off";

    const button_agregar = document.createElement('button');
    button_agregar.id = "agregar-item";
    button_agregar.textContent = "Carrito";

    const button_descuento = document.createElement('button');
    button_descuento.id = "agregar-descuento";
    button_descuento.textContent = "Descuento";

    div.appendChild(input_texto);
    div.appendChild(button_descuento);
    div.appendChild(input_numero);
    div.appendChild(button_agregar);

    return div;
}

export { loadHtmlFormIn }