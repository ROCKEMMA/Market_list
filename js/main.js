// Lista de tareas
import { tareas } from './data_todo.js';

function cargar_tareas() {

    let caja_tareas = document.querySelector(".lista_tareas");

    tareas.forEach((cada_tarea) => {

        let div_tarea = document.createElement("div");
        div_tarea.classList.add("div_tareas");

        if (cada_tarea.estado) {
            div_tarea.innerHTML = `
            <p class="texto">${cada_tarea.texto}</p>
            <div class="estado">[/]</div>
        `;
        } else {
            div_tarea.innerHTML = `
            <p class="texto">${cada_tarea.texto}</p>
            <div class="estado">[X]</div>
        `;
        }
        caja_tareas.appendChild(div_tarea);
    });
}
cargar_tareas();

function cargar_botones() {
    let caja_btn = document.querySelector(".caja-botones");
    caja_btn.innerHTML = `
    <div class="boton-nuevo">
        <div class="btn_mas"> + </div>
        <span>Nuevo</span>
    </div>`;
}
cargar_botones();


function cargar_formulario_nueva_tarea() {
    let ventana_formulario = document.querySelector(".formulario");
    ventana_formulario.classList.add("activar_g");

    ventana_formulario.innerHTML = `
        <div class="div_controles">
            <div class="btn-cerrar">X</div>
        </div>

        <div class="div_entrada_texto">
            <input type="txt" class="entrada-tarea">
        </div>

        <div class="btn-crear">Crear</div>
    `;

    let btn_cerrar = document.querySelector(".btn-cerrar");
    btn_cerrar.addEventListener("click", () => {
        ventana_formulario.classList.remove("activar_g")
    });

    let btn_crear = document.querySelector(".btn-crear");
    btn_crear.addEventListener("click", () => {

        // Recupera los datos del formulario para la nueva tarea
        let tarea = document.querySelector(".entrada-tarea").value;

        // Organiza los datos para la nueva tarea
        let estructura_de_tarea = {
            estado: true,
            id: tarea,
            texto: tarea,
        };

        // Agrega la tarea nueva a la lista de tareas
        tareas.push(estructura_de_tarea)

        // Limpiar las tareas anteiores para actualizar
        let cuadro_de_tareas = document.querySelector(".lista_tareas");
        cuadro_de_tareas.innerHTML = "";

        // Carga todas las tareas nuevamente al DOM
        cargar_tareas();

        // cierra el formulario de la nueva tarea
        ventana_formulario.classList.remove("activar_g")
    });
}

// PROGRAMACIÓN DEL BOTON
let btn_nuevo = document.querySelector(".btn_mas");
btn_nuevo.addEventListener("click", cargar_formulario_nueva_tarea);