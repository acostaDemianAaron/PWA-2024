import { useEffect, useReducer, useMemo, useState } from 'react';
import { useReducerTask } from './useReducerTask'; 
// definimos la constante useTask en la cual definimos todas las acciones que puede hacer una task
export const useTask = () => {
    const initialState = [];

    // Trae el valor incial de las tareas si es que hay en el local storage
    const initial = () => {
        return JSON.parse(localStorage.getItem("tasks")) || [];
    };

    // Creamos la instancia task como un estado
    const [tasks, dispatch] = useReducer(
        useReducerTask, 
        initialState, 
        initial 
    );

    // Contadores de tareas
    const tasksCount = tasks.length;
    const inProgressTaskCount = tasks.filter(task => !task.completed).length;
    
    // Valor del buscador
    const [searchTerm, setSearchTerm] = useState("");

    // Crea la lista de tareas fitradas
    const filteredTasks = useMemo(() => {
        if (!searchTerm) return tasks;
        return tasks.filter(task =>
            task.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [tasks, searchTerm]);

    // Setea el arreglo de tasks en el localstore, para simular persitencia de datos
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    // Funcion para añadir tareas
    const addTask = task => {
        const action = {
            type: "Add",
            data: task
        };
        dispatch(action);
        setSearchTerm(""); // Limpiar el término de búsqueda al agregar una tarea
    };

    // Funcion para actualziar una tarea
    const updateTask = (id, description) => {
        const action = {
            type: "Update",
            data: {
                id,
                description
            },
        };
        dispatch(action);
    };

    // Funcion para marcar como completada o incompleta una tarea
    const completeTask = id => {
        const action = {
            type: "Complete",
            data: id
        };
        dispatch(action);
    };

    // Ejectua la funcion setSearchItem para que devuelva una lista de tareas filtrada
    const setSearch = term => {
        setSearchTerm(term);
    };

    // Funcion para eliminar una tarea de la lista
    const deleteTask = id => {
        const action = {
            type: "Delete",
            data: id
        };
        dispatch(action);
    };

    // exportamos todas las funciones recien instanciadas
    return {
        tasks: filteredTasks,
        tasksCount,
        inProgressTaskCount,
        addTask,
        updateTask,
        completeTask,
        setSearch,
        deleteTask
    };
};
