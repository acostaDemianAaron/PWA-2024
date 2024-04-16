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
