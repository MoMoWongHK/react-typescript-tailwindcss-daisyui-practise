import React from "react"
import { withRouter } from "react-router-dom"
import Product from "../../Model/Product"

interface RecommendedProductCardProps {
  data: Product
}

const RecommendedProductCard: React.FC<RecommendedProductCardProps> = (
  props
) => {
  // const todos = useSelector((state: ApplicationState) => {
  //   return state.todoReducer.allTodo
  // })

  return (
    <div className="card card-compact inline-block mx-2 w-64 bg-base-100 shadow">
      <figure>
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {props.data.title}
          <div className="ml-2 badge badge-secondary">NEW</div>
        </h2>
        <p className="font-bold">
          $ {props.data.price}
          <span className="text-gray-400 font-normal">
            / {props.data.category}
          </span>
        </p>
      </div>
      <div className="card-actions px-4">
        <button className="btn w-full rounded-2xl mx-auto m-3">Buy Now</button>
      </div>
    </div>
  )
}

export default withRouter(RecommendedProductCard)
