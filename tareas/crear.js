// Importamos la función createPost desde el cliente API
// y la función listarTareas para actualizar la lista después de crear una nueva tarea.
import { createPost } from "../api/client.js";
import { listarTareas } from "./listar.js";

// Función para crear una nueva tarea
export const crearTarea = async () => {
    const input = document.getElementById("inputTarea");

    // Verificamos que el título de la tarea no esté vacío
    if (!input.value) return;

    // Llamamos a la función createPost para crear una nueva tarea en el servidor
    await createPost ({
        userId: 1,
        title: input.value,
        body: "..."
    });

    // Limpiamos el campo de entrada y actualizamos la lista de tareas en la interfaz de usuario
    input.value = "";
    listarTareas(); // Actualizamos la lista de tareas en la interfaz de usuario
}