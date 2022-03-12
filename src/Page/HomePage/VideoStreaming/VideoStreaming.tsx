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
          src="https://i.redd.it/ecve9ia0a1851.png"
          alt="camera streaming"
        />
      </div>

      <button className="btn btn-primary w-full my-4">Test</button>
    </div>
  )
}

export default withRouter(VideoStreaming)
