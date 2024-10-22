
let initialState = {
    todoList: [],
    err: null
};

const Todoreducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
                err: null
            };

        case 'VIEW_TODO':
            
            

            return {
                ...state,
                todoList: action.payload,
                
            };

        case 'DELETE_TODO':
            return {
                ...state,
                todoList: state.todoList.filter((todo) => todo.id !== action.payload),
                err: null
            };

        default:
            return state;
    }
};

export default Todoreducer;
