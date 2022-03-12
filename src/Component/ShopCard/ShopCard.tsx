import React from "react"
import { useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBagShopping } from "@fortawesome/free-solid-svg-icons"

const ShopCard: React.FC = (props) => {
  // const todos = useSelector((state: ApplicationState) => {
  //   return state.todoReducer.allTodo
  // })

  return (
    <div
      className="grid my-4 gap-2"
      style={{ gridTemplateColumns: "60px auto 80px" }}>
      <div className="bg-green-50 rounded-md p-5">
        <FontAwesomeIcon
          icon={faBagShopping}
          className="text-2xl text-green-600 text-center my-auto"
        />
      </div>
      <div>
        <h3 className="font-bold text-lg">Shop A</h3>
        <div className="text-gray-500 text-md">RM 1000, 12/F</div>
      </div>
      <div>
        <div className="rounded-md font-bold text-center bg-green-50 text-green-600 p-2 my-auto">
          $100
        </div>
      </div>
    </div>
  )
}

export default withRouter(ShopCard)
