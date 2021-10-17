import React from 'react';
import { Provider } from 'react-redux';
import store from "./redux/reducers/rootReducer";
import {BrowserRouter} from "react-router-dom";
import './App.css';
import RouterManager from "./RouterManager";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <BrowserRouter>
                  <RouterManager/>
              </BrowserRouter>
          </div>
      </Provider>


  );
}

export default App;
