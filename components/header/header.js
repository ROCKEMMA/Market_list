import { htmlHeader } from "./html_header.js";

function loadHtmlHeaderIn(cart){
    let headerDom = document.querySelector("#header");
    headerDom.innerHTML = '';
    headerDom.appendChild(htmlHeader(totalCart(cart)));
}

function totalCart(cart){
    let total = 0;
    cart.forEach(element => {total += element.precio;});
    return total;
}

export { loadHtmlHeaderIn }