import React from 'react'
import {Route, Switch, withRouter} from "react-router-dom";
import TodoList from "./Page/TodoListPage/TodoListPage";

const RouterManager = () => {
    return(
        <div>
            <Switch>
                <Route path={"/todos"} exact>
                    <TodoList/>
                </Route>
            </Switch>
        </div>
    )
}
export default RouterManager