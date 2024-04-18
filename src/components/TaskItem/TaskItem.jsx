import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { TaskUpdate } from '../TaskUpdate/TaskUpdate'; 
import "./TaskItem.css";

export const TaskItem = ({
    task,
    updateTask,
    completeTask,
    deleteTask
}) => {
    /* Se retornan las tareas, que serán los elementos de una lista. Cada tarea tendrá la descripción, y botones para marcar la tarea
    como terminada, para modificar la descripción y para eliminarla. */ 
    return (
        <li>
            <span onClick={() => completeTask(task.id)}>
                <label className={`container-completed ${task.completed ? "active" : ""}`}></label>
            </span>

            <TaskUpdate task={task} updateTask={updateTask} />

            <button className="btn-delete" onClick={() => deleteTask(task.id)}> <FaTrash /> </button>
        </li>
    );
};
