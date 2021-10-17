import React, {useEffect, useState} from 'react'

import Todo from "../../Modal/Todo";
import TodoItem from "./TodoItem/TodoItem";
import {allAction} from "../../redux/allAction";
import {useDispatch} from "react-redux";

const TodoList: React.FC<{ items: Todo[] }> = (props) => {
    const dispatch = useDispatch();

    const [newItemName, setNewItemName] = useState<string>("")

    const setIsFinish = (text: string): void => {
        dispatch({
            type: allAction.SET_FINISH,
            data: text // item id
        })
    }

    const onRemove = (text: string): void => {
        dispatch({
            type: allAction.DELETE_ITEM,
            data: text //remove item id
        })
    }

    const onCreate = (text: string): void => {
        dispatch({
            type: allAction.ADD_ITEM,
            data: new Todo(text)
        })
    }
    return (
        <div>
            <ul>
                {props.items.map(e => {
                    return (
                        <TodoItem data={e} onRemove={onRemove} setIsFinish={setIsFinish}/>
                    )
                })}
            </ul>
            <input
                style={{padding: "2px", borderRadius: "0.75em", backgroundColor: "lightgray", margin: "4px 0"}}
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
            />

            <button
                style={{textAlign: "center", margin: "4px 0", backgroundColor: "lightgreen", borderRadius: "0.75em"}}
                onClick={() => {
                    onCreate(newItemName)
                    // reset item name
                    setNewItemName("")
                }}
            >
                Submit
            </button>
        </div>
    )

}
export default TodoList