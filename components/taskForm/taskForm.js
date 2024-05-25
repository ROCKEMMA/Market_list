import { getTasksFromStorage } from "../../utils/storage.js";
import { loadHtmlHeaderIn } from "../header/header.js";
import { addTask } from "../task/task.js";

function setupTaskForm() {

    document.getElementById('agregar-item').addEventListener('click', () => {

        const texto = document.getElementById('nuevo-item-texto').value;
        const precio = parseFloat(document.getElementById('nuevo-item-precio').value);
        
        if (texto && !isNaN(precio)) {
            addTask(texto, precio);
            document.getElementById('nuevo-item-texto').value = '';
            document.getElementById('nuevo-item-precio').value = '';
        }
    });

    loadHtmlHeaderIn(getTasksFromStorage());
}

export { setupTaskForm };
