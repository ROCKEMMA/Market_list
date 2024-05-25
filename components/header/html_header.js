const htmlHeader = (total)=> {
    const div = document.createElement('div');

    const span = document.createElement('span');
    span.className = "total";
    span.textContent = `Q ${total}.00`;

    const p = document.createElement('p');
    p.className = "title";
    p.textContent = "Lista de Compras";

    div.appendChild(span);
    div.appendChild(p);

    return div;
}

export { htmlHeader }