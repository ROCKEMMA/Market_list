const LOCAL_STORAGE_KEY = 'lista_compras';

function saveTasksToStorage(tareas) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tareas));
}

function getTasksFromStorage() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}


export { getTasksFromStorage, saveTasksToStorage };
