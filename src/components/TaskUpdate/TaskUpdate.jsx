import { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from '../../hooks/useForm';
import "./TaskUpdate.css";

export const TaskUpdate = ({ task, updateTask }) => {
    const { updateDescription, onInputChange } = useForm({
        updateDescription: task.description
    });

    const [disabled, updateDisabled] = useState(true);
    const inputRef = useRef();

    const onSubmitUpdate = e => {
        e.preventDefault();

        const id = task.id;
        const description = updateDescription;

        updateTask(id, description);
        updateDisabled(!disabled);
        inputRef.current.focus();
    };

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
