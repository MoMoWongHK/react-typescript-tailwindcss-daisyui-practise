import { createStore, combineReducers } from 'redux';
import todoReducer from './TodoReducer';

const rootReducer = combineReducers({
    todoReducer,
});

const store = createStore(
    rootReducer,
);

export type storeTypes = ReturnType<typeof rootReducer>;

export default store;