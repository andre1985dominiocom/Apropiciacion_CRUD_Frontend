// Importamos la función deletePost desde el cliente API
// y la función listarTareas para actualizar la lista después de eliminar una tarea.
// La función eliminarTarea toma un id como argumento,
// llama a deletePost para eliminar la tarea correspondiente
// y luego actualiza la lista de tareas llamando a listarTareas.
import { deletePost } from "../api/client.js";
import { listarTareas } from "./listar.js";

// Función para eliminar una tarea existente
export const eliminarTarea = async (id) => {
    await deletePost(id);
    listarTareas(); // Actualizamos la lista de tareas en la interfaz de usuario después de eliminar la tarea
};