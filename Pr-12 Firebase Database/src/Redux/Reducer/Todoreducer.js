import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../../firebase";

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

            const getUser = async() => {
                   try{
                    const db = getFirestore(app)
                    const data = collection(db, "Users")
                    const users = await getDocs(data);
                    const record = users.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data(),
                    }))
                    return await  record
                   }catch(err){
                        console.log(err);
                        return false;
                        
                   }
        
        
            }
            
            

            return {
                ...state,
                todoList: getUser(),
                err: null
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
