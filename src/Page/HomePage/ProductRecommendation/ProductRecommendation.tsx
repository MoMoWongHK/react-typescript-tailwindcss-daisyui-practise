import React from "react"
import { withRouter } from "react-router-dom"
import Shop from "../../../Model/Shop"
import { useSelector } from "react-redux"
import { ApplicationState } from "../../../Redux/reducers/rootReducer"
import RecommendedProductCard from "../../../Component/RecommendedProductCard/RecommendedProductCard"
import Product from "../../../Model/Product"

const ProductRecommendation: React.FC = (props) => {
  const recommendedProducts = useSelector((state: ApplicationState) => {
    return state.recommendationReducer.products
  })

  return (
    <div className="bg-white px-6 pt-6  rounded-xl shadow overflow-hidden">
      <h1 className="text-3xl font-bold text-neutral mb-4">Recommended</h1>

      <div className="whitespace-nowrap overflow-x-scroll pb-8">
        {recommendedProducts.map((sc: Product) => {
          return <RecommendedProductCard key={sc.shopId} data={sc} />
        })}
      </div>
    </div>
  )
}

export default withRouter(ProductRecommendation)
