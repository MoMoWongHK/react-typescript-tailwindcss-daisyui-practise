import React from "react"
import { Route, Switch } from "react-router-dom"
import TodoList from "./Page/TodoListPage/TodoListPage"
import DemoPage from "./Page/DemoPage/DemoPage"

const RouterManager = () => {
  return (
    <div>
      <Switch>
        <Route path={"/"}>
          <DemoPage />
        </Route>
      </Switch>
    </div>
  )
}
export default RouterManager
