import { updatePost } from "../api/client.js";
import { listarTareas } from "./listar.js";

window.actualizar = async (id) => {
    const nuevoTitulo = prompt("Ingresar el nuevo título de la tarea:");

    if (!nuevoTitulo) return;

    await updatePost({
        id,
        userId: 1,
        title: nuevoTitulo,
        body: "..."
    });
    listarTareas();
}