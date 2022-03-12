import React from "react"
import { useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import ShopCard from "../../../Component/ShopCard/ShopCard"
import InteractiveMap from "./InteractiveMap/InteractiveMap"

const MapAndShopRecommend: React.FC = (props) => {
  // const todos = useSelector((state: ApplicationState) => {
  //   return state.todoReducer.allTodo
  // })

  return (
    <div className="bg-white p-6 grid grid-cols-2 gap-4 rounded-xl shadow overflow-hidden">
      <div className="col-span-1">
        <InteractiveMap />
      </div>
      <div className="col-span-1">
        <h2 className="text-lg font-bold mb-4">Related Shop</h2>
        <ShopCard />
        <ShopCard />
      </div>
    </div>
  )
}

export default withRouter(MapAndShopRecommend)
