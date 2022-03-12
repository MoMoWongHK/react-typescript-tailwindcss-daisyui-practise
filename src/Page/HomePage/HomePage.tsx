import React from "react"
import { useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import VideoStreaming from "./VideoStreaming/VideoStreaming"
import RecommendedProductCard from "../../Component/RecommendedProductCard/RecommendedProductCard"
import MapAndShopRecommend from "./MapAndShopRecommend/MapAndShopRecommend"

const HomePage: React.FC = (props) => {
  // const todos = useSelector((state: ApplicationState) => {
  //   return state.todoReducer.allTodo
  // })

  return (
    <div className="grid grid-cols-6 gap-8">
      <div className="col-span-2">
        <VideoStreaming />
      </div>
      <div
        className="col-span-4 overflow-y-scroll p-4"
        style={{ height: "700px" }}>
        {/*recommended card list*/}
        <div className="block">
          <h1 className="text-3xl font-bold text-neutral mb-4">Recommended</h1>

          <div className="whitespace-nowrap overflow-x-scroll pb-8">
            <RecommendedProductCard />
            <RecommendedProductCard />
            <RecommendedProductCard />
          </div>
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
