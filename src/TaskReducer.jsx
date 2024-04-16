export const TaskReducer = (initialState, action) => {


    switch (action.type) {

        case "Add":
            return [...initialState, action.data]; 


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


        case "Delete":
            return initialState.filter(task => task.id !== action.data);

        default:
            return initialState;
    };

};
