import React from 'react';
import { useForm } from '../../hooks/useForm';
import "./TaskAdd.css";

export const TaskAdd = ({ addTask }) => {
    const { description, onInputChange, onResetForm } = useForm({
        description: ""
    });

    const onFormSubmit = e => {
        e.preventDefault();
        if (description.length <= 1) return;

        let newTask = {
            id: new Date().getTime(),
            description: description,
            completed: false
        };

        addTask(newTask);
        onResetForm();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                className="input-add" 
                name="description"
                value={description}
                onChange={onInputChange}
            />
            <button className='btn-add' type='submit'>Add</button>
        </form>
    );
};
