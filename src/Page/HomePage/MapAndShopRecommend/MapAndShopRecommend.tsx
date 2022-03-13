import React from "react"
import { withRouter } from "react-router-dom"
import ShopDisplayCard from "../../../Component/ShopDisplayCard/ShopDisplayCard"
import InteractiveMap from "./InteractiveMap/InteractiveMap"
import Shop from "../../../Model/Shop"
import { useSelector } from "react-redux"
import { ApplicationState } from "../../../Redux/reducers/rootReducer"

const MapAndShopRecommend: React.FC = (props) => {
  const recommendedShops = useSelector((state: ApplicationState) => {
    return state.recommendationReducer.shops
  })

  return (
    <div className="bg-white p-6 grid grid-cols-2 gap-4 rounded-xl shadow overflow-hidden">
      <div className="col-span-1">
        <InteractiveMap />
      </div>
      <div className="col-span-1">
        <h2 className="text-lg font-bold mb-4">Related Shop</h2>

        {recommendedShops.map((sc: Shop) => {
          return <ShopDisplayCard key={sc.shopId} data={sc} />
        })}
      </div>
    </div>
  )
}

export default withRouter(MapAndShopRecommend)
