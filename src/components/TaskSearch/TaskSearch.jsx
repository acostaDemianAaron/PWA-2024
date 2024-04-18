import { useForm } from '../../hooks/useForm';
import "./TaskSearch.css";

export const TaskSearch = ({ setSearch }) => {
    const { description, onInputChange } = useForm({
        description: ""
    });

    const onSubmitSearch = e => {
        e.preventDefault();
        setSearch(description); // Aquí se llama a setSearch con el término de búsqueda
    };


    return (
        <form onSubmit={onSubmitSearch}>
            <input
                type="text"
                className="input-search"
                placeholder="Search"
                name="description"
                value={description}
                onChange={onInputChange}
            />
            <button className='btn-search' type="submit">Search</button>
        </form>
    );
};

