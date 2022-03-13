import React from "react"
import { withRouter } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBatteryQuarter } from "@fortawesome/free-solid-svg-icons"

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
        <div className="px-4">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <FontAwesomeIcon
                icon={faBatteryQuarter}
                className="text-2xl text-gray-600 text-center my-auto"
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Header)
