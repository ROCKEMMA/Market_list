import { actualizarTotal } from "./header.js";

function loadHtmlHeaderIn(html_box_id){
    document.querySelector(html_box_id).appendChild(htmlHeader());
    actualizarTotal();
}

const htmlHeader = ()=> {

    const div = document.createElement('div');

    const span = document.createElement('span');
    span.className = "total";
    span.textContent = `Q ${10}.00`;

    const p = document.createElement('p');
    p.className = "title";
    p.textContent = "Lista de Compras";

    div.appendChild(span);
    div.appendChild(p);

    return div;
}


export { loadHtmlHeaderIn }