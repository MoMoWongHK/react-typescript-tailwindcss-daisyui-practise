import React from "react"
import { useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import VideoStreaming from "./VideoStreaming/VideoStreaming"
import RecommendedProductCard from "../../Component/RecommendedProductCard/RecommendedProductCard"
import MapAndShopRecommend from "./MapAndShopRecommend/MapAndShopRecommend"
import ProductRecommendation from "./ProductRecommendation/ProductRecommendation"

const HomePage: React.FC = (props) => {
  // const todos = useSelector((state: ApplicationState) => {
  //   return state.todoReducer.allTodo
  // })

  return (
    <div className="grid grid-cols-6 gap-2 lg:gap-4">
      <div className="col-span-2 pl-4">
        <VideoStreaming />
      </div>
      <div
        className="col-span-4 overflow-y-scroll pr-4"
        style={{ height: "700px" }}>
        {/*recommended card list*/}
        <div className="block">
          <ProductRecommendation />
        </div>

        {/*map and shop list*/}
        <div className="block my-8">
          <h1 className="text-3xl font-bold text-neutral mb-4">Where to buy</h1>

          <MapAndShopRecommend />
        </div>
      </div>
    </div>
  )
}

export default withRouter(HomePage)
