import { useEffect, useReducer, useMemo, useState } from 'react';
import { useReducerTask } from './useReducerTask'; 

export const useTask = () => {
    const initialState = [];
    const initial = () => {
        return JSON.parse(localStorage.getItem("tasks")) || [];
    };


    const [tasks, dispatch] = useReducer(
        useReducerTask, 
        initialState, 
        initial 
    );


    const tasksCount = tasks.length;
    const inProgressTaskCount = tasks.filter(task => !task.completed).length;
    const [searchTerm, setSearchTerm] = useState("");

    const filteredTasks = useMemo(() => {
        if (!searchTerm) return tasks;
        return tasks.filter(task =>
            task.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [tasks, searchTerm]);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);


    const addTask = task => {
        const action = {
            type: "Add",
            data: task
        };
        dispatch(action);
        setSearchTerm(""); // Limpiar el término de búsqueda al agregar una tarea
    };

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

    const completeTask = id => {
        const action = {
            type: "Complete",
            data: id
        };
        dispatch(action);
    };

    const setSearch = term => {
        setSearchTerm(term);
    };

    const deleteTask = id => {
        const action = {
            type: "Delete",
            data: id
        };
        dispatch(action);
    };


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
