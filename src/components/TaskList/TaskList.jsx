import React from 'react';
import { TaskItem } from "../TaskItem/TaskItem";
import "./TaskList.css"; 

export const TaskList = ({ 
    tasks, 
    updateTask, 
    completeTask, 
    deleteTask 
}) => {
    return (
        <ul> 
            {tasks.map(task => ( 
                <TaskItem 
                    key={task.id} 
                    task={task} 
                    updateTask={updateTask} 
                    completeTask={completeTask} 
                    deleteTask={deleteTask} 
                />
            ))}
        </ul>
    );
};
