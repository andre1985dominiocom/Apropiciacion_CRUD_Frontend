import { createPost } from "../api/client.js";
import { listarTareas } from "./listar.js";

export const crearTarea = async () => {
    const input = document.getElementById("inputTarea");

    if (!input.value) return;

    await createPost ({
        userId: 1,
        title: input.value,
        body: "..."
    });

    input.value = "";
    listarTareas();
}