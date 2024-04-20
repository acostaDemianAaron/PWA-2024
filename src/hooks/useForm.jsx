import { useState } from 'react';
// Creamos una instancia de useForm
export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    // La cual captura los cambios en el formulario
    const onInputChange = e => {
        const name = e.target.name; 
        const value = e.target.value; 

        //  al capturarlos agrega valor a el formState
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // Resetea el valor al inical
    const onResetForm = () => {
        setFormState(initialForm);
    };

    // Exporta las funciones recien instanciadas
    return {
        ...formState, 
        onInputChange, 
        onResetForm 
    };
};
