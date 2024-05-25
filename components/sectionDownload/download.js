import { seccionDescargar } from "./htmlDownload.js";

function loadHtmlSectionDownload(){
    document.querySelector("#download").appendChild(seccionDescargar());
    document.querySelector("#btnDownload").addEventListener("click",downloadAsImage);
}

export { loadHtmlSectionDownload }


function downloadAsImage() {

    document.querySelector("#download").classList.add('ocultar');
    document.querySelector("#formulario").classList.add('ocultar');
    document.querySelectorAll(".delete-button").forEach(btn=>{
        btn.classList.add('ocultar');
    });
    document.querySelectorAll(".item").forEach(box =>{
        box.classList.add('acomodar');
    });  


    const contenido = document.querySelector('#root');
    html2canvas(contenido).then(canvas => {
        const link = document.createElement('a');
        link.download = 'contenido.png';
        link.href = canvas.toDataURL();
        link.click();
    });

    document.querySelector("#download").classList.remove('ocultar');
    document.querySelector("#formulario").classList.remove('ocultar');
    document.querySelectorAll(".delete-button").forEach(btn=>{
        btn.classList.remove('ocultar');
    });
    document.querySelectorAll(".item").forEach(box =>{
        box.classList.remove('acomodar');
    });  

}