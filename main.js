// Importamos las funciones necesarias para manejar las tareas
// desde los módulos correspondientes en la carpeta tareas.
// Estas funciones incluyen listarTareas para mostrar las tareas,
// crearTarea para agregar nuevas tareas, actualizarTarea para modificar tareas existentes,
// y eliminarTarea para eliminar tareas. Al cargar el documento, se llama a listarTareas
// para mostrar las tareas actuales, y se asigna un evento de clic al botón de guardar
// para llamar a crearTarea cuando se haga clic en él.
import { listarTareas } from "./tareas/listar.js";
import { crearTarea} from "./tareas/crear.js";
import { actualizarTarea } from "./tareas/actualizar.js";
import { eliminarTarea } from "./tareas/eliminar.js";

// Esperamos a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
    listarTareas();

    // Asignamos un evento de clic al botón de guardar para llamar a la función crearTarea
    document.getElementById("btnGuardar")
        .addEventListener("click", crearTarea);
});