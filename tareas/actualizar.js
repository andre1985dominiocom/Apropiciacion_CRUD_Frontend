// Importamos la función updatePost desde el cliente API
// y la función listarTareas para actualizar la lista después de la actualización.
// La función actualizarTarea solicita al usuario un nuevo título para la tarea,
// verifica que no esté vacío, y luego llama a updatePost para actualizar la tarea en el servidor.
// Finalmente, llama a listarTareas para refrescar la lista de tareas en la interfaz de usuario.
import { updatePost } from "../api/client.js";
import { listarTareas } from "./listar.js";

// Función para actualizar una tarea existente
export const actualizarTarea = async (id) => {
    const nuevoTitulo = prompt("Ingresar el nuevo título de la tarea:");

    // Verificamos que el nuevo título no esté vacío
    if (!nuevoTitulo) return;

    // Llamamos a la función updatePost para actualizar la tarea en el servidor
    await updatePost(id, {
        userId: 1,
        title: nuevoTitulo,
        body: "..."
    });
    listarTareas(); // Actualizamos la lista de tareas en la interfaz de usuario
}