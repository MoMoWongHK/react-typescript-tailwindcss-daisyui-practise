import { createStore, combineReducers } from "redux"
import todoReducer, { todoInitStateType } from "./TodoReducer"
import modalControllerReducer, { modalInitStateType } from "./ModalController"
import recommendationReducer, {
  recommendationInitStateType,
} from "./RecommendationReducer"

export interface ApplicationState {
  todoReducer: todoInitStateType
  modalControllerReducer: modalInitStateType
  recommendationReducer: recommendationInitStateType
}

const rootReducer = combineReducers({
  todoReducer,
  modalControllerReducer,
  recommendationReducer,
})

const store = createStore(rootReducer)

export type storeTypes = ReturnType<typeof rootReducer>

export default store
