import { useEffect, useReducer } from 'react';
import { TaskReducer } from '../TaskReducer'; 

export const useTask = () => {
    const initialState = []; 

    const initial = () => {
        return JSON.parse(localStorage.getItem("tasks")) || [];
    };


    const [tasks, dispatch] = useReducer(
        TaskReducer, 
        initialState, 
        initial 
    );


    const tasksCount = tasks.length;
    const inProgressTaskCount = tasks.filter(task => !task.completed).length;


    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);


    const addTask = task => {
        const action = {
            type: "Add",
            data: task
        };
        dispatch(action);
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

    const deleteTask = id => {
        const action = {
            type: "Delete",
            data: id
        };
        dispatch(action);
    };


    return {
        tasks,
        tasksCount,
        inProgressTaskCount,
        addTask,
        updateTask,
        completeTask,
        deleteTask
    };
};
