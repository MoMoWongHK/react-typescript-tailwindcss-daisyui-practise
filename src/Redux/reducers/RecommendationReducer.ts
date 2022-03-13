import { Reducer } from "react"
import { allAction } from "../allAction"
import Shop from "../../Model/Shop"
import Product from "../../Model/Product"
import { PRODUCT_CATEGORY } from "../../Enum/PRODUCT_CATEGORY"

interface actionTypes {
  type: string
  data: Shop[] | Shop | string | any
}

export interface recommendationInitStateType {
  shops: Shop[]
  products: Product[]
  selectedShop: Shop | null
}

const initialState: recommendationInitStateType = {
  shops: [
    new Shop(
      "Happy Shop",
      "This is a happy shop for everyone",
      { lat: 22.3371775, lng: 114.1760107 },
      "L203",
      8,
      "FF4tjd45d5"
    ),
    new Shop(
      "ABC Shop",
      "A for apple, B for boy and C for Cat.",
      { lat: 22.33721875, lng: 114.17559107 },
      "L502",
      10,
      "FF4tjdad4d5"
    ),
  ],
  products: [
    new Product(
      "Nike shoes 2021",
      "latest shoes should buy",
      "FF4tjd45d5",
      800,
      20,
      PRODUCT_CATEGORY.SHOES
    ),
  ],
  selectedShop: null,
}

const TodoReducer: Reducer<recommendationInitStateType, actionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case allAction.SET_SHOPS:
      return {
        ...state,
        shops: action.data,
      }
    case allAction.SELECT_SHOP:
      return {
        ...state,
        selectedShop: action.data,
      }
    default:
      return state
  }
}

export default TodoReducer
