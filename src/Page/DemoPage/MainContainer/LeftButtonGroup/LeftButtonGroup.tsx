import React from "react"
import { useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBagShopping, faBars, faEye } from "@fortawesome/free-solid-svg-icons"

const LeftButtonGroup: React.FC = (props) => {
  // const todos = useSelector((state: ApplicationState) => {
  //   return state.todoReducer.allTodo
  // })

  return (
    <ul className="menu bg-base-100 gap-4 pt-4 ">
      <li className="my-auto mx-auto my-4">
        <button className="btn btn-primary w-14 h-14 rounded-xl">
          <FontAwesomeIcon icon={faEye} className="text-lg text-white" />
        </button>
      </li>
      <li className="my-auto mx-auto my-4">
        <button className="btn btn-primary w-14 h-14 rounded-xl">
          <FontAwesomeIcon
            icon={faBagShopping}
            className="text-lg text-white"
          />
        </button>
      </li>
      <li className="my-auto mx-auto my-4">
        <button className="btn btn-primary w-14 h-14 rounded-xl">
          <FontAwesomeIcon icon={faBars} className="text-lg text-white" />
        </button>
      </li>
    </ul>
  )
}

export default withRouter(LeftButtonGroup)
