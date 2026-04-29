import { listarTareas } from "./tareas/listar.js";
import { crearTarea } from "./tareas/crear.js";

document.addEventListener("DOMContentLoaded", () => {
    listarTareas();

    document.getElementById("btnGuardar")
    .addEventListener("click", crearTarea);
});