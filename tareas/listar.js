import { getPosts } from "../api/client.js";

export const listarTareas = async () => {
    const lista = document.getElementById("listaTareas");
    lista.innerHTML = "";

    const tareas = await getPosts();
    console.log(tareas);

    tareas.slice(0, 5).forEach(tarea => {
        const li = document.createElement("li");

        li.innerHTML = `${tarea.title} <button onclick="eliminar(${tarea.id})">Eliminar</button>`;

        lista.appendChild(li);
    });
};