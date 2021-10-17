import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {Link, Route, withRouter} from "react-router-dom";
import {initStateType} from "../../redux/reducers/TodoReducer";

import TodoList from "../../Component/TodoList/TodoList";

const TodoListPage: React.FC = (props) => {


    const todos = useSelector((state: any) =>{
        return state.todoReducer.allTodo
    });

    useEffect(() => {
        console.log(todos)
    }, [todos])

    if (Array.isArray(todos)) {
        return (
            <div>
                <TodoList items={todos}/>
            </div>
        )
    } else {
        return (
            <div>
                loading...
            </div>
        )
    }
}


export default (withRouter(TodoListPage))
