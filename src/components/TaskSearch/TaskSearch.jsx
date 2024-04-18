import { useForm } from '../../hooks/useForm';
import "./TaskSearch.css";

export const TaskSearch = ({ setSearch }) => {
    // Se crea una constante utilizando el hook useForm pasandole por parametro una descripción vacía
    const { description, onInputChange } = useForm({
        description: ""
    });

    /* Se crea una constante que se utilizará al momento de enviar el formulario.
    Evita el comportamiento predeterminado de enviar el formulario, luego se actualiza el valor del buscador, permitiendo que al
    momento de enviar el formulario, se puedan buscar tareas según lo ingresado*/
    const onSubmitSearch = e => {
        e.preventDefault();
        setSearch(description); // Aquí se llama a setSearch con el término de búsqueda
    };

    /* Se retorna un formulario para buscar tareas según lo ingresado en el input, permitiendo filtrar las tareas que desee visualizar
    el usuario */
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

