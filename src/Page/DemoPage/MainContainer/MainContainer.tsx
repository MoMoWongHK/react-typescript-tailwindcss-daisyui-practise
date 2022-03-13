import React from "react"
import { useSelector } from "react-redux"
import { Route, Switch, withRouter } from "react-router-dom"
import LeftButtonGroup from "./LeftButtonGroup/LeftButtonGroup"
import HomePage from "../../HomePage/HomePage"

const MainContainer: React.FC = (props) => {
  // const todos = useSelector((state: ApplicationState) => {
  //   return state.todoReducer.allTodo
  // })

  return (
    <div className="grid grid-cols-12 gap-4 h-full">
      <div className="col-span-1 border-r border-base-300 h-full">
        <LeftButtonGroup />
      </div>
      <div className="col-span-11 bg-white pt-4 bg-base-200">
        <div className=" ">
          <Switch>
            <Route path={"/"}>
              <HomePage />
            </Route>
            <Route path={"/shop"}>
              <div></div>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default withRouter(MainContainer)
