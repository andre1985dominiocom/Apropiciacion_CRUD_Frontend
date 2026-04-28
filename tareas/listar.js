import { getPosts } from "../api/client.js";

export const listarTareas = async () => {
    const tareas = await getPosts();

    const listaTareas = document.getElementById("lista-tareas");
}