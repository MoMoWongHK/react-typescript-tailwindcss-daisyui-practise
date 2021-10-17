import Todo from "../../Modal/Todo";
import {allAction} from "../allAction";


interface actionTypes {
    type: string,
    data: Todo | string;
}

export interface initStateType {
    allTodo: Todo[]
}

const initialState: initStateType = {
    allTodo: [
        new Todo("a"),
        new Todo("b")
    ]
}

const addItem = (state: Todo[], todo: Todo | string): Todo[] => {
    let newTodo: Todo[] = [...state]
    // error handle
    if (todo instanceof Todo) {
        newTodo.push(todo)
    }

    return newTodo
}

const deleteItem = (state: Todo[], todoID: Todo | string): Todo[] => {
    if (typeof todoID === "string") {
        return state.filter(e => e.id !== todoID)
    } else {
        return state
    }
}

const setItemFinish = (state: Todo[], todoID: Todo | string): Todo[] => {
    if (typeof todoID === "string") {
        let newTodo: Todo[] =  [...state]
        let index =  newTodo.findIndex(e => e.id === todoID)
        if(index !== -1){
            newTodo[index].isFinish = !state[index].isFinish
        }
        return newTodo
    } else {
        return state
    }
}

const TodoReducer = (state = initialState, action: actionTypes): object => {
    switch (action.type) {
        case allAction.SET_ITEM:
            return {
                ...state,
                allTodo: action.data
            };
        case allAction.ADD_ITEM:
            return {
                ...state,
                allTodo: addItem(state.allTodo, action.data)
            }
        case allAction.DELETE_ITEM:
            return {
                ...state,
                allTodo: deleteItem(state.allTodo, action.data)
            }

        case allAction.SET_FINISH:
            return {
                ...state,
                allTodo: setItemFinish(state.allTodo, action.data)
            }
        default:
            return state;
    }
};

export default TodoReducer;