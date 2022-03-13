import React from "react"
import { withRouter } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBagShopping } from "@fortawesome/free-solid-svg-icons"
import Shop from "../../Model/Shop"
import { useDispatch } from "react-redux"
import { allAction } from "../../Redux/allAction"

interface ShopCardProps {
  data: Shop
}

const ShopDisplayCard: React.FC<ShopCardProps> = (props) => {
  // const todos = useSelector((state: ApplicationState) => {
  //   return state.todoReducer.allTodo
  // })

  const dispatch = useDispatch()

  const onSelectShop = (shop: Shop): void => {
    dispatch({
      type: allAction.SELECT_SHOP,
      data: shop,
    })
  }

  return (
    <div
      className="grid my-4 gap-2 p-2 hover:bg-base-200 cursor-pointer"
      style={{ gridTemplateColumns: "60px auto 80px" }}
      onClick={() => onSelectShop(props.data)}>
      <div className="bg-green-50 rounded-md p-5">
        <FontAwesomeIcon
          icon={faBagShopping}
          className="text-2xl text-green-600 text-center my-auto"
        />
      </div>
      <div>
        <h3 className="font-bold text-lg">{props.data.shopName}</h3>
        <div className="text-gray-500 text-md">
          {props.data.address} , {props.data.floor} /F
        </div>
      </div>
      <div>
        <div className="rounded-md font-bold text-center bg-green-50 text-green-600 p-2 my-auto">
          test
        </div>
      </div>
    </div>
  )
}

export default withRouter(ShopDisplayCard)
