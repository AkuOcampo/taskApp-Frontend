import { Task as Tarea } from "../types/Task"

const BASE_URL = 'https://taskapp-4z6m.onrender.com'

export const tareasService = {
    getTareas: async (): Promise<Tarea[]> => {
        const response = await fetch(`${BASE_URL}/tasks`)
        const data = await response.json()

        return data;
    },
    getTarea: async (id:number): Promise<Tarea> =>{
        const response = await fetch(`${BASE_URL}/tasks/${id}`);
        const data = await response.json();
        return data;
    },
    getTareasCategoria: async (category: string): Promise<Tarea[]> => {
        const response = await fetch(`${BASE_URL}/tasks?estado=${category}`)
        const data = await response.json();
        return data;
    },
    createTarea: async (tarea: Tarea): Promise<Tarea> => {
        const response = await fetch(`${BASE_URL}/tasks`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tarea)
        });
        const data = await response.json();
        return data;
    },
    updateTareaEstado: async (id: number, newState: string): Promise<Tarea> => {
        return fetch(`${BASE_URL}/tasks/${id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    estado: newState
                })
        })
        .then((response) => response.json())
        .then(json =>{
            return json;
        })
        .catch(error=>error);

    },
    deleteTasks: async (id: number): Promise<void> => {
        await fetch(`${BASE_URL}/tasks/${id}`, {
                method: "DELETE"
        });
    }
}