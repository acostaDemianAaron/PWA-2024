import { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from '../../hooks/useForm';
import "./TaskUpdate.css";

export const TaskUpdate = ({ task, updateTask }) => {
    // Se invoca a un hook useForm para inicializar el estado del formulario de actualización.
    const { updateDescription, onInputChange } = useForm({
        updateDescription: task.description
    });

    // Se usa un useState para inicializar el estado disabled como true.
    const [disabled, updateDisabled] = useState(true);
    // Se utiliza el hook useRef para 
    const inputRef = useRef();

    // Se crea la constante a la que se llamará cuando sea enviado el formulario
    const onSubmitUpdate = e => {
        e.preventDefault();

        // Se define el id que se le pasará por parametro a updateTask
        const id = task.id;
        // Se define la descripción que se le pasará por parametro a updateDescripción
        const description = updateDescription;

        // Se actualiza la tarea según el id y la nueva descripción definidas en las líneas anteriores
        updateTask(id, description);
        updateDisabled(!disabled);

        // Se enfoca el campo de entrada de texto
        inputRef.current.focus();
    };

    /* Se retorna un input el cual se podrá modificar cuando se presione el botón para editar.
    Este formulario sirve para modificar la descripción de una tarea. */
    return (
        <form onSubmit={onSubmitUpdate}>
            <input
                type="text"
                className={`input-update ${task.completed ? "text-decoration" : ""}`}
                name="updateDescription"
                value={updateDescription}
                onChange={onInputChange}
                readOnly={disabled}
                ref={inputRef}
            />
            <button className="btn-update" type="submit"> <FaEdit /> </button>
        </form>
    );
};
