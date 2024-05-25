const seccionDescargar=()=>{

    let div = document.createElement('div');

    const imgDownload = document.createElement('img');
    imgDownload.src = "../../assets/svg/download.svg";
    imgDownload.id = "btnDownload";
    imgDownload.alt = "img";

    div.appendChild(imgDownload);

    return div;

}

export { seccionDescargar }