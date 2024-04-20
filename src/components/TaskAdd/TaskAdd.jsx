import React from 'react';
import { useForm } from '../../hooks/useForm';
import "./TaskAdd.css";

export const TaskAdd = ({ addTask }) => {
    // Se crea una constante utilizando el hook useForm pasandole por parametro una descripción vacía
    const { description, onInputChange, onResetForm } = useForm({
        description: ""
    });

    /* Con esta constante se previene que el contenido del formulario que se vaya a enviar contenga más de un caracter
    En ese caso, se crea una nueva tarea con los atributos id, descripcion, y un boolean para luego comprobar
    que la tarea esté completa o no */
    const onFormSubmit = e => {
        e.preventDefault();
        if (description.trim().length <= 1) return;

        let newTask = {
            id: new Date().getTime(),
            description: description.trim(),
            completed: false
        };

        addTask(newTask);
        onResetForm();
    };

    // Se retorna un formulario con el cual mediante un boton submit se podrán agregar nuevas tareas a la lista
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
