// Creamos funcion que recibe por parametro el etado inicial y la accion
export const useReducerTask = (initialState, action) => {

    // Permite realizar un accion dependiendo el valor
    switch (action.type) {
        // Agrega una tarea al estado inicial y la devuelve 
        case "Add":
            return [...initialState, action.data]; 
        
        // Actualiza la tarea de la cual se mando el id 
        case "Update":
            return initialState.map(task => {
                if (task.id === action.data.id) {
                    return {
                        ...task,
                        description: action.data.description, 
                    };
                };
                return task;
            });

        // Cambia el estado de la tarea
        case "Complete":
            return initialState.map(task => {
                if (task.id === action.data) {
                    return {
                        ...task,
                        completed: !task.completed, 
                    };
                }
                return task;
            });

        //  Devuelve la lista filtrada segun el valor enviado
        case "Search":
            return {
                ...initialState,
                searchResults: initialState.tasks.filter(task =>
                    task.description.toLowerCase().includes(action.data.toLowerCase())
                )
            };

        //  Elimina una tare de la lista
        case "Delete":
            return initialState.filter(task => task.id !== action.data);

        // Caso por defecto, devuelve la lista como estaba  
        default:
            return initialState;
    };

};
