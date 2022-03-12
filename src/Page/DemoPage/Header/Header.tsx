import React from "react"
import { useSelector } from "react-redux"
import { withRouter } from "react-router-dom"

const Header: React.FC = (props) => {
  // const todos = useSelector((state: ApplicationState) => {
  //   return state.todoReducer.allTodo
  // })

  return (
    <div className="navbar bg-base-100 border-b border-base-400 h-8">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Pixie AI</a>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">1:58 AM</a>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=33791" />
          </div>
        </label>
      </div>
    </div>
  )
}

export default withRouter(Header)
