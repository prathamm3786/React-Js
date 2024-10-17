import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../../firebase";

const dataBase = getFirestore(app);

// Add Todo Action
export const Add_todoList = (todo) => {
    return async (dispatch) => {
        try {
            // Add new todo to Firestore
            await addDoc(collection(dataBase, 'Users'), {
                todo: todo.todoList  // Make sure todoList is passed correctly
            });

            // Dispatch action to Redux store
            dispatch({
                type: 'ADD_TODO',
                payload: todo
            });
        } catch (error) {
            console.log(error);
            return false;
        }
    };
};

// View Todo List Action
export const View_todoList = () => {
    return async (dispatch) => {
        try {
            // Reference to 'Users' collection
            let todoList = collection(dataBase, 'Users');
            let gettodoList = await getDocs(todoList);

            // Map through Firestore data
            const todosArray = gettodoList.docs.map((val) => ({
                id: val.id,
                ...val.data()
            }));

            // Dispatch fetched data to Redux store
            dispatch({
                type: 'VIEW_TODO',
                payload: todosArray
            });
        } catch (error) {
            console.log(error);
            return false;
        }
    };
};

// Delete Todo Action
export const Delete_todoList = (id) => {
    return async (dispatch) => {
        try {
            // Get reference to the specific document in Firestore
            let todoDoc = doc(dataBase, 'Users', id);

            // Delete document from Firestore
            await deleteDoc(todoDoc);

            // Dispatch delete action to Redux store
            dispatch({
                type: 'DELETE_TODO',
                payload: id
            });
        } catch (error) {
            console.log(error);
            return false;
        }
    };
};
