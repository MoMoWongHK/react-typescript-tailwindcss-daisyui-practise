import React from "react"
import { useSelector } from "react-redux"
import { withRouter } from "react-router-dom"

const RecommendedProductCard: React.FC = (props) => {
  // const todos = useSelector((state: ApplicationState) => {
  //   return state.todoReducer.allTodo
  // })

  return (
    <div className="card card-compact inline-block mx-2 w-64 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="ml-2 badge badge-secondary">NEW</div>
        </h2>
        <p className="font-bold">
          Promo $ 500
          <span className="text-gray-400 font-normal">/ Shoes</span>
        </p>
      </div>
      <div className="card-actions px-4">
        <button className="btn w-full rounded-2xl mx-auto m-3">Buy Now</button>
      </div>
    </div>
  )
}

export default withRouter(RecommendedProductCard)
