// Importamos las funciones necesarias para obtener, eliminar y actualizar tareas
// La función listarTareas obtiene las tareas del servidor, limpia la lista actual en la interfaz de usuario,
// y luego itera sobre las tareas para crear elementos de lista con botones para eliminar y actualizar cada tarea.
// Los botones están asociados a sus respectivas funciones para manejar las acciones de eliminación y actualización.
import { getPosts } from "../api/client.js";
import { eliminarTarea } from "./eliminar.js";
import { actualizarTarea } from "./actualizar.js";

// Función para listar las tareas en la interfaz de usuario
export const listarTareas = async () => {

    // Obtenemos el elemento de la lista en el DOM y lo limpiamos antes de agregar las tareas actualizadas
    const lista = document.getElementById("listaTareas");
    lista.innerHTML = "";

    // Obtenemos las tareas del servidor utilizando la función getPosts
    const tareas = await getPosts();
    console.log(tareas);

    // Iteramos sobre las tareas y creamos elementos de lista para cada una, limitando a las primeras 5 tareas
    tareas.slice(0, 5).forEach(tarea => {

        // Creamos un elemento de lista para cada tarea y agregamos botones para eliminar y actualizar
        const li = document.createElement("li");

        // Configuramos el contenido del elemento de lista con el título de la tarea y los botones de acción
        li.innerHTML = `
            ${tarea.title}
            <button class="btnEliminar">Eliminar</button>
            <button class="btnActualizar">Actualizar</button>
        `;

        // Obtenemos los botones de eliminar y actualizar del elemento de lista
        // y les asignamos eventos de clic para manejar las acciones correspondientes
        const btnEliminar = li.querySelector(".btnEliminar");
        const btnActualizar = li.querySelector(".btnActualizar");

        // Asociamos el evento de clic al botón de eliminar para llamar a la función eliminarTarea con el id de la tarea
        btnEliminar.addEventListener("click", () => {
            eliminarTarea(tarea.id);
        });

        // Asociamos el evento de clic al botón de actualizar
        // para llamar a la función actualizarTarea con el id de la tarea
        btnActualizar.addEventListener("click", () => {
            actualizarTarea(tarea.id);
        });

        // Agregamos el elemento de lista al contenedor de la lista en la interfaz de usuario
        lista.appendChild(li);
    });
};