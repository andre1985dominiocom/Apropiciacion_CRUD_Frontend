import { deletePost } from "../api/client.js";
import { listarTareas } from "./listar.js";

window.eliminar = async (id) => {
    await deletePost(id);
    listarTareas();
}