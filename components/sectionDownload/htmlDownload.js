const seccionDescargar=()=>{

    let div = document.createElement('div');

    const imgDownload = document.createElement('img');
    imgDownload.src = "https://raw.githubusercontent.com/ROCKEMMA/Market_list/f9e692a8ec3d3844f33d543577ac58c49a584dae/assets/svg/download.svg";
    imgDownload.id = "btnDownload";
    imgDownload.alt = "img";

    div.appendChild(imgDownload);

    return div;

}

export { seccionDescargar }
