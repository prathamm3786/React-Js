let initialState = {
    todoList: [],  // Use consistent naming (lowercase 'l' as used in actions)
    err: null
};

const Todoreducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [...state.todoList, action.payload],  // Add new todo to the list
                err: null
            };

        case 'VIEW_TODO':
            return {
                ...state,
                todoList: action.payload,  // Replace state with the fetched todos
                err: null
            };

        case 'DELETE_TODO':
            return {
                ...state,
                todoList: state.todoList.filter((todo) => todo.id !== action.payload),  // Remove todo by ID
                err: null
            };

        default:
            return state;
    }
};

export default Todoreducer;
