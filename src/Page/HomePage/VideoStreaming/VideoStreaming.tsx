import React from "react"
import { useSelector } from "react-redux"
import { withRouter } from "react-router-dom"

const VideoStreaming: React.FC = (props) => {
  // const todos = useSelector((state: ApplicationState) => {
  //   return state.todoReducer.allTodo
  // })

  return (
    <div className="bg-white p-6 rounded-xl shadow overflow-hidden">
      <h1 className="text-3xl font-bold text-neutral mb-4">Streaming</h1>

      {/*Streaming */}
      <div style={{ height: "500px" }}>
        <img
          className="object-cover h-full w-full rounded-xl"
          src="https://imageio.forbes.com/specials-images/imageserve/61bf870d2e95829f4516cac6/Shoppers-Black-Friday-Mall-Houston-Texas/960x0.jpg?fit=bounds&format=jpg&width=960"
          alt="camera streaming"
        />
      </div>

      <button className="btn btn-primary w-full my-4">Test</button>
    </div>
  )
}

export default withRouter(VideoStreaming)
