import React from "react"
import { useSelector } from "react-redux"
import { withRouter } from "react-router-dom"

import Header from "./Header/Header"
import MainContainer from "./MainContainer/MainContainer"
// import { ApplicationState } from "../../Redux/reducers/rootReducer"

const DemoPage: React.FC = (props) => {
  // const todos = useSelector((state: ApplicationState) => {
  //   return state.todoReducer.allTodo
  // })

  return (
    <div
      className="mx-auto rounded-2xl border border-gray-200 overflow-hidden  my-2"
      style={{ maxWidth: "1600px", height: "800px" }}>
      {/*header*/}
      <Header />
      {/*main*/}
      <MainContainer />
    </div>
  )
}

export default withRouter(DemoPage)
