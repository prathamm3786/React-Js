import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Add_todoList, Delete_todoList, View_todoList } from '../Redux/Action/Todoaction';
import "./index.css"

const Firebase = () => {
    const [todoList, setTodoList] = useState(""); 
    const dispatch = useDispatch(); 

    const handleData = (e) => {
        e.preventDefault();
        if (!todoList.trim()) {
            alert("Please enter a valid Todo");
            return;
        }

        let obj = {
            todoList,
        };
        dispatch(Add_todoList(obj));  
        setTodoList("");  
    };

    const AllTodos = useSelector((state) => state.todo.todoList);  

    useEffect(() => {
        dispatch(View_todoList()); 
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(Delete_todoList(id)); 
        alert("Your Todo has been deleted");
    };

    return (
        <>
            <div>
                <h1 className="text-3xl font-bold text-center">Firebase Todolist</h1>
                <div>
                    <form onSubmit={handleData}>
                        <input
                            type="text"
                            placeholder="Add your Todolist"
                            onChange={(e) => setTodoList(e.target.value)}
                            value={todoList} 
                        />
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>
            </div>
            <div>
                <ul>
                    {AllTodos && AllTodos.length > 0 ? (
                        AllTodos.map((e, index) => (
                            <li key={index}>
                                <h3>{e.todoList}</h3>
                                <button className="btn" onClick={() => handleDelete(e.id)}>Remove</button>
                            </li>
                        ))
                    ) : (
                        <p>No Todos available</p>
                    )}
                </ul>
            </div>
        </>
    );
};

export default Firebase;
